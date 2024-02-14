const getAPIindex = (pokemon) => {
    const { abilities, name, height, weight, forms, types, base_experience, sprites } = pokemon;
    let infoPokemons = document.getElementById("pokemonInfo");
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
    infoPokemons.append(pokemons);
}

const obtenerPokemons = Array.from({ length: 100 }, (_, i) => `https://pokeapi.co/api/v2/pokemon/${i + 1}`);

let currentPage = 1;
const pokemonsPerPage = 12;

const conectarAPI = (api) => {
    const totalPages = Math.ceil(api.length / pokemonsPerPage);

    const renderPokemons = (page) => {
        const start = (page - 1) * pokemonsPerPage;
        const end = start + pokemonsPerPage;
        const currentPagePokemons = api.slice(start, end);
        currentPagePokemons.map(pokemonUrl => {
            fetch(pokemonUrl)
                .then(respuesta => {
                    if (!respuesta.ok) {
                        throw new Error(`La solicitud falló con el código de estado ${respuesta.status}`);
                    }
                    return respuesta.json();
                })
                .then(pokemon => {
                    getAPIindex(pokemon);
                })
                .catch(error => {
                    console.error('Error al realizar la solicitud:', error);
                })
        })
    }

    renderPokemons(currentPage);

    const paginationContainer = document.getElementById("pagination");
    const prevButton = document.createElement("button");
    prevButton.textContent = "Anterior";
    prevButton.addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            renderPokemons(currentPage);
        }
    });

    const nextButton = document.createElement("button");
    nextButton.textContent = "Siguiente";
    nextButton.addEventListener("click", () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderPokemons(currentPage);
        }
    });

    paginationContainer.appendChild(prevButton);
    paginationContainer.appendChild(nextButton);
}

conectarAPI(obtenerPokemons);
