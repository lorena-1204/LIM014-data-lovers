// traer data, con forEach, con innerHTML para mostrar la data según le vamos indicando

import datapoke from "./data/pokemon/pokemon.js";
import { pokemonOrder } from "./data.js";

//refrescar HOME
document.getElementById("refresh").addEventListener("click", ()=>{
  location.reload();
 });

const dataContainer = document.getElementById("card");

//variable que llama a toda la data

let everyPokemonData = datapoke.pokemon;
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

       <button class="modal-button x${pokemon.type[0]}" > More </button>
       `

    const modalContainer = document.querySelector(".show-modal");
    const modalButton = container.querySelector("button");
    modalButton.addEventListener("click", () => {
      modalContainer.classList.toggle("hide");
      modalContainer.innerHTML =

        ` <section class="modal m${pokemon.type[0]}" id="modal">
  <nav class="modal-content"> 
   
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
  <button class="close"> close </button>
  </section>`

      const modalClose = modal.querySelector(".close");

      modalClose.addEventListener("click", () => {
        modalContainer.classList.toggle("hide");
      })

    })

  })

};

cardPokemon(everyPokemonData);

//función que permite ordenar según la opción a ordenar
const differentOrderButton = document.getElementById("differentOrder");

differentOrderButton.addEventListener("change", () => {
  dataContainer.innerHTML = "";
  const selection = differentOrderButton.value;
  const dataOrder = pokemonOrder.differentOrder(everyPokemonData, selection);
  cardPokemon(dataOrder);

})

const azOrderButton = document.getElementById("azOrder");

azOrderButton.addEventListener("change", () => {
  dataContainer.innerHTML = "";
  const selectionAz = azOrderButton.value;
  const azOrderData = pokemonOrder.differentOrder(everyPokemonData, selectionAz);
  cardPokemon(azOrderData);

})

//ordenar la data según el tipo seleccionado
document.getElementById("pokemonType").addEventListener("change", filterbyType);

//función para filtrar por tipo de pokémons
function filterbyType() {
  const filterPokemon = document.getElementById("pokemonType").value;

  const typesShown = everyPokemonData.filter(pokemon =>
  pokemon.type.includes(filterPokemon));

  dataContainer.innerHTML = "";
  cardPokemon(typesShown);
}

//función para buscar por nombre
document.querySelector(".search-name").addEventListener("keyup", searchbyName);

function searchbyName() {
  const searchPokemon = document.getElementById("searchName").value;

  const pokemonSearched = everyPokemonData.filter(pokemon =>
  pokemon.name.includes(searchPokemon));

  dataContainer.innerHTML = "";
  cardPokemon(pokemonSearched);
}

//función para seleccionar top ten spawn chance

let cardPokemonTop = (dataPokemon) => {
  let count = 0;

  dataPokemon.forEach(pokemon => {

  count++;

  if (count < 11 ) {
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
}});

};

  const differentOrderSpawn = document.getElementById("spawnOrder");
  differentOrderSpawn.addEventListener("change", () => {
    dataContainer.innerHTML = "";
    const spawnTopTen = differentOrderSpawn.value;
    const spawnChance = pokemonOrder.differentOrder(everyPokemonData, spawnTopTen);
    cardPokemonTop(spawnChance);

})




