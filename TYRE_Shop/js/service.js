// JavaScript for modal image zoom
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('zoomModal');
    const modalImg = document.getElementById('modalImg');
    const zoomableImages = document.querySelectorAll('.zoomable');

    zoomableImages.forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImg.src = img.src;
        });
    });

    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName('close')[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
        modal.style.display = 'none';
    }
});
