const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const data = new FormData(form);
  const action = form.action;
  try {
    const response = await fetch(action, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    if (response.ok) {
      status.textContent = "Thanks for your message!";
      form.reset();
    } else {
      status.textContent = "Oops! Something went wrong.";
    }
  } catch (error) {
    status.textContent = "There was a problem submitting the form.";
  }
});
