"use strict";

const getAPIindex = pokemon => {
  const {
    abilities,
    name,
    height,
    weight,
    forms,
    types,
    base_experience,
    sprites
  } = pokemon;
  let infoPokemons = document.getElementById("pokemonInfo");
  const pokemons = document.createElement("div");
  pokemons.classList.add("col-md-4");
  pokemons.innerHTML = "\n    <div class=\"card mb-3 mt-4\">\n        <div class=\"face front\">\n            <img src=\"".concat(sprites.other["official-artwork"].front_default, "\" class=\"card-img-top\" alt=\"...\">\n            <h3 class=\"card-title\"><strong>").concat(name, "</strong></h3>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"face back\">\n            <h5 class=\"card-title\"><strong>").concat(name, "</strong></h5>\n            <p class=\"card-text\"><strong>Experiencia:</strong> ").concat(base_experience, " <br/>\n            <strong>Peso:</strong> ").concat(weight, " <br/>\n            <strong>Altura:</strong> ").concat(height, " <br/>\n            <strong>Habilidades:</strong> ").concat(abilities[0].ability.name, " y ").concat(abilities[1].ability.name, " <br/>\n            <strong>Tipos:</strong> ").concat(types[0].type.name, " <br/>\n            <strong>Formas:</strong> ").concat(forms[0].name, " \n            </p>            \n            </div>\n        </div>\n    </div>\n        ");
  infoPokemons.append(pokemons);
};
const obtenerPokemons = Array.from({
  length: 67
}, (_, i) => "https://pokeapi.co/api/v2/pokemon/".concat(i + 1));
let currentPage = 1;
const pokemonsPerPage = 9;
const conectarAPI = api => {
  const totalPages = Math.ceil(api.length / pokemonsPerPage);
  const renderPokemons = page => {
    const start = (page - 1) * pokemonsPerPage;
    const end = start + pokemonsPerPage;
    const currentPagePokemons = api.slice(start, end);
    infoPokemons.innerHTML = ''; // Limpiar los pokemons anteriores
    currentPagePokemons.map(pokemonUrl => {
      fetch(pokemonUrl).then(respuesta => {
        if (!respuesta.ok) {
          throw new Error("La solicitud fall\xF3 con el c\xF3digo de estado ".concat(respuesta.status));
        }
        return respuesta.json();
      }).then(pokemon => {
        getAPIindex(pokemon);
      }).catch(error => {
        console.error('Error al realizar la solicitud:', error);
      });
    });
  };
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
    pageLink.addEventListener("click", event => {
      event.preventDefault();
      currentPage = i;
      renderPokemons(currentPage);
      conectarAPI(obtenerPokemons);
      renderPokemons;
    });
    paginationContainer.appendChild(pageLink);
  }
};
const infoPokemons = document.getElementById("pokemonInfo"); // Agregué esta línea
const paginationContainer = document.getElementById("pagination"); // Agregué esta línea
conectarAPI(obtenerPokemons);
