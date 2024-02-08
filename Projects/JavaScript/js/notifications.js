let defaultnewNotifications = [
    'John Doe sent a message',
    'Someone viewed your profile',
    'John Doe sent a message',
    'Someone viewed your profile',
    'Another notification',
];

localStorage.setItem("notifications", JSON.stringify(defaultnewNotifications));
let notifications = JSON.parse(localStorage.getItem('notifications'));

let listElement = document.getElementById('notifications');
let containerElement = document.getElementById('notificationsContainer');
let iconElement = document.getElementById('notificationsIcon');

notifications.forEach((notification) => {
    let listItem = document.createElement('li');
    listItem.textContent = notification;
    listItem.style.padding = 8 +'px';
    listItem.classList.add('notification-item');
    listElement.appendChild(listItem);
    
});

iconElement.addEventListener('click', function(){
    listElement.classList.toggle('active');
});



containerElement.setAttribute('data-notifications', notifications.length);


