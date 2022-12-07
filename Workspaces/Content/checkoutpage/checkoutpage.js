let continueButton = document.querySelector('.continue-button');


let inputInfo = document.querySelector('#input-text')


let inputNumber = document.querySelector('#input-number')


continueButton.addEventListener('click', function() {
let firstName = document.querySelector('.firstname-card input').value;
let lastName = document.querySelector('.lastname-card input').value;
let emailAdress = document.querySelector('.email-card input').value;
let fullNumber = document.querySelector('.fullnumber').value;
  inputInfo.innerHTML = firstName + ' ' + lastName + ', ' + emailAdress;
  inputNumber.innerHTML = fullNumber;
  
  // let for whole
});

