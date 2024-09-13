var btn=document.getElementById('butn');
var reg=document.getElementById('reg');
var log=document.getElementById('log');
var fc=document.getElementById('container');
var rf=document.getElementById('regg');
var lf=document.getElementById('logg');
var fpas=document.getElementById('forget');

log.addEventListener('click',()=>{
    btn.style.marginLeft="210px";
    btn.style.transition="all 0.3s";
    log.style.filter="none";
    reg.style.filter="grayscale()";
    rf.style.marginLeft="-300px";
    lf.style.marginTop="110px";
    lf.style.marginLeft="90px"
})
reg.addEventListener('click',()=>{
    btn.style.marginLeft="26px";
    btn.style.transition="all 0.3s";
    reg.style.filter="none";
    log.style.filter="grayscale()";
    lf.style.marginTop="300px";
    rf.style.marginLeft="60px"
})
fpas.addEventListener('click',()=>{
    ch=confirm("do you want to reset password if yes press 'y' or press 'n' for no");
    if (ch==true)
    {
        window.location.assign("http://localhost:/rev/resetpas.php");
    }
    else{
        window.location.assign("http://localhost:/rev/user.php");
    }
}
)