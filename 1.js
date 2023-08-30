// Teman sekelas Anda meminta Anda menyalin beberapa dokumen untuk mereka. Anda tahu bahwa ada 'n' teman sekelas dan dokumennya memiliki halaman 'm'.ugas Anda adalah menghitung berapa banyak halaman kosong yang Anda butuhkan. Jika n < 0atau m < 0kembali 0.

// Contoh:
// n= 5, m=5: 25
// n=-5, m=5:  0

function paperwork(n, m) {
  return n > 0 && m > 0 ? n * m : 0;
}

console.log(paperwork(-5, 5));
