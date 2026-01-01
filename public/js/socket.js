
const socket=io();
function create(){socket.emit("create",name.value);}
function join(){socket.emit("join",{code:code.value,name:name.value});}
socket.on("room",c=>location.href="/game.html?room="+c);
