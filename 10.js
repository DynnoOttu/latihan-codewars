// Kalimat Hancur
// Tulis fungsi yang mengambil serangkaian kata dan memecahnya menjadi sebuah kalimat dan mengembalikan kalimat tersebut. Anda dapat mengabaikan kebutuhan apa pun untuk membersihkan kata atau menambahkan tanda baca, namun Anda harus menambahkan spasi di antara setiap kata. Hati-hati, tidak boleh ada spasi di awal atau akhir kalimat!

// Contoh
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

function smash(words) {
  return words.join(" ");
}

console.log(smash(["hello", "world", "this", "is", "great"]));
