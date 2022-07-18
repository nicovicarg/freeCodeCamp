var seccion1 = document.getElementById("seccion-1");
var seccion2 = document.getElementById("seccion-2");
var seccion3 = document.getElementById("seccion-3");
var seccion4 = document.getElementById("seccion-4");
var seccion5 = document.getElementById("seccion-5");
var seccion6 = document.getElementById("seccion-6");

var contadorReadme = 0;

//------------------------------
//funcion para Readme
//-------------------------------------


function abrirReadme (){
 //agranda a readme
  if (contadorReadme == 0){
    seccion1.style.background = "gold";
    seccion1.style.gridColumn= "1/6";

  //achica a los demas
  // skills
    seccion2.style.gridRow = "2/3";
    seccion2.style.gridColumn= "6/7";

  //proyectos
    seccion3.style.gridRow = "3/5";
    seccion3.style.gridColumn = "6/8";

  //certificados
    seccion4.style.gridRow = "2/3";
    seccion4.style.gridColumn= "7/8"

    contadorReadme++;
  } else {
    seccion1.style.background = "LightSkyBlue";
    seccion1.style.gridColumn= "1/4";

  //achica a los demas
  // skills
    seccion2.style.gridRow = "2/3";
    seccion2.style.gridColumn= "4/6";

  //proyectos
    seccion3.style.gridRow = "3/5";
    seccion3.style.gridColumn = "4/8";

  //certificados
    seccion4.style.gridRow = "2/3";
    seccion4.style.gridColumn= "6/8"

    contadorReadme --;
  }
  
}

seccion1.onclick = abrirReadme;