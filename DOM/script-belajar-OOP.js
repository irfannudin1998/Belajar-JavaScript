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
// class BossMonster {
//     name = 'dragonKing';
//     spesies = 'dragon';
//     hp = 10000;
//     mp = 10000;
// };

// class Player extends BossMonster {
//     name = 'player01';
//     spesies = 'human';
//     constructor(hp,mp){
//         super(hp,mp);
//     }
// };

// const boss = new BossMonster();
// const player = new Player();

// // Fungsi untuk aksi pemain dan boss
// function myAttack() {
//     const playerAttack = Math.random() * 1000;
//     const bossAction = bossMove();
//     battle(playerAttack, bossAction);
//     console.log(`Player HP: ${player.hp}, Player MP: ${player.mp}/n Boss HP: ${boss.hp}, Boss MP: ${boss.mp}`);
// }

// function myDefence() {
//     const playerDefence = Math.random() * 1000;
//     const bossAction = bossMove();
//     battle(playerDefence, bossAction, true);
//     console.log(`Player HP: ${player.hp}, Player MP: ${player.mp}/n Boss HP: ${boss.hp}, Boss MP: ${boss.mp}`);
// }

// function bossMove() {
//     return Math.random() * 1000; // Nilai serangan/bertahan boss
// }

// function battle(playerValue, bossValue, isDefending = false) {
//     if (isDefending) {
//         if (playerValue < bossValue) {
//             player.hp -= 100;
//             player.mp -= 100;
//         } else {
//             boss.mp -= 100;
//         }
//     } else {
//         if (playerValue < bossValue) {
//             player.hp -= 100;
//             player.mp -= 100;
//             boss.mp -= 100;
//         } else {
//             boss.hp -= 100;
//             boss.mp -= 100;
//             player.mp -= 100;
//         }
//     }
// }


// document.getElementById('attack').addEventListener("click", myAttack);
// document.getElementById('defend').addEventListener("click", myDefence);

// console.log(player.hp)



// (privat class field)
// 



// (STATIC CLASS FIELD)
// Static class field biasanya digunakan untuk sesuatu yang global, jadi semua bisa menggunakan tanpa peduli tempatnya.
// class Configuration{
//     static name = "irfannudin";
//     static jabatan = "multimedia marketing"
//     static tahunKerja = 4;
// };

// // ini yang salah, karna static class field itu bukan objek dari configuration, tapi konfiguration itu sendiri?

// const karyawan = new Configuration();
// console.log(karyawan.name);
// console.log(karyawan.jabatan);
// console.log(karyawan.tahunKerja);

// // sedangkan ini yang benar, karna langsung menggukan nama class nya tanpa harus mendefinisikan seperti jika kita ingin mengakses objek dari suatu class.

// console.log(Configuration.name);
// console.log(Configuration.jabatan);
// console.log(Configuration.tahunKerja);


// (static method)
// class HitunganMatematika{
//     static hitungSum(...numbers){
//        let total = 0;
//         for(const number of numbers){
//             total += number;
//         };
//         return total;
//     }
// };
// // const sum = HitunganMatematika.hitungSum(1,2,3,4,5,6,7,8,9);
// console.log(HitunganMatematika.hitungSum(9,8,7,6,5,4,3,2,1));



 

// (ERROR CLASS)
// class HitunganMatematika{
//     static hitungSum(...numbers){
//         if(numbers.length === 0){
//             throw new Error("numbers harus bernilai lebih dari 0");
//         } else if (numbers.length === ""){
//             throw new Error("mohon diisi numbersnya dengan angka yang lebih dari 0");
            
//         }
//         let total = 0;
//         for(const number of numbers){
//             total += number;
//         };
//         return total;
//     }
// };
// // const sum = HitunganMatematika.hitungSum(1,2,3,4,5,6,7,8,9);
// console.log(HitunganMatematika.hitungSum(9,8,7,6,5,4,3,2,1));
// console.log(HitunganMatematika.hitungSum());

// (error handling)
// class HitunganMatematika{
//         static hitungSum(...numbers){
//             if(numbers.length === 0){
//                 throw new Error("numbers harus bernilai lebih dari 0");
//             };
            
//             let total = 0;
//             for(const number of numbers){
//                 total += number;
//             };
//             return total;
//         }
//     };

//     try{
//         console.log(HitunganMatematika.hitungSum());
//         console.log('irfan')
//     } catch (Error){
//         console.log(`ada masalah : ${Error.message}`);
//     }
//     const sum = HitunganMatematika.hitungSum(1,2,3,4,5,6,7,8,9);
//     console.log(sum);


// (finally setelah try and catch error)
// finally adalah suatu code untuk try and catch error yang mana akan selalu di eksekusi, entah codenya errormaupun tidak
    
    // class HitunganMatematika{
    //         static hitungSum(...numbers){
    //             if(numbers.length === 0){
    //                 throw new Error("numbers harus bernilai lebih dari 0");
    //             };
                
    //             let total = 0;
    //             for(const number of numbers){
    //                 total += number;
    //             };
    //             return total;
    //         }
    //     };
    
    //     try{
    //         console.log(HitunganMatematika.hitungSum());
    //         console.log('irfan')
    //     } catch (Error){
    //         console.log(`ada masalah : ${Error.message}`);
    //     }finally{
    //         console.log('program tetap berjalan')
    //     }
    //     const sum = HitunganMatematika.hitungSum(1,2,3,4,5,6,7,8,9);
    //     console.log(sum);


    // (class try anad finally)
    // class Menghitung{
    //     #berhitung = 0;
    //     next(){
    //         try{
    //             return this.#berhitung
    //         } finally{
    //             this.#berhitung+= 2;
    //         }
    //     }
    // }
    // const berhitung = new Menghitung();
    // console.log(berhitung.next());
    // console.log(berhitung.next());
    // console.log(berhitung.next());
    // console.log(berhitung.next());
    // console.log(berhitung.next());



