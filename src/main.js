/**import{get} from "./data.js";*/
// traer data, con forEach, con innerHTML para mostrar la data según le vamos indicando

import datapoke from "./data/pokemon/pokemon.js";
import { pokemonOrder} from "./data.js";


//const containerBorder = document.getElementById(container-border);


const dataContainer = document.getElementById("card");

//variable que llama a toda la data
let everyPokemon = datapoke.pokemon;

let cardPokemon = (dataPokemon) => {
  
  dataPokemon.forEach((pokemon) => {


    const container = document.createElement('figure');

    container.className= "container-Card "  + pokemon.type[0];


    dataContainer.appendChild(container).innerHTML =
     //  utilización de template strings (`)
     ` <a class="modal-card " href="#modal">

     <img  src = "${pokemon.img}" id="img-card">
       <figcaption class="legend"> 
        <p> N° ${pokemon.num}</p>
        <p>${pokemon.name}</p>
        <p> CP max: ${pokemon.stats["max-cp"]} </p> 
        <p> HP max: ${pokemon.stats["max-hp"]} </p>
       </figcaption> 
       <nav> 
         </a>
       </nav>

       <section class="modal" id="modal"> 
       <nav class="modal-content"> 
        <a class="modal-hide" href="#">✕</a>
       <figure>
        <img  src = "${pokemon.img}">
        <p> N° ${pokemon.num}</p>
       <p>${pokemon.name}</p>
       <p>${pokemon.about}</p>
       <p> CP max: ${pokemon.stats["max-cp"]} </p> 
       <p> HP max: ${pokemon.stats["max-hp"]} </p>
 
       <p><b>Resistant: </b></p>
         <p><img class="imgResistance" alt="" src="img/resistant-weaknesses/${pokemon.resistant[0]}.png">
         <img class="imgResistance" alt="" src="img/resistant-weaknesses/${pokemon.resistant[1]}.png">
         <img class="imgResistance" alt="" src="img/resistant-weaknesses/${pokemon.resistant[2]}.png">
         <img class="imgResistance" alt="" src="img/resistant-weaknesses/${pokemon.resistant[3]}.png">
         <img class="imgResistance" alt="" src="img/resistant-weaknesses/${pokemon.resistant[4]}.png'>
         <img class="imgResistance" alt="" src="img/resistant-weaknesses/${pokemon.resistant[5]}.png">
         <img class="imgResistance" alt="" src="img/resistant-weaknesses/${pokemon.resistant[6]}.png">
         <img class="imgResistance" alt="" src='img/resistant-weaknesses/${pokemon.resistant[7]}.png'></p>
 
       <p ><b>Weaknesses:</b></p>
        <p id="imageContainer"><img class="imgResistance" alt="" src="img/resistant-weaknesses/${pokemon.weaknesses[0]}.png">
        <img class="imgResistance" alt="" src="img/resistant-weaknesses/${pokemon.weaknesses[1]}.png">
        <img class="imgResistance" alt="" src="img/resistant-weaknesses/${pokemon.weaknesses[2]}.png">
        <img class="imgResistance" alt="" src="img/resistant-weaknesses/${pokemon.weaknesses[3]}.png">
        <img class="imgResistance" alt="" src="img/resistant-weaknesses/${pokemon.weaknesses[4]}.png"></p>
      
        </figure>
       </nav>
      </section>
     `
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

//console.log (pokemonOrder.differentOrder(everyPokemon, "spawn")//