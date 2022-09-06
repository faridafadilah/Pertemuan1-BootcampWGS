const readline = require('readline'); // Menggunakan Core Module readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
 

// Membuat Question di CLI
rl.question('Nama Lengkap: ', (nama) => {
  rl.question('No Hp: ', (nohp) => {
    rl.question('Email: ', (email) => {
      console.log(`Terima kasih ${nama}! no telponmu: ${nohp} - email: ${email} `);
      
      //close program
      rl.close();
    });
  });  
});