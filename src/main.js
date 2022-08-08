import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/rickandmorty/rickandmorty.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);
console.log(data.results.name[0]);

const container = document.getElementById('container');

data.results.forEach(element =>{
    container.innerHTML=`
    <div class="name">Name: ${data.results.name}
                 ${data.results.species}
                 ${data.results.status}</div>`
})
