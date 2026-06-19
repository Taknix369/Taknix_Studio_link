const POSTER_DATA = window.POSTER_DATA;
const LOGO_DATA = window.LOGO_DATA;
const pu = "url('data:image/jpeg;base64," + POSTER_DATA + "')";
document.getElementById('bgPoster').style.backgroundImage = pu;
['cb1','cb2','cb3','cb4'].forEach(function(id){ document.getElementById(id).style.backgroundImage = pu; });
document.getElementById('logoImg').src = "data:image/png;base64," + LOGO_DATA;
const canvas = document.getElementById('c');
const ctx = canvas.getContext('2d');
let W, H;
function resize(){ W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
resize(); window.addEventListener('resize', resize);
const pts = [];
for(var i=0;i<70;i++){pts.push({x:Math.random()*1200,y:Math.random()*800,r:Math.random()*1.3+0.3,vy:-(Math.random()*0.45+0.1),vx:(Math.random()-.5)*0.22,base:Math.random()*0.5+0.12,f:Math.random()*6.28,col:Math.random()>.55?'200,0,0':'125,0,0'});}
function frame(){ctx.clearRect(0,0,W,H);pts.forEach(function(p){p.y+=p.vy;p.x+=p.vx;p.f+=0.048;if(p.y<-5){p.y=H+5;p.x=Math.random()*W;}var a=p.base*(0.65+0.35*Math.sin(p.f));ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle='rgba('+p.col+','+a+')';ctx.fill();});requestAnimationFrame(frame);}
frame();