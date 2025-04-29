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

const tambahClass = document.getElementById("list");
tambahClass.classList.add("kumpulanClass");
const kumpulanClass1 = document.getElementsByClassName("kumpulanClass");
const tambahClass2 = document.getElementById("satu");
tambahClass2.style.backgroundColor = "tomato";
document.getElementById("dua").classList.add("list2");
const listKedua = document.getElementsByClassName("list2")[0];
console.log(listKedua);
listKedua.textContent = "ini dibuat dari class yang berasal dari js"
const listKetiga = document.getElementsByTagName("li")[2];
console.log(listKetiga);
listKetiga.style.backgroundColor = "grey"
