

document.addEventListener('DOMContentLoaded', function () {
    let settingsIcon = document.querySelector('.fixed-icon');
    let dropdown = document.querySelector('.dropdown');
    let switchInput = document.querySelector('.side-image input[type="checkbox"]');
    let images = document.querySelector('.images .img img');

    settingsIcon.addEventListener('click', function () {
        dropdown.classList.toggle('show');
    });
    document.addEventListener('click', function (event) {
        // Kontrolloj që klikimi të mos jetë brenda dropdown-it ose ikonës së settings
        if (!dropdown.contains(event.target) && !settingsIcon.contains(event.target)) {
            dropdown.classList.remove('show');
        }
    });

})

/*let purpleSpan = document.getElementById('purpleSpan');
let blueSpan = document.getElementById('blueSpan');
let greenSpan = document.getElementById('greenSpan');
let orangeSpan = document.getElementById('orangeSpan');
let redSpan = document.getElementById('redSpan');
let pinkSpan = document.getElementById('pinkSpan');
let menuBarItem = document.querySelectorAll('.menu-bar1');
let notifications = document.getElementById('notifications');


purpleSpan.addEventListener('click', function(){
    changeColor('purple');
});

blueSpan.addEventListener('click', function(){
    changeColor('blue');
});

greenSpan.addEventListener('click', function(){
    changeColor('green');
});

orangeSpan.addEventListener('click', function(){
    changeColor('orange');
});

redSpan.addEventListener('click', function(){
    changeColor('red');
});

pinkSpan.addEventListener('click', function(){
    changeColor('pink');
});


function changeColor(color) {
    notifications.classList.remove('purple-hover', 'blue-hover', 'green-hover', 'orange-hover', 'red-hover', 'pink-hover');
notifications.classList.add(`${color}-hover`);
menuBarItem.forEach(function(item){
    item.style.backgroundColor = color;
});
localStorage.setItem('color', color);
}

let savedColor = localStorage.getItem('color');
if(savedColor) {
    notifications.classList.remove('purple-hover', 'blue-hover', 'green-hover', 'orange-hover', 'red-hover', 'pink-hover');
    notifications.classList.add(`${savedColor}-hover`);
    menuBarItem.forEach(function(item){
        item.style.backgroundColor = savedColor;
    })
}*/






let purpleSpan = document.getElementById('purpleSpan');
let menubarLi = document.querySelectorAll('.menu-bar1');
let notificationsUl = document.querySelector('#notifications');

purpleSpan.addEventListener('click', function () {
    menubarLi.forEach(function (li) {
        li.style.backgroundColor = 'purple';
    });

    notificationsUl.querySelectorAll('li').forEach(function (li) {
        li.classList.add('purple-hover');
        li.classList.remove('blue-hover');
        li.classList.remove('green-hover');
        li.classList.remove('orange-hover')
        li.classList.remove('red-hover');
        li.classList.remove('pink-hover');
    });

    localStorage.setItem('color', 'purple');
});

let savedColor = localStorage.getItem('color');
if (savedColor) {
    menubarLi.forEach(function (li) {
        li.style.backgroundColor = savedColor;
    })
    notificationsUl.querySelectorAll('li').forEach(function (li) {
        li.classList.add('purple-hover');
        li.classList.remove('blue-hover');
        li.classList.remove('green-hover');
        li.classList.remove('orange-hover')
        li.classList.remove('red-hover');
        li.classList.remove('pink-hover');
    })
}


let blueSpan = document.querySelector('.blue.color');
let menubar = document.querySelectorAll('.menu-bar1');
let notifications = document.querySelector('#notifications');

blueSpan.addEventListener('click', function () {
    menubar.forEach(function (li) {
        li.style.backgroundColor = 'blue';
    });

    notifications.querySelectorAll('li').forEach(function (li) {
        li.classList.add('blue-hover');
        li.classList.remove('green-hover');
        li.classList.remove('orange-hover')
        li.classList.remove('purple-hover')
        li.classList.remove('red-hover');
        li.classList.remove('pink-hover');
    });

    localStorage.setItem('color', 'blue');

});

let savedColor2 = localStorage.getItem('color');
if (savedColor2) {
    menubar.forEach(function (li) {
        li.style.backgroundColor = savedColor2;
    })
    notifications.querySelectorAll('li').forEach(function (li) {
        li.classList.add('blue-hover');
        li.classList.remove('green-hover');
        li.classList.remove('orange-hover')
        li.classList.remove('purple-hover')
        li.classList.remove('red-hover');
        li.classList.remove('pink-hover');
    })
}


let greenSpan = document.querySelector('.green');
let greenMenubar = document.querySelectorAll('.menu-bar1');
let grennNotifications = document.querySelector('#notifications');

