// Si se cambia la API, agregar en este mismo repositorio
// una nueva copia de la tienda para consultar la nueva
// version de la API y mantener compatibilidad con versiones
// anteriores
let apiVersion = 1;
let host = 'http://localhost:8000';
let resource = 'productos';

async function fetchProducts(isVisible, category) {
  let options = {
    headers: {
      'Accept': 'application/json'
    },
  };
  let urlEncodedIsVisible = encodeURIComponent(isVisible);
  let urlEncodedCategory = encodeURIComponent(category);
  let url = `${host}/api/v${apiVersion}/${resource}?publico=${urlEncodedIsVisible}&categoria=${urlEncodedCategory}`;
  let response = await fetch(url, options);
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
  let url = `${host}/api/v${apiVersion}/${resource}`;
  let response = await fetch(url, options);
  let json = await response.json();
  return json;
}
