const form_el = document.getElementById("form");
const inputs_el = document.querySelectorAll(".form-group input");
const email_el = document.getElementById("email");
const submitBtn = document.getElementById("submitBtn");
const formGroups = document.querySelectorAll(".form-group");

form_el.addEventListener("submit", (e) => {
  clearAllWarnings();

  showWarnings();

  e.preventDefault();
});

function showWarnings() {
  inputs_el.forEach((input) => {
    if (input.value === "") {
      const icon = document.createElement("i");
      icon.className = "fa-solid fa-circle-exclamation";

      const warningText = document.createElement("small");
      warningText.classList.add("unfilled-text");
      warningText.textContent = `${input.placeholder} cannot be empty`;

      input.parentElement.appendChild(icon);
      input.parentElement.appendChild(warningText);

      input.style.border = "1px solid hsl(0, 100%, 74%)";
    }
  });

  if (email_el.value !== "") {
    ValidateEmail(email_el);
  }
}

function clearAllWarnings() {
  inputs_el.forEach((input) => {
    while (input.nextElementSibling !== null) {
      input.nextElementSibling.remove();
      input.style.border = "1px solid hsl(246, 25%, 77%)";
    }
  });
}

function ValidateEmail(input) {
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value)) {
    const icon = document.createElement("i");
    icon.className = "fa-solid fa-circle-exclamation";

    const warningText = document.createElement("small");
    warningText.classList.add("unfilled-text");
    warningText.textContent = `${input.placeholder} seems to be unvalid`;

    input.parentElement.appendChild(icon);
    input.parentElement.appendChild(warningText);
    input.style.border = "1px solid hsl(0, 100%, 74%)";
  }
}
