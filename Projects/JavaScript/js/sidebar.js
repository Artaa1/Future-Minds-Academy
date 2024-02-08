let sidebarControl = document.getElementById('sidebar-control');
let sidebar = document.getElementById('side-bar');

sidebarControl.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed')
})





let expandIcon = document.querySelectorAll('.expland');

expandIcon.forEach(function(icon) {
    icon.addEventListener('click', function(){
        let parentItem = icon.closest('.menu-bar');
        let dropdown = parentItem.querySelector('.dropdown-list');

        if(dropdown) {
            parentItem.classList.toggle('active');
            icon.classList.toggle('rotate');

            if(parentItem.classList.contains('active')){
                let dropdownHeight = dropdown.offsetHeight;
                parentItem.style.marginBottom = dropdownHeight + 'px';
            } else {
                parentItem.style.marginBottom = '0';
            }
        }
    })
})

let expand1Icon = document.querySelectorAll('.expland1');

expandIcon.forEach(function(icon) {
    icon.addEventListener('click', function(){
        let parentItem = icon.closest('.user');
        let dropdown = parentItem.querySelector('.dropdown-list');

        if(dropdown) {
            parentItem.classList.toggle('active');
            icon.classList.toggle('rotate');

            if(parentItem.classList.contains('active')){
                let dropdownHeight = dropdown.offsetHeight;
                parentItem.style.marginBottom = dropdownHeight + 'px';
            } else {
                parentItem.style.marginBottom = '0';
            }
        }
    })
})

