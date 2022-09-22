'use strict';



// burger menu
const burger = document.querySelector('.burger');
const menuOverlay = document.querySelector('.menu-overlay');
const backgroundOverlay = document.querySelector('.background-overlay');
const body = document.querySelector('body');

burger.addEventListener('click', function() {
    burger.classList.toggle('burger--active');
    menuOverlay.classList.toggle('open');
    backgroundOverlay.classList.toggle('bg-overlay');
    body.classList.toggle('hidden');
});

document.querySelectorAll('.menu-overlay__link').forEach(item => {
  item.addEventListener('click', event => {
      burger.classList.toggle('burger--active');
      menuOverlay.classList.toggle('open');
      backgroundOverlay.classList.toggle('bg-overlay');
      body.classList.toggle('hidden');
  });
});



// counter
let counter = document.getElementById('counter');
let price = document.getElementById('price');
let minus = document.getElementById('minus');
let plus = document.getElementById('plus');
let counterValue = counter.getAttribute("value");
let priceValue = 1000;

minus.addEventListener('click', function(m) {
    m.preventDefault();
    if (priceValue > 1000) {
        priceValue -=1000;
        price.innerHTML = priceValue;
      }
    if (counterValue > 1) {
        counter.value = --counterValue;
      }
});

plus.addEventListener('click', function(p) {
    p.preventDefault();
    counter.value = ++counterValue;
    priceValue +=1000;
    price.innerHTML = priceValue;
});



//form validation
let form = document.querySelector('.tickets__form');

form.reset();

const validation = new JustValidate('#form', {
  errorFieldCssClass: 'error--field',
  errorLabelCssClass: 'error--label',
  focusInvalidField: false,
  lockForm: true,
});

validation
  .addField('#name', [
    {
      rule: 'required',
      errorMessage: ' ',
    },
  ])
  .addField('#email', [
    {
      rule: 'email',
      errorMessage: ' ',
    },
  ])
  .addField('#consent_checkbox', [
    {
      rule: 'required',
      errorMessage: 'Необходимо принять пользовательское соглашение',

    },
  ])

  .onSuccess((event) => {
    console.log('Validation passes and form submitted');
    alert("Супер!");
    form.reset();
  });