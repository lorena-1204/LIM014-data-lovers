import datapoke from "./data/pokemon/pokemon.js";
import { pokemonOrder } from "./data.js";
import {
  calculateStab,
  calculateDps,
  calculateEps,
} from './data.js';

const obtainNames = (attack) => {
  const names = attack.map(name => name.name);
  return names;
};

const showsAttacks = (arrayAtacks) => {
  let stabEachPokemon = '';
  arrayAtacks.forEach((nuevo) => {
    stabEachPokemon += `<p class="comun-attack">${nuevo}</p>`;
  });
  return stabEachPokemon;
};


document.getElementById("refresh").addEventListener("click", () => {
  location.reload();
});

const dataContainer = document.getElementById("card");

//variable que llama a toda la data
let everyPokemonData = datapoke.pokemon;
let cardPokemon = (dataPokemon) => {
  dataPokemon.forEach((pokemon) => {

    const container = document.createElement('figure');
    container.className = "container-Card " + pokemon.type[0];
    dataContainer.appendChild(container).innerHTML =

      //  utilización de template strings (`)
      `<section class="modal-button"> 
       <img  src = "${pokemon.img}" id="img-card" >

       <figcaption class="legend">
        <p class="num1"> N° ${pokemon.num}</p>
        <p class="name1">${pokemon.name}</p>
        <p> CP max: ${pokemon.stats["max-cp"]} </p>
        <p> HP max: ${pokemon.stats["max-hp"]} </p>
       </figcaption>
      </section>`

    const modalContainer = document.querySelector(".show-modal");
    const modalButton = container.querySelector("section");

    let cardNextEvolution;
    let cardPrevEvolutions;
    const NotEvolution = '<p> Whithout evolution</p>';
    if (pokemon.evolution) {
      if (pokemon.evolution["next-evolution"]) {
        let nextEvolutions = getNextEvolution(pokemon.evolution["next-evolution"]);
        cardNextEvolution = nextEvolutions.map(elemento => {
          return `<div>
        <img  class="image-pokemon" src="https://www.serebii.net/pokemongo/pokemon/${elemento.num}.png">
          <h2 class="subtitle">${elemento.name}</h2>
          <p> Candy Cost ${elemento['candy-cost']}</p></div>`
        })
      }

      if (pokemon.evolution["prev-evolution"]) {
        let prevEvolutions = getPrevEvolution(pokemon.evolution["prev-evolution"]);
        cardPrevEvolutions = prevEvolutions.map(elemento => {
          return `<div>
            <img class="image-pokemon"src="https://www.serebii.net/pokemongo/pokemon/${elemento.num}.png">
            <h2 class="subtitle">${elemento.name}</h2>
          <p> Candy Cost ${elemento['candy-cost']} </p></div>`
        })
      }

    }

    modalButton.addEventListener("click", () => {
      //modal
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
              <img class="imgResistance" alt="" src='img/resistant-weaknesses/${pokemon.resistant[7]}.png'>
            </p>

            <p ><b>Weaknesses:</b></p>
            <p id="imageContainer">
              <img class="imgResistance" alt="" src="img/resistant-weaknesses/${pokemon.weaknesses[0]}.png">
              <img class="imgResistance" alt="" src="img/resistant-weaknesses/${pokemon.weaknesses[1]}.png">
              <img class="imgResistance" alt="" src="img/resistant-weaknesses/${pokemon.weaknesses[2]}.png">
              <img class="imgResistance" alt="" src="img/resistant-weaknesses/${pokemon.weaknesses[3]}.png">
              <img class="imgResistance" alt="" src="img/resistant-weaknesses/${pokemon.weaknesses[4]}.png">
            </p>

            <p class="bold comun title">Quick move</p>
            <section class="comun bold quick-move">
              <p class="encabezado">Name</p>
              <p class="encabezado">STAB</p>
              <p class="encabezado">DPS</p>
              <p class="encabezado">EPS</p>
            </section>
            <section class="quick-move">
              <section>${showsAttacks(obtainNames(pokemon['quick-move']))}</section>
              <section>${showsAttacks(calculateStab(pokemon['quick-move'], pokemon.type))}</section>
              <section>${showsAttacks(calculateDps(pokemon['quick-move'], pokemon.type))}</section>
              <section>${showsAttacks(calculateEps(pokemon['quick-move']))}</section>
            </section>

             <h2>Evolution</h2>
             <td>${cardPrevEvolutions ? cardPrevEvolutions.join('') : ''} </td>
             <img  src = "${pokemon.img}">
             <td>  ${cardNextEvolution ? cardNextEvolution.join('') : ''}</td>
             <td> ${cardNextEvolution === undefined && cardPrevEvolutions === undefined ? NotEvolution : ''}</td> 

            </figure>
            </nav>
            <p class="close"> X </p>
            </section>`

      const modalClose = document.querySelector(".close");
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

    if (count < 11) {
      const container = document.createElement('figure');

      container.className = "container-Card " + pokemon.type[0];

      dataContainer.appendChild(container).innerHTML =
        //  utilización de template strings (`)
        `<img  src = "${pokemon.img}" id="img-card">
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

      let cardNextEvolution;
      let cardPrevEvolutions;
      const NotEvolution = '<p> Whithout evolution</p>';
      if (pokemon.evolution) {
        if (pokemon.evolution["next-evolution"]) {
          let nextEvolutions = getNextEvolution(pokemon.evolution["next-evolution"]);
          cardNextEvolution = nextEvolutions.map(elemento => {
            return `<div>
        <img  class="image-pokemon" src="https://www.serebii.net/pokemongo/pokemon/${elemento.num}.png">
          <h2 class="subtitle">${elemento.name}</h2>
          <p> Candy Cost ${elemento['candy-cost']}</p></div>`
          })
        }

        if (pokemon.evolution["prev-evolution"]) {
          let prevEvolutions = getPrevEvolution(pokemon.evolution["prev-evolution"]);
          cardPrevEvolutions = prevEvolutions.map(elemento => {
            return `<div>
            <img class="image-pokemon"src="https://www.serebii.net/pokemongo/pokemon/${elemento.num}.png">
            <h2 class="subtitle">${elemento.name}</h2>
          <p> Candy Cost ${elemento['candy-cost']} </p></div>`
          })
        }

      }
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
            <p>
              <img class="imgResistance" alt="" src="img/resistant-weaknesses/${pokemon.resistant[0]}.png">
              <img class="imgResistance" alt="" src="img/resistant-weaknesses/${pokemon.resistant[1]}.png">
              <img class="imgResistance" alt="" src="img/resistant-weaknesses/${pokemon.resistant[2]}.png">
              <img class="imgResistance" alt="" src="img/resistant-weaknesses/${pokemon.resistant[3]}.png">
              <img class="imgResistance" alt="" src="img/resistant-weaknesses/${pokemon.resistant[4]}.png'>
              <img class="imgResistance" alt="" src="img/resistant-weaknesses/${pokemon.resistant[5]}.png">
              <img class="imgResistance" alt="" src="img/resistant-weaknesses/${pokemon.resistant[6]}.png">
              <img class="imgResistance" alt="" src='img/resistant-weaknesses/${pokemon.resistant[7]}.png'>
            </p>

            <p ><b>Weaknesses:</b></p>
            <p id="imageContainer">
              <img class="imgResistance" alt="" src="img/resistant-weaknesses/${pokemon.weaknesses[0]}.png">
              <img class="imgResistance" alt="" src="img/resistant-weaknesses/${pokemon.weaknesses[1]}.png">
              <img class="imgResistance" alt="" src="img/resistant-weaknesses/${pokemon.weaknesses[2]}.png">
              <img class="imgResistance" alt="" src="img/resistant-weaknesses/${pokemon.weaknesses[3]}.png">
              <img class="imgResistance" alt="" src="img/resistant-weaknesses/${pokemon.weaknesses[4]}.png">
            </p>

            <p class="bold comun title">Quick move</p>
            <section class="comun bold quick-move">
              <p class="encabezado">Name</p>
              <p class="encabezado">STAB</p>
              <p class="encabezado">DPS</p>
              <p class="encabezado">EPS</p>
            </section>
            <section class="quick-move">
              <section>${showsAttacks(obtainNames(pokemon['quick-move']))}</section>
              <section>${showsAttacks(calculateStab(pokemon['quick-move'], pokemon.type))}</section>
              <section>${showsAttacks(calculateDps(pokemon['quick-move'], pokemon.type))}</section>
              <section>${showsAttacks(calculateEps(pokemon['quick-move']))}</section>
            </section>

             <h2>Evolution</h2>
             <td>${cardPrevEvolutions ? cardPrevEvolutions.join('') : ''} </td>
             
             <td>  ${cardNextEvolution ? cardNextEvolution.join('') : ''}</td>
             <td> ${cardNextEvolution === undefined && cardPrevEvolutions === undefined ? NotEvolution : ''}</td> 

          </figure>
          </nav>
          <button class="close"> close </button>
        </section>`

        const modalClose = document.querySelector(".close");
        modalClose.addEventListener("click", () => {
          modalContainer.classList.toggle("hide");
        })



    })

}
});
};

const differentOrderSpawn = document.getElementById("spawnOrder");
differentOrderSpawn.addEventListener("change", () => {
  dataContainer.innerHTML = "";
  const spawnTopTen = differentOrderSpawn.value;
  const spawnChance = pokemonOrder.differentOrder(everyPokemonData, spawnTopTen);
  cardPokemonTop(spawnChance);

})

//Evolution
function getNextEvolution(elemento) {
  let nextEvolution = elemento[0]['next-evolution'];
  const evolutions = [];
  if (nextEvolution) {
    evolutions.push(...getNextEvolution(nextEvolution));
  }
  evolutions.push(elemento[0]);
  return evolutions.reverse();
}

function getPrevEvolution(elemento) {
  let prevEvolution = elemento[0]['prev-evolution'];
  const evolutions = [];
  if (prevEvolution) {
    evolutions.push(...getNextEvolution(prevEvolution));
  }
  evolutions.push(elemento[0]);
  return evolutions.reverse();
}