greenSpan.addEventListener('click', function () {
    greenMenubar.forEach(function (li) {
        li.style.backgroundColor = 'green';
    });

    grennNotifications.querySelectorAll('li').forEach(function (li) {
        li.classList.add('green-hover');
        li.classList.remove('blue-hover');
        li.classList.remove('orange-hover')
        li.classList.remove('purple-hover')
        li.classList.remove('red-hover');
        li.classList.remove('pink-hover');
    });

    localStorage.setItem('color', 'green');

});

let greenSavedColor = localStorage.getItem('color');
if (greenSavedColor) {
    greenMenubar.forEach(function (li) {
        li.style.backgroundColor = greenSavedColor;
    })
    grennNotifications.querySelectorAll('li').forEach(function (li) {
        li.classList.add('green-hover');
        li.classList.remove('blue-hover');
        li.classList.remove('orange-hover')
        li.classList.remove('purple-hover')
        li.classList.remove('red-hover');
        li.classList.remove('pink-hover');
    })
}


let orangeSpan = document.querySelector('.orange.color');
let orangeMenubar = document.querySelectorAll('.menu-bar1');
let orangeNotifications = document.querySelector('#notifications');

orangeSpan.addEventListener('click', function () {
    orangeMenubar.forEach(function (li) {
        li.style.backgroundColor = 'orange';
    });

    orangeNotifications.querySelectorAll('li').forEach(function (li) {
        li.classList.add('orange-hover');
        li.classList.remove('blue-hover');
        li.classList.remove('blue-hover')
        li.classList.remove('purple-hover')
        li.classList.remove('red-hover');
        li.classList.remove('pink-hover');
    });

    localStorage.setItem('color', 'orange');

});

let orangeSavedColor = localStorage.getItem('color');
if (orangeSavedColor) {
    orangeMenubar.forEach(function (li) {
        li.style.backgroundColor = orangeSavedColor;
    });


    orangeNotifications.querySelectorAll('li').forEach(function (li) {
        li.classList.add('orange-hover');
        li.classList.remove('blue-hover');
        li.classList.remove('blue-hover')
        li.classList.remove('purple-hover');
        li.classList.remove('red-hover');
        li.classList.remove('pink-hover');
    })
};

let redSpan = document.querySelector('.red.color');
let redMenubar = document.querySelectorAll('.menu-bar1');
let redNotifications = document.querySelector('#notifications');

redSpan.addEventListener('click', function () {
    redMenubar.forEach(function (li) {
        li.style.backgroundColor = 'red';
    });

    orangeNotifications.querySelectorAll('li').forEach(function (li) {
        li.classList.add('red-hover');
        li.classList.remove('blue-hover');
        li.classList.remove('blue-hover')
        li.classList.remove('purple-hover')
        li.classList.remove('orange-hover');
        li.classList.remove('pink-hover');
    });

    localStorage.setItem('color', 'red');

});

let redSavedColor = localStorage.getItem('color');
if (redSavedColor) {
    redMenubar.forEach(function (li) {
        li.style.backgroundColor = redSavedColor;
    });


    redNotifications.querySelectorAll('li').forEach(function (li) {
        li.classList.add('red-hover');
        li.classList.remove('blue-hover');
        li.classList.remove('green-hover')
        li.classList.remove('purple-hover')
        li.classList.remove('orange-hover');
        li.classList.remove('pink-hover');
    })
}

let pinkSpan = document.querySelector('.pink.color');
let pinkMenubar = document.querySelectorAll('.menu-bar1');
let pinkNotifications = document.querySelector('#notifications');

pinkSpan.addEventListener('click', function () {
    pinkMenubar.forEach(function (li) {
        li.style.backgroundColor = ' #e91e63';
    });

    pinkNotifications.querySelectorAll('li').forEach(function (li) {
        li.classList.add('pink-hover');
        li.classList.remove('blue-hover');
        li.classList.remove('green-hover')
        li.classList.remove('purple-hover')
        li.classList.remove('red-hover');
        li.classList.remove('orange-hover');
    });

    localStorage.setItem('color', '#e91e63');

});

let pinkSavedColor = localStorage.getItem('color');
if (pinkSavedColor) {
    pinkMenubar.forEach(function (li) {
        li.style.backgroundColor = pinkSavedColor;
    });


    pinkNotifications.querySelectorAll('li').forEach(function (li) {
        li.classList.add('pink-hover');
        li.classList.remove('blue-hover');
        li.classList.remove('green-hover')
        li.classList.remove('purple-hover')
        li.classList.remove('red-hover');
        li.classList.remove('orange-hover');
    })
};



// Background in Side-bar













