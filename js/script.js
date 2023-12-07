
// responsive navbar

const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav a');

menuToggle.addEventListener('click', function () {
  nav.classList.toggle('slide');
});




// hitung Keliling segitiga

  const nilaiS1= document.getElementById(`nilaiS1`);
  const nilaiS2= document.getElementById(`nilaiS2`);
  const nilaiS3= document.getElementById(`nilaiS3`);
  const hitungKeliling= document.getElementById(`hitung`);
  const outputKelling= document.getElementById(`output`);
hitungKeliling.addEventListener(`click`, function() {
  let s1= parseInt(nilaiS1.value);
  let s2= parseInt(nilaiS2.value);
  let s3= parseInt(nilaiS3.value);
  let k = s1+s2+s3;
  outputKelling.innerHTML=` K = S1 + S2 + S3 <br> K = ${s1} + ${s2} + ${s3} <br> K = ${k} <br> hasil keliling Segitiga adalah : ${k}`;
})




// hitung luas segitiga

const nilaiAlas= document.getElementById(`alas`);
const nilaiTinggi= document.getElementById(`tinggi`);
const hitungLuas= document.getElementById(`hitung`);
const outputLuas= document.getElementById(`output`);
hitungLuas.addEventListener(`click`, function() {
let a= parseInt(nilaiAlas.value);
let t= parseInt(nilaiTinggi.value);
let l = 0.5*a*t;
outputLuas.innerHTML=` L = 1/2 x a x t <br> L = 1/2 x ${a} x ${t} <br> L = ${l}<br>hasil luas Segitiga adalah : ${l}`;
})


// reset luas segitiga dan keliling segitiga
const resetLuas= document.getElementById(`reset`);
 resetLuas.addEventListener(`click`, function () {
  nilaiAlas.value="";
  nilaiTinggi.value="";
  outputLuas.innerHTML= "";
 } )


 const resetKeliling= document.getElementById(`reset`);
 resetKeliling.addEventListener(`click`, function () {
   nilaiS1.value="";
   nilaiS2.value="";
   nilaiS3.value="";
   outputKelling.innerHTML= "";
 } )