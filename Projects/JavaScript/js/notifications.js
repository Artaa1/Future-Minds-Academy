let defaultnewNotifications = [
    'John Doe sent a message',
    'Someone viewed your profile',
    'John Doe sent a message',
    'Someone viewed your profile',
    'Another notification',
];

let notifications;

if(localStorage.getItem('notifications')){
    notifications = JSON.parse(localStorage.getItem('notifications'));
}
else {
    localStorage.setItem("notifications", JSON.stringify(defaultnewNotifications));
}



let listElement = document.getElementById('notifications');
let containerElement = document.getElementById('notificationsContainer');
let iconElement = document.getElementById('notificationsIcon');

notifications.forEach((notification) => {
    let listItem = document.createElement('li');
    listItem.textContent = notification;
    listItem.style.padding = '8px';
    
    listElement.appendChild(listItem);
    
});

iconElement.addEventListener('click', function(){
    listElement.classList.toggle('active');
});


document.addEventListener('click', function(event) {
    if (!containerElement.contains(event.target) && !iconElement.contains(event.target)) {
        listElement.classList.remove('active');
    }
});

containerElement.setAttribute('data-notifications', notifications.length);


