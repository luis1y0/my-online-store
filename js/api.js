// Si se cambia la API, agregar en este mismo repositorio
// una nueva copia de la tienda para consultar la nueva
// version de la API y mantener compatibilidad con versiones
// anteriores
let apiVersion = 1;
let url = 'http://localhost:8080/api/v1/productos';

async function fetchProducts(isVisible, category) {
  let options = {
    headers: {
      'Accept': 'application/json'
    },
  };
  let urlEncodedIsVisible = encodeURIComponent(isVisible);
  let urlEncodedCategory = encodeURIComponent(category);
  let urlStr = `${url}?publico=${urlEncodedIsVisible}&categoria=${urlEncodedCategory}`;
  let response = await fetch(urlStr, options);
  let json = await response.json();
  return json;
}

async function addProduct(product) {
  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(product)
  };
  let response = await fetch(url, options);
  let json = await response.json();
  return json;
}
