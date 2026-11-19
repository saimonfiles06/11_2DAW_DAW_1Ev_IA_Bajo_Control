
//Código corregido

// Ejemplo implementando el método POST:

async function postData(url = "", data = {}) {
  // Opciones por defecto están marcadas con un *

  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data), // El cuerpo coincide con el Content-Type
  });

  // fetch() no considera los códigos HTTP 4xx/5xx como errores.
  if (!response.ok) {
    throw new Error(`Error HTTP: ${response.status}`);
  }

  // Convierte la respuesta JSON en un objeto JavaScript.
  return response.json();
}

postData("https://example.com/answer", { answer: 42 })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error en la petición:", error);
  });
