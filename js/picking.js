
let idx=0,current=[];
function startPicking(rows){current=rows;idx=0;document.getElementById("result").style.display="none";document.getElementById("pick").style.display="block";show();}
function show(){
 const r=current[idx];
 step.textContent=`Lokation ${idx+1}/${current.length}`;
 loc.textContent=r[0]; desc.textContent=r[3];
 art.textContent=r[1]; ean.textContent=r[2]; qty.textContent=r[4]+" stk";
 scan.value=""; msg.textContent="";
}
scan.oninput=()=>{
 const r=current[idx];
 if(valid(scan.value.trim(),r)){
   msg.style.color="green"; msg.textContent="✔ Godkendt";
   setTimeout(()=>{idx++; if(idx>=current.length){document.body.innerHTML="<header><h2>TO FÆRDIG</h2></header><div class=card><h1>✔ 846757814</h1><p>16 lokationer plukket.</p></div>";} else show();},350);
 }else if(scan.value.length>=7){msg.style.color="red";msg.textContent="✖ Forkert vare";}
}
