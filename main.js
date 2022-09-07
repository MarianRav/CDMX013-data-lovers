import { filterGender } from './data.js'; 
import { filterSpecies } from './data.js';
import { filterStatus } from './data.js';
import { filterType } from './data.js';
import { filterOrigin } from './data.js';
import { filterLocation } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';
import {alphaOrd} from './data.js';
import {searchCharacter} from './data.js';
import {computeStats} from './data.js';
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

    
    //Search Function
let formulario=document.getElementById("inputText");

formulario.addEventListener("keyup", (e) =>{
  console.log(e.target.value);
  let modifiedInput= e.target.value.toLowerCase();
 if(e.target.value !== ""){
    section.innerHTML="";
    let searchResults= searchCharacter(dataCharacters, modifiedInput);
    
    console.log(searchCharacter(dataCharacters,modifiedInput));
    if (searchResults.length===0){
      section.innerHTML=`<div class="textNotFound"> <h2>Character not found, maybe in an unknown dimention!!</h2> </div>
                         <div class="notFound"> <img class="portal"src= "img/rickNot.gif"></div>
                         `
                                         
    } else {
      allCards(searchResults);
    } 
  }else{
    allCards(sliceResult)}});

    const btnFacts= document.getElementById("funFacts");

    btnFacts.addEventListener ("click", (e) => {
      computeStats(244, 493);
      section.innerHTML="";
      section.innerHTML=`<section>
                       
                         <div  class="flex-boxx"> 
                          
                          <!-- Dead Morty-->

                          <div class="backGrou">
                          <div class="h3contain"> CITADEL MORNING presents FUN FACTS</div>
                          <div class="h4contain">Another dead Morty!</div>
                          <div class="h5contain"> Records show that from a 44 Mortys that we know until now,
                         ${computeStats(9,44)}% are dead and ${computeStats(13,44)}% with unknown status.</div>
                          <div> <img class="mortem" src= "img/deadmortyTV.png"></div>
                          <div class="sarcasmMorty">What a surprise! (sarcasm) </div>
                          </div>
                     
                          <!-- RICK DEAD -->

                          <div class="backGrou">
                          <div class="h3contain"> CITADEL MORNING presents FUN FACTS</div>
                          <div class="h4containRick">Sad news today!</div>
                          <div class="h5containRick"> Another Rick was found dead, from 73 Ricks that we know until now,
                         ${computeStats(33,73)}% are dead and ${computeStats(19,73)}% with unknown status.</div>
                          <div> <img class="mortemRick"src= "img/deadrickTV.png"></div>
                          </div>

                          <!-- Most populated dimention -->

                          <div class="backGrou">
                          <div class="h3contain"> CITADEL MORNING presents FUN FACTS</div>
                          <div class="h4contain">Stop having kids!</div>
                          <div class="h5contain">New info shows that Earth(Replacement Dimension), has the largest population of all dimensions with             
                         ${computeStats(105,493)}%. </div>
                          <div> <img class="mortem"src= "img/allCharTV.png"></div>
                          <div class="noBabe">  <img class="babyRick"src= "img/babyrick.png"></div>
                          <div class="sarcasmMorty">No more babies!</div>
                          </div>

                          <!-- HUMANOID -->

                          <div class="backGrou">
                          <div class="h3contain"> CITADEL MORNING presents FUN FACTS</div>
                          <div class="h4containRick">It's a trap!</div>
                          <div class="h5containRick">Experts inform that Humanoids are the species with more presence of all dimensions 
                          after humans with a ${computeStats(53,493)}%.</div>
                          <div> <img class="mortemRick"src= "img/humanoidTV.png"></div>
                          </div>

                          <!-- unknown origin -->

                          <div class="backGrouOrigin">
                          <div class="h3contain"> CITADEL MORNING presents FUN FACTS</div>
                          <div class="h4contain">Don't trust anyone!</div>
                          <div class="h5contain"> Records show that from 493 characters ${computeStats(244,493)}% are from an unkown origin.</div> 
                          <div class="beCareful">Be careful! </div>
                          <div> <img class="mortem"src= "img/ricksTV.png"></div>
                          <div class="stayTuned">Stay tuned for more Funfacts here in CITADEL MORNING!</div>
                            </div>
                            
                        </div>
                            
                        </section>
                        `
      console.log(e);
     console.log(computeStats(244, 493));
    }) 


//Estadisticas counter.

/*let count={};
dataCharacters.forEach(item => {
if (count[item.origin.name]) {
    count [item.origin.name]++;
}else {
  count [item.origin.name]=1;
}
})
console.log(count);*/