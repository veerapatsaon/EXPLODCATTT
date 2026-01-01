
const express=require("express");
const app=express();
const http=require("http").createServer(app);
const io=require("socket.io")(http);

app.use(express.static("public"));
app.get("/",(_,res)=>res.sendFile(__dirname+"/public/lobby.html"));

const rooms={};

function buildDeck(){
  return [
    "bomb","bomb","defuse","defuse",
    "skip","attack","peek","shuffle","favor","nope",
    "reverse","warp","swap","speedup",
    "steal_all","random_disaster","chain_bomb","redistribute"
  ].sort(()=>Math.random()-0.5);
}

function nextTurn(r){
  do{r.turn=(r.turn+1)%r.players.length;}
  while(!r.players[r.turn].alive);
}

io.on("connection",socket=>{

  socket.on("create",(name)=>{
    const code=Math.random().toString(36).slice(2,7).toUpperCase();
    rooms[code]={
      host:socket.id,
      players:[{id:socket.id,name,hand:["defuse"],alive:true}],
      deck:buildDeck(),
      turn:0,
      direction:1
    };
    socket.join(code);
    socket.emit("room",code);
  });

  socket.on("join",({code,name})=>{
    const r=rooms[code]; if(!r)return;
    r.players.push({id:socket.id,name,hand:["defuse"],alive:true});
    socket.join(code);
    io.to(code).emit("state",r);
  });

  socket.on("draw",({code,defuseIndex})=>{
    const r=rooms[code]; if(!r)return;
    const p=r.players[r.turn];
    if(p.id!==socket.id)return;

    const card=r.deck.pop();
    if(card==="bomb"){
      if(!p.hand.includes("defuse")){
        p.alive=false;
      } else {
        p.hand.splice(p.hand.indexOf("defuse"),1);
        const idx=Math.max(0,Math.min(defuseIndex||0,r.deck.length));
        r.deck.splice(idx,0,"bomb");
      }
    } else p.hand.push(card);

    nextTurn(r);
    io.to(code).emit("state",r);
  });

  socket.on("useCard",({code,card,target})=>{
    const r=rooms[code]; if(!r)return;
    const p=r.players.find(x=>x.id===socket.id);
    if(!p||!p.hand.includes(card))return;
    p.hand.splice(p.hand.indexOf(card),1);

    switch(card){
      case "skip": nextTurn(r); break;
      case "reverse": r.direction*=-1; r.players.reverse(); break;
      case "warp": if(target!=null) r.turn=target; break;
      case "swap":
        if(target!=null){
          const t=r.players[target];
          [p.hand,t.hand]=[t.hand,p.hand];
        }
        break;
      case "speedup": nextTurn(r); nextTurn(r); break;
      case "steal_all":
        r.players.forEach(pl=>{
          if(pl.id!==p.id && pl.hand.length>0)
            p.hand.push(pl.hand.pop());
        });
        break;
      case "random_disaster":
        ["skip","reverse","shuffle"][Math.floor(Math.random()*3)];
        r.deck.sort(()=>Math.random()-0.5);
        break;
      case "chain_bomb":
        r.deck.push("bomb");
        break;
      case "redistribute":
        const all=[];
        r.players.forEach(pl=>{all.push(...pl.hand); pl.hand=[]});
        all.sort(()=>Math.random()-0.5);
        all.forEach((c,i)=>r.players[i%r.players.length].hand.push(c));
        break;
    }
    io.to(code).emit("state",r);
  });
});

http.listen(process.env.PORT||3000);
