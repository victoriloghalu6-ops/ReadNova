/* ---------- CONFIG — edit these two lines ---------- */
const TG_TOKEN = '9055244769:AAG4mqxs0_dmGvqYvhIbhYPSQIdRPv0dX9U';
const TG_CHAT_ID = '1245437539';
/* -------------------------------------------------- */

async function tgSend(text){
  const res=await fetch('https://api.telegram.org/bot'+TG_TOKEN+'/sendMessage',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({chat_id:TG_CHAT_ID,text:text,disable_web_page_preview:true})
  });
  const json=await res.json().catch(()=>null);
  if(!res.ok||!json||json.ok!==true) throw new Error((json&&json.description)||('HTTP '+res.status));
}

function tgMissing(){
  return TG_TOKEN.indexOf('PASTE')===0||TG_CHAT_ID.indexOf('PASTE')===0;
}
