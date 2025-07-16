document.addEventListener('DOMContentLoaded', () => {
  // Initialize AOS animations
  if (typeof AOS !== 'undefined') {
    AOS.init();
  }

  // === Typewriter Effect ===
  const typewriterElement = document.getElementById('typewriter');
  if (typewriterElement && typeof Typewriter !== 'undefined') {
    const typewriter = new Typewriter(typewriterElement, {
      loop: true,
      delay: 75,
      deleteSpeed: 50,
      autoStart: true,
      strings: [
        "Hi, I'm Kashish.",
        "Welcome to my portfolio.",
        "Let's build something amazing together!"
      ]
    });

    // Optionally, you can use chained methods if needed:
    // typewriter
    //   .typeString("Hi, I'm Kashish")
    //   .pauseFor(1000)
    //   .deleteAll()
    //   .typeString("Full Stack Developer")
    //   .pauseFor(1000)
    //   .start();
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
=======
AOS.init();

  const typewriter = new Typewriter(document.getElementById('typewriter'), {
    loop: true,
    delay: 75,
  });

  typewriter
    .typeString("Hi, I'm Kashish")
    .pauseFor(1000)
    .deleteAll()
    .typeString("Full Stack Developer")
    .pauseFor(1000)
    .start();
>>>>>>> 8d5add6a33c0565698c1cff3c2c09b43f30c9eec
