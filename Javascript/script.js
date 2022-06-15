/* let sayi1 = "200";
let sayi2 = "300";

console.log (Number(sayi1) + Number(sayi2)); */

/* let sayi1 = 200;
let sayi2 = 300;

console.log(sayi1.toString() + sayi2.toString()) */

/* let sinavNotu = 70;
let basarilimi = sinavNotu >= 50;

console.log (basarilimi) */

/* let ogr1_ad = "Ada";
let ogr1_soyad = "Bilgi";
let ogr1_dogumTarixi = "2010";
let ogr1_matematik1 = 70;
let ogr1_matematik2 = 70;
let ogr1_matematik3 = 80;
let ortalama = (ogr1_matematik1 + ogr1_matematik2 + ogr1_matematik3) / 3;

console.log (parseInt(ortalama));
console.log (ortalama >= 50);

let ogr2_ad = "Yigit";
let ogr2_soyad = "Bilgi";
let ogr2_dogumTarixi = "2012";
let ogr2_matematik1 = 40;
let ogr2_matematik2 = 40;
let ogr2_matematik3 = 50;

let nowYear = new Date().getFullYear();

let ogr1_yas = nowYear - parseInt(ogr1_dogumTarixi);
let ogr2_yas = nowYear - parseInt(ogr2_dogumTarixi);
console.log(ogr2_yas); */

/* let sonuc;
let a=10;
sonuc = a++;
console.log(sonuc);
console.log(a); */

/* let acccess = true;

if (acccess) {
    console.log("uygulamaya girish yapildi")
} */

/* let username = "alakbar_taghiyev"
let isLoggedIn = (username=="alakbar_taghiyev")

if(isLoggedIn) {
    console.log("sisteme girish yapildi")
}
else{
    console.log("sisteme girish yapilmadi")
} */

/* let username = "alakbar_taghiyev";
let password = "1234";

if (username == "alakbar_taghiyev") {
  if (password == "1234") {
    console.log("sisteme girish yapildi");
  }
  else {
      console.log("parol sehvdir")
  }
} else {
  console.log("username sehdir");
} */

/* let yash = 20;
let mezuniyet = "universitet";

if(yash >= 18 && (mezuniyet == "universitet" || mezuniyet == "lise")) {
    console.log ("ehliyet ala bilir")
} else {
    console.log('ehlyet ala bilmez')
} */

/* let sayi = 9;
if (sayi > 10 && sayi < 50) {
    console.log ("sayi 10-50 arasindadir")
} else {
    console.log("sayi 10-50 arasinda deyil")
} */

/* let sayi = -21;

if (sayi % 2 == 1 && sayi > 0) {
    console.log("sayi pozitiv tek sayidir")
}
else (
    console.log ("")
)
  */

/* let x = 50;
let y = 50;
let z = 50; 

if (x > y && x >z) {
    console.log ("x en buyuk")
} else if (y > x && y >z) {
    console.log ("y en buyuk")
} else if (z > x && z > y) {
    console.log ("z en buyuk")
} else {
    console.log ("sayilar beraber")
} */

/* let vize1 = 10;
let vize2 = 10;
let final = 70;
let ortalama = (vize1 + vize2) / 2 * 0.4 + final * 0.6; */

// console.log ("ortalama: " + ortalama);

/* if(ortalama >= 50) {
    console.log("kecdiniz")
} else {
    console.log("kaldiniz")
} */

/* if(ortalama >= 50 && final >=50) {
    console.log("kecdiniz")
} else {
    console.log("kaldiniz")
} */

/* if(ortalama >= 50 || final >=70) { 
    console.log("kecdiniz")
} else {
    console.log("kaldiniz")
} */

/* let ad = "Alakbar";
let soyad = "Taghiyev";
let yash = "22";
let sehir = "Baki"

// let mesaj = "Benim adim " + ad + " soyadim " + soyad + '. ' + sehir + '\'de yasiyorum. ' + 'Teqaude ' + (65-yash) + ' yilim kaldi';

mesaj = `Benim adim ${ad} soyadim ${soyad}. ${sehir}'de yasiyorum. Teqaude ${(65-yash)} yilim kaldi`;

let teqaud = (65-yash > 0) ? "Teqaude " + (65 - yash) + " il kaldi" : "Zaten teqaudcusunuz"
mesaj = `Benim adim ${ad} soyadim ${soyad}. ${sehir}'de yasiyorum. ${teqaud}`;

console.log (mesaj) */

/* let kursAdi = "Komple Uygulamali Web Gelishtirme Egitimi"

let netice;

netice = kursAdi.toLowerCase();
netice = kursAdi.toUpperCase();
netice = kursAdi.length;
netice = kursAdi[0];
netice = kursAdi.slice(0, 7);
netice = kursAdi.slice(-10, -7);
netice = kursAdi.substring(0, 7);
netice = kursAdi.substring(-10, -7);
netice = kursAdi.replace("Egitimi", "Kursu");
netice = kursAdi.trim();
netice = kursAdi.trimEnd();
netice = kursAdi.trimStart();
netice = kursAdi.indexOf("Komple");
netice = kursAdi.split(" ");
netice = kursAdi.split(" ") [0];
netice = kursAdi.split(" ") [1];
netice = kursAdi.includes("Web")

console.log(netice); */

/* let url = "https://www.sadikturan.com/";
let kursAdi = "Komple Uygulamali Web Gelishtirme Kursu";
let sonuc;

sonuc = url.length;
sonuc = kursAdi.split(" ").length;
sonuc = kursAdi.startsWith("Komple");
sonuc = kursAdi.includes("Kursu")

console.log(sonuc); */

/* let sonuc;

sonuc = 10.6;
sonuc = "10";
sonuc = Number(sonuc);
sonuc = parseInt("10.7");
sonuc = parseFloat(sonuc);

let sayi = 15.12355467;

sonuc = sayi.toPrecision(5);
sonuc = sayi.toFixed(6);

sonuc = Math.round(2.5);
sonuc = Math.round(2.3);
sonuc = Math.ceil(2.6);
sonuc = Math.ceil(2.3);
sonuc = Math.floor(2.6);
sonuc = Math.floor(2.2);
sonuc = Math.sqrt(36);
sonuc = Math.pow(6,2);
sonuc = Math.abs(-10);
sonuc = Math.min(23,32,16,8,19);
sonuc = Math.max(23,32,16,8,19);
sonuc = Math.floor(Math.random() * 100) + 30;


console.log(typeof sonuc);
console.log(sonuc); */

/* let simdi = new Date();
sonuc = simdi;

// Get Methods
sonuc = simdi.getDate();
sonuc = simdi.getDay();
sonuc = simdi.getFullYear();
sonuc = simdi.getHours();
sonuc = simdi.getTime();

// Set Methods
//simdi.setFullYear(2025);
simdi.setMonth(8);
simdi.setDate(15);

sonuc = simdi;

let dogumTarixi = new Date(1999, 6, 28);

sonuc = simdi.getFullYear() - dogumTarixi.getFullYear()

console.log(typeof sonuc);
console.log(sonuc); */



 