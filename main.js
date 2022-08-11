import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './rickandmorty/rickandmorty.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);
console.log(data.results[0]);

const section = document.getElementById('pickles'); 


data.results.forEach(element =>{
        let html= `
        <section id="pickles">
        <img src=${element.image} class="image">
        <div class="lettersWrap">
            <div class="name">  ${element.name} </div>
            <div class="species">Species: ${element.species} </div>
            <div class="status">Status: ${element.status}</div>
            <img src= "img/pinRick&M.png" class="pin">
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

  // When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
