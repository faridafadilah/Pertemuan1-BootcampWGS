const fs = require('fs'); // Menggunakan Core Modul File System

// Menuliskan Hello World pada File test.txt
fs.writeFileSync('test.txt', 'Hello World');

// Membaca Isi File dan Menampilkan nya di Console
fs.readFileSync('test.txt', (err, data) => {
    if(err) throw err;
    console.log(data);
});