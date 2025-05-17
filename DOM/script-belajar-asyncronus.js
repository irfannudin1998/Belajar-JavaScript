// (CALL BACK)
// beberapa contoh async method
// setTimeout(handler,time)
// function menghadirkan(){
//     console.log('saya hadir!!!')
// };
// function memanggil(){
//     console.log("tolong hadirlah!!!")
//     setTimeout(menghadirkan,5000)
// };
// console.log(memanggil());

// setInterval(handler, time)
// function uangBulanan(){
//     console.log("ini uang untuk bulan depan ya!")
// };
// function mintaUang(){
//     console.log('minta uang bulanannya donk pak');
//     setInterval(uangBulanan,2000)
// };

// const meminta = mintaUang();
// console.log(meminta);

// (fungsi call back)fun = yaitu function yang dijadikan argument di function yang lain.(funsi dari callback functio adalah supaya function yang lambat tetap akan dieksekusi duluan sebelum function yang urutannya memang lebih terakhir.)
// function haloKabar(callback){
//      console.log('halo apa kabar!, salam kenal')
//     callback();
// };
// function selamatJalan(){
//     console.log('selamat jalan')
// };
// haloKabar(selamatJalan);
// function penjumlahan(callback, a, b){
//     let hasil = a+b;
//     callback (hasil);
// };
// function consoleHasil(hasil){
// console.log(hasil);
// };

// penjumlahan(consoleHasil,5,6);


// (promise function)= adalah sebuah function yang akan dijalankan jika terjadi sesuatu/ kegagalan terjadi.
// function cuciPiring(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const cuci = true;
//             if(cuci){
//                 resolve('saya sudah mencuci piringnya');
//             }else{
//                 reject('kamu sedang males nyuci piring, jadi piringnya belum dicuci!')
//             }
//         },3000)
//     })
// };
// function nyapuRumah(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const nyapu = false;
//             if(nyapu){
//                 resolve('saya sudah sapu semua bagian rumah');
//             }else{
//                 reject('kamu sedang males nyapu rumah, jadi rumahnya masih kotor!')
//             }
//         },3500)
//     })
// };
// function ngepelRumah(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const ngepel = true;
//             if(ngepel){
//                 resolve('saya sudah sapu dan sudah ngepel semua bagian rumah');
//             }else{
//                 reject('kamu sedang males ngepel, jadi rumahnya bersih karna sudah disapu tapi masih bau!')
//             }
//         },3500)
//     })
// };
// cuciPiring().then(value =>{console.log(value); return nyapuRumah()})
//             .then(value =>{console.log(value); return ngepelRumah()})
//             .then(value =>{console.log(value); console.log('rumah sudah bersih semua, tak tinggal turu ndisit lur!')})
//             .catch(Error => console.error(Error));


// (asyncronous function) = dibagi menjadi dua, yaitu async dan await, async yaitu mengubah function menjadi promise, sedangkan await membuat function menunggu promise.

// function cuciPiring(){
//         return new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 const cuci = true;
//                 if(cuci){
//                     resolve('saya sudah mencuci piringnya');
//                 }else{
//                     reject('kamu sedang males nyuci piring, jadi piringnya belum dicuci!')
//                 }
//             },3000)
//         })
//     };
//     function nyapuRumah(){
//         return new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 const nyapu = true;
//                 if(nyapu){
//                     resolve('saya sudah sapu semua bagian rumah');
//                 }else{
//                     reject('kamu sedang males nyapu rumah, jadi rumahnya masih kotor!')
//                 }
//             },3500)
//         })
//     };
//     function ngepelRumah(){
//         return new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 const ngepel = false;
//                 if(ngepel){
//                     resolve('saya sudah sapu dan sudah ngepel semua bagian rumah');
//                 }else{
//                     reject('kamu sedang males ngepel, jadi rumahnya bersih karna sudah disapu, tapi masih bau!')
//                 }
//             },3500)
//         })
//     };

//     async function pekerjaanRumah() {
//        try{
//         const hasilNyuci = await cuciPiring();
//         console.log(hasilNyuci);
//         const hasilNyapu = await nyapuRumah();
//         console.log(hasilNyapu);
//         const hasilngepel = await ngepelRumah();
//         console.log(hasilngepel);
//         console.log('rumah sudah bersih semua, tak tinggal turu ndisit lur!')
//        }catch(error){
//         console.error(error);
//        }
//     };
//     pekerjaanRumah();