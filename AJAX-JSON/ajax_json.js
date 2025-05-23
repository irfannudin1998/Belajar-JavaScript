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
// const tombolCari = document.querySelector('#cariPokemon');
// tombolCari.addEventListener("click",()=>{
//     const hasilData = document.getElementById("namapokemon").value;
//     axios.get(`http://pokeapi.co/api/v2/pokemon/${hasilData}`).then((res)=>{
//     console.log(res)
//     document.getElementById('gambarPokemon').src = res.data.sprites.front_default
//     document.getElementById('gambarPokemon').style.display = "block"

// }).catch((error)=>{
//     console.error(error)
// });})


/*melakukan request mengunakan library axios dan menggunakan headers*/
// http header : accept
// accept adalah http header yang digunakan untuk memberitahu fotmat data apa yang kita inginkan.
// jika server memiliki atau mendukung format data yang diminta maka server akan memberikan, jika server tidak mendukung atau tidak memiliki maka server akan menolak permintaan
// tidak direkomendasikan menggunakan url yang memiliki buntut belakang, contohnya /api/product.json (.json ini tidak direkomendasikan)
// lebih baik nanti diminta / disematkan di header.(contoh : application/json)

// const br = document.createElement("br");
// const ol = document.createElement("ol");
// const tombol = document.createElement("button");
// const H3 = document.querySelector("h3");
// H3.appendChild(br);
// H3.appendChild(tombol);
// H3.appendChild(ol);
// tombol.textContent = "Tombol Jokes"; 
// tombol.style.marginTop = "20px";

// const getJoke = async()=>{
//     const config = {
//         Headers: {
//             accept: "application/json",
//         },
//     };
//     const res = await axios.get("https://icanhazdadjoke.com/", config);
//     console.log(res.data);
// }

const tombol = document.querySelector("button")
tombol.addEventListener("click", async ()=>{
    document.querySelectorAll("img").forEach((img) => img.remove())
    const data = document.querySelector("#namapokemon").value
    const keyword = data;
    const config = {
        params: {q:keyword}
    }
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    posterfilm(res.data);
})
const posterfilm = (show)=>{
        for(let x of show){
        if(x.show.image){
            const gambar = document.createElement('img');
            gambar.src = x.show.image.medium;
            document.body.appendChild(gambar);
        }
        }
}
