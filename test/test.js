testDisplay = document.getElementById("testDisplay");

fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => testDisplay.innerHTML = JSON.stringify(data));
