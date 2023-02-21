console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const success = document.querySelector('[data-js="success"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  const checkBox = event.target.elements.tos;
  if (!checkBox.checked) {
    showTosError();
    return;
  } else {
    hideTosError();
  }
  // --^-- write your code here --^--
  alert("Form submitted"); // eslint-disable-next-line no-alert
  success.removeAttribute("hidden");
});
