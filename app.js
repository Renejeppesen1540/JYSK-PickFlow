
const KEY='pickflowUser';let idx=0;
const g=id=>document.getElementById(id);
const login=g('login'),app=g('app'),userBar=g('userBar');
function showApp(){const u=JSON.parse(localStorage.getItem(KEY));if(!u)return;login.style.display='none';app.style.display='block';userBar.style.display='block';userBar.textContent=`👤 ${u.initials} – ${u.store} (${u.name})`;}
g('saveBtn').onclick=()=>{localStorage.setItem(KEY,JSON.stringify({initials:g('initials').value,name:g('name').value,store:g('store').value}));showApp();}
g('logoutBtn').onclick=()=>{localStorage.removeItem(KEY);location.reload();}
showApp();
g('scanBtn').onclick=()=>g('fileInput').click();
g('fileInput').onchange=()=>{let p=0;const t=setInterval(()=>{p+=10;g('bar').style.width=p+'%';if(p>=100){clearInterval(t);g('tbl').innerHTML=PICKLIST.map(r=>`<tr><td><b>${r[0]}</b></td><td>${r[1]}</td><td>${r[4]} stk</td></tr>`).join('');g('result').style.display='block';}},60);}
g('startBtn').onclick=()=>{g('result').style.display='none';g('pick').style.display='block';show();}
function show(){const r=PICKLIST[idx];g('step').textContent=`${idx+1}/${PICKLIST.length}`;g('loc').textContent=r[0];g('desc').textContent=r[3];g('art').textContent=r[1];g('ean').textContent=r[2];g('qty').textContent=r[4]+' stk';g('scanInput').value='';}
g('scanInput').oninput=()=>{const r=PICKLIST[idx],v=g('scanInput').value.trim();if(v===r[1]||v===r[2]){idx++;if(idx<PICKLIST.length)show();else document.body.innerHTML='<header><h1>TO FÆRDIG</h1></header><section class=card><h2>✔ 846757814</h2><p>Pluk afsluttet.</p></section>';}}
