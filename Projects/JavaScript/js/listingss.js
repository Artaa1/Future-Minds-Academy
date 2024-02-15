

document.addEventListener("DOMContentLoaded", function () {
    let listings = [
        {
            id: 1,
            name: 'Cozy 5 Stars Apartments',
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            autem`,
            price: '899',
            currency: '$',
            location: {
                city: 'Barcelona',
                country: 'Spain'
            },
            imgUrl: 'images/card-1.jpeg'
        },
        {
            id: 2,
            name: 'Office Studio',
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            autem`,
            price: '1119',
            currency: '$',
            location:
            {
                city: 'London',
                country: 'UK'
            },
            imgUrl: 'images/card-2.jpeg'
        },
        {
            id: 3,
            name: 'Beautiful Castle',
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            autem`,
            price: '459',
            currency: '$',
            location: {
                city: 'Milan',
                country: 'Italy'
            },
            imgUrl: 'images/card-3.jpeg'
        }
    ]
    // if (localStorage.getItem('listings')) {
    //     listings = JSON.parse(localStorage.getItem('listings'));

    // } else {
    //     listings = defaultListings;
    // }


    function saveListings() {
        localStorage.setItem('listings', JSON.stringify(listings));
    }

    function cardListings() {
        const listingsContainer = document.querySelector('.menage-content');
        listingsContainer.innerHTML = '';
    
        listings.forEach(listing => {
            const listingElement = document.createElement("div");
            listingElement.classList.add("menage-item");
            listingElement.dataset.id = listing.id;
    
            let cardHovered = document.createElement('div');
            cardHovered.classList.add('hover-card');
    
            let imgHover = document.createElement('div');
            imgHover.classList.add('menage-photo');
    
            let img = document.createElement('img');
            img.src = listing.imgUrl; 
            img.alt = 'Image of card';
    
            let cardIcons = document.createElement('div');
            cardIcons.classList.add('details-icon');
    
            let viewButton = createIconButton('burst_mode', 'View', function () {
                alert('You clicked the view button... nothing to do here!!');
            });
    
            let editButton = createIconButton('edit-icon', 'edit', function () {
                let editableElements = listingElement.querySelectorAll('.details-title, .details-paragraph, .price, .rome-location');
                if (editableElements.length > 0) {
                    let firstEditableElement = editableElements[0];
                    makeEditable(firstEditableElement);
                    saveListings();
                }
            });
    
            let deleteButton = createIconButton('close-icon', 'close', function () {
                let confirmDelete = confirm("Are you sure you want to delete this listing?");
                if (confirmDelete) {
                    listingElement.remove();
                    listings = listings.filter(item => item.id !== listing.id);
                    saveListings();
                }
            });
    
            cardIcons.appendChild(viewButton);
            cardIcons.appendChild(editButton);
            cardIcons.appendChild(deleteButton);
    
            imgHover.appendChild(img);
            imgHover.appendChild(cardIcons);
    
            cardHovered.appendChild(imgHover);
    
            let detailsMore = document.createElement('div');
            detailsMore.classList.add('details-more');
    
            let detailsTitle = document.createElement('p');
            detailsTitle.classList.add('details-title');
            detailsTitle.textContent = listing.name;
    
            let detailsParagraph = document.createElement('p');
            detailsParagraph.classList.add('details-paragraph');
            detailsParagraph.textContent = listing.description;
    
            [detailsTitle, detailsParagraph].forEach(element => {
                element.addEventListener('click', function () {
                    makeEditable(element);
                });
            });

            let separator = document.createElement('div');
            separator.classList.add('horizontal-line');
    
            let bottomContent = document.createElement('div');
            bottomContent.classList.add('rome-price');
            let priceSpan = createEditableElement('div', 'price', `${listing.price}${listing.currency}/night`);
            let locationSpan = createEditableElement('div', 'location', `${listing.location.city}, ${listing.location.country}`);
    
            detailsMore.appendChild(detailsTitle);
            detailsMore.appendChild(detailsParagraph);
            bottomContent.appendChild(priceSpan);
            bottomContent.appendChild(locationSpan);
    
            detailsMore.appendChild(detailsTitle);
            detailsMore.appendChild(detailsParagraph);
            detailsMore.appendChild(separator);
            detailsMore.appendChild(bottomContent);
    
            listingElement.appendChild(cardHovered);
            listingElement.appendChild(detailsMore );
            listingElement.appendChild(separator);
            listingElement.appendChild(bottomContent);
            listingsContainer.appendChild(listingElement);
        });
    }

    function createIconButton(iconName, tooltip, clickHandler) {
        let button = document.createElement('span');
        button.classList.add('tooltip-view', 'material-symbols-outlined');
        button.title = tooltip;
        button.dataset.tooltip = tooltip;
        button.innerHTML = `<span class="material-symbols-outlined">${iconName}</span>`;

        if (iconName === 'burst_mode') {
            button.classList.add('tooltip-view');
        } else if (iconName === 'edit') {
            button.classList.add('tooltip-edit');
        } else if (iconName === 'close') {
            button.classList.add('tooltip-close');
        }

        if (clickHandler) {
            button.addEventListener('click', clickHandler);
        }
        return button;
    }
    

    function createEditableElement(tagName, className, textContent) {
                let element = document.createElement(tagName);
                element.classList.add(className);
                element.contentEditable = false;
                element.innerHTML = textContent;
                element.addEventListener('click', function () {
                    makeEditable(element);
                });
                return element;
            }
    function makeEditable(element) {
                element.contentEditable = true;
                element.focus();

                element.addEventListener('blur', function () {
                    element.contentEditable = false;
                    let newText = element.innerHTML.trim();
                    if (newText !== '') {
                        let listingElement = element.closest('.menage-item');
                        let id = parseInt(listingElement.dataset.id);
                        let listing = listings.find(item => item.id === id);

                        if (element.classList.contains('details-title')) {
                            listing.name = newText;
                        } else if (element.classList.contains('details-paragraph')) {
                            listing.description = newText;
                        } else if (element.classList.contains('price')) {
                            let newPrice = parseFloat(newText);
                            if (!isNaN(newPrice)) {
                                listing.price = newPrice;
                            }
                        } else if (element.classList.contains('rome-location')) {
                            let [newCity, newCountry] = newText.split(',').map(item => item.trim());
                            listing.location.city = newCity;
                            listing.location.country = newCountry;
                        }

                        saveListings();
                        cardListings();
                    }
                });

                element.addEventListener('keydown', function (event) {
                    if (event.key === 'Enter') {
                        element.blur();
                    }
                });
            }

   

    window.addEventListener('click', function (event) {
                let modal = document.getElementById('editModal');
                if (event.target === modal) {
                    modal.style.display = 'none';
                }
            });

        let closeModalButton = document.querySelector('.close');
        closeModalButton.addEventListener('click', function () {
            let modal = document.getElementById('editModal');
            modal.style.display = 'none';
        });

        cardListings();
    });




//
//
//
///
//////
/////


/*detailsMore.appendChild(detailsTitle);
detailsMore.appendChild(detailsParagraph);

card.appendChild(detailsMore);

// Shto çmimin dhe lokacionin e kartës
let romePrice = document.createElement('div');
romePrice.classList.add('rome-price');

let price = document.createElement('div');
price.classList.add('price');
price.textContent = listing.currency + listing.price + '/night';

let romeLocation = document.createElement('div');
romeLocation.classList.add('rome-location');

let locationIcon = document.createElement('i');
locationIcon.classList.add('material-icons');
locationIcon.textContent = '';

let locationSpan = document.createElement('span');
locationSpan.classList.add('location1');
locationSpan.textContent = listing.location.city + ', ' + listing.location.country;

romeLocation.appendChild(locationIcon);
romeLocation.appendChild(locationSpan);

romePrice.appendChild(price);
romePrice.appendChild(romeLocation);

card.appendChild(romePrice);

cardWrapper.appendChild(card);
listingsContainer.appendChild(cardWrapper);

// Funksioni për krijuar ikona
function createIconButton(iconClass, tooltip, clickHandler) {
    let iconButton = document.createElement('span');
    iconButton.classList.add('material-symbols-outlined', iconClass);
    
    let tooltipSpan = document.createElement('span');
    tooltipSpan.classList.add('tooltip-' + tooltip.toLowerCase());
    tooltipSpan.textContent = tooltip;
    
    iconButton.appendChild(tooltipSpan);
    
    iconButton.addEventListener('click', clickHandler);
    
    return iconButton;
}


});*/
