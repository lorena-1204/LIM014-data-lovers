/**import{get} from "./data.js";*/
// traer data, con forEach, con innerHTML para mostrar la data según le vamos indicando
import datapoke from "./data/pokemon/pokemon.js"
const contenedorData = document.getElementById("card");
let traerData = datapoke.pokemon;
let cardPokemon = traerData.forEach((dataPokemon) => {
    return contenedorData.innerHTML +=
    //  utilización de template strings (`)
    
     `
      <figure class="card-poke">

        <img src = "${dataPokemon.img}">
    
       <figcaption>
        <p>N°${dataPokemon.num}</p>
        <p>${dataPokemon.name}</p>
        <p> CP max: ${dataPokemon.stats["max-cp"]} </p> 
        <p> HP max: ${dataPokemon.stats["max-hp"]} </p>
       </figcaption>
     
      </figure>`
     
});