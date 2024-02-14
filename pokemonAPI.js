const consultarPokemon = (url) => {
    fetch(`${url}}`)
    .then(datosPokemon => datosPokemon.json())
    .then(({abilities, name, height, weight, forms, types, base_experience, sprites} = datosPokemon) => {
        console.log(datosPokemon);
            let infoPokemons= document.getElementById("pokemonInfo");
            const pokemons = document.createElement("div");
            pokemons.classList.add("col-md-4");
            pokemons.innerHTML = `
                <div class="card border-light mb-3 mt-4" style="width: 18rem;">
                    <div class="face front">
                    <img src="${sprites.front_default}" class="card-img-top" alt="...">
                    <h3><strong>${name}</strong></h3>
                    </div>
                    <div class="face back">
                        <div class="card-body">
                        <h5 class="card-title"><strong>${name}</strong></h5>
                        <p class="card-text">Experiencia: ${base_experience} <br/>
                        Peso: ${weight} <br/>
                        Altura: ${height} <br/>
                        Peso: ${forms} <br/>
                        Peso: ${types} 
                        </p>
                        </div>
                    </div>
                </div>
                    `;
            console.log(`ID: ${pokemon.id}, Nombre: ${pokemon.name}, Experiencia: ${pokemon.base_experience}, Altura: ${pokemon.height}, Peso: ${pokemon.weight}`);
            // infoPokemons.textContent = `ID: ${pokemon.id}, Nombre: ${pokemon.name}, Experiencia: ${pokemon.base_experience}, Altura: ${pokemon.height}, Peso: ${pokemon.weight}`;
            infoPokemons.append(pokemons);
    }).catch();
}


const consultar_datos = () => {
    const obtenerPokemons = Array.from({length: 100}, (_, i) => `https://pokeapi.co/api/v2/pokemon/${i + 1}`);

    fetch(`${obtenerPokemons}`,{
    // method:'GET'
    }).then(pokemon => pokemon.json())
    .then(({results} = pokemon) => {
        results.map(({url} = ruta) => {
            consultarPokemon(url);
        });
    }).catch(error => console.log(`Error al consumir API: ${error}`));
}

consultar_datos();