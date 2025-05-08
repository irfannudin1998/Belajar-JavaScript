// (pengertian DOM)
// document object model = dom memungkinkan kita untuk mengubah struktur, isi, atau document tersebut melalui javascript

// document
// console.log(document);

// document property
// console.log(document.body);
// console.log(document.title);
// console.log(document.images);
// console.log(document.contentType);

// document method
// const attackiing = document.getElementById('attack');
// console.log(attackiing);


// (Node)
// const badan = document.getElementById('body');
// console.log(badan);
// const attack = document.getElementById('attack');
// console.log(attack);
// console.log(document.body);

/* node property */
// const list = document.getElementById("list");
// console.log(list);
// console.log(list.children);
// console.log(list.childNodes);
// console.log(list.textContent);

/*node method*/
// const list = document.getElementById("list");
// list.removeChild(document.getElementById("dua"));

/* element */
// const empat = document.getElementById("empat");
// empat.textContent = "fourth"

/* element property */
// const list = document.getElementById("list");
// console.log(list.tagName);
// console.log(list.id);
// console.log(list.className);

/* cara memilih suatu element berdasarkan id, tag, dan class*/

// const tambahClass = document.getElementById("list");
// tambahClass.classList.add("kumpulanClass");
// const kumpulanClass1 = document.getElementsByClassName("kumpulanClass");
// const tambahClass2 = document.getElementById("satu");
// tambahClass2.style.backgroundColor = "tomato";
// document.getElementById("dua").classList.add("list2");
// const listKedua = document.getElementsByClassName("list2")[0];
// console.log(listKedua);
// listKedua.textContent = "ini dibuat dari class yang berasal dari js"
// const listKetiga = document.getElementsByTagName("li")[2];
// console.log(listKetiga);
// listKetiga.style.backgroundColor = "grey"


/* cara memilih element menggunakan querry selector */

// querySelector adalah paket lengkap dari getElementbyId, getElementsByClass, getElementsByTagName bahkan bisa memilih suatu type dari suatu tag.
// const kumpulanClass = document.querySelector('#list');
// console.log(kumpulanClass);
// document.querySelector('#satu').classList.add('listSatu');
// const listPertama = document.querySelector('.listSatu');
// listPertama.textContent = "ini hasil pemilihan element menggunakan queryselector class"
// const listKedua = document.querySelectorAll('li')[1];
// // queryselector yang biasa hanya akan mengarah pada element pertama saja, jika queryselectorAll kita bisa menentukan yang mana yang mau kita pilih dengan menentukan indexnya.
// listKedua.style.backgroundColor = 'tomato';

/*memahami innerHtml, Innertext dan TextContent */

// const tubuh = document.querySelector('body');
// console.log(tubuh.innerText);
// console.log(tubuh.textContent);
// console.log(tubuh.innerHTML);

// const gantiH1 = document.querySelector('p');
// gantiH1.textContent = "ini <b>diganti</b> dengan javascript";
// gantiH1.innerText = "ini <b>diganti</b> dengan javascript";
// gantiH1.innerHTML = "ini <b>diganti</b> dengan javascript";

/* melakukan style dengan javascript */
// const links = document.querySelectorAll("a");

// for(let link of links){
// link.style.color = "black";
// link.style.textDecoration = "none";
// link.style.fontStyle = "italic";
// };

/* cara menangkap sibling, children, previouselementsibling dll */
// const link = document.querySelector("a");
// const parentA = link.parentElement;
// parentA.style.backgroundColor = "blue";
// const list = document.querySelector("ul");
// const anak2 = list.children[2];
// console.log(anak2);
// anak2.style.fontSize = "9em";
// anak2.previousElementSibling.style.fontFamily = "snap ITC"

/* memahami append dan appendchild */
// const hariPendidikan = document.createElement("img");
// hariPendidikan.src = "https://rsurembang.co.id/wp-content/uploads/2024/05/hari-pendidikan-nasional-819x1024.jpg";
// hariPendidikan.alt = "selamat hari pendidikan nasional";
// hariPendidikan.style.width = "100%";
// hariPendidikan.style.padding = "20px 0 20px 0"
// // document.body.appendChild(hariPendidikan); /* appendChild akan menambahkan elemen di akhir semua element, jika ingin menambahkan elemennya di antara element, kita gunakan insertAdjacentElement */
// const ul = document.querySelector('ul');
// ul.insertAdjacentElement("afterbegin",hariPendidikan);

/* memahami remove dan removeChild */
// const kumpulanList = document.querySelector("ul");
// kumpulanList.removeChild(document.querySelectorAll("li")[3])

/* latihan memanggil pokemon dengan DOM */
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png


// const tempatGambar = document.getElementById("tempatPokemon");
// const pokemon = document.createElement("img");
// const tombolPokemon = document.querySelectorAll("button")[2];

// function UndianPokemon(){
//     let nomorPokemon = Math.floor(Math.random()*1000);
//     pokemon.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${nomorPokemon}.png`;
//     return nomorPokemon
// };
// tombolPokemon.addEventListener("click", UndianPokemon);


// pokemon.style.placeSelf = "center";
// tempatGambar.appendChild(pokemon);

