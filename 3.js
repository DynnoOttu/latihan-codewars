// Nathan suka bersepeda. Karena Nathan tahu pentingnya tetap terhidrasi, ia minum 0,5 liter air setiap jam bersepeda. Anda diberi waktu dalam jam dan Anda harus mengembalikan jumlah liter yang akan diminum Nathan, dibulatkan ke nilai terkecil.

// Misalnya:
// time = 3 ----> litres = 1
// time = 6.7---> litres = 3
// time = 11.8--> litres = 5

function litres(time) {
  return Math.floor(time * 0.5);
}

console.log(litres(3));
