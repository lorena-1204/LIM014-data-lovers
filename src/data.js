//función para ordenar la data según el nombre
 export const orderByName = (a, b) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}

//función para ordenar top10
export const orderBySpawn = (a, b) =>{
  return a['spawn-chance'] - b['spawn-chance'];
}

//función para ordenar la data según PC
export const orderByPc = (a, b) => {
  if (parseInt(a.stats["max-cp"]) < parseInt(b.stats["max-cp"])) {
    return -1;
  }
  if (parseInt(a.stats["max-cp"]) > parseInt(b.stats["max-cp"])) {
    return 1;
  }
  return 0;
}

//función para ordenar la data según HP
export const orderByHp = (a, b) =>{
  if (parseInt(a.stats["max-hp"]) < parseInt(b.stats["max-hp"])) {
    return -1;
  }
  if (parseInt(a.stats["max-hp"]) > parseInt(b.stats["max-hp"])) {
    return 1;
  }
  return 0;
}

export const pokemonOrder = {
  differentOrder: (everyPokemon, selected) => {
    let result;
    switch(true) {
      case selected === "aZ":
        result = everyPokemon.sort(orderByName);
         break;
      case selected === "zA":
        result = everyPokemon.sort(orderByName).reverse();
        break;
      case selected === "ascendingCp":
          result = everyPokemon.sort(orderByPc);
          break;
      case selected === "descendingCp":
          result = everyPokemon.sort(orderByPc).reverse();
          break;
      case selected === "ascendingHp":
          result = everyPokemon.sort(orderByHp);
          break;
      case selected === "descendingHp":
          result = everyPokemon.sort(orderByHp).reverse();
          break;
      case selected === "ascendingspawn":
          result = everyPokemon.sort(orderBySpawn);
          break;
      case selected === "descendingspawn":
          result = everyPokemon.sort(orderBySpawn).reverse();
          break;
      }
      return result;
    }
  };

//Cálculo agregado
export const calculateStab = (attack, tipoPokemon) => {
  const result = attack.map((obj) => {
    const damage = Number(obj['base-damage']);
    if (tipoPokemon.includes(obj.type)) {
      const stab = Number((damage * 20) / 100 + damage);
      return stab;
    }
    return damage;
  });
  return result;
};

export const calculateDps = (attack, tipoPokemon) => {
  const result = attack.map((obj) => {
    const damage = Number(obj['base-damage']);
    const time = Number(obj['move-duration-seg']);
    let dps = Math.round((damage / time));
    if (tipoPokemon.includes(obj.type)) {
      const stab = Number((damage * 20) / 100 + damage);
      dps = Math.round((stab / time));
    }
    return dps;
  });
  return result;
};


export const calculateEps = (attack) => {
  const result = attack.map((obj) => {
    const energy = Number(obj.energy);
    const time = Number(obj['move-duration-seg']);
    const eps = Math.round(energy / time);
    return eps;
  });
  return result;
};