/* membuat daftar pokemon yang bisa didapatkan dari gachanya */
// const beragamPokemon = document.createElement("h4");
// const body = document.querySelector("body");
// beragamPokemon.innerText = "Ini adalah daftar Pokemon yang akan anda dapatkan !"
// // body.style.display = "grid";
// beragamPokemon.style.placeSelf = "center";
// body.appendChild(beragamPokemon);

// const ragamPokemon = document.createElement("img");


// for(i = 1; i <= 1000; i++){
//  const ragamPokemon = document.createElement("img");
//  const container = document.createElement("div")
//  const label = document.createElement("span");
//  label.innerText = `#${i}`;
//  ragamPokemon.style.display = "flex"
//  ragamPokemon.style.flexDirection = "row"
// // ragamPokemon.style.display = "block";
//  body.appendChild(container);
//  container.appendChild(ragamPokemon);
//  container.appendChild(label);
//  ragamPokemon.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
// }

/* addEventListener */

// const sentuhSaya = document.createElement('h1');
// sentuhSaya.innerText = "SENTUH SAYA";
// sentuhSaya.style.color = "green";
// sentuhSaya.style.backgroundColor = "yellow";
// sentuhSaya.style.fontFamily = "gotham";
// sentuhSaya.style.width = "234px";
// sentuhSaya.style.placeSelf = "center";
// let sentuh = ()=>{sentuhSaya.innerText = "BERANI SEKALI ANDA SENTUH SAYA!!!";
//     sentuhSaya.style.color = "red";
//     sentuhSaya.style.backgroundColor = "black";
// }
// let mendekati = ()=> {sentuhSaya.innerText = "JANGAN SAMPAI KAMU BERANI CLICK SAYA!!!";
//     sentuhSaya.style.color = "yellow";
//     sentuhSaya.style.backgroundColor = "red";
// };
// const body = document.querySelector("body");
// body.appendChild(sentuhSaya);
// sentuhSaya.addEventListener("click", sentuh);
// sentuhSaya.addEventListener("mouseover", mendekati);

/* memanfaatkan keyword "this" pada event DOM */

// const h3BergantiWarna = document.querySelector(".gantiWarna");

// function rgbAcak(){
//     let r = Math.floor(Math.random()*225);
//     let g = Math.floor(Math.random()*225);
//     let b = Math.floor(Math.random()*225);
//     return `rgb(${r},${g},${b})`;
// };

// const button = document.querySelectorAll("button");
// // button.style.height = "100px";
// function mengubahwarna(){
//     this.style.backgroundColor = rgbAcak();
//     this.style.color = "white";
// }
// for (let x of button){
// x.addEventListener("click", mengubahwarna);
// };

// const mengubahwarna = ()=>{
//     this.style.backgroundcolor = rgbAcak();
//     this.style.color = rgbAcak();
// };

/* addEventListener() menggunakan keyboard */
// const input = document.createElement("input");
// const tombol = document.querySelectorAll("button")[3];
// tombol.appendChild(input);

// function color(){
//     let r = Math.floor(Math.random()*255);
//     let g = Math.floor(Math.random()*255);
//     let b = Math.floor(Math.random()*255);
// return `rgb(${r},${g},${b})`;
// };

// input.addEventListener("keydown",(e)=>{
//  console.log(e.code)
//     if (e.code === 'Space'){
//         tombol.style.backgroundColor = color();
//         console.log(color())
//     }
// })

/* event preventdefault */
// berguna semisal jika kita ingin membuat suatu website yang memasukkan data tanpa harus pergi ke website default dari suatu elemet

// const form = document.createElement("form");
// form.action = "/destination";
// form.style.padding = "20px"
// const input = document.createElement("input");
// input.type = "text";
// form.appendChild(input);
// const button = document.createElement("button");
// button.innerText = "Submit";
// form.appendChild(button);
// document.querySelector("body").appendChild(form);

// form.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     console.log(e);
// })

/* praktek input realtime dari preventdefault */

// const form = document.createElement("form");
// form.action = "/destination";
// form.style.padding = "20px"
// const label = document.createElement("label")
// label.htmlFor = "nama_pelanggan";
// label.innerText = "Nama Pelanggan : "
// form.appendChild(label)
// const input = document.createElement("input");
// input.type = "text";
// input.name = "nama_pelanggan"
// form.appendChild(input);
// const button = document.createElement("button");
// button.innerText = "Submit";
// form.appendChild(button);
// document.querySelector("body").appendChild(form);
// const kumpulanList = document.createElement("ol");
// kumpulanList.style.listStyleType = "lowerAlpha";
// document.querySelector("body").appendChild(kumpulanList);

// form.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     const inputValue = input.value;
//     const createList = document.createElement("li");
//     createList.innerText = inputValue;
//     kumpulanList.append(createList);
//     input.value = "";
// })

/* cara mengatasi event bubbling */

// const bersembunyi = document.querySelector("p");
// const bergantiwarna = document.querySelector("b");

// bersembunyi.addEventListener("click",()=>{
    
//     bersembunyi.classList.toggle("hide")
//     console.log("aku ditekan")
// });
// bergantiwarna.addEventListener('click',(e)=>{
//     bergantiwarna.style.backgroundColor = color();
// e.stopPropagation();
// })

// function color(){
//         let r = Math.floor(Math.random()*255);
//         let g = Math.floor(Math.random()*255);
//         let b = Math.floor(Math.random()*255);
//     return `rgb(${r},${g},${b})`;
//     };
