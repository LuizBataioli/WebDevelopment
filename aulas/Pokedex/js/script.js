const pokemonName = document.querySelector('.pokemon_name');
const pokemonNumber = document.querySelector('.pokemon_number');
const pokemonImage = document.querySelector('.pokemon__image');
const pokemonWeight = document.querySelector('.pokemon_peso');
const pokemonType = document.querySelector('.pokemon_tipo');
const pokemonSound = document.querySelector('.pokemon_sound');
const backgroundAudio = document.querySelector('.background_audio')

const form = document.querySelector('.form');
const input = document.querySelector('.input_search');
const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');

let searchPokemon = 1;
backgroundAudio.volume = 0.1;

const fetchPokemon = async(pokemon) => {
    //Await faz ao código esperar a resposta da API para seguir para as proximas linhas
    //Só funciona em funções assincronas por isso o uso da tag async

    //faz a busca dentro da API
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if(APIResponse.status == 200){
      //metodo json para extrair os dados em json da API
    const data = await APIResponse.json();
    console.log(data)
    return data; 

    }
}

// Nova função para lidar com a busca alternativa
const fetchAlternativeData = async() => {
    // Aqui você pode buscar de outra fonte. Vamos usar um exemplo fixo.
    return {
        name: 'Tata',
        id: '1026',
        image: pokemonImage.src ='./icone/tata.png',
        weight: pokemonWeight.innerHTML = '100 kg',
        type: pokemonType.innerHTML = 'Miau',
        sound: pokemonSound.src = './audio/miau2.mp3'
    };
}


//Função para renderizar as informações do pokemon que queremos
const renderPokemon = async(pokemon) => {

    pokemonName.innerHTML = 'Loading...'
    pokemonNumber.innerHTML = '';
    
    let data;

    if(pokemon === 'tata'){
        data = await fetchAlternativeData();
    }else{
        data = await fetchPokemon(pokemon);
    }
    
    if(data){
    pokemonName.innerHTML = data.name
    pokemonNumber.innerHTML = data.id
    //src pois este é o da imagem do pokemon
    //faz a busca da imagem na API
    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    input.value = '';
    searchPokemon = data.id;

    pokemonSound.src = data['cries']['latest'];
    pokemonSound.volume = 0.5

    pokemonWeight.innerHTML = data.weight / 10 + ' kg';  // Peso em kg
    pokemonType.innerHTML = data.types.map(type => type.type.name).join(', ');

    }else{
        pokemonImage.style.display = 'none';
        pokemonName.innerHTML = 'Not found';
        pokemonNumber.innerHTML = '';
    }

    
}

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    
    renderPokemon(input.value.toLowerCase());
    
});

buttonPrev.addEventListener('click', () =>{
    if(searchPokemon > 1){
    searchPokemon -= 1
    renderPokemon(searchPokemon)
    }
});

buttonNext.addEventListener('click', () =>{
    searchPokemon += 1
    renderPokemon(searchPokemon)
})

renderPokemon(searchPokemon);