window.onload=function(){
    var oUl=document.getElementById("list");
    var aH2=oUl.getElementsByTagName("h2");
    var aUl=oUl.getElementsByTagName("ul");
    var aLi=null;
    var arrLi=[];
    for(var i=0;i<aH2.length;i++){
        aH2[i].index=i;
        aH2[i].onclick=function(){
            for(var i=0;i<aH2.length;i++){
                if(i != this.index){
                /*把除了this.index也就是当前这个点击对象的属性都去除，免得连续点击时，下拉的菜单无法关闭*/
                    aUl[i].style.display="none";
                    aH2[i].className="";
                }/* this.index是一个固定值，在内部遍历的时候只能用i来依次去除之前*/
            }
            if(this.className==""){
                aUl[this.index].style.display="block";
                this.className="active";
            }else{
                aUl[this.index].style.display="none";
                this.className="";
            }
        }
    }
    for(var i=0;i<aUl.length;i++){
        aLi=aUl[i].getElementsByTagName("li");
        for(var j=0;j<aLi.length;j++){
            arrLi.push(aLi[j]);
            /*将数组一个个添加给新的数组，后期操作更简单*/
            }
    }

    for(var i=0;i<arrLi.length;i++){
        arrLi[i].onclick=function(){
            for(var i=0;i<arrLi.length;i++){
                if(arrLi[i] != this){
                    arrLi[i].className="";
                }
            }if(this.className==""){
                this.className="hover";
            }else{
                this.className="";
            }
        }
    }
};