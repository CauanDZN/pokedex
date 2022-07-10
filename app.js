const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`
//sunstitui o for dentro do fetchPokemon()
const generatePokemonPromises = () => Array(898).fill().map((_, index)  =>
fetch(getPokemonUrl(index + 1)).then(response => response.json()))



const fetchPokemon = () =>{

   
    const pokemonsPromises = generatePokemonPromises();

    // const pokemonsPromises = [];

    // //Percorre a lista de pokemons
    // for(let i = 1; i<150; i++){

    //     pokemonsPromises.push(fetch(getPokemonUrl(i)).then(response => response.json()));

    // }

    //Recebe um array de promises como argumento e quando elas tiverem resolvidas dará como resultado uma promise
    Promise.all(pokemonsPromises)
    .then(pokemons => {
        


          console.log(pokemons)

    
        return lisPokemons = pokemons.reduce((accumulator, pokemon) =>{
           const types = pokemon.types.map(typeInfo => typeInfo.type.name);

            accumulator +=`


                <li class="card ${types[0]}">
                
                <img class= "card-image" alt"${pokemon.name}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png">

                <h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>

                <p class="card-subtitle">${pokemon.types.map(typeInfo => typeInfo.type.name).join(' | ')}</p>
               
                </li>

            `
            return accumulator;

        }, '')

        // console.log(lisPokemons);

    })
    .then(pokemons => {
        

        const ul = document.querySelector('[data-js="pokedex"]')

        ul.innerHTML = lisPokemons;

    })

};

fetchPokemon();