// Demo only: a real site would send the form to Telegram or email from a small backend.
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form));
  console.log("booking request", data);
  form.reset();
  form.querySelector(".ok").hidden = false;
});
