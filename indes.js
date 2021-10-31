fetch('https://api.le-systeme-solaire.net/rest/bodies/')
  .then(response => response.json())
  .then(data => console.log(data));