//pokedex JavaScript project

// ----- IIFE ----- //
let pokemonRepository = (function(){
    let pokemonList = [
        {
            name: 'Rattata',
            height: '1',
            type: 'normal'
        },
        {
            name: 'Charizard',
            height: '5.7',
            type: ['fire', ' flying']
        },
        {
            name: 'Geodude',
            height: '1.4',
            type: ['rock', ' ground']
        },
        {
            name: 'Diglet',
            height: '0.8',
            type: 'ground'
        }
];
  
// ----- adds the list to the document
function add(pokemon) {
    repository.push(pokemon);
};

function getAll() {
    return pokemonList;
};

// ----- logs pokémon info to the console
function showDetails(pokemon) {
    console.log(pokemon);
};

function addListItem(pokemon){
    let pokemonList = document.querySelector(".pokemon-list");
    // ----- creates <li> using JS
    let pokemonListItem = document.createElement("li");
    // ----- turns <li> into buttons
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    // ----- adds CSS to the buttons
    button.classList.add("button-class");
    // ----- makes buttons out of full array
    pokemonListItem.appendChild(button);
    pokemonList.appendChild(pokemonListItem);
    button.addEventListener('click', function() {
        showDetails(pokemon);
    });
};

return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
};
})();
// ----------------- //

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
});