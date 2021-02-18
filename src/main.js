/**import{get} from "./data.js";*/
// traer data, con forEach, con innerHTML para mostrar la data según le vamos indicando

import datapoke from "./data/pokemon/pokemon.js";
import { pokemonOrder} from "./data.js";


const dataContainer = document.getElementById("card");
const btnAz = document.querySelector('.btn-az');
let btnSort = false;
//variable que llama a toda la data
let everyPokemon = datapoke.pokemon;

-------       ---------  

let cardPokemon = (dataPokemon) => {
  
  dataPokemon.forEach((pokemon) => {

----    ---- ------

    const container = document.createElement('article');
    dataContainer.appendChild(container).innerHTML =
     //  utilización de template strings (`)

      `<figure class="container-border">
        <div class="container-Card">
          <img  src = "${pokemon.img}">
         
        
       
          <p> N° ${pokemon.num}</p>
          <p>${pokemon.name}</p>
          <p> CP max: ${pokemon.stats["max-cp"]} </p> 
          <p> HP max: ${pokemon.stats["max-hp"]} </p>
       
        </div>   
       </figure>`

  // dataContainer.appenChild(openCards);
  // openCards.innerHTML = cardPokemon;
     
})
};

cardPokemon(everyPokemon);

//función que permite ordenar según la opción a ordenar
const differentOrder = document.getElementById("differentOrder");

differentOrder.addEventListener("change", () => {
  dataContainer.innerHTML = "";
  const selected = differentOrder.value;
  const dataOrder = pokemonOrder.differentOrder(everyPokemon, selected);
  cardPokemon(dataOrder);
  
  // console.log("dataOrder", cardPokemon(dataOrder))

})

//ordenar la data según el tipo seleccionado
document.getElementById("pokemonType").addEventListener ("change", filterbyType);

//función para filtrar por tipo de pokémons
function filterbyType() {
  const filterPokemon = document.getElementById("pokemonType").value;
  const typesShown = everyPokemon.filter(pokemon =>
  pokemon.type.includes(filterPokemon));
  dataContainer.innerHTML = "";
  cardPokemon(typesShown);
}

//función para buscar por nombre
document.querySelector(".search-name").addEventListener("keyup", searchbyName);

function searchbyName() {
  const searchPokemon = document.getElementById("searchName").value;
  const pokemonSearched = everyPokemon.filter(pokemon =>
  pokemon.name.includes(searchPokemon));
  dataContainer.innerHTML = "";
  cardPokemon(pokemonSearched); 
}

//botón alfabético
// btnAz.addEventListener("click",() => {
//   if  (btnSort === false) {
//     dataContainer.innerHTML = "";
//     btnAz.classList.replace("btn-az","btn-za");
//     const ascendingAz = pokemonOrder.differentOrder(everyPokemon, orderByName);
//     cardPokemon(ascendingAz);
//   }
  
//   if (btnSort === true) {
//     dataContainer.innerHTML = "";
//     btnAz.classList.replace("btn-za","btn-az");
//     const descendingZa = pokemonOrder.differentOrder(everyPokemon,selected);
//     cardPokemon(descendingZa);
//   }
//   btnSort = !btnSort;

// });

