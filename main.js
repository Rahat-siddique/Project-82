var canvas=document.getElementById('myCanvas');
var pen=canvas.getContext('2d');
var x,y,tracker=0;
window.addEventListener("click",function(e){
    x=e.clientX-canvas.offsetLeft;
    y=e.clientY-canvas.offsetTop;
    circle(x,y)
});
window.addEventListener("mousedown",function(e){
    tracker=1
});
window.addEventListener("mousemove",function(e){
    x=e.clientX-canvas.offsetLeft;
    y=e.clientY-canvas.offsetTop;
  
    if(tracker==1){
        pen.beginPath();
        pen.lineWidth=3
        pen.strokeStyle='red';
        pen.arc(x,y,30,0,2*Math.PI);
      pen.stroke();
    }
    x1=x
    y1=y
});
window.addEventListener("mouseup",function(e){
    tracker=0
});
pen.beginPath();
pen.lineWidth
pen.strokeStyle='red';
pen.arc(200,150,30,0,2*Math.PI)
pen.stroke();

function circle(cx,cy){
    pen.beginPath();
    pen.lineWidth
    pen.strokeStyle='red';
    pen.arc(cx,cy,30,0,2*Math.PI)
    pen.stroke();  
}