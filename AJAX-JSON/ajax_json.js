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

// const tombolCari = document.querySelector('#cariPokemon');

// tombolCari.addEventListener("click",dataApi)


// async function dataApi() {
//     try{
//         // const gambar = document.querySelector("#gambarPokemon");
//         const hasilData = document.getElementById("namapokemon").value;
//         const response = await fetch(`http://pokeapi.co/api/v2/pokemon/${hasilData}`)
//         if(!response.ok){
//             throw new Error('data yang kamu cari tidak ada atau typo')
//         }
//             const data = await response.json();
//             document.getElementById("gambarPokemon").style.display = "block";
//             document.getElementById("gambarPokemon").style.height = "100px"
//             document.getElementById("gambarPokemon").style.width = "100px"
//             document.getElementById("gambarPokemon").src = data.sprites.front_default
            
           
        
//     }
//     catch(Error){
//         console.error(Error)
//     }
// }

/* melakukan request dengan library axios */
const tombolCari = document.querySelector('#cariPokemon');
tombolCari.addEventListener("click",()=>{
    const hasilData = document.getElementById("namapokemon").value;
    axios.get(`http://pokeapi.co/api/v2/pokemon/${hasilData}`).then((res)=>{
    console.log(res)
    document.getElementById('gambarPokemon').src = res.data.sprites.front_default
    document.getElementById('gambarPokemon').style.display = "block"

}).catch((error)=>{
    console.error(error)
});})


