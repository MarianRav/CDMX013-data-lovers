import { filterGender } from './data.js'; 
import { filterSpecies } from './data.js';
import { filterStatus } from './data.js';
import { filterType } from './data.js';
import { filterOrigin } from './data.js';
import { filterLocation } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';
import {alphaOrd} from './data.js';
import {searchCharacter} from './data.js';
console.log(filterSpecies);
console.log(data.results[0]);

//mostrar data
const section = document.getElementById('container'); 
const sliceResult= data.results.slice(0, 100)
function allCards (allData) {
  allData.forEach(element =>{
    let html= `
    <section class="pickles class="flex-boxx"">
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
}
allCards(sliceResult);

let dataCharacters= data.results;

//Search Function
let formulario=document.getElementById("inputText");
//const boton=document.querySelector(".magGlass");
//const searchResult=document.getElementById("searchResults");

/*const searchCharacter=()=>{
  searchResult.innerHTML="";
  console.log(formulario.value);
  const texto=formulario.value.toLowerCase();
  for (let character of dataCharacters) {
    let nombre=character.name.toLowerCase();
    if (nombre.indexOf(texto) !== -1) {
      searchResult.innerHTML += `
        <li class="list">${character.name} <li>
      `
    }
  }
    if (searchResult.innerHTML === "") {
      searchResult.innerHTML += `
      <li class="list" >Character not found...<li>
    `
    }
}*/
//boton.addEventListener("click", searchCharacter);

/*function whatEver() {
  console.log(formulario);
 // console.log(searchCharacter);
  console.log(searchCharacter(dataCharacters, formulario.value));
 // return formulario; 

}*/
//Alphabetical Order

const orderSelect=document.getElementById("order");
orderSelect.addEventListener ("change", (e) => {
  let orderBox= alphaOrd(sliceResult);
  if(e.target.value === "Z-A"){
    section.innerHTML="";
    allCards(orderBox);
  }
  if(e.target.value === "A-Z"){
    section.innerHTML="";
    allCards(orderBox.reverse())

  }

});

//Button to reset All Characters

const allCharacters = document.getElementById('btnAllCharacters'); 
allCharacters.addEventListener("click", resetCharacters);
function resetCharacters () {
  section.innerHTML="";
  allCards(dataCharacters)
gender.value="0";
species.value="0";
status.value="0";
type.value="0";
origin.value="0";
location.value="0";
orderSelect.value="0";
} 


//Button scrolls to the top of the document
let mybutton = document.getElementById("button");
mybutton.addEventListener("click",topFunction) 
   function topFunction() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
}

//Filtrado género
const gender = document.getElementById("gender");
gender.addEventListener("change", (e)=>{
    
     if (e.target.value==="0") {
      section.innerHTML=""; 
        allCards(sliceResult)
      }
      else {
      let typeGender = filterGender(e.target.value, dataCharacters);
      section.innerHTML="";
      allCards(typeGender)
    }  
    
species.value="0";
status.value="0";
type.value="0";
origin.value="0";
location.value="0";
orderSelect.value="0";
})
// filter Species
const species= document.getElementById("species");
species.addEventListener("change", (e)=>{
     
  if (e.target.value==="0") {
    section.innerHTML=""; 
     allCards(sliceResult)
    }
    else {
      let typeSpecies = filterSpecies(e.target.value, dataCharacters);
      section.innerHTML="";
      allCards(typeSpecies)
    }
    gender.value="0";
    status.value="0";
    type.value="0";
    origin.value="0";
    location.value="0";
    })

    // filter Status
const status= document.getElementById("status");
status.addEventListener("change", (e)=>{
  if (e.target.value==="0") {
    section.innerHTML=""; 
     allCards(sliceResult)
    }
    else {
      let typeStatus = filterStatus(e.target.value, dataCharacters);
      section.innerHTML="";
  
      console.log(typeStatus);
      allCards(typeStatus)
    }
    gender.value="0";
    species.value="0";
    type.value="0";
    origin.value="0";
    location.value="0";
    })

// filter Type
const type= document.getElementById("type");
type.addEventListener("change", (e)=>{
  if (e.target.value==="0") {
    section.innerHTML=""; 
      allCards(sliceResult)
    }
    else {
      let type = filterType(e.target.value, dataCharacters);
      section.innerHTML="";
  
      allCards(type)
    }
  gender.value="0";
  species.value="0";
  status.value="0";
  origin.value="0";
  location.value="0";
    })

 // filter Origin
const origin= document.getElementById("origin");
origin.addEventListener("change", (e)=>{

  if (e.target.value==="0") {
    section.innerHTML=""; 

      allCards(sliceResult)
    }
    else {     
      let typeOrigin = filterOrigin(e.target.value, dataCharacters);
      section.innerHTML="";
      allCards(typeOrigin)
    }
  gender.value="0";
  species.value="0";
  status.value="0";
  type.value="0";
  location.value="0";
    })

// filter Location
const location= document.getElementById("location");
location.addEventListener("change", (e)=>{
  if (e.target.value==="0") {
    section.innerHTML=""; 
      allCards(sliceResult)
    }
    else {
  
      let typeLocation = filterLocation(e.target.value, dataCharacters);
      section.innerHTML="";

      allCards(typeLocation)
    }
  gender.value="0";
  species.value="0";
  status.value="0";
  type.value="0";
  origin.value="0";
    });

    //Evento busqueda
formulario.addEventListener("keyup", (e) =>{
  console.log(e.target.value);
  let modifiedInput= e.target.value.toLowerCase();
 if(e.target.value !== ""){
    section.innerHTML="";
    let searchResults= searchCharacter(dataCharacters, modifiedInput);
    
    console.log(searchCharacter(dataCharacters,modifiedInput));
    if (searchResults.length===0){
      section.innerHTML="<p>Character not found, maybe in an unknown dimention!!</p>"
    } else {
      allCards(searchResults);
    } 
  }else{
    allCards(sliceResult)}});