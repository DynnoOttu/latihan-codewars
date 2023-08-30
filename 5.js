// Cerita:
// Bob bekerja sebagai sopir bus. Namun, dia menjadi sangat populer di kalangan penduduk kota. Dengan banyaknya penumpang yang ingin naik busnya, terkadang ia harus menghadapi masalah tidak cukupnya ruang tersisa di bus! Dia ingin Anda menulis program sederhana yang memberi tahu dia apakah dia bisa memuat semua penumpang.

// Ikhtisar Tugas:
// Anda harus menulis fungsi yang menerima tiga parameter:

// cap adalah jumlah orang yang dapat ditampung oleh bus tersebut, tidak termasuk pengemudinya.
// on adalah jumlah orang di dalam bus tidak termasuk pengemudi.
// wait adalah jumlah orang yang menunggu untuk naik bus tidak termasuk supirnya.
// Jika ada cukup ruang, kembalikan 0, dan jika tidak ada, kembalikan jumlah penumpang yang tidak dapat dibawanya.

// cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
// cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting

function enough(cap, on, wait) {
  return Math.max(on + wait - cap, 0);
}

console.log(enough(100, 60, 50));
