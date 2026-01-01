
const socket=io();
const room=new URLSearchParams(location.search).get("room");
let selectedTarget=null;

function draw(){
  const idx=prompt("ใส่ตำแหน่งวางระเบิด (0=ล่างสุด)");
  socket.emit("draw",{code:room,defuseIndex:Number(idx)});
}

socket.on("state",s=>{
  hand.innerHTML="";
  targets.innerHTML="";
  const me=s.players.find(p=>p.id===socket.id);
  s.players.forEach((p,i)=>{
    const b=document.createElement("button");
    b.textContent=p.name;
    b.onclick=()=>selectedTarget=i;
    targets.appendChild(b);
  });
  if(!me)return;
  me.hand.forEach(c=>{
    const img=document.createElement("img");
    img.src="/assets/cards/png/"+c+".png";
    img.className="card";
    img.onclick=()=>socket.emit("useCard",{code:room,card:c,target:selectedTarget});
    hand.appendChild(img);
  });
});
