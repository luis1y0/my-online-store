let isPublicElement = null;
let categoryElement = null;

async function showProducts() {
  let productsElement = document.querySelector("#product-list");
  productsElement.innerHTML = "";
  isPublicElement = document.querySelector("#input-is-public");
  categoryElement = document.querySelector("#input-category");
  isPublicElement.onchange = showProducts;
  categoryElement.onchange = showProducts;
  if (!productsElement) {
    return;
  }
  let productList = await getProducts();
  for (let product of productList) {
    productsElement.appendChild(createProductElement(product));
  }
}

async function getProducts() {
  let isPublic = isPublicElement.checked;
  let category = categoryElement.value;
  let products = await fetchProducts(isPublic, category);
  return products;
}

function createProductElement(product) {
  let productElement = document.createElement('a');
  productElement.classList.add('container', 'w-80', 'p-4');
  let titleElement = document.createElement('span');
  titleElement.textContent = product.title;
  let descriptionElement = document.createElement('span');
  descriptionElement.textContent = product.description;
  titleElement.classList.add('block', 'font-bold');
  descriptionElement.classList.add('block');
  productElement.href = 'product.html';
  productElement.appendChild(titleElement);
  productElement.appendChild(createImageAndControls(null, product.price));
  productElement.appendChild(descriptionElement);
  return productElement;
}

function createImageAndControls(imageURL, price) {
  let containerElement = document.createElement('div');
  let imageElement = document.createElement('img');
  //imageElement.src = imageURL;
  containerElement.classList.add('relative');
  containerElement.appendChild(createPriceTag(price));
  containerElement.appendChild(imageElement);
  return containerElement;
}

function createPriceTag(price) {
  let priceContainer = document.createElement('div');
  let priceElement = document.createElement('span');
  priceContainer.classList.add(
    'absolute', 'bg-current', 'rounded-xl', 'px-2', 'py-1', 'right-0'
  );
  priceElement.classList.add('text-white');
  priceElement.textContent = `$${price}`;
  priceContainer.appendChild(priceElement);
  return priceContainer;
}

window.addEventListener("DOMContentLoaded", showProducts, false);
