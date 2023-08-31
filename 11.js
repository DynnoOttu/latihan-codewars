// Anda bertanya kepada seorang gadis kecil, "Berapa umurmu?" Dia selalu mengatakan, "x tahun", dimana x adalah angka acak antara 0 dan 9.

// Tulis sebuah program yang mengembalikan usia gadis itu (0-9) sebagai bilangan bulat.

// Asumsikan string input pengujian selalu berupa string yang valid. Misalnya, masukan tes mungkin "1 tahun" atau "5 tahun". Karakter pertama dalam string selalu berupa angka.

function getAge(inputString) {
  return parseInt(inputString);
}

console.log(getAge("5 Tahun"));
