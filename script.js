document.addEventListener('DOMContentLoaded', () => {
  // === Initialize AOS animations ===
  if (typeof AOS !== 'undefined') {
    AOS.init();
  }

  // === Back to Top Button ===
  const backToTopBtn = document.getElementById('back-to-top');

  if (backToTopBtn) {
    // Toggle visibility of the button on scroll
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
        }, 300); // Matches fade-out duration
      }
    };

    // Scroll event listener
    window.addEventListener('scroll', toggleBackToTop);

    // Click scroll-to-top behavior
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Initial visibility check
    toggleBackToTop();
  }
});
