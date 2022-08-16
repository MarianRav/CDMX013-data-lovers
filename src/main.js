import { filterGender } from './data.js'; 
import data from './data/rickandmorty/rickandmorty.js';



console.log(data.results[0]);

const section = document.getElementById('pickles'); 

// Añadir evento..onload?
data.results.forEach(element =>{
        let html= `
        <section id="pickles">
        <img src=${element.image} class="image">
        <div class="lettersWrap" id="prueba">
            <div class="name">  ${element.name} </div>
            <div class="species">Species: ${element.species} </div>
            <div class="status">Status: ${element.status}</div>
            <img class="pin" id="logo" src= "img/pinRick&M.png">
            <div class="rectangle" id="rare"></div>
        </div>
        </section>
        `;
        section.insertAdjacentHTML('beforebegin', html);
})

let mybutton = document.getElementById("button");
window.onscroll = function() {scrollFunction()};

mybutton.addEventListener("click",topFunction)

     function scrollFunction() {
     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
     mybutton.style.display = "block";
     } else {
     mybutton.style.display = "none";
     }
     }
     /*document.getElementById("pickles").addEventListener("mouseover", function(){
        alert("Hola");
     })
     /*document.querySelectorAll(".lettersWrap").addEventListener("mouseover", function(){
      for(let i =0; i < NodeList.length; i++){
        alert("hola");
      }  
      })*/

  // When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//let filtrado = document.getElementById("filter");
let dataCharacters= data.results
let filtrar = dataCharacters.filter(data => data.gender === "Genderless");
let origin= dataCharacters.filter(data => data.origin.name === "Earth (Replacement Dimension)");
console.log(filtrar);
console.log(origin);

/*let planeta= filtro.status;
let noduplicat= [...new Set(planeta)]; //¿?

console.log(noduplicat);*/


/*filtro.forEach(filtro =>{
  if(filtro.status === "Dead"){
      console.log(filtro.name, " Status: ", filtro.status);
  }
});*/

/*filtro.find(filtro =>{
  console.log(`${filtro.name} location: ${filtro.location.name}`)
});*/

//GENDER --opciones
const busqueda = dataCharacters.reduce((dato, filtro)=>{
  dato[filtro.gender] = ++dato[filtro.gender] || 0;
  return dato; 
})

//RETORNA ¿DUPLICADOS?
/*const duplicados = filtro.filter((filtro)=>{
  return busqueda[filtro.gender];
})*/ 
/*const busqueda = filtro.reduce((dato, filtro)=>{
  dato[filtro.location.name] = ++dato[filtro.location.name] || 0;
  return (dato);
})*/
console.log(busqueda);


//let originT= filtro.filter(filtro => filtro.location.name === "Citadel of Ricks");
//console.log(originT);
console.log(filterGender);
//let generos = filterGender
const gender = document.getElementById("gender");
gender.addEventListener("change", (e)=>{
  console.log(filterGender(e.target.value, dataCharacters));

  let typeGender = filterGender(e.target.value, dataCharacters);
 // dataCharacters.forEach(character=>{
    if( e.target.value === "unknown")
    {
      document.getElementById("pickles").innerHTML =  typeGender
      console.log(typeGender);
    }
    if( e.target.value === "Genderless")
    {
      typeGender.forEach(element =>{
       
        let ejercicio = `<section id="pickles">
        <img src=${element.image} class="image">
        <div class="lettersWrap" id="prueba">
            <div class="name">  ${element.name} </div>
            <div class="species">Species: ${element.species} </div>
            <div class="status">Status: ${element.status}</div>
            <img class="pin" id="logo" src= "img/pinRick&M.png">
            <div class="rectangle" id="rare"></div>
        </div>
        </section>`
        section.insertAdjacentHTML('afterbegin', ejercicio);
        /*document.getElementById("pickles").style.display="none";
        document.getElementById("bloque2").style.display="block";*/
        console.log(element.name + "hola");
    })
    console.log(typeGender);
    }
    if( e.target.value === "Male")
    {
      document.getElementById("pickles").innerHTML = `<h2>HOLAAAAAAAA ${typeGender.name}</h2>`
      console.log(typeGender);
    }
    if( e.target.value === "Female")
    {
      document.getElementById("pickles").innerHTML = `<h2>HOLAAAAAAAA ${typeGender.name}</h2>`
      console.log(typeGender);
    }
    
   /* if(e.target.value ==="Genderless"){
      document.getElementById("pickles").innerHTML = `
      <section id="pickles">
      <img src=${character.image} class="image">
      <div class="lettersWrap" id="prueba">
          <div class="name">  ${character.name} </div>
          <div class="species">Species: ${filterGender.species} </div>
          <div class="status">Status: ${filterGender.status}</div>
          <img class="pin" id="logo" src= "img/pinRick&M.png">
          <div class="rectangle" id="rare"></div>
      </div>
      </section>
      `;
    }*/

  //})

  /*if( e.target.value === "unknown"){
    document.getElementById("pickles").innerHTML = `<h2>HOLAAAAAAAA ${dataCharacters.name}</h2>`
  }
  if(e.target.value ==="Genderless"){
    
    filterGender.forEach(element =>{
      `
      <section id="pickles">
      <img src=${element.image} class="image">
      <div class="lettersWrap" id="prueba">
          <div class="name">  ${filterGender.name} </div>
          <div class="species">Species: ${filterGender.species} </div>
          <div class="status">Status: ${filterGender.status}</div>
          <img class="pin" id="logo" src= "img/pinRick&M.png">
          <div class="rectangle" id="rare"></div>
      </div>
      </section>
      `;
      section.insertAdjacentHTML('beforebegin');
    })
    document.getElementById("pickles").innerHTML = filterGender
  }*/

})
