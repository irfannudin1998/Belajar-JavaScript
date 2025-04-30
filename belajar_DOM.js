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
const kumpulanList = document.querySelector("ul");
kumpulanList.removeChild(document.querySelectorAll("li")[3])