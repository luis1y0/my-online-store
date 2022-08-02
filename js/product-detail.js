async function showProductDetail() {
  let products = await getProducts();
  let product = products[0];
  let imageElement = document.querySelector('#product-image');
  imageElement.src = product.images[0];
}

window.addEventListener("DOMContentLoaded", showProductDetail, false);
