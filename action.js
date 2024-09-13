var sk=document.getElementById('skin');
var hair=document.getElementById('hair');
var makeup=document.getElementById('makeup');
var hands=document.getElementById('handft');
var men=document.getElementById('men');
var ski=document.getElementById('skiny');
var ski2=document.getElementById('skiny2');
var ski3=document.getElementById('skiny3');
var ski4=document.getElementById('skiny4');
var ski5=document.getElementById('skiny5');

sk.addEventListener("click", ()=>{
    ski.style.display="block";
    ski2.style.display="none";
    ski3.style.display="none";
    ski4.style.display="none";
    ski5.style.display="none";
})

hair.addEventListener("click",()=>{
    ski2.style.display="block";
    ski.style.display="none";
    ski3.style.display="none";
    ski4.style.display="none";
    ski5.style.display="none";
})

makeup.addEventListener("click",()=>{
    ski3.style.display="block";
    ski.style.display="none";
    ski2.style.display="none";
    ski4.style.display="none";
    ski5.style.display="none";
})

hands.addEventListener("click",()=>{
    ski4.style.display="block";
    ski.style.display="none";
    ski2.style.display="none";
    ski3.style.display="none";
    ski5.style.display="none";
})

men.addEventListener("click",()=>{
    ski5.style.display="block";
    ski.style.display="none";
    ski2.style.display="none";
    ski3.style.display="none";
    ski4.style.display="none";
})