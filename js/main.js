(() => {
    const slider = document.querySelector('#image-slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('#prev-btn');
    const nextBtn = document.querySelector('#next-btn');
    let slideWidth = slides[0].clientWidth;
    let currentIndex = 2;

    function showSlide(index) {
        const newTransformValue = -index * slideWidth + 'px';
        slider.style.transition = 'transform 0.5s ease-in-out';
        slider.style.transform = 'translateX(' + newTransformValue + ')';
    }

    function nextSlide() {
        currentIndex++;
        if (currentIndex >= slides.length) {
            currentIndex = 0;
        }
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = slides.length - 1;
        }
        showSlide(currentIndex);
    }

    function updateSlideWidth() {
        slideWidth = slides[0].clientWidth;
        showSlide(currentIndex); // Adjust the position of the current slide on resize
    }

    // Attach click event handlers to buttons using event listeners
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    window.addEventListener('resize', updateSlideWidth);

    // Call updateSlideWidth initially to set the correct initial slide width
    updateSlideWidth();
})();

    // Function to open the modal
    function openModal() {
        var modal = document.getElementById("popupModal");
        modal.style.display = "block";
    }

    // Function to close the modal
    function closeModal() {
        var modal = document.getElementById("popupModal");
        modal.style.display = "none";
    }

    // Function to handle subscription button click
    function subscribeClicked() {
        openModal();
    }