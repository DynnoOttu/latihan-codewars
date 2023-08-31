// Diberikan array bilangan bulat, solusi Anda harus menemukan bilangan bulat terkecil.

// Misalnya:

// Mengingat [34, 15, 88, 2]solusi Anda akan kembali2
// Mengingat [34, -345, -1, 100]solusi Anda akan kembali-345
// Anda dapat berasumsi, untuk tujuan kata ini, bahwa array yang disediakan tidak akan kosong.

function findSmallestIn(arr) {
  return Math.min(...arr);
}

console.log(findSmallestIn([34, 15, 88, 2, 1]));
