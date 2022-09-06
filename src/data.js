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
 
export const searchCharacter =(data, input)=>{
  let array=[];
  data.forEach(character =>{
   let databaseInfo = character.name.toLowerCase();
   if(databaseInfo.indexOf(input)!== -1){
    //if (character.status==="unknown")
   array.push(character)
   }

  })
  return array;
}

//Statistics %

export const computeStats =(quantity, total ) => {
  let totalPer=(quantity*100) / total;
  console.log(typeof parseInt (totalPer.toFixed(0)));
  return parseInt (Math.floor(totalPer)
  );
}