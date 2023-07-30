
// Get the container element where clouds will be added
const container = document.getElementById('cloudContainer');

// Array of cloud images
const cloudImages = [
    './img/cloud-1.png',
    './img/cloud-2.png',
    './img/cloud-3.png',
]

// Function to generate a random number between min and max
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

// Function to create a cloud image element and add it to the container with random positions, animation properties, and image
function createCloud() {
    const cloudImg = document.createElement('img');
    cloudImg.classList.add('cloud');
    container.appendChild(cloudImg);

    // Generate random positions for the cloud
    const randomX = getRandomNumber(0, window.innerWidth);
    const randomY = getRandomNumber(0, window.innerHeight - 100); // Limit the vertical range

    // Generate random animation duration and delay for the cloud
    const randomDuration = getRandomNumber(8, 15); // Random duration between 8s and 15s
    const randomDelay = getRandomNumber(0, 5); // Random delay between 0s and 5s

    // Select a random cloud image from the array
    const randomImage = cloudImages[Math.floor(Math.random() * cloudImages.length)];

    // Set the random positions, animation properties, and image
    cloudImg.style.left = `${randomX}px`;
    cloudImg.style.top = `${randomY}px`;
    cloudImg.style.animationDuration = `${randomDuration}s`;
    cloudImg.style.animationDelay = `${randomDelay}s`;
    cloudImg.src = randomImage;
}

// Create multiple clouds (you can adjust this number as needed)
const numberOfClouds = 10;
for (let i = 0; i < numberOfClouds; i++) {
    createCloud();
}
