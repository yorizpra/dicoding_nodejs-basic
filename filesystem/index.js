const fs = require('fs');
const path = require('path');

// Mendapatkan path file notes.txt di direktori yang sejajar
const filePath = path.join(__dirname, 'notes.txt');

// Membaca file notes.txt
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  // Menampilkan teks pada file ke console
  console.log(data);
});
