//20160429
window.onload=function(){
    var rong=document.getElementById("rong");
    var wechat=document.getElementById("wechat");
    rong.onmouseover=function(){
        wechat.style.display="block";
    }
    rong.onmouseout=function(){
        wechat.style.display="none";
    }
}