//pokedex JavaScript project
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
          type: ['fire', 'flying']
      },
      {
          name: 'Geodude',
          height: '1.4',
          type: ['rock', 'ground']
      },
      {
          name: 'Diglet',
          height: '0.8',
          type: 'ground'
      }
];

return {
  add: function(pokemon) {
     pokemonList.push(pokemon); 
  },
  getAll: function() {
      return pokemonList;
  }
};
})();



//loop for pokemonList that iterates their items
pokemonList.forEach(function (pokemon){
  //adds text for any pokemon under a height of 1.0
  if (pokemon.height <1 && pokemon.height >0) {
    document.write('<p>' + pokemon.name + ' - height: ' + pokemon.height + " (That\'s just a little guy)");
    console.log(pokemon.name + ' - height: ' + pokemon.height + " (That\'s just a little guy)");

  //adds text for any pokemon over a height of 4.0
  }else if (pokemon.height>4){
    document.write('<p>' + pokemon.name + ' - height: ' + pokemon.height + " (That\'s one chonky boi)");
  //no extra text for any pokemon between a height of 1.0 and 3.0
  }else {
    document.write('<p>' + pokemon.name + ' - height: ' + pokemon.height + " ");
  }
});

console.log(pokemonRepository.getAll());
pokemonRepository.add({ name: 'Rattata' });
console.log(pokemonRepository.getAll());