// Get the modal
const modal = document.getElementById("formModal");
const modalcontent = document.getElementById("formModal");
const btn = document.querySelector(".form-button");
let span = document.getElementsByClassName("close")[0];

// Get the button that opens the modal
document.querySelector(".form-button").addEventListener("click", onclick);

// Get the <span> element that closes the modal

// When the user clicks on the button, open the modal
btn.onclick = function (e) {
  e.preventDefault();
  e.stopPropagation();
  modalcontent.innerHTML = "";
  const formEl = document.querySelector("form").elements;
  console.log(formEl);
  const formValue = document.createElement("div");
  formValue.className = "formModal-content";
  Object.keys(formEl).forEach((element) => {
    debugger;
    if (!parseInt(element) && element != 0 && formEl[element].value !== "") {
      let p = document.createElement("p");
      p.innerHTML = `<strong>${element}</strong> : ${formEl[element].value}`;
      formValue.appendChild(p);
    }
  });

  modal.appendChild(formValue);
  let modalClosing = document.createElement("span");
  modalClosing.className = "close";
  modalClosing.innerHTML = `&times;`;

  modal.appendChild(modalClosing);

  modal.className == "formModal-active"
    ? (modal.className = "formModal")
    : (modal.className = "formModal-active");

  Object.keys(formEl).forEach((element) => {
    formEl[element].value = "";
  });
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.className == "formModal-active"
    ? (modal.className = "formModal")
    : (modal.className = "formModal-active");
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target !== modal && event.target !== btn) {
    modal.className = "formModal";
  }
};
