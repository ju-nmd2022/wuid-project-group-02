let arrowDown = document.querySelector('arrow-down') 
let dropdownBox = document.querySelector('dropdown-content') 


if (arrowDown) {
    arrowDown.addEventListener('click', function() {

        dropdownBox.style.display = 'block';

    })
}