

document.addEventListener('DOMContentLoaded', function(){
let settingsIcon = document.querySelector('.fixed-icon');
let dropdown = document.querySelector('.dropdown');
let switchInput = document.querySelector('.side-image input[type="checkbox"]');
let images = document.querySelector('.images .img img');

settingsIcon.addEventListener('click', function(){
    dropdown.classList.toggle('show');
});

switchInput.addEventListener('change', function(){
    localStorage.setItem()
})

})