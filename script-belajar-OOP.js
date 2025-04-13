// OOP JAVASCRIPT (dari chanel programer zaman now)
// construction function itu nama functionnya huruf pertamanya harus huruf capital
// function Person(){
//     this.firstname = "";
//     this.lastname = "";
// }
// const eko = new Person();
// eko.firstname = "eko";
// eko.lastname = "patrio";
// const budi = new Person();
// budi.firstname = "budi";
// budi.lastname = "bambang yudoyono"
// console.log(eko);
// console.log(budi);


// (pharameter di construction function)
// function Person(firstName, lastName){
//         this.firstname = firstName;
//         this.lastname = lastName;
//         this.sayHello = function(nama){
//             console.log(`halo ${nama}, nama saya ${this.firstname} ${this.lastname}`)
//         }
    
//     }
//     const eko = new Person('eko', 'patrio');
//     eko.sayHello("darmi");
//     const budi = new Person('budi', 'doremi');
//     budi.sayHello("darmi");
//     console.log(eko);
//     console.log(budi);


// (construktion inheritant atau lebih tepatnya mengcopy construction)
// function Pegawai(firstname){
//     this.firstname = firstname;
//     this.sayHello = function(name){
//         console.log(`Hello ${name}, my name is ${firstname}`)
//     }
// }
// function Manager(firstName, lastName){
//     this.lastName = lastName;
//     Pegawai.call(this,firstName);
// }
// const eko = new Manager('eko', 'patrio');
// eko.sayHello('darmi')
// console.info(eko);

// (PROTOTYPE INHERITANCE)
// function Person(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.sayHello = function(nama){
//             console.log(`halo ${nama}, nama saya ${this.firstName} ${this.lastName}`)
//         }
    
//     }
//     Person.prototype.selamatJalan = function (){
//         console.log('selamat tinggal!');
//     }
//     Person.prototype.menyapa = function (){
//         console.log(`${this.firstName} ${this.lastName} sedang menyapa seseorang`);
//     }
//     const eko = new Person('Eko', 'patrio');
//     const budi = new Person('budi', 'doremi');
    

//     console.log(eko);
//     console.log(budi);

//     eko.menyapa();
//     budi.selamatJalan();


// (membuat CLASS constructer) lebih direkomendasikan daripada construction/ inheritance
// class Person {
// constructor (nama){
//     console.log(`halo, nama saya ${nama}`)
// }
// }
// Person.prototype.hallo = function(nama){
// console.log('hallo')
// }
// const eko = new Person ("irfan");
// console.log(eko);
//



// (property di class)
// class Person {
//     constructor (nama){
//         this.name = nama;
//     }
//     }
//     Person.prototype.hallo = function(nama){
//     console.log('hallo')
//     }
//     const eko = new Person ("irfan");
//     console.log(eko);
//     console.log(eko.name)


// (method di class)
// class Person {
//         constructor (nama){
//             this.name = nama;
//         }
//         menyapa(yangDisapa){
//             console.log(`halo ${yangDisapa} nama saya ${this.name}`)
//         }
//  }

//         const penyapa = new Person ("irfan");
//         console.log(penyapa);
//         console.log(penyapa.name);
//         penyapa.menyapa("fajar");



// (class inheritance)
// class Person {
//         menyapa(orangPertama){
//             console.log(`halo ${orangPertama}, nama saya ${this.Person}`)
//         }
//  }
// class Person2 extends Person {
//         menyapa(orangKedua){
//             console.log(`${this.Person} saudara dari ${this.Person2}`)
//         }
//  }

//         const penyapa = new Person ();
//       penyapa.Person = "irfan";
//       penyapa.menyapa("muklis")

//       const memperkenalkan = new Person2 ();
//       memperkenalkan.Person2 = "tauku";
//       memperkenalkan.menyapa("muklis")



// (super constructur )
// class Saudara {
//     constructor(namasaudara){
//         this.nama = namasaudara;
//     }
//     sayhalo(nama){
//         console.log(`halo ${nama}, saya ${this.nama}`);
//     }
// };
// class Dirisendiri extends Saudara{
//     constructor(namasaudara, namasendiri){
//         super(namasaudara);
//         this.Dirisendiri = namasendiri;
//     }
// sayhalo(nama2){
//     console.log(`halo ${nama2}, nama saya ${this.Dirisendiri} saya saudara dari ${this.nama}`);
// }
// }
// const tauku = new Saudara('Tauku');
// tauku.sayhalo('Madun');

// const irfan = new Dirisendiri('tauku','irfan');
// irfan.sayhalo('madun');



// (getter dan setter)
// class Person {
//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     get fullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
//     set fullName(value){
//         const result = value.split(" ");
//         this.firstName = result[0];
//         this.lastName = result[1];
//     }
// }
// const eko = new Person("eko", "khanedy");
// console.log(eko);
// console.log(eko.fullName);





// (PUBLIC CLASS FIELD)
class Person {
    
}
const eko = new Person("eko", "khanedy");
console.log(eko);
console.log(eko.fullName);