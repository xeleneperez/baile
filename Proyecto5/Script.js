// se crea una variable off
let esqueleto="off";
// se guarda en l variable para poder hacer el intercambio de clases
let esqueletoStop = document.getElementById("esqueletoquieto");
let botonsonido= new Audio ('./sound/botonbailar.mp3');
let botonAudio = new Audio('./sound/audio.mp3')
function bailar(){
 if( esqueleto== "off"){
    esqueleto="on";
    //realiza el cambio de la clase y me muestra el muñeco bailando
    esqueletoStop.classList.add("on");
    esqueletoStop.addEventListener('click', ()=>{
        //le da play a la cancion 
        botonsonido.play();
    })
    esqueletoStop.addEventListener('click',()=>{
        botonAudio.play();
    })
    console.log("on");
 }
 else{
    esqueleto="off"
    esqueletoStop.classList.remove("on");
    // crea una pausa en el audio
    esqueletoStop.addEventListener('click',() =>{
        botonAudio.pause();
    })
    console.log("off")
 }
}