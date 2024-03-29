const getAPIindex = (pokemon) => {
    const { abilities, name, height, weight, forms, types, base_experience, sprites } = pokemon;
    let infoPokemons = document.getElementById("pokemonInfo");
    const pokemons = document.createElement("div");
    pokemons.classList.add("col-md-4");
    pokemons.innerHTML = `
    <div class="card mb-3 mt-4">
        <div class="face front">
            <img src="${sprites.other["official-artwork"].front_default}" class="card-img-top" alt="...">
            <h3 class="card-title"><strong>${name}</strong></h3>
        </div>
        <div class="card-body">
            <div class="face back">
            <h5 class="card-title"><strong>${name}</strong></h5>
            <p class="card-text"><strong>Experiencia:</strong> ${base_experience} <br/>
            <strong>Peso:</strong> ${weight} <br/>
            <strong>Altura:</strong> ${height} <br/>
            <strong>Habilidades:</strong> ${abilities[0].ability.name} y ${abilities[1].ability.name} <br/>
            <strong>Tipos:</strong> ${types[0].type.name} <br/>
            <strong>Formas:</strong> ${forms[0].name} 
            </p>            
            </div>
        </div>
    </div>
        `;
    infoPokemons.append(pokemons);
}

const obtenerPokemons = Array.from({ length: 67 }, (_, i) => `https://pokeapi.co/api/v2/pokemon/${i + 1}`);

let currentPage = 1;
const pokemonsPerPage = 9;

const conectarAPI = (api) => {
    const totalPages = Math.ceil(api.length / pokemonsPerPage);

    const renderPokemons = (page) => {
        const start = (page - 1) * pokemonsPerPage;
        const end = start + pokemonsPerPage;
        const currentPagePokemons = api.slice(start, end);
        infoPokemons.innerHTML = ''; // Limpiar los pokemons anteriores
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
    paginationContainer.innerHTML = ''; // Limpiar la paginación anterior
    for (let i = 1; i <= totalPages; i++) {
        const pageLink = document.createElement("a");
        pageLink.href = "#";
        pageLink.textContent = i;
        if (i === currentPage) {
            pageLink.classList.add("active");
        }
        pageLink.addEventListener("click", (event) => {
            event.preventDefault();
            currentPage = i;
            renderPokemons(currentPage);
            conectarAPI(obtenerPokemons);
            renderPokemons;
        });
        paginationContainer.appendChild(pageLink);
    }
}

const infoPokemons = document.getElementById("pokemonInfo"); // Agregué esta línea
const paginationContainer = document.getElementById("pagination"); // Agregué esta línea
conectarAPI(obtenerPokemons);
