
let i=0;
file.onchange=e=>{const f=e.target.files[0];if(!f)return;preview.src=URL.createObjectURL(f);preview.style.display='block';let p=0;const t=setInterval(()=>{p+=10;bar.style.width=p+'%';if(p>=100){clearInterval(t);tbl.innerHTML=PICKLIST.map(r=>`<tr><td><b>${r[0]}</b></td><td>${r[1]}</td><td>${r[4]} stk</td></tr>`).join('');result.style.display='block';}},90);}
function startPick(){result.style.display='none';pick.style.display='block';show();}
function show(){const r=PICKLIST[i];step.textContent=`${i+1}/${PICKLIST.length}`;loc.textContent=r[0];desc.textContent=r[3];art.textContent=r[1];ean.textContent=r[2];scan.value='';}
scan.oninput=()=>{const r=PICKLIST[i];const v=scan.value.trim();if(v===r[1]||v===r[2]){i++;if(i<PICKLIST.length)show();else document.body.innerHTML='<header><h2>TO FÆRDIG</h2></header><div class=card><h1>✔ 846757814</h1></div>';}}
