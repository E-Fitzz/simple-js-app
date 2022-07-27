// ----- pokedex JavaScript project ----- //

let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    let modalContainer = document.querySelector('#modal-container');

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
    // ----- adds specific details and image to the item
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
        showModal(pokemon);
    });
};

function showModal(pokemon) {

    modalContainer.innerHTML = '';

// ----- creates the modal div
    let modal = document.createElement('div');
    modal.classList.add('modal');
    
// ----- creates the close button
    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'x';
    closeButtonElement.addEventListener('click', hideModal);

// ----- creates the h1 element with the added text    
    let titleElement = document.createElement('h1');
    titleElement.innerText = pokemon.name;

// ----- creates the p element with the added text    
    let heightElement = document.createElement('p');
    heightElement.innerHTML = 'Height: ' + pokemon.height;

// ----- creates the img element and adds the image from the source    
    let imgElement = document.createElement('img');
    imgElement.src = pokemon.imageUrl;
    imgElement.classList.add('pokemon-image');

    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(heightElement);
    modal.appendChild(imgElement);
    modalContainer.appendChild(modal);

    modalContainer.classList.add('is-visible');
}

// ----- removes modal on click
function hideModal() {
  modalContainer.classList.remove('is-visible');
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
    hideModal();
    }
});

modalContainer.addEventListener('click', (e) => {
  // prevents the modal from closing on click and only closes
  // when clicking the overlay outside of the modal
  let target = e.target;
  if (target === modalContainer) {
    hideModal();
  }
});

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