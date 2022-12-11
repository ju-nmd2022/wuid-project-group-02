
// first button
let continueButton1 = document.querySelector('.continue-button1');
let inputInfo = document.querySelector('#input-text')
let inputNumber = document.querySelector('#input-number')
let customerInputedInfo = document.getElementById('customer-inputed-info');
let customerInfoArea = document.getElementById('customer-info-area');

continueButton1.addEventListener('click', function() {
let firstName = document.querySelector('.firstname-card input').value;
let lastName = document.querySelector('.lastname-card input').value;
let emailAdress = document.querySelector('.email-card input').value;
let fullNumber = document.querySelector('.fullnumber').value;

  inputInfo.innerHTML = firstName + ' ' + lastName + ', ' + emailAdress;
  inputNumber.innerHTML = fullNumber;
  customerInfoArea.style.display = "none";
  customerInputedInfo.style.display = "block";
  shippingAdressArea.style.display = "grid";

  // let for whole
});

// edit button
let editButton = document.querySelector('.edit-button');

editButton.addEventListener('click', function() {
  let customerInputedInfo = document.getElementById('customer-inputed-info');
  let customerInfoArea = document.getElementById('customer-info-area');
  customerInfoArea.style.display = "grid";
  customerInputedInfo.style.display = "none";
});




let continueButton2 = document.querySelector('.continue-button2');
let inputTextShipping = document.querySelector('#input-text-shipping')
let inputTextShipping2 = document.querySelector('#input-text-shipping2')
let shippingInputedInfo = document.getElementById('shipping-inputed-info');
let shippingAdressArea = document.getElementById('shipping-adress-area');

continueButton2.addEventListener('click', function(){
  let adress1 = document.querySelector('.adress1-card input').value;
  let city = document.querySelector('.city-card input').value;
  let zipcode = document.querySelector('.zipcode-card input').value;
  let country = document.querySelector('.country-card input').value;
  inputTextShipping.innerHTML = adress1 + ', ' + country;
  inputTextShipping2.innerHTML = city + ', ' + zipcode;
  customerInfoArea.style.display = "none";
  customerInputedInfo.style.display = "block";
  shippingAdressArea.style.display = "none";
  shippingInputedInfo.style.display = "block"
  cardAdressArea.style.display = "grid"
});

let editButton2 = document.querySelector('.edit-button2');


editButton2.addEventListener('click', function() {
  customerInfoArea.style.display = "none";
  shippingAdressArea.style.display = "grid";
  shippingInputedInfo.style.display = "none";
  
});



// button 3
let continueButton3 = document.querySelector('.continue-button3');
let inputTextCard = document.querySelector('#input-text-card')
let inputTextCard2 = document.querySelector('#input-text-card2')
let cardInputedInfo = document.getElementById('card-inputed-info');
let cardAdressArea = document.getElementById('card-adress-area');

continueButton3.addEventListener('click', function(){
  let cardholder = document.querySelector('.cardholder-card input').value;
  let cardnumber = document.querySelector('.cardnumber-card input').value;
  let exmonth = document.querySelector('.exmonth-card input').value;
  let exyear = document.querySelector('.exyear-card input').value;
  let cvv = document.querySelector('.cvv-card input').value;
  inputTextCard.innerHTML = cardholder + ', ' + cardnumber;
  inputTextCard2.innerHTML = exmonth + '/' + exyear + ', ' + cvv;
  customerInfoArea.style.display = "none";
  customerInputedInfo.style.display = "block";
  shippingAdressArea.style.display = "none";
  shippingInputedInfo.style.display = "block"
  cardAdressArea.style.display = "none";
  cardInputedInfo.style.display = "block"
});

let editButton3 = document.querySelector('.edit-button3');

editButton3.addEventListener('click', function() {
  customerInfoArea.style.display = "none";
  shippingAdressArea.style.display = "none";
  cardAdressArea.style.display = "grid";
  cardInputedInfo.style.display = "none";
  
});