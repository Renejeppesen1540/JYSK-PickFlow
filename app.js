
let idx=0,startTime,user={};
function start(){user={i:i.value,n:n.value,d:d.value};login.classList.add('hidden');pick.classList.remove('hidden');startTime=new Date();show();}
function show(){let x=PICK_DATA[idx];head.innerHTML=`<b>TO 846757814</b><br>${user.i} • ${user.d}`;prog.textContent=`${idx+1}/${PICK_DATA.length}`;loc.textContent='Lokation '+x[0];art.innerHTML='Artikel: <b>'+x[1]+'</b>';qty.textContent='Antal: '+x[3]+' stk';scan.value='';scan.focus();}
function ok(){let x=PICK_DATA[idx],v=scan.value.trim();if(v===x[1]||(x[2]&&v===x[2])){navigator.vibrate&&navigator.vibrate(120);idx++;if(idx>=PICK_DATA.length){let end=new Date();let body=`TO 846757814%0APlukker: ${user.n} (${user.i})%0ADC: ${user.d}%0AStart: ${startTime.toLocaleTimeString()}%0ASlut: ${end.toLocaleTimeString()}%0AFærdig: ${PICK_DATA.length}/${PICK_DATA.length}`;location.href='mailto:rloejeppesen@gmail.com?subject=TO 846757814 færdig&body='+body;}else show();}else alert('Forkert artikel');}
