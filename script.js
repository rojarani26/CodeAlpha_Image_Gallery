const images = [
    './img/image1.jpeg',
    './img/image2.jpeg',
    './img/image3.jpeg',
    './img/image4.jpeg',
    './img/image5.jpeg',
    './img/image6.jpeg',
    './img/image7.jpeg',
    './img/image8.jpeg',
    './img/image9.jpeg',
    './img/image10.jpeg',
    './img/image11.jpeg',
    './img/image12.jpeg'
];

let currentIndex = 0;

function openModal(index) {
    currentIndex = index; 
    document.getElementById('modalImage').src = images[currentIndex]; 
    document.getElementById('imageModal').style.display = 'flex'; 
}

function closeModal() {
    document.getElementById('imageModal').style.display = 'none'; 
}

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = images.length - 1; 
    } else if (currentIndex >= images.length) {
        currentIndex = 0; 
    }
    document.getElementById('modalImage').src = images[currentIndex]; 
}
