const botaotrailer=document.querySelector(".botao-trailer");
const video=document.getElementById("video");
const modal=document.querySelector("modal");
const linkdovideo=video.src;
function alternatmodal(){

}
botaotrailer.addEventListener("click",()=>{
    video.setAttribute("src",linkdovideo)
})

botaofecharmodal.addEventListener("click",()=>{
    video.setAttribute("src","");
})
