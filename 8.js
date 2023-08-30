// Jumlahkan semua angka dari array tertentu ( cq.list ), kecuali elemen tertinggi dan terendah ( berdasarkan nilai, bukan berdasarkan indeks! ).

// Elemen tertinggi atau terendah masing-masing adalah satu elemen pada setiap sisi, meskipun terdapat lebih dari satu elemen dengan nilai yang sama.

// Perhatikan validasi input.

// Contoh
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6

// Jika nilai kosong ( null, None, Nothingdll. ) diberikan sebagai ganti array, atau array yang diberikan adalah daftar kosong atau daftar dengan hanya 1 elemen, return 0.

function sumArray(array) {
  if (array == null) {
    return 0;
  } else if (array.length < 2) {
    return 0;
  } else {
    array = array.sort(function (a, b) {
      return a - b;
    });
    var total = 0;
    for (var i = 1; i < array.length - 1; i++) {
      total += array[i];
    }
    return total;
  }
}

console.log(sumArray([2, 3, 8, 10, 21]));
