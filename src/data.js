export const filterGender = (genero, data) => data.filter(character => character.gender == genero);
export const filterSpecies = (especie, data) => data.filter(character => character.species == especie);
export const filterStatus = (status, data) => data.filter(character => character.status == status);
export const filterType = (tipo, data) => data.filter(character => character.type == tipo);
export const filterOrigin = (origen, data) => data.filter(character => character.origin.name == origen);
export const filterLocation = (ubicacion, data) => data.filter(character => character.location.name == ubicacion);

export const alphaOrd = (data) => {
  return data.sort((a, b) => {
     if (a.name.toUpperCase() > b.name.toUpperCase()) {
       return -1;
     }
     if (a.name.toUpperCase() < b.name.toUpperCase ()) {
       return 1;
     }
   });
 }
 
/* export const searchCharacter=(scoutData, inputName)=>{
   for (let character of scoutData) {
    let resultOfSearch="";
    let nombre=character.name.toLowerCase();
    if (nombre.indexOf(inputName.toLowerCase()) !== -1) {
      resultOfSearch +=character.name;
      return `
      <li class="list">${character.name} <li>
    `
   //  return resultOfSearch;
    } else {

                              //if (nombre.indexOf(inputName) === "") {
      return "empty"; 
    }

  }     

 }*/