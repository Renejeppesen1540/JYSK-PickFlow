
file.onchange=async()=>{
 const f=file.files[0]; if(!f) return;
 preview.src=URL.createObjectURL(f); preview.style.display="block";
 progress.style.width="0%";
 let p=0; const t=setInterval(()=>{p+=10;progress.style.width=p+"%"; if(p>=100)clearInterval(t);},100);
 const res=await parsePicklist(f);
 setTimeout(()=>{
   to.textContent=res.to;
   table.innerHTML=res.rows.map(r=>`<tr><td><b>${r[0]}</b></td><td>${r[1]}</td><td>${r[4]} stk</td></tr>`).join("");
   document.getElementById("result").style.display="block";
 },1100);
}
