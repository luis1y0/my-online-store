let isPublicElement = null;
let categoryElement = null;

async function showProducts() {
  let urlElement = document.querySelector('#url-localhost');
  if (localStorage.getItem('url')) {
    url = localStorage.getItem('url');
    urlElement.value = url;
  } else {
    localStorage.setItem('url', url);
    urlElement.value = url;
  }
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
  if (productList.length === 0) {
    productsElement.innerHTML = `<h2>Sin productos</h2>`;
  }
  for (let product of productList) {
    productsElement.appendChild(createProductElement(product));
  }
}

async function getProducts() {
  let isPublic = isPublicElement.checked;
  let category = categoryElement.value;
  try {
    return await fetchProducts(isPublic, category);
  } catch (e) {
    console.error(e);
  }
  return [];
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
  if (product.images) productElement.appendChild(createImageAndControls(product.images[0], product.price));
  else productElement.appendChild(createImageAndControls(product.image, product.price));
  productElement.appendChild(descriptionElement);
  return productElement;
}

function createImageAndControls(imageURL, price) {
  let containerElement = document.createElement('div');
  let imageElement = document.createElement('img');
  imageElement.src = imageURL;
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

function changeUrl() {
  let urlElement = document.querySelector('#url-localhost');
  url = urlElement.value;
  localStorage.setItem('url', urlElement.value);
}

window.addEventListener("DOMContentLoaded", showProducts, false);
