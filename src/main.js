import { filterGender } from './data.js'; 
import { filterSpecies } from './data.js';
import { filterStatus } from './data.js';
import { filterType } from './data.js';
import { filterOrigin } from './data.js';
import { filterLocation } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';
import {alphaOrd} from './data.js';
console.log(filterSpecies);
console.log(data.results[0]);

//mostrar data
const section = document.getElementById('container'); 
const sliceResult= data.results.slice(0, 100)
sliceResult.forEach(element =>{
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

let dataCharacters= data.results;

//Alphabetical Order

const orderSelect=document.getElementById("order");
orderSelect.addEventListener ("change", (e) => {
  let orderBox= alphaOrd(sliceResult);
  if(e.target.value === "Z-A"){
    section.innerHTML="";
    orderBox.forEach(element =>{
       
    let html= `
    
    <section class="pickles" class="flex-boxx">
    <img src=${element.image} class="image">
    <div class="lettersWrap" id="prueba">
        <div class="name">  ${element.name} </div>
        <div class="species">Species: ${element.species} </div>
        <div class="status">Status: ${element.status}</div>
        <img class="pin" id="logo" src= "img/pinRick&M.png">

    </div>
    </section>`
   section.innerHTML+=html;
  })
  }
  if(e.target.value === "A-Z"){
    section.innerHTML="";
    orderBox.reverse().forEach(element =>{
       
    let html= `
    
    <section class="pickles" class="flex-boxx">
    <img src=${element.image} class="image">
    <div class="lettersWrap" id="prueba">
        <div class="name">  ${element.name} </div>
        <div class="species">Species: ${element.species} </div>
        <div class="status">Status: ${element.status}</div>
        <img class="pin" id="logo" src= "img/pinRick&M.png">

    </div>
    </section>`
   section.innerHTML+=html;
  })
  }

});

//Button to reset All Characters

const allCharacters = document.getElementById('btnAllCharacters'); 
allCharacters.addEventListener("click", resetCharacters);
function resetCharacters () {
  section.innerHTML="";
  dataCharacters.forEach(element =>{
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
        sliceResult.forEach(element =>{
       
          let html= `
          
          <section class="pickles" class="flex-boxx">
          <img src=${element.image} class="image">
          <div class="lettersWrap" id="prueba">
              <div class="name">  ${element.name} </div>
              <div class="species">Species: ${element.species} </div>
              <div class="status">Status: ${element.status}</div>
              <img class="pin" id="logo" src= "img/pinRick&M.png">
  
          </div>
          </section>`
         section.innerHTML+=html;
         
        })
      }
      else {
      let typeGender = filterGender(e.target.value, dataCharacters);
      section.innerHTML="";
      typeGender.forEach(element =>{
       
        let html= `
        
        <section class="pickles" class="flex-boxx">
        <img src=${element.image} class="image">
        <div class="lettersWrap" id="prueba">
            <div class="name">  ${element.name} </div>
            <div class="species">Species: ${element.species} </div>
            <div class="status">Status: ${element.status}</div>
            <img class="pin" id="logo" src= "img/pinRick&M.png">

        </div>
        </section>`
       section.innerHTML+=html;
       
      })
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
      sliceResult.forEach(element =>{
     
        let html= `
        
        <section class="pickles" class="flex-boxx">
        <img src=${element.image} class="image">
        <div class="lettersWrap" id="prueba">
            <div class="name">  ${element.name} </div>
            <div class="species">Species: ${element.species} </div>
            <div class="status">Status: ${element.status}</div>
            <img class="pin" id="logo" src= "img/pinRick&M.png">

        </div>
        </section>`
       section.innerHTML+=html;
       
      })
    }
    else {
      let typeSpecies = filterSpecies(e.target.value, dataCharacters);
      section.innerHTML="";
      typeSpecies.forEach(element =>{
       
        let html= `
        
        <section class="pickles" class="flex-boxx">
        <img src=${element.image} class="image">
        <div class="lettersWrap" id="prueba">
            <div class="name">  ${element.name} </div>
            <div class="species">Species: ${element.species} </div>
            <div class="status">Status: ${element.status}</div>
            <img class="pin" id="logo" src= "img/pinRick&M.png">

        </div>
        </section>`
       section.innerHTML+=html;
      })
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
      sliceResult.forEach(element =>{
     
        let html= `
        
        <section class="pickles" class="flex-boxx">
        <img src=${element.image} class="image">
        <div class="lettersWrap" id="prueba">
            <div class="name">  ${element.name} </div>
            <div class="species">Species: ${element.species} </div>
            <div class="status">Status: ${element.status}</div>
            <img class="pin" id="logo" src= "img/pinRick&M.png">

        </div>
        </section>`
       section.innerHTML+=html;
       
      })
    }
    else {
      let typeStatus = filterStatus(e.target.value, dataCharacters);
      section.innerHTML="";
  
      console.log(typeStatus);
      typeStatus.forEach(element =>{
       
        let html= `
        
        <section class="pickles" class="flex-boxx">
        <img src=${element.image} class="image">
        <div class="lettersWrap" id="prueba">
            <div class="name">  ${element.name} </div>
            <div class="species">Species: ${element.species} </div>
            <div class="status">Status: ${element.status}</div>
            <img class="pin" id="logo" src= "img/pinRick&M.png">

        </div>
        </section>`
       section.innerHTML+=html;
      })
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
      sliceResult.forEach(element =>{
     
        let html= `
        
        <section class="pickles" class="flex-boxx">
        <img src=${element.image} class="image">
        <div class="lettersWrap" id="prueba">
            <div class="name">  ${element.name} </div>
            <div class="species">Species: ${element.species} </div>
            <div class="status">Status: ${element.status}</div>
            <img class="pin" id="logo" src= "img/pinRick&M.png">

        </div>
        </section>`
       section.innerHTML+=html;
       
      })
    }
    else {
      let type = filterType(e.target.value, dataCharacters);
      section.innerHTML="";
  
      type.forEach(element =>{
       
        let html= `
        
        <section class="pickles" class="flex-boxx">
        <img src=${element.image} class="image">
        <div class="lettersWrap" id="prueba">
            <div class="name">  ${element.name} </div>
            <div class="species">Species: ${element.species} </div>
            <div class="status">Status: ${element.status}</div>
            <img class="pin" id="logo" src= "img/pinRick&M.png">

        </div>
        </section>`
       section.innerHTML+=html;
      })
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

      sliceResult.forEach(element =>{
     
        let html= `
        
        <section class="pickles" class="flex-boxx">
        <img src=${element.image} class="image">
        <div class="lettersWrap" id="prueba">
            <div class="name">  ${element.name} </div>
            <div class="species">Species: ${element.species} </div>
            <div class="status">Status: ${element.status}</div>
            <img class="pin" id="logo" src= "img/pinRick&M.png">

        </div>
        </section>`
       section.innerHTML+=html;
       
      })
    }
    else {     
      let typeOrigin = filterOrigin(e.target.value, dataCharacters);
      section.innerHTML="";
      typeOrigin.forEach(element =>{
       
        let html= `
        
        <section class="pickles" class="flex-boxx">
        <img src=${element.image} class="image">
        <div class="lettersWrap" id="prueba">
            <div class="name">  ${element.name} </div>
            <div class="species">Species: ${element.species} </div>
            <div class="status">Status: ${element.status}</div>
            <img class="pin" id="logo" src= "img/pinRick&M.png">

        </div>
        </section>`
       section.innerHTML+=html;
      })
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
      sliceResult.forEach(element =>{
     
        let html= `
        
        <section class="pickles" class="flex-boxx">
        <img src=${element.image} class="image">
        <div class="lettersWrap" id="prueba">
            <div class="name">  ${element.name} </div>
            <div class="species">Species: ${element.species} </div>
            <div class="status">Status: ${element.status}</div>
            <img class="pin" id="logo" src= "img/pinRick&M.png">

        </div>
        </section>`
       section.innerHTML+=html;
       
      })
    }
    else {
  
      let typeLocation = filterLocation(e.target.value, dataCharacters);
      section.innerHTML="";

      typeLocation.forEach(element =>{
       
        let html= `
        
        <section class="pickles" class="flex-boxx">
        <img src=${element.image} class="image">
        <div class="lettersWrap" id="prueba">
            <div class="name">  ${element.name} </div>
            <div class="species">Species: ${element.species} </div>
            <div class="status">Status: ${element.status}</div>
            <img class="pin" id="logo" src= "img/pinRick&M.png">

        </div>
        </section>`
       section.innerHTML+=html;
      })
    }
  gender.value="0";
  species.value="0";
  status.value="0";
  type.value="0";
  origin.value="0";
    })