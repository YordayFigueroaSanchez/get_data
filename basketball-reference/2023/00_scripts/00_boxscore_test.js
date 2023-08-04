// Crear una variable para almacenar el contenido de la tabla
var contenidoTabla = "";

var line_score = document.getElementById("line_score");
var team_visit = line_score.rows[2].cells[0].textContent;
contenidoTabla += team_visit;
contenidoTabla += "\n";
var team_home = line_score.rows[3].cells[0].textContent;
contenidoTabla += team_home;
contenidoTabla += "\n";

var team_visit_table01 = document.getElementById("box-" + team_visit + "-game-basic");
for (var i = 0; i < team_visit_table01.rows.length; i++) {
  var fila = team_visit_table01.rows[i];
  for (var j = 0; j < fila.cells.length; j++) {
    var celda = fila.cells[j];
    var contenido = celda.innerText;
    var enlace = celda.querySelector("a");
    if (enlace === null) {
      console.log("El enlace es null");
    } else {
      var href = enlace.href;
      contenido = contenido +"|"+ enlace.href
    }
	  contenidoTabla += contenido + ";";
  }
  contenidoTabla += "\n"; // Salto de línea al final de cada fila
}

// Obtener una porción de la URL como parte del nombre del archivo
var url = window.location.href;
var part4 = url.split("/")[4];
var filename = part4.split(".")[0];
// Crear un enlace para descargar el archivo
var enlaceDescarga = document.createElement("a");
enlaceDescarga.href = "data:text/plain;charset=utf-8," + encodeURIComponent(contenidoTabla);
enlaceDescarga.download = filename + ".txt"; // Nombre del archivo de salida
// Simular un clic en el enlace de descarga
enlaceDescarga.click();
