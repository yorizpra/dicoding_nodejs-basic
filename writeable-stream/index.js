/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */

const fs = require('fs');
const path = require('path');

// Mendapatkan path untuk input.txt dan output.txt
const inputPath = path.join(__dirname, 'input.txt');
const outputPath = path.join(__dirname, 'output.txt');

// Membuat readable stream untuk membaca input.txt
const readableStream = fs.createReadStream(inputPath, { encoding: 'utf8' });

// Membuat writable stream untuk menulis ke output.txt
const writableStream = fs.createWriteStream(outputPath);

// Menghubungkan readable stream ke writable stream
readableStream.pipe(writableStream);

// Event listener untuk menangani error pada stream
readableStream.on('error', (err) => {
  console.error('Error reading input.txt:', err);
});

writableStream.on('error', (err) => {
  console.error('Error writing to output.txt:', err);
});

writableStream.on('finish', () => {
  console.log('Teks berhasil ditulis ulang ke output.txt!');
});
