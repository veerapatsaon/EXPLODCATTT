
const socket=io();
function sendNope(){socket.emit("nope",room);}
socket.on("nopeWindow",()=>{
  document.getElementById("nope").style.display="block";
  setTimeout(()=>document.getElementById("nope").style.display="none",3000);
});
