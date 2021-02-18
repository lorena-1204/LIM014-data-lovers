/**import{get} from "./data.js";*/
// traer data, con forEach, con innerHTML para mostrar la data según le vamos indicando

import datapoke from "./data/pokemon/pokemon.js";
import { pokemonOrder} from "./data.js";


const dataContainer = document.getElementById("card");

//variable que llama a toda la data
let everyPokemon = datapoke.pokemon;

let cardPokemon = (dataPokemon) => {
  
  dataPokemon.forEach((pokemon) => {

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
  // console.log("DatAORder", cardPokemon(dataOrder))

})


//variable para llamar al selector de clase
// const theCards = document.querySelector("the-Cards")

//Función para mostrar a los pokemons
// const showPokemons = (datapoke) => {
//   let pokemonPack = "";

//   for (const pokemon in data) {
//     const lookCard = document.createElement("section");

//     //template strings
//     pokemonPack = `
//     <section id="lookCard"> 
//       <section class="frontCard">
//           <p id=""    
    
//     </section>



//   }


// }