document.addEventListener('DOMContentLoaded', () => {
  // === Typewriter Effect ===
  const typewriterElement = document.getElementById('typewriter');
  if (typewriterElement && typeof Typewriter !== 'undefined') {
    new Typewriter(typewriterElement, {
      strings: ["Hi, I'm Kashish.", "Welcome to my portfolio.", "Let's build something amazing together!"],
      autoStart: true,
      loop: true,
      delay: 75,
      deleteSpeed: 50,
    });
  }

  // === Back to Top Button ===
  const backToTopBtn = document.getElementById('back-to-top');

  if (backToTopBtn) {
    // Show or hide the button based on scroll position
    const toggleBackToTop = () => {
      if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
        backToTopBtn.classList.add('fade-in');
        backToTopBtn.classList.remove('fade-out');
      } else {
        backToTopBtn.classList.add('fade-out');
        backToTopBtn.classList.remove('fade-in');
        setTimeout(() => {
          backToTopBtn.style.display = 'none';
        }, 300); // Match this with fade-out duration
      }
    };

    // Scroll event listener
    window.addEventListener('scroll', toggleBackToTop);

    // Scroll to top smoothly on click
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Initial state check
    toggleBackToTop();
  }
});
