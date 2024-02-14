


const getAPIindex = (abilities, name, height, weight, forms, types, base_experience, sprites) => {

    let infoPokemons= document.getElementById("pokemonInfo");
    const pokemons = document.createElement("div");
    pokemons.classList.add("col-md-4");
    pokemons.innerHTML = `
    <div class="card border-light mb-3 mt-4">
        <div class="face front">
            <img src="${sprites.other["official-artwork"].front_default}" class="card-img-top" alt="...">
            <h3 class="card-title"><strong>${name}</strong></h3>
        </div>
        <div class="card-body">
            <div class="face back">
            <h5 class="card-title"><strong>${name}</strong></h5>
            <p class="card-text">Experiencia: ${base_experience} <br/>
            Peso: ${weight} <br/>
            Altura: ${height} <br/>
            Habilidades: ${abilities[0].ability.name} y ${abilities[1].ability.name} <br/>
            Tipos: ${types[0].type.name} <br/>
            Formas: ${forms[0].name} 
            </p>            
            </div>
        </div>
    </div>
        `;
    //console.log(`ID: ${pokemon.id}, Nombre: ${pokemon.name}, Experiencia: ${pokemon.base_experience}, Altura: ${pokemon.height}, Peso: ${pokemon.weight}`);
    // infoPokemons.textContent = `ID: ${pokemon.id}, Nombre: ${pokemon.name}, Experiencia: ${pokemon.base_experience}, Altura: ${pokemon.height}, Peso: ${pokemon.weight}`;
    infoPokemons.append(pokemons);

}

const obtenerPokemons = Array.from({length: 100}, (_, i) => `https://pokeapi.co/api/v2/pokemon/${i + 1}`);

const conectarAPI = (api) => {

    api.map(pokemon => {
        fetch(pokemon).then(respuesta => {
            if (!respuesta.ok) {
            throw new Error(`La solicitud falló con el código de estado ${respuesta.status}`);
            }
            return respuesta.json();
        })
        .then(({abilities, name, height, weight, forms, types, base_experience, sprites} = pokemon) => {
            //console.log(pokemon);
            getAPIindex(abilities, name, height, weight, forms, types, base_experience, sprites);
            
        })
        .catch(error => {
            console.error('Error al realizar la solicitud:', error);
        })

    })
}

conectarAPI(obtenerPokemons);