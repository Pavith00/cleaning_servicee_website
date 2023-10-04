document.addEventListener('DOMContentLoaded', function () {
    
    const fadeInElement = document.querySelector('.fade-up');

    
    const fadeRightElements = document.querySelectorAll('.fade-right');

    function checkScroll() {
        
        const scrollPosition = window.scrollY;
        const fadeRightStart = 300; 

        
        if (fadeInElement) {
            fadeInElement.classList.add('active');
        }

        // Loop through each element with the "fade-right" class
        fadeRightElements.forEach((element, index) => {
            // Calculate the delay based on the element's index
            const delay = index * 300; 

           
            if (scrollPosition >= fadeRightStart + delay) {
                element.classList.add('active');
            }
        });
        fadeLeftElements();
    }

    // Call checkScroll when the page is loaded and when it's scrolled
    checkScroll();
    window.addEventListener('scroll', checkScroll);

    const sections = document.querySelectorAll('section');
    const links = document.querySelectorAll('#navbar a.nav-link');

    function changeActiveLink() {
        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
                links.forEach((link) => {
                    link.classList.remove('active');
                });
                links[index].classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', changeActiveLink);

});

function fadeLeftElements() {
    const fadeLeftElements = document.querySelectorAll('.fade-left');

    const scrollPosition = window.scrollY;
    const fadeLeftStart = 1200; // Adjust this value as needed

    fadeLeftElements.forEach((element, index) => {
        const delay = index * 350; // Adjust this value if needed

        if (scrollPosition >= fadeLeftStart + delay) {
            element.classList.add('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const header = document.getElementById('header'); // Get the header element
    const homeSection = document.getElementById('home'); // Get the home section element

    function checkScroll() {
        // Get the current scroll position
        const scrollPosition = window.scrollY;

        // Get the offset of the home section from the top of the page
        const homeSectionOffset = homeSection.offsetTop;

        // Define a scroll threshold (adjust as needed)
        const scrollThreshold = 500;

        // Check if the scroll position is below the home section
        if (scrollPosition > homeSectionOffset + scrollThreshold) {
            // User has scrolled away from the home section
            header.style.backgroundColor = '#008B8B'; // Set the desired background color
        } else {
            // User is still in the home section
            header.style.backgroundColor = 'rgba(103, 176, 209, 0.8)'; // Set the transparent background color
        }
    }

    // Call checkScroll when the page is loaded and when it's scrolled
    checkScroll();
    window.addEventListener('scroll', checkScroll);
});




