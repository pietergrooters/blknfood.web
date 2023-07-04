const galleryImages = document.querySelectorAll('.gallery-image');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const closeBtn = document.getElementsByClassName('close')[0];
const prevBtn = document.getElementsByClassName('prev')[0];
const nextBtn = document.getElementsByClassName('next')[0];
let currentImageIndex = 0;

// Open modal with clicked image
galleryImages.forEach((image, index) => {
  image.addEventListener('click', () => {
    currentImageIndex = index;
    modalImage.src = image.src;
    modal.style.display = 'block';
  });
});

// Close modal
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Previous image
prevBtn.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
  modalImage.src = galleryImages[currentImageIndex].src;
});

// Next image
nextBtn.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
  modalImage.src = galleryImages[currentImageIndex].src;
});

// Close modal when clicking outside the image
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
})