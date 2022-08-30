import { filterGender, filterSpecies, filterStatus, filterType, filterOrigin, filterLocation, alphaOrd } from '../src/data.js';

describe('filterGender', () => {
  it('is a function', () => {
    expect(typeof filterGender).toBe('function');
  });

  it('returns an array with objects that includes gender male value', () => {
    const data= [
    {gender:"Female"},
    {gender:"Male"},
    {gender: "Genderless"},
    {gender: "unknown"}
  ];
 
  expect(filterGender("Male", data )).toEqual([{gender:'Male'}]);
  });

  //copy
  it('for an element that doesn´t exist, returns an  empty array', () => {
    const data= [
    {gender:"Female"},
    {gender:"Male"},
    {gender: "Genderless"},
    {gender: "unknown"}
  ];
 
  expect(filterGender("Queer", data )).toEqual([]);
  });
});


// Unit Test (function of filter Species)

describe('filterSpecies',() => { 
   it ('is a function',  () => { 
      expect(typeof filterSpecies).toBe('function');

   });

   it ('returns an array with objects that includes species Alien value', () => {
    const data= [
      {species:"Vampire"},
      {species:"Human"},
      {species:"Alien"},
      {species:"Robot"}
    ];
    expect(filterSpecies("Alien", data)).toEqual([{species:"Alien"}]);

   });

   it('for an element that doesnt exist, returns an  empty array',()=>{
    const data= [
      {species:"Vampire"},
      {species:"Human"},
      {species:"Alien"},
      {species:"Robot"}
    ]; 

    expect(filterSpecies("Monster", data)).toEqual([]);
   });
});

// Unit Test (function of filter Status)

describe('filterStatus',() => { 
  it('is a function',  () => { 
     expect(typeof filterStatus).toBe('function');

  });

  it('returns an array with objects that includes status value', () => {
    const data= [
      {status:"Dead"},
      {status:"Alive"},
      {status:"unknown"} 
    ];

    expect(filterStatus("Dead", data)).toEqual([{status:"Dead"}]);
});

it('for an element that doesnt exist, returns an  empty array',()=>{
  const data= [
    {status:"Dead"},
    {status:"Alive"},
    {status:"unknown"} 
  ]; 
  expect(filterStatus("Zombie", data)).toEqual([]);

});
});

//U.T. Function filterType

describe('filterType',() => { 
  it('is a function',  () => { 
     expect(typeof filterType).toBe('function');
  });

  it('returns an array with objects that includes property type, Intelligent dog value', () => {
   const data= [
     {type: "Cat-Person"},
     {type:"Boobloosian"},
     {type:"Intelligent dog"},
     {type:"Grandma"}
   ];
   expect(filterType("Intelligent dog", data)).toEqual([{type:"Intelligent dog"}]);

  });

  it('for an element that doesnt exist, returns an  empty array',()=>{
   const data= [
    {type: "Cat-Person"},
    {type:"Boobloosian"},
    {type:"Intelligent dog"},
    {type:"Grandma"}
   ]; 

   expect(filterType("Catcyborg", data)).toEqual([]);
  });
});

//U.T. Function filterOrigin

describe('filterOrigin',() => { 
  it('is a function',  () => { 
     expect(typeof filterOrigin).toBe('function');
  });

  it('returns an array with objects that includes property origin, value Testicle Monster Dimension', () => {
   const data= [
     {origin:
      { name:"Bird World"}
      },
     {origin: 
      { name:"Hamster in Butt World"}
      },
     {origin: 
      { name:"Purge Planet"}
      },
     {origin: 
      { name:"Testicle Monster Dimension"}
    }
   ];
   expect(filterOrigin("Testicle Monster Dimension", data)).toEqual([{origin:{name:"Testicle Monster Dimension"}}]);

  });

  it('for an element that doesnt exist, returns an  empty array',()=>{
    const data= [
      {origin:
        { name:"Bird World"}
        },
       {origin: 
        { name:"Hamster in Butt World"}
        },
       {origin: 
        { name:"Purge Planet"}
        },
       {origin: 
        { name:"Testicle Monster Dimension"}
      }
    ];

   expect(filterOrigin("Citadel of Sade", data)).toEqual([]);
  });
});

//U.T. Function filterLocation

describe('filterLocation',() => { 
  it('is a function',  () => { 
     expect(typeof filterLocation).toBe('function');
  });

  it('returns an array with objects that includes property location,  value Citadel of Ricks', () => {
   const data= [
    {location:
    { name:"Abadango"}
    },
    {location:
      { name:"Hamster in Butt World"}
    },
    {location:
      { name:"Earth (Pizza Dimension)"}
    },
    {location:
      { name:"Citadel of Ricks"}
    }
   ];
   expect(filterLocation("Citadel of Ricks", data)).toEqual([{location: {name:"Citadel of Ricks"}}]);

  });

  it('for an element that doesnt exist, returns an  empty array',()=>{
    const data= [
      {location:
        { name:"Abadango"}
        },
        {location:
          { name:"Hamster in Butt World"}
        },
        {location:
          { name:"Earth (Pizza Dimension)"}
        },
        {location:
          { name:"Citadel of Ricks"}
        }
    ];

   expect(filterLocation("Citadel of Sade", data)).toEqual([]);
  });
});

//U.T. Function Ordenado
describe('alphaOrd',() => {
  it('is a function', () => { 
    expect(typeof alphaOrd).toBe('function');
 });

 it('returns a sorted array from Z to A', ()=>{
  const data= [
    {name: "Chair-homeless"},
    {name:"Boobloosian"},
    {name:"Intelligent dog"},
    {name:"Tuberculosis"}
  ];

  expect(alphaOrd(data)).toEqual([{name:"Tuberculosis"}, {name:"Intelligent dog"}, {name: "Chair-homeless"}, {name:"Boobloosian"}]);
 });
});