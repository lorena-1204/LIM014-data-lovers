export const pokemonOrder = {
    differentOrder: (everyPokemon, selected) => {
        let result;

        if (selected === "aZ"){
            result = everyPokemon.sort(orderByName);
        }
        if (selected === "aZ"){
            result = everyPokemon.sort(orderByName).reverse();
        }
        if (selected === "ascendingNumber"){
            result = everyPokemon.sort(orderByNumber);                        
        }
        if (selected === "descendingNumber"){
            result = everyPokemon.sort(orderByNumber).reverse();
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

        //función para ordenar la data según el número
        function orderByNumber(a,b) {
            if (a.num < b.num) {
                return -1;                
            }
            if (a.num > b.num) {
                return 1;
            }
            return 0;
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
        return result;

    },
};