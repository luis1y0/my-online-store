let product = {};
let inputName = null;
let inputDescription = null;
let inputCategory = null;
let inputPrice = null;
let inputQuantity = null;
let inputImage = null;

function setInputEvents() {
  let imageElement = document.querySelector("#product-image");
  let submitElement = document.querySelector("#add-button");
  inputName = document.querySelector("#input-name");
  inputDescription = document.querySelector("#input-description");
  inputCategory = document.querySelector("#input-category");
  inputPrice = document.querySelector("#input-price");
  inputQuantity = document.querySelector("#input-quantity");
  inputIsPublic = document.querySelector("#input-is-public");
  inputImage = document.querySelector("#input-image");
  inputImage.onchange = selectFile;
  imageElement.onclick = () => inputImage.click();
  submitElement.onclick = submit;
}

function submit() {
  product.name = inputName.value;
  product.description = inputDescription.value;
  product.category = inputCategory.value;
  product.price = inputPrice.value;
  product.quantity = inputQuantity.value;
  product.isPublic = inputIsPublic.checked;
  addProduct(product);
}

function selectFile(event) {
  let imageElement = document.querySelector("#product-image");
  imageElement.src = URL.createObjectURL(event.target.files[0]);
}

window.addEventListener("DOMContentLoaded", setInputEvents, false);
