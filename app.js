
let idx=0,startTime;
const key='pickflowUser';
function saveUser(){const u={initials:initials.value,name:name.value,store:store.value};localStorage.setItem(key,JSON.stringify(u));init();}
function init(){const u=JSON.parse(localStorage.getItem(key)||'null');if(!u)return;login.style.display='none';app.style.display='block';userLabel.textContent=`👤 ${u.initials} – ${u.store} (${u.name})`;}
init();
file.onchange=e=>{const f=e.target.files[0];if(!f)return;let p=0;const t=setInterval(()=>{p+=10;bar.style.width=p+'%';if(p>=100){clearInterval(t);tbl.innerHTML=PICKLIST.map(r=>`<tr><td><b>${r[0]}</b></td><td>${r[1]}</td><td>${r[4]} stk</td></tr>`).join('');result.style.display='block';}},80);}
function startPick(){startTime=new Date();result.style.display='none';pick.style.display='block';show();}
function show(){const r=PICKLIST[idx];step.textContent=`${idx+1}/${PICKLIST.length}`;loc.textContent=r[0];desc.textContent=r[3];art.textContent=r[1];ean.textContent=r[2];qty.textContent=r[4]+' stk';scan.value='';msg.textContent='';}
scan.oninput=async()=>{const r=PICKLIST[idx],v=scan.value.trim();if(v===r[1]||v===r[2]){msg.style.color='green';msg.textContent='✔ Godkendt';setTimeout(async()=>{idx++;if(idx<PICKLIST.length){show();}else{const end=new Date();const u=JSON.parse(localStorage.getItem(key));try{await emailjs.send('REPLACE_SERVICE','REPLACE_TEMPLATE',{picker:u.name,initials:u.initials,store:u.store,to:'846757814',start:startTime.toLocaleTimeString('da-DK'),end:end.toLocaleTimeString('da-DK'),duration:Math.round((end-startTime)/60000)+' min'});}catch(e){console.log(e);}document.body.innerHTML=`<header><h2>TO FÆRDIG</h2></header><div class=card><h1>✔ 846757814</h1><p>Plukker: ${u.name} (${u.initials})</p><p>Butik: ${u.store}</p><p>Mail forsøgt sendt.</p></div>`;}},350);}else if(v.length>=7){msg.style.color='red';msg.textContent='✖ Forkert vare';}}
