var seccion1 = document.getElementById("seccion-1");
var seccion2 = document.getElementById("seccion-2");
var seccion3 = document.getElementById("seccion-3");
var seccion4 = document.getElementById("seccion-4");
var seccion5 = document.getElementById("seccion-5");
var seccion6 = document.getElementById("seccion-6");

var contadorReadme = 0;
var contadorSkills = 0;
var contadorProyectos = 0;
var contadorCertificados = 0;
var rontadorRedes = 0;
var contadorContacto = 0;

//------------------------------
//funcion para Readme
//-------------------------------------


function abrirReadme (){
  if(screen.width >= 1340){
    //agranda a readme
    if (contadorReadme == 0){
      seccion1.style.background = "gold";
      seccion1.style.gridColumn= "1/6";

    //achica a los demas
    // skills
      seccion2.style.gridRow = "2/4";
      seccion2.style.gridColumn= "6/7";

    //proyectos
      seccion3.style.gridRow = "4/8";
      seccion3.style.gridColumn = "6/8";

    //certificados
      seccion4.style.gridRow = "2/4";
      seccion4.style.gridColumn= "7/8"

      contadorReadme++;
    } else {
      seccion1.style.background = "LightSkyBlue";
      seccion1.style.gridColumn= "1/4";

    //achica a los demas
    // skills
      seccion2.style.gridRow = "2/4";
      seccion2.style.gridColumn= "4/6";

    //proyectos
      seccion3.style.gridRow = "4/8";
      seccion3.style.gridColumn = "4/8";

    //certificados
      seccion4.style.gridRow = "2/4";
      seccion4.style.gridColumn= "6/8"

      contadorReadme --;
    }
  } else if(screen.width >= 678){
    
  } else {
    if(screen.width <= 677){
      
    }
  }
}
seccion1.onclick = abrirReadme;

//------------------------------
//funcion para Skills
//-------------------------------------

function abrirSkills (){
  //agranda a skills
   if (contadorSkills == 0){
     seccion2.style.gridRow = "2/6";
     seccion2.style.gridColumn= "4/7";
 
   //achica a los demas

   // proyectos
     seccion3.style.gridRow = "6/8";
     seccion3.style.gridColumn= "4/8";
 
   //certificados
     seccion4.style.gridRow = "2/6";
     seccion4.style.gridColumn= "7/8"
 
     contadorSkills++;
   } else {
   //vuelve todo a la posicion original

   // skills
     seccion2.style.gridRow = "2/4";
     seccion2.style.gridColumn= "4/6";
 
   //proyectos
     seccion3.style.gridRow = "4/8";
     seccion3.style.gridColumn = "4/8";
 
   //certificados
     seccion4.style.gridRow = "2/4";
     seccion4.style.gridColumn= "6/8"
 
     contadorSkills --;
   }
   
 }
 seccion2.onclick = abrirSkills;

//------------------------------
//funcion para Certificados
//-------------------------------------

 function abrirCertificados(){
  //agranda a certificados
   if (contadorCertificados == 0){
     seccion4.style.gridRow = "2/6";
     seccion4.style.gridColumn= "5/8";
 
   //achica a los demas

   // proyectos
     seccion3.style.gridRow = "6/8";
     seccion3.style.gridColumn= "4/8";
 
   //skills
     seccion2.style.gridRow = "2/6";
     seccion2.style.gridColumn= "4/5";
 
     contadorCertificados++;
   } else {
   //vuelve todo a la posicion original

   // skills
     seccion2.style.gridRow = "2/4";
     seccion2.style.gridColumn= "4/6";
 
   //proyectos
     seccion3.style.gridRow = "4/8";
     seccion3.style.gridColumn = "4/8";
 
   //certificados
     seccion4.style.gridRow = "2/4";
     seccion4.style.gridColumn= "6/8"
 
     contadorCertificados --;
   }
   
 }
 seccion4.onclick = abrirCertificados;

//------------------------------
//funcion para Proyectos
//-------------------------------------

 function abrirProyectos(){
  //agranda a certificados
   if (contadorProyectos == 0){
     seccion3.style.gridRow = "3/8";
     seccion3.style.gridColumn= "2/8";
 
   //achica a los demas

   // certificados
    seccion4.style.gridRow = "2/3";
    seccion4.style.gridColumn= "5/8";
 
   //skills
     seccion2.style.gridRow = "2/3";
     seccion2.style.gridColumn= "2/5";

     //readme
     seccion1.style.gridRow = "2/8";
     seccion1.style.gridColumn= "1/2";
 
     contadorProyectos++;
   } else {
   //vuelve todo a la posicion original

    //proyectos
      seccion3.style.gridRow = "4/8";
      seccion3.style.gridColumn = "4/8";

    // skills
      seccion2.style.gridRow = "2/4";
      seccion2.style.gridColumn= "4/6";
 
    //certificados
      seccion4.style.gridRow = "2/4";
      seccion4.style.gridColumn= "6/8"

    //readme 
      seccion1.style.gridRow = "2/8";
      seccion1.style.gridColumn= "1/4";

     contadorProyectos --;
   }
   
 }
 seccion3.onclick = abrirProyectos;

//------------------------------
//funcion para redes
//-------------------------------------
function abrirRedes(){

}

//------------------------------
//funcion para Contacto
//-------------------------------------

function abrirContacto(){
  //agranda a certificados
   if (contadorContacto == 0){
     seccion6.style.gridRow = "2/8";
     seccion6.style.gridColumn= "6/9";
 
   //achica a los demas

   // proyectos
     seccion3.style.gridRow = "6/8";
     seccion3.style.gridColumn= "4/6";
 
    //certificados
      seccion4.style.gridRow = "2/4";
      seccion4.style.gridColumn= "5/6";
    //redes
      seccion5.style.gridRow = "4/6";
      seccion5.style.gridColumn= "4/6";

    //skills
      seccion2.style.gridRow = "2/4";
      seccion2.style.gridColumn= "4/5";

     contadorContacto++;
   } else {
    //vuelve todo a la posicion original
    // contacto
    seccion6.style.gridRow = "6/8";
    seccion6.style.gridColumn = "8/9";

    // skills
     seccion2.style.gridRow = "2/4";
     seccion2.style.gridColumn= "4/6";
 
   //proyectos
     seccion3.style.gridRow = "4/8";
     seccion3.style.gridColumn = "4/8";
 
   //certificados
     seccion4.style.gridRow = "2/4";
     seccion4.style.gridColumn= "6/8"
    
    //redes
    seccion5.style.gridRow = "2/6";
    seccion5.style.gridColumn  = "8/9";
 
     contadorContacto --;
   }
   
 }

 seccion6.onclick = abrirContacto;



