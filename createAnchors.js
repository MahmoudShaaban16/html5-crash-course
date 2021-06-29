function createAnchor(){
    var divCollection=document.getElementsByClassName("divClass");
    
    if(divCollection.length>0){
        var div=divCollection[0];
        var a=document.createElement("a");
        a.href="http://google.com";
        a.innerHTML="go to google";
        a.style.fontSize="15px";
        console.log(a);
       div.appendChild(a);
    }
}