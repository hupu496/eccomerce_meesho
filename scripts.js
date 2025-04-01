// JavaScript for Meesho Clone - script.js

// Function to change main product image
function changeMainImage(thumbnailElement, newImageSrc) {
    // Update main image with animation
    const mainImage = document.getElementById('mainImage');
    mainImage.style.opacity = '0.5';
    
    setTimeout(() => {
        mainImage.src = newImageSrc;
        mainImage.style.opacity = '1';
    }, 200);
    
    // Remove active class from all thumbnails
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(thumb => {
        thumb.classList.remove('active');
    });
    
    // Add active class to clicked thumbnail
    thumbnailElement.classList.add('active');
}
 document.addEventListener('DOMContentLoaded', function() {
            const phoneInput = document.getElementById('phoneInput');
            const continueBtn = document.getElementById('continueBtn');
            const errorMessage = document.getElementById('errorMessage');
            
            phoneInput.addEventListener('input', function() {
                // Only allow digits
                this.value = this.value.replace(/[^0-9]/g, '');
                
                // Validate phone number (10 digits for India)
                if (this.value.length === 10) {
                    continueBtn.disabled = false;
                    errorMessage.style.display = 'none';
                } else {
                    continueBtn.disabled = true;
                    if (this.value.length > 0) {
                        errorMessage.style.display = 'block';
                    } else {
                        errorMessage.style.display = 'none';
                    }
                }
            });
            
            continueBtn.addEventListener('click', function() {
                // Show loading or simulate OTP sending
                this.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending OTP...';
                
                // Simulate API call
                setTimeout(() => {
                    alert('OTP sent to ' + phoneInput.value);
                    this.innerHTML = 'Continue';
                }, 1500);
            });
        });

// Function to select size
// function selectSize(button) {
//     // Remove selected class from all size buttons
//     const sizeButtons = document.querySelectorAll('.size-btn');
//     sizeButtons.forEach(btn => {
//         btn.classList.remove('selected');
//     });
    
//     // Add selected class to clicked button with animation
//     button.classList.add('selected');
    
//     // Visual feedback animation
//     button.style.transform = 'scale(1.1)';
//     setTimeout(() => {