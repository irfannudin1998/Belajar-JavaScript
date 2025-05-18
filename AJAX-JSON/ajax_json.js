// document.body.textContent = "ini latihan ajax dan json"
// fetch('http://swapi.dev/api/people/4')

/*fetch data dari API*/
// fetch('http://pokeapi.co/api/v2/pokemon/elekid')
//     .then(response => {
//         if(!response.ok){
//             throw new Error("Mungkin pokemon yang anda cari salah ketik")
//         } else { return response.json()}
//     })
//     .then(data => console.log(data))
//     .catch(Error => console.log(Error));
/*menggunakan async function*/


dataApi();
async function dataApi() {
    try{
        const hasilData = document.querySelector('#namapokemon');
        const tombolCari = document.querySelector('#cariPokemon');
        const response = await fetch('http://pokeapi.co/api/v2/pokemon/pikachu')
        if(!response.ok){
            throw new Error('data yang kamu cari tidak ada atau typo')
        }
            const data = (await response).json();
            console.log(data)
        
    }
    catch(Error){
        console.error(Error)
    }
}