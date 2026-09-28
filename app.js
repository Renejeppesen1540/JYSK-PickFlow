
const PICK_DATA=[
["60626","2765960",6,"5703333141734"],["60627","2766440",6,"5703333141741"],
["60628","2769000",1,"5703333141758"],["60629","2769800",6,"5703333141765"],
["60630","2773701",6,"5703333141772"],["60631","2773801",6,"5703333141789"],
["60633","2778312",4,"5703333141796"],["60634","2779802",6,"5703333141802"],
["60635","2780940",12,"5703333141819"],["60639","2781500",10,"5703333141826"],
["60640","2781700",12,"5703333141833"],["60641","2784103",6,"5703333141840"],
["60642","3248411",1,"5703333141857"],["60643","3264346",1,"5703333141864"],
["60650","3264378",1,"5703333141871"],["60666","3271032",1,"5703333141888"]];
let idx=0,startTime,user={};
function start(){user={i:i.value,n:n.value,d:d.value};localStorage.setItem("pickUser",JSON.stringify(user));login.classList.add("hidden");pick.classList.remove("hidden");userInfo.textContent=`${user.i} • ${user.n} • ${user.d}`;startTime=new Date();show();}
function show(){let x=PICK_DATA[idx];progress.textContent=`${idx+1}/${PICK_DATA.length}`;lokation.textContent=x[0];artikel.textContent=x[1];antal.textContent=x[2]+" stk";scan.value="";scan.focus();}
function ok(){let x=PICK_DATA[idx],v=scan.value.trim();if(v===x[1]||v===x[3]){navigator.vibrate&&navigator.vibrate(120);idx++;if(idx===PICK_DATA.length){let m=Math.round((new Date()-startTime)/60000);location.href=`mailto:rloejeppesen@gmail.com?subject=TO%20846757814%20færdig&body=Plukker:%20${user.n}%20(${user.i})%0ADC:${user.d}%0ATid:${m}%20min`;alert("Færdig!");}else show();}else alert("Forkert vare");}
