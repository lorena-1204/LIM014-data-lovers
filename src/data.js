export const pokemonOrder = {
    differentOrder: (everyPokemon, selected) => {
        let result;

        if (selected === "aZ"){
            result = everyPokemon.sort(orderByName);
        }
        if (selected === "zA"){
            result = everyPokemon.sort(orderByName).reverse();
        }

        if (selected === "ascendingCp"){
            result = everyPokemon.sort(orderByPc);
        }
        if (selected === "descendingCp"){
            result = everyPokemon.sort(orderByPc).reverse();
        }
        if (selected === "ascendingHp"){
            result = everyPokemon.sort(orderByHp);
        }
        if (selected === "descendingHp"){
            result = everyPokemon.sort(orderByHp).reverse();
        }
        if (selected === "ascendingSpawn"){
            result = everyPokemon.sort(orderBySpawn);
        }
        if (selected === "descendingSpawn"){
            result = everyPokemon.sort(orderBySpawn).reverse();
        }

        return result;

  },
};

//función para ordenar la data según el nombre
        function orderByName(a,b) {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
        }

        //función para ordenar top10
        function orderBySpawn(a,b) {
          return a['spawn-chance'] - b['spawn-chance'];
        }

         //función para ordenar la data según PC
        function orderByPc(a,b) {
            if (parseInt(a.stats["max-cp"]) < parseInt(b.stats["max-cp"])) {
              return -1;
            }
            if (parseInt(a.stats["max-cp"]) > parseInt(b.stats["max-cp"])) {
              return 1;
            }
            return 0;
        }

        //función para ordenar la data según HP
        function orderByHp(a,b) {
            if (parseInt(a.stats["max-hp"]) < parseInt(b.stats["max-hp"])) {
              return -1;
            }
            if (parseInt(a.stats["max-hp"]) > parseInt(b.stats["max-hp"])) {
              return 1;
            }
            return 0;
        }


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
