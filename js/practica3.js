var foco=document.getElementById("foco");
var boton=document.getElementById("btn");
var bandera=false;
boton.addEventListener('click',()=>{
    if(bandera){
        foco.style.backgroundColor="grey";
        bandera=false;
    }else{
        foco.style.backgroundColor="yellow";
        bandera=true;
    }
});