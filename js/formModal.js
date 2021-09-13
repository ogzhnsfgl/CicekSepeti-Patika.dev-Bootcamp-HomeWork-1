// Get all required elements
const modal = document.getElementById("formModal");
const modalcontent = document.getElementById("formModal");
const btn = document.querySelector(".form-button");
const formEl = document.querySelector("form").elements;

// Form button click event
document.querySelector(".form-button").addEventListener("click", onclick);
document.getElementsByClassName("close")[0].addEventListener("click", close);

//Create new element for modal content
const modalContent = document.createElement("div");
modalContent.className = "formModal-content";

// Button lick function
btn.onclick = function (e) {
  e.preventDefault();
  e.stopPropagation();
  //Clear old data from Modal Content
  modalcontent.innerHTML = "";
  modalContent.innerHTML = "";
  // Get form to reach form input values
  const form = document.querySelector("form");
  const data = new FormData(form);
  // Iterate all key of inputs
  for (var key of data.keys()) {
    //Send key createItem function
    createItem(key);
  }
  //Check modal content exist then open or close modal
  if (modalContent.innerHTML !== "") {
    chechActive();
  } else {
    alert("Empty form can not submit!");
  }
};

// Close button click function
function close() {
  chechActive();
  // Clear form input fields
  Object.keys(formEl).forEach((item) => {
    formEl[item].value = "";
  });
}

function createItem(key) {
  // check the value of the key exist
  if (formEl[key].value === "") {
    return;
  }
  // create and fill p element
  let p = document.createElement("p");
  p.innerHTML = `<strong>${key}</strong> : ${formEl[key].value}`;
  modalContent.appendChild(p);

  //Append p element to modal content
  modal.appendChild(modalContent);
  //create close span and append it modal content
  let modalClosing = document.createElement("span");
  modalClosing.className = "close";
  modalClosing.innerHTML = `&times;`;
  modalClosing.onclick = close;
  modal.appendChild(modalClosing);
}

function chechActive() {
  //Check the state of modal
  modal.className == "formModal-active"
    ? (modal.className = "formModal")
    : (modal.className = "formModal-active");
}
