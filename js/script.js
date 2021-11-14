
// container-left


// PRIMO ARRAY
const imagesArray = [
  'img/01.jpg',
  'img/02.jpg',
  'img/03.jpg',
  'img/04.jpg',
  'img/05.jpg'
];

// generare gli elementi da inserire nell'html

let items ="";

for(i = 0; i<imagesArray.length; i++) {
  items +=
   `
  <div class="item">
  <img src="${imagesArray[i]}" alt="${imagesArray[i]}">
  </div>
  `;
}

console.log(items);

// inseriamo gli elementi nella posizione desiderata
const itemscontainer = document.querySelector(".container-left");
itemscontainer.innerHTML = items;

// selezioniamo tutti gli item per rendere il primo attivo
const item = document.getElementsByClassName("item");
console.log(item[0]);
let activeItem = 0;
item[activeItem].classList.add("active");


// attiviamo i pulsanti per far scorrere le immagini
const up = document.querySelector(".up");
const down = document.querySelector(".down");


down.addEventListener("click", function() {

  if( activeItem < imagesArray.length -1) {
  // rimuovere la classe active dall'elemento
  item[activeItem].classList.remove("active");
  // incrementare l'active di 1
  activeItem++;

  item[activeItem].classList.add("active");
}});






up.addEventListener("click", function() {
  if( activeItem > 0) {
  // rimuovere la classe active dall'elemento
  item[activeItem].classList.remove("active");
  // incrementare l'active di 1
  activeItem--;

  item[activeItem].classList.add("active");
}});

// SECONDO ARRAY

const titlesArray = [
  'Svezia',
  'Svizzera',
  'Gran Bretagna',
  'Germania',
  'Paradise'
];


// generare gli elementi da inserire nell'html

let titles = "";

for(i = 0; i<titlesArray.length; i++) {
  titles +=
   `
  <div class="titles">
   ${titlesArray[i]}
  </div>
  `;
}

console.log(titles);

// inseriamo gli elementi nella posizione desiderata
let containertitoli = document.querySelector(".container-title");
containertitoli.innerHTML = titles;

// selezioniamo tutti gli item per rendere il primo attivo
let title = document.getElementsByClassName("titles");
console.log(title[0]);
let activeTitle = 0;
title[activeTitle].classList.add("active");



down.addEventListener("click", function() {

  if( activeTitle < titlesArray.length -1) {
  // rimuovere la classe active dall'elemento
  title[activeTitle].classList.remove("active");
  // incrementare l'active di 1
  activeTitle++;

  title[activeTitle].classList.add("active");
}});




up.addEventListener("click", function() {
  if( activeTitle > 0) {
  // rimuovere la classe active dall'elemento
  title[activeTitle].classList.remove("active");
  // incrementare l'active di 1
  activeTitle--;

  title[activeTitle].classList.add("active");
}});


// TERZO ARRAY

const textsArray = [
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
  'Lorem ipsum',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
  'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];


// generare gli elementi da inserire nell'html

let texts = "";

for(i = 0; i<textsArray.length; i++) {
  texts +=
   `
  <div class="texts">
   ${textsArray[i]}
  </div>
  `;
}

console.log(texts);

// inseriamo gli elementi nella posizione desiderata
let containertesti = document.querySelector(".container-under-title");
containertesti.innerHTML = texts;

// selezioniamo tutti gli item per rendere il primo attivo
let text = document.getElementsByClassName("texts");
console.log(text[0]);
let activeText = 0;
text[activeText].classList.add("active");


down.addEventListener("click", function() {

  if( activeText < textsArray.length -1) {
  // rimuovere la classe active dall'elemento
  text[activeText].classList.remove("active");
  // incrementare l'active di 1
  activeText++;

  text[activeText].classList.add("active");
}});




up.addEventListener("click", function() {
  if( activeText > 0) {
  // rimuovere la classe active dall'elemento
  text[activeText].classList.remove("active");
  // incrementare l'active di 1
  activeText--;

  text[activeText].classList.add("active");
}});



// container-right

//  ARRAY
const imagsArray = [
  'img/01.jpg',
  'img/02.jpg',
  'img/03.jpg',
  'img/04.jpg',
  'img/05.jpg'
];

// generare gli elementi da inserire nell'html

let imags ="";

for(i = 0; i<imagesArray.length; i++) {
  imags +=
   `
  <div class="imags">
  <img src="${imagesArray[i]}" alt="${imagesArray[i]}">
  </div>
  `;
}

console.log(imags);

// inseriamo gli elementi nella posizione desiderata
const imagscontainer = document.querySelector(".container-under-right");
imagscontainer.innerHTML = imags;

// selezioniamo tutti gli item per rendere il primo attivo
const imag = document.getElementsByClassName("imags");
console.log(imag[0]);
let activeImag = 0;
imag[activeImag].classList.add("white");



down.addEventListener("click", function() {

  if( activeImag < imagsArray.length -1) {
  // rimuovere la classe active dall'elemento
  imag[activeImag].classList.remove("white");
  // incrementare l'active di 1
  activeImag++;

  imag[activeImag].classList.add("white");
}});






up.addEventListener("click", function() {
  if( activeImag > 0) {
  // rimuovere la classe active dall'elemento
  imag[activeImag].classList.remove("white");
  // incrementare l'active di 1
  activeImag--;

  imag[activeImag].classList.add("white");
}});
