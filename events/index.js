/*
Wah cukup banyak juga yah TODO yang harus dikerjakan. Simak penjelasanya:

TODO 1 : Buat atau impor variabel EventEmitter dari core module events.
TODO 2 : Buat variabel myEmitter yang merupakan instance dari EventEmitter.
TODO 3 : Tentukan birthdayEventListener sebagai aksi ketika event ‘birthday’ dibangkitkan pada myEmitter.
TODO 4 : Bangkitkanlah event ‘birthday’ pada myEmitter dengan method emit() dan beri nilai argumen listener dengan nama Anda.

Bila Anda selesai mengerjakan TODO yang ada, eksekusi berkas index.js dengan perintah:

node ./events/index.js
*/

const { EventEmitter } = require("events");
 
const birthdayEventListener = (name) => {
  console.log(`Happy birthday ${name}!`);
}
 
const myEmitter = new EventEmitter();
 
myEmitter.on('birthday', birthdayEventListener);
 
myEmitter.emit('birthday', 'Yoga');