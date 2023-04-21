const name_pokemon = document.querySelector('#name-pokemon');
const btn = document.querySelector('#btn');

const name_label = document.querySelector('#name-label');
const type_label = document.querySelector('#type-label');
const weight_label = document.querySelector('#weight-label');
const img = document.querySelector('#image');
const height_label = document.querySelector('#height-label');



async function getPokemon(pokemonName) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    if (!response.ok) {
      throw new Error(`Error fetching data for ${pokemonName}: ${response.status}`);
    }
    const data = await response.json();
    return data;
  }
  
  async function displayPokemonData(pokemonName) {
    try {
      const data = await getPokemon(pokemonName);
      name_label.textContent = `Name: ${data.name}`;
      type_label.textContent = `Type: ${data.types[0].type.name}`;
      weight_label.textContent = `Weight: ${data.weight} kg`;
      height_label.textContent = `Height: ${data.height}`;
      img.src = `${data.sprites.front_default}`;

    } catch (error) {
      console.error(error.message);
    }
  }
 

btn.addEventListener('click', (e) =>{
    e.preventDefault();
    let pokename = name_pokemon.value;
    const pokelower = pokename.toLowerCase()
    setTimeout(() => {
        displayPokemonData(`${pokelower}`);
    }, 2000);   
})


