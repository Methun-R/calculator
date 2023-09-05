function Addition(){
    var a=document.getElementById("i1").value;
    var b=document.getElementById("i2").value;
    var c=parseInt(a)+parseInt(b);
    document.getElementById("result").innerHTML=c;
}
function Subtraction(){
    var a=document.getElementById("i1").value;
    var b=document.getElementById("i2").value;
    var c=a-b;
    document.getElementById("result").innerHTML=c;
}
function Multiplication(){
    var a=document.getElementById("i1").value;
    var b=document.getElementById("i2").value;
    var c=(a*b);
    document.getElementById("result").innerHTML=c;
}
function Division(){
    var a=document.getElementById("i1").value;
    var b=document.getElementById("i2").value;
    var c=(a/b);
    document.getElementById("result").innerHTML=c;
}





