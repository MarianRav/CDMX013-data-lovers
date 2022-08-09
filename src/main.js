import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/rickandmorty/rickandmorty.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);
console.log(data.results[0]);

const section = document.getElementById('pickles'); 


data.results.forEach(element =>{
        let html= `
        <section id="pickles">
        <img src=${element.image} class="image">
        <div class="name">Name: ${element.name} </div>
        <div class="species">Species: ${element.species} </div>
        <div class="status">Status:${element.status}</div>
        </section>
        `;
        section.insertAdjacentHTML('beforebegin', html);
    
})

