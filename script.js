const slider = document.querySelector('.slider');
let isHovered = false;
let offset = 0;

// Move the slider automatically
function startSlider() {
  setInterval(() => {
    if (!isHovered) {
      offset -= 220; // Adjust based on slide width + gap
      const maxOffset = -slider.scrollWidth + slider.parentElement.offsetWidth;
      if (offset < maxOffset) offset = 0; // Reset to beginning
      slider.style.transform = `translateX(${offset}px)`;
    }
  }, 2000); // Adjust interval speed
}

// Pause on hover
slider.addEventListener('mouseenter', () => (isHovered = true));
slider.addEventListener('mouseleave', () => (isHovered = false));

// Open page on slide click
function openPage(url) {
  window.open(url, '_blank');
}

startSlider();

//---------------hamburger icon---------------------------------

const hamburgerMenu = document.querySelector('.hamburger-menu');
const linksNav = document.querySelector('.links-nav');

hamburgerMenu.addEventListener('click', () => {
    linksNav.classList.toggle('active');
});

// -------------------------------------------



// Initialize Typed.js for typing effect
document.addEventListener("DOMContentLoaded", () => {
    const options = {
      strings: ["BAZ CREATIVE MEDIA", "باز كرييتف ميديا"],
      typeSpeed: 100, // Speed of typing
      backSpeed: 50,  // Speed of backspacing
      backDelay: 1000, // Delay before backspacing
      startDelay: 500, // Delay before starting the first sentence
      loop: true, // Enable looping
      showCursor: true, // Show blinking cursor
      cursorChar: "|", // Cursor character
    };
  
    // Create Typed.js instance
    new Typed("#animated-title", options);
  });

  
  // ------------------------------



  // Check screen size and modify behavior
const sliderr = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');

function handleResize() {
  if (window.innerWidth <= 768) {
    // Stop slider movement
    sliderr.style.transition = 'none';
  } else {
    // Enable normal slider behavior
    sliderr.style.transition = 'transform 0.5s ease-in-out';
  }
}

// Add resize event listener
window.addEventListener('resize', handleResize);

// Initial check on load
handleResize();


// -------------button move slider------------------

let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    currentSlide += direction;
    
    // إذا كان السلايد في آخر الصورة، يرجع إلى أول صورة
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    // إذا كان السلايد في أول صورة، يذهب إلى آخر صورة
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}


//---------------function to download pdf-------------------------
function downloadPDF() {
    
    const pdfUrl = 'company-profile.pdf';
    window.open(pdfUrl, '_blank'); // فتح الملف في نافذة جديدة
}



//----------------social media section-------------------

// عند التمرير، افحص موقع القسم وأضف الكلاس 'active'
window.addEventListener("scroll", function () {
    const section = document.querySelector(".social-media-section");
    const sectionPosition = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (sectionPosition < screenPosition) {
        section.classList.add("active");
    }
});


// الحصول على زر الواتساب
const whatsappBtn = document.getElementById('whatsapp-btn');

// إضافة حدث التمرير
window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        whatsappBtn.classList.add('show'); // إظهار الزر
    } else {
        whatsappBtn.classList.remove('show'); // إخفاء الزر
    }
});
