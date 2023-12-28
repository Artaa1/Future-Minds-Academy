let intervalId;

function startNotification(text) {
    function changeTitle() {
        let title = document.title;
        let favicon = document.querySelector('link[rel="icon"]');
        
        if (document.title == title) {
            document.title = text;

            if (favicon) {
                favicon.href = 'images/bell.png';
            }
        } else {
            document.title = title;

            if (favicon) {
                favicon.href = 'images/bee.png';
            }
        }
    }

    intervalId = setInterval(changeTitle, 100);
    changeTitle(); 
}

function endNotification() {
    if (intervalId) {
        clearInterval(intervalId);
    }

    document.title = 'JavaScript Hands-On';

    let favicon = document.querySelector('link[rel="icon"]');
    if (favicon) {
        favicon.href = 'images/bee.png';
    }
}