
document.addEventListener('DOMContentLoaded', function () {
    let settingsIcon = document.querySelector('.fixed-icon');
    let dropdown = document.querySelector('.dropdown');
    let colorCircles = document.querySelectorAll('.color-circle');
    const whiteCircle = document.getElementById('white-circle');;
    const blackCircle = document.getElementById('black-circle');
    let imageSwitch = document.getElementById('imageSwitch');
    let images = document.querySelectorAll('.img-holder');

   


    function saveSettings() {
        let settings = {
            mainColor: getComputedStyle(document.documentElement).getPropertyValue('--menu-bar-color'),
            asideBackgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--aside-background-color'),
            sidebarBackground: getComputedStyle(document.documentElement).getPropertyValue('--sidebar-background'),
            selectedColorCircle: document.querySelector('.color-circle.selected') ? document.querySelector('.color-circle.selected').id : null,
            selectedImage: document.querySelector('.selected-img') ? document.querySelector('.selected-img').src : null
        };
    
        localStorage.setItem('settings', JSON.stringify(settings));
    }
    

    settingsIcon.addEventListener('click', function () {
        dropdown.classList.toggle('show');

        saveSettings()

    });
    document.addEventListener('click', function (event) {
        if (!dropdown.contains(event.target) && !settingsIcon.contains(event.target)) {
            dropdown.classList.remove('show');
            
        }

        saveSettings()
    });
   
    function loadSettings() {
        let savedSettings = localStorage.getItem('settings');
        if (savedSettings) {
            let settings = JSON.parse(savedSettings);

            document.documentElement.style.setProperty('--menu-bar-color', settings.mainColor);
            document.documentElement.style.setProperty('--aside-background-color', settings.asideBackgroundColor);
            document.documentElement.style.setProperty('--sidebar-background', settings.sidebarBackground);
            imageSwitch.checked = settings.sidebarBackground !== 'none';

            colorCircles.forEach(circle => {
                circle.classList.remove('selected');
                circle.style.border = 'none';
            });

            if (settings.selectedColorCircle) {
                let selectedColorCircle = document.getElementById(settings.selectedColorCircle);
                if (selectedColorCircle) {
                    selectedColorCircle.classList.add('selected');
                    selectedColorCircle.style.border = '2px solid blue';
                }
            }
            images.forEach(image => {
                image.classList.remove('selected-img');
            });

            if (settings.selectedImage) {
                const selectedImg = document.querySelector(`.image[src='${settings.selectedImage}']`);
                if (selectedImg) {
                    selectedImg.classList.add('selected-img');
                }
            }
        }

    }

    function handleCircleClick() {
        colorCircles.forEach(circle => {
            circle.classList.remove('selected');
            circle.style.border = 'none';
        });
        this.classList.add('selected');
        this.style.border = '2px solid blue';

        document.documentElement.style.setProperty('--menu-bar-color', getComputedStyle(this).backgroundColor);
        saveSettings();
    }

    function handleBackgroundCircleClick() {
        const sidebarCircles = document.querySelectorAll('.sidebar-circles div');

        sidebarCircles.forEach(circle => {
            circle.classList.remove('selected');
            circle.style.border = 'none';
        });

        this.classList.add('selected');
        this.style.border = '2px solid blue';

        let transparency = 0.3;
        let transparencyBlack = 0.7;


        if (this.id === 'white-circle') {
            document.documentElement.style.setProperty('--aside-background-color', `rgba(255, 255, 255, ${transparency})`);
            document.documentElement.style.setProperty('--sidebar-color', `rgba(rgba(255, 255, 255, ${transparency})`);

        } else if (this.id === 'black-circle') {
            document.documentElement.style.setProperty('--aside-background-color', `rgba(0, 0, 0, ${transparencyBlack})`);

            document.documentElement.style.setProperty('--sidebar-color', `rgba(255, 255, 255, ${transparencyBlack})`);
        }

        saveSettings();
    }

    function handleImageSwitchChange() {
        let selectedImg = document.querySelector('.selected-img');

        if (imageSwitch.checked && selectedImg) {
            const backgroundImage = `url('${selectedImg.src}')`;
            document.documentElement.style.setProperty('--sidebar-background', backgroundImage);
        } else {
            document.documentElement.style.setProperty('--sidebar-background', 'none');
        }

        saveSettings();
    }

    function handleImageClick() {
        images.forEach(image => {
            image.classList.remove('selected-img');
        });
        this.classList.add('selected-img');

        if (imageSwitch.checked) {
            document.documentElement.style.setProperty('--sidebar-background', `url('${this.src}')`);
            saveSettings();
        }
    }

    function updateSelectedElements() {
        colorCircles.forEach(circle => {
            circle.classList.remove('selected');
            circle.style.border = 'none';
        });

        if (document.querySelector('.color-circle.selected')) {
            const selectedColorCircle = document.querySelector('.color-circle.selected');
            selectedColorCircle.classList.add('selected');
            selectedColorCircle.style.border = '2px solid blue';
        }

        whiteCircle.classList.remove('selected');
        whiteCircle.style.border = 'none';

        blackCircle.classList.remove('selected');
        blackCircle.style.border = 'none';

        const selectedBgCircle = document.querySelector('.color-circle.selected');
        if (selectedBgCircle) {
            selectedBgCircle.classList.add('selected');
            selectedBgCircle.style.border = '2px solid blue';
        }

        images.forEach(image => {
            image.classList.remove('selected-img');
        });

        const selectedImg = document.querySelector('.selected-img');
        if (selectedImg) {
            selectedImg.classList.add('selected-img');
        }
    }

  


    colorCircles.forEach(circle => circle.addEventListener('click', handleCircleClick));
    whiteCircle.addEventListener('click', handleBackgroundCircleClick);
    blackCircle.addEventListener('click', handleBackgroundCircleClick);
    imageSwitch.addEventListener('change', handleImageSwitchChange);
    images.forEach(image => image.addEventListener('click', handleImageClick));

    loadSettings();
    updateSelectedElements();

});



























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

















