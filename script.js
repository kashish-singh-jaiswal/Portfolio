// AOS initialization
AOS.init();

// Typewriter effect
const app = document.getElementById("typewriter");
const typewriter = new Typewriter(app, { loop: true });

typewriter
  .typeString("Hi, I'm Kashish")
  .pauseFor(100)
  .deleteAll()
  .typeString("Full Stack Developer 💻")
  .pauseFor(100)
  .typeString("MERN Stack Enthusiast 🌐")
  .pauseFor(100)
  .deleteAll()
  .typeString("Problem Solver 🚀")
  .pauseFor(100)
  .start();

// Back to Top Button
const backToTopBtn = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "flex";
  } else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Enable tooltips
const tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
tooltipTriggerList.map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));

// Contact Form Submission Handler (optional enhancement)
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  try {
    const response = await fetch(form.action, {
      method: form.method,
      headers: { Accept: "application/json" },
      body: formData,
    });
    if (response.ok) {
      status.textContent = "Message sent successfully!";
      form.reset();
    } else {
      status.textContent = "Oops! Something went wrong.";
    }
  } catch {
    status.textContent = "Network error. Try again later.";
  }
});
