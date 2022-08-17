import { filterGender } from './data.js'; 
import data from './data/rickandmorty/rickandmorty.js';

console.log(data.results[0]);

const section = document.getElementById('container'); 

data.results.forEach(element =>{
        let html= `
        <section class="pickles">
        <img src=${element.image} class="image">
        <div class="lettersWrap" id="prueba">
            <div class="name">  ${element.name} </div>
            <div class="species">Species: ${element.species} </div>
            <div class="status">Status: ${element.status}</div>
            <img class="pin" id="logo" src= "img/pinRick&M.png">
           
        </div>
        </section>
        `;
       section.innerHTML+=html
})
//Button scrolls to the top of the document
let mybutton = document.getElementById("button");
mybutton.addEventListener("click",topFunction)


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

let dataCharacters= data.results


//GENDER --opciones
const busqueda = dataCharacters.reduce((dato, filtro)=>{
  dato[filtro.gender] = ++dato[filtro.gender] || 0;
  return dato; 
})
//Filtrado género
const gender = document.getElementById("gender");
gender.addEventListener("change", (e)=>{
     console.log(filterGender(e.target.value, dataCharacters));
  
      let typeGender = filterGender(e.target.value, dataCharacters);
      section.innerHTML="";
      const content=document.getElementById("content")
      content.innerHTML="";
      console.log(typeGender);
      typeGender.forEach(element =>{
       
        let ejercicio = `
        
        <section class="pickles" class="flex-boxx">
        <img src=${element.image} class="image">
        <div class="lettersWrap" id="prueba">
            <div class="name">  ${element.name} </div>
            <div class="species">Species: ${element.species} </div>
            <div class="status">Status: ${element.status}</div>
            <img class="pin" id="logo" src= "img/pinRick&M.png">

        </div>
        </section>`
       content.innerHTML+=ejercicio;
       
      })

})

