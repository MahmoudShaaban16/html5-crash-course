var progressArr=document.getElementsByTagName('progress');
var inc=0;
var interval=setInterval(function(){
    progressArr[0].value=inc;
    inc++;

    
},2000);
