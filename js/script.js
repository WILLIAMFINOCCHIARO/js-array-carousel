
// generare ARRAY
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
let containertitoli = document.querySelector(".container-under-left");
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
