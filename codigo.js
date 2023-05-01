function Boton() {
    document.getElementById('Boton').textContent = 'Hola Mundo';
}
var boton = document.getElementById("boton");
var div = document.getElementById("div");

boton.addEventListener("click", function() {
  div.style.backgroundColor = "pink";
});

function mostrarAlerta() {
  alert("¡HAZ HECHO CLICK!");
}
function toggleDiv() {
  const miDiv = document.getElementById("segundodiv");
  if (miDiv.style.display === "none") {
    miDiv.style.display = "block";
  } else {
    miDiv.style.display = "none";
  }
}