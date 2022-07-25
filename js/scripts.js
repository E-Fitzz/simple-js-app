// ----- pokedex JavaScript project ----- //

let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

function add(pokemon) {
    if (
        typeof pokemon === "object" &&
        "name" in pokemon
    ) {
        pokemonList.push(pokemon);
    } else {
        console.log("Pokémon not found");
    }
}

function getAll() {
    return pokemonList;
};

function addListItem(pokemon){
    let pokemonList = document.querySelector(".pokemon-list");
    // ----- creates <li> using JS
    let listpokemon = document.createElement("li");
    // ----- turns <li> into buttons
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    // ----- adds CSS to the buttons
    button.classList.add("button-class");
    // ----- makes buttons out of pokémon items
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener('click', function() {
        showDetails(pokemon);
    });
};

// ----- fetches data from the API
function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        console.log(pokemon);
      });
    }).catch(function (e) {
        console.error(e);
    })
}

// ----- loads detailed data for pokémon
function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
        return response.json();
    }).then(function (details) {
    // ----- adds specific details to the item
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
    }).catch(function (e) {
        console.error(e);
});
}

// ----- logs pokémon info to the console on click
function showDetails(pokemon) {
    pokemonRepository.loadDetails(pokemon).then(function (){
        console.log(pokemon);
    });
};

return {
    add: add,
    getAll: getAll,
    addListItem:addListItem,
    loadList: loadList,
    loadDetails:loadDetails,
    showDetails:showDetails
    };
})();

// ----------------- //

pokemonRepository.loadList().then(function() { 
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
     });
});