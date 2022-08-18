export const filterGender = (genero, data)=>  data.filter(character => character.gender == genero);
export const filterSpecies= (especie, data) => data.filter(character => character.species== especie);
export const filterStatus= (status, data) => data.filter(character => character.status== status);
export const filterType= (tipo, data) => data.filter(character => character.type== tipo);
export const filterOrigin= (origen, data) => data.filter(character => character.origin.name== origen);
export const filterLocation= (ubicacion, data) => data.filter(character => character.location.name== ubicacion);