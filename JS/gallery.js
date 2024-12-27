const images = [
    {
        preview: 'images/car1.jpg',
        original: 'images/car1.jpg',
        description: 'Car 1',
    },
    {
        preview: './images/car2.jpg',
        original: './images/car2.jpg',
        description: 'Car 2',
    },
    {
        preview: './images/car3.jpg',
        original: './images/car3.jpg',
        description: 'Car 3',
    },
    {
        preview: './images/car4.jpg',
        original: './images/car4.jpg',
        description: 'Car 4',
    },
    {
        preview: './images/car5.jpg',
        original: './images/car5.jpg',
        description: 'Car 5',
    },
    {
        preview: './images/car6.jpg',
        original: './images/car6.jpg',
        description: 'Car 6',
    },
];

const galleryContainer = document.querySelector('.gallery');

images.forEach(image => {
    const listItem = document.createElement('li');
    const imgElement = document.createElement('img');
    
    imgElement.src = image.preview;
    imgElement.alt = image.description;
    imgElement.dataset.original = image.original;
    imgElement.dataset.description = image.description;

    listItem.appendChild(imgElement);
    galleryContainer.appendChild(listItem);
});


galleryContainer.addEventListener('click', (event) => {
    
    if (event.target.tagName === 'IMG') {
        const originalImageUrl = event.target.dataset.original;
        const description = event.target.dataset.description;
        console.log('Original image URL:', originalImageUrl);
        
        const instance = basicLightbox.create(`
            
            <img src="${originalImageUrl}" alt="${description}">
            `);
            
        instance.show();
    }
});
