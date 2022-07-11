//pokedex JavaScript project

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

//loop for pokemonList that iterates their items
for (let i=0; i<pokemonList.length; i++) {
    //adds text for any pokemon under a height of 1.0
    if (pokemonList[i].height <1 && pokemonList[i].height >0){
      document.write('<p>' + pokemonList[i].name + ' - height: ' + pokemonList[i].height + " (That\'s just a little guy)");
    //adds text for any pokemon over a height of 4.0
    }else if (pokemonList[i].height>4){
      document.write('<p>' + pokemonList[i].name + ' - height: ' + pokemonList[i].height + " (That\'s one chonky boi)");
    //no extra text for any pokemon between a height of 1.0 and 3.0
    }else {
      document.write('<p>' + pokemonList[i].name + ' - height: ' + pokemonList[i].height + " ");
    }
  }