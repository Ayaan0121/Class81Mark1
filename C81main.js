//canvas
canvas=document.getElementById("myCanvas");
//variable ctx
ctx = canvas.getContext("2d");
//colur setting var
color ="red"
//style to circle
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();
//function
canvas.addEventListener("mousedown", my_mouseDown);
//function mouse down
function my_mouseDown(e){
    color=document.getElementById("colour").value;
    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;
    circle(mouse_x,mouse_y );
}
//function circle
function  circle(mouse_x,mouse_y){
    ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
ctx.stroke();
}
 //celar
 function clearArea(){
ctx.clearRect(0,0,canvas.width,canvas.height);
 }