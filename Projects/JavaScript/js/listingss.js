

let placeholderText = document.getElementById('placeholderText');
let placeholderText2 = document.getElementById('placeholderText2');
let placeholderText3 = document.getElementById('placeholderText3');
let placeholderText4 = document.getElementById('placeholderText4');
let placeholderText5 = document.getElementById('placeholderText5');
let placeholderText6 = document.getElementById('placeholderText6');

function saveText() {
    localStorage.setItem('placeholderText', placeholderText.textContent);
    localStorage.setItem('placeholderText2', placeholderText2.textContent);
    localStorage.setItem('placeholderText3', placeholderText3.textContent);
    localStorage.setItem('placeholderText4', placeholderText4.textContent);
    localStorage.setItem('placeholderText5', placeholderText5.textContent);
    localStorage.setItem('placeholderText6', placeholderText6.textContent);
}

window.onload = function() {
    let savedText1 = localStorage.getItem('placeholderText');
    let savedText2 = localStorage.getItem('placeholderText2');
    let savedText3 = localStorage.getItem('placeholderText3');
    let savedText4 = localStorage.getItem('placeholderText4');
    let savedText5 = localStorage.getItem('placeholderText5');
    let savedText6 = localStorage.getItem('placeholderText6');
    if (savedText1) {
        placeholderText.textContent = savedText1;
    }
    if (savedText2) {
        placeholderText2.textContent = savedText2;
    }
    if (savedText3) {
        placeholderText3.textContent = savedText3;
    }
    if (savedText4) {
        placeholderText4.textContent = savedText4;
    }
    if (savedText5) {
        placeholderText5.textContent = savedText5;
    }
    if (savedText6) {
        placeholderText6.textContent = savedText6;
    }
}


placeholderText.addEventListener('input', saveText);
placeholderText2.addEventListener('input', saveText);
placeholderText3.addEventListener('input', saveText);
placeholderText4.addEventListener('input', saveText);
placeholderText5.addEventListener('input', saveText);
placeholderText6.addEventListener('input', saveText);


let closeIcon = document.querySelector('.close-icon');

closeIcon.addEventListener('click', function() {
    let parentItem = closeIcon.closest('.menage-item');
    parentItem.remove();
    saveRemovedItemToLocalStorage('removedItems', 'menage-item');
});

let closeIcon2 = document.querySelector('.close-icon2');

closeIcon2.addEventListener('click', function() {
    let parentItem = closeIcon2.closest('.menage-item2');
    parentItem.remove();
    saveRemovedItemToLocalStorage('removedItems', 'menage-item2');
});

let closeIcon3 = document.querySelector('.close-icon3');
closeIcon3.addEventListener('click', function() {
    let parentItem = closeIcon3.closest('.menage-item3');
    parentItem.remove();
    saveRemovedItemToLocalStorage('removedItems', 'menage-item3');
});

function saveRemovedItemToLocalStorage(key, item) {
    let removedItems = JSON.parse(localStorage.getItem(key)) || [];
    removedItems.push(item);
    localStorage.setItem(key, JSON.stringify(removedItems));
}







/*let editIcon = document.querySelector('.edit-icon');
let popup = document.querySelector('.popup');
let body = document.body;


editIcon.addEventListener('click', function() {
    popup.classList.add('open-popup');
    
});


document.getElementById('closePopup').addEventListener('click', function() {
    popup.classList.remove('open-popup');
});*/