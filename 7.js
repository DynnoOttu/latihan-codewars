// Ubah angka menjadi susunan digit terbalik
// Diberikan bilangan acak non-negatif, Anda harus mengembalikan digit bilangan ini dalam larik dengan urutan terbalik.

// Contoh(Masukan => Keluaran):
// 35231 => [1,3,2,5,3]
// 0 => [0]

function digitize(n) {
  return String(n).split("").map(Number).reverse();
}

console.log(digitize(13253));
