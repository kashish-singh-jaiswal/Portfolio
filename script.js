// Typewriter
const typewriter = document.getElementById('typewriter');
if (typewriter) {
  new Typewriter(typewriter, {
    strings: ['Hi, I\'m Kashish.', 'Full Stack Developer.'],
    autoStart: true,
    loop: true,
  });
}

// Back to Top
const backToTop = document.getElementById("back-to-top");
window.onscroll = () => {
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";
};
backToTop.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
