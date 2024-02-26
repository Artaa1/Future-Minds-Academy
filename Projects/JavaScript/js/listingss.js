


let cardsData = [
    {
        
        id: `1`,
        name: `Cozy 5 Star Apartment`,
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci praesentium eligendi, deserunt quasi exercitationem, nam sunt quis iure quod voluptate deleniti obcaecati tempore facere blanditiis suscipit. Provident error. `,
        currency: `$`,
        price: `$899/night`,
        location: {
            city: `Barcelona`,
            country: `Spain`
        },
        imgUrl: `images/card-1.jpeg`
    },
    {
        
        id: `2`,
        name: `Office Studio`,
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci praesentium eligendi, deserunt quasi exercitationem, nam sunt quis iure quod voluptate deleniti obcaecati tempore facere blanditiis suscipit. Provident error. `,
        currency: `$`,
        price: `$1.119/night`,
        location: {
            city: `London`,
            country: `UK`
        },
        imgUrl: `images/card-2.jpeg`
    },
    {
        
        id: `3`,
        name: `Beautiful Castle`,
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci praesentium eligendi, deserunt quasi exercitationem, nam sunt quis iure quod voluptate deleniti obcaecati tempore facere blanditiis suscipit. Provident error. `,
        currency: `$`,
        price: `$459/night`,
        location: {
            city: `Milan`,
            country: `Italy`
        },
        imgUrl: `images/card-3.jpeg`
    }
];


let storedCardsData = JSON.parse(localStorage.getItem('cardsData'));


if (!storedCardsData || storedCardsData == ``) {
    localStorage.setItem('cardsData', JSON.stringify(cardsData));
    storedCardsData = JSON.parse(localStorage.getItem('cardsData'));
}

let section = document.getElementById(`cards`);



let cards = document.querySelectorAll('.card');

storedCardsData.forEach(card => {
   
    let cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    cardDiv.id = card.id;

   
    cardDiv.innerHTML = `
    <div class="animation">
        <img src="${card.imgUrl}" alt="card-1">
        <div class="animationIcons">
            <span class="material-symbols-outlined cgrey cpointer changePhoto" title="More">
                photo_library
            </span>
            <span class="material-symbols-outlined cgreen cpointer edit" title="Edit">
                edit
            </span>
            <span class="material-symbols-outlined cred cpointer delet" title="Close">
                close
            </span>
        </div>
    </div>
    <h1 class="cardH1 name">${card.name}</h1>
    <p class="description">${card.description}</p>
    <hr>
    <div class="cardBottom">
        <h1 class="price">${card.price}</h1>
        <p class="cardBottomP location"><span class="material-symbols-outlined location1 ">
                location_on
            </span> <span class="city">${card.location.city}</span>&nbsp<span class="country">${card.location.country}</span></p>
    </div>
    `;

   
    section.appendChild(cardDiv);
});


let animationIcons = document.querySelectorAll('.animationIcons');


animationIcons.forEach(function (icons) {
   
    let changePhotoIcon = icons.querySelector('.changePhoto');
    let editIcon = icons.querySelector('.edit');
    let deleteIcon = icons.querySelector('.delet');

    changePhotoIcon.addEventListener('click', function () {
        
        let closestImg = icons.closest('.animation').querySelector('img');

      
        let cardId = icons.closest('.card').id;
        let cardDataIndex = storedCardsData.findIndex(data => data.id === cardId);

   
       

       
        if (newImageUrl) {
           
            closestImg.src = newImageUrl;

        
            if (cardDataIndex !== -1) {
              
                storedCardsData[cardDataIndex].imgUrl = newImageUrl;
            }

            localStorage.setItem('cardsData', JSON.stringify(storedCardsData));
        } else {
            console.error('No image URL provided.');
        }
    });



    editIcon.addEventListener('click', function () {
     
        let card = icons.closest('.card');
        editIcon.innerHTML = `
        <i class="material-icons">bookmark_added</i>`;


        let cardId = card.id;
        let cardDataIndex = storedCardsData.findIndex(data => data.id === cardId);

 
        let nameElement = card.querySelector('.name');
        let descriptionElement = card.querySelector('.description');
        let priceElement = card.querySelector('.price');
        let cityElement = card.querySelector('.city');
        let countryElement = card.querySelector('.country');

  
        let edited = nameElement.contentEditable === 'true';

        if (!edited) {
        
            nameElement.contentEditable = true;
            descriptionElement.contentEditable = true;
            priceElement.contentEditable = true;
            cityElement.contentEditable = true;
            countryElement.contentEditable = true;

            nameElement.style.border = '1px solid #ccc';
            descriptionElement.style.border = '1px solid #ccc';
            priceElement.style.border = '1px solid #ccc';
            cityElement.style.border = '1px solid #ccc';
            countryElement.style.border = '1px solid #ccc';
        } else {

            editIcon.innerHTML = `edit`

            nameElement.contentEditable = false;
            descriptionElement.contentEditable = false;
            priceElement.contentEditable = false;
            cityElement.contentEditable = false;
            countryElement.contentEditable = false;

      
            nameElement.style.border = 'none';
            descriptionElement.style.border = 'none';
            priceElement.style.border = 'none';
            cityElement.style.border = 'none';
            countryElement.style.border = 'none';

    
            console.log(nameElement.textContent)
            storedCardsData[cardDataIndex].name = nameElement.textContent.trim();
            storedCardsData[cardDataIndex].description = descriptionElement.textContent.trim();
            storedCardsData[cardDataIndex].price = priceElement.textContent.trim();
            storedCardsData[cardDataIndex].location.city = cityElement.textContent.trim();
            storedCardsData[cardDataIndex].location.country = countryElement.textContent.trim();

           
            console.log(storedCardsData[cardDataIndex]);
      
            localStorage.setItem('cardsData', JSON.stringify(storedCardsData));
        }
    });







//                 if (editableElements.length > 0) {
//                     let firstEditableElement = editableElements[0];
//                     makeEditable(firstEditableElement);
//                     saveListingsToLocalStorage();
//                 }
//             });

//             // let deleteButton = createIconButton('close', 'Delete', function () {
//             //     let confirmDelete = confirm;
//             //     if (confirmDelete) {
//             //         listings = listings.filter(item => item.id !== listing.id);
//             //         renderListings();
//             //         saveListingsToLocalStorage();
//             //     }
//             // });
//             let deleteButton = createIconButton('close', 'Delete', function (event) {
//                 let cardWrapper = event.target.closest('.card-wraper');
//                 let id = parseInt(cardWrapper.dataset.id);
//                 let listing = listings.find(item => item.id === id);

//                 let confirmDelete = confirm;
//                 if (confirmDelete) {
//                     cardWrapper.classList.add('delete-animation');
//                     setTimeout(function () {
//                         cardWrapper.remove();
//                         listings = listings.filter(item => item.id !== listing.id);
//                         saveListingsToLocalStorage();
//                         renderListings();
//                     }, 500); 
//                 }
//             });


//     }


//     function createIconButton(iconName, tooltip, clickHandler) {
//         let button = document.createElement('span');
//         button.classList.add('header-icon', 'tooltip-hover');
//         button.title = tooltip;
//         button.dataset.tooltip = tooltip;
//         button.innerHTML = `<span class="material-icons">${iconName}</span>`;

//         if (iconName === 'burst_mode') {
//             button.classList.add('view-icon');
//         } else if (iconName === 'edit') {
//             button.classList.add('edit-icon');
//         } else if (iconName === 'close') {
//             button.classList.add('delete-icon');
//         }

//         if (clickHandler) {
//             button.addEventListener('click', clickHandler);
//         }
//         return button;
//     }

//     window.addEventListener('click', function (event) {
//         let modal = document.getElementById('editModal');
//         if (event.target === modal) {
//             modal.style.display = 'none';
//         }
//     });*/
 
deleteIcon.addEventListener('click', function () {
     
    let card = icons.closest('.card');
    let cardId = card.id;

    card.remove();

    
    let indexToDelete = storedCardsData.findIndex(data => data.id === cardId);


    if (indexToDelete !== -1) {
        storedCardsData.splice(indexToDelete, 1);

  
        localStorage.setItem('cardsData', JSON.stringify(storedCardsData));
    }
});
});