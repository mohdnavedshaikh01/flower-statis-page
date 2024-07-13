document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.getElementById('thumbnail-list');
    const featuredImage = document.getElementById('featured-image');
    const figcaption = document.querySelector('figcaption');
    
    // Array of gallery items as JavaScript objects
    const galleryItems = [
        {
            filename: 'flowers-pink',
            alt: 'Pink Flowers',
            info: "These pink flowers bloom beautifully in springtime.",
            largeImage: 'images/flowers-pink-large.jpg',
            smallImage: 'images/flowers-pink-small.jpg'
        },
        {
            filename: 'flowers-purple',
            alt: 'Purple Flowers',
            info: "Purple flowers symbolize admiration and elegance.",
            largeImage: 'images/flowers-purple-large.jpg',
            smallImage: 'images/flowers-purple-small.jpg'
        },
        {
            filename: 'flowers-red',
            alt: 'Red Flowers',
            info: "Red flowers are often associated with love and passion.",
            largeImage: 'images/flowers-red-large.jpg',
            smallImage: 'images/flowers-red-small.jpg'
        },
        {
            filename: 'flowers-white',
            alt: 'White Flowers',
            info: "White flowers signify purity and innocence.",
            largeImage: 'images/flowers-white-large.jpg',
            smallImage: 'images/flowers-white-small.jpg'
        },
        {
            filename: 'flowers-yellow',
            alt: 'Yellow Flowers',
            info: "Yellow flowers evoke happiness and positivity.",
            largeImage: 'images/flowers-yellow-large.jpg',
            smallImage: 'images/flowers-yellow-small.jpg'
        }
        // Add more gallery items here as needed
    ];

    // Function to update gallery with selected item
    function updateGallery(item) {
        featuredImage.src = item.largeImage;
        featuredImage.alt = item.alt;
        figcaption.textContent = item.info;

        // Update active class for thumbnails
        thumbnails.querySelectorAll('img').forEach(img => {
            if (img.dataset.filename === item.filename) {
                img.classList.add('active');
            } else {
                img.classList.remove('active');
            }
        });
    }

    // Initial setup: Load first gallery item
    updateGallery(galleryItems[0]);

    // Populate thumbnail list and add click event listeners
    galleryItems.forEach(item => {
        const listItem = document.createElement('li');
        const img = document.createElement('img');
        img.src = item.smallImage;
        img.alt = item.alt;
        img.dataset.filename = item.filename; // Store filename in data attribute
        listItem.appendChild(img);
        thumbnails.appendChild(listItem);

        // Event listener for clicking thumbnails
        img.addEventListener('click', function() {
            updateGallery(item);
        });
    });
});
