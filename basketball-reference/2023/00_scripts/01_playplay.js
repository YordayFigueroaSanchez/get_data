// Crear una variable para almacenar el contenido de la tabla
var contenidoTabla = "";

var table_st_0 = document.getElementById("st_0");
for (var i = 0; i < table_st_0.rows.length; i++) {
  var fila = table_st_0.rows[i];
  for (var j = 0; j < fila.cells.length; j++) {
    var celda = fila.cells[j];
    var contenido = celda.innerText;
    contenidoTabla += contenido + ";"; // Separador de celdas (puedes cambiarlo según tu preferencia)
  }
  contenidoTabla += "\n"; // Salto de línea al final de cada fila
}

var table_st_1 = document.getElementById("st_1");
for (var i = 0; i < table_st_1.rows.length; i++) {
  var fila = table_st_1.rows[i];
  for (var j = 0; j < fila.cells.length; j++) {
    var celda = fila.cells[j];
    var contenido = celda.innerText;
    contenidoTabla += contenido + ";"; // Separador de celdas (puedes cambiarlo según tu preferencia)
  }
  contenidoTabla += "\n"; // Salto de línea al final de cada fila
}

var table_st_2 = document.getElementById("st_2");
for (var i = 0; i < table_st_2.rows.length; i++) {
  var fila = table_st_2.rows[i];
  for (var j = 0; j < fila.cells.length; j++) {
    var celda = fila.cells[j];
    var contenido = celda.innerText;
    contenidoTabla += contenido + ";"; // Separador de celdas (puedes cambiarlo según tu preferencia)
  }
  contenidoTabla += "\n"; // Salto de línea al final de cada fila
}

var table_st_3 = document.getElementById("st_3");
for (var i = 0; i < table_st_3.rows.length; i++) {
  var fila = table_st_3.rows[i];
  for (var j = 0; j < fila.cells.length; j++) {
    var celda = fila.cells[j];
    var contenido = celda.innerText;
    var enlaces = celda.querySelectorAll("a");
    enlaces.forEach(function(enlace) {
      contenido = contenido + "|" + enlace.href
    });
    contenidoTabla += contenido + ";"; // Separador de celdas (puedes cambiarlo según tu preferencia)
  }
  contenidoTabla += "\n"; // Salto de línea al final de cada fila
}

var table_st_4 = document.getElementById("st_4");
for (var i = 0; i < table_st_4.rows.length; i++) {
  var fila = table_st_4.rows[i];
  for (var j = 0; j < fila.cells.length; j++) {
    var celda = fila.cells[j];
    var contenido = celda.innerText;
    var enlaces = celda.querySelectorAll("a");
    enlaces.forEach(function(enlace) {
      contenido = contenido + "|" + enlace.href
    });
    contenidoTabla += contenido + ";"; // Separador de celdas (puedes cambiarlo según tu preferencia)
  }
  contenidoTabla += "\n"; // Salto de línea al final de cada fila
}

var table_st_5 = document.getElementById("st_5");
for (var i = 0; i < table_st_5.rows.length; i++) {
  var fila = table_st_5.rows[i];
  for (var j = 0; j < fila.cells.length; j++) {
    var celda = fila.cells[j];
    var contenido = celda.innerText;
    var enlaces = celda.querySelectorAll("a");
    enlaces.forEach(function(enlace) {
      contenido = contenido + "|" + enlace.href
    });
    contenidoTabla += contenido + ";"; // Separador de celdas (puedes cambiarlo según tu preferencia)
  }
  contenidoTabla += "\n"; // Salto de línea al final de cada fila
}

var tablePbp = document.getElementById("pbp");
for (var i = 0; i < tablePbp.rows.length; i++) {
  var fila = tablePbp.rows[i];
  for (var j = 0; j < fila.cells.length; j++) {
    var celda = fila.cells[j];
    var contenido = celda.innerText;
    var enlaces = celda.querySelectorAll("a");
    enlaces.forEach(function(enlace) {
      contenido = contenido + "|" + enlace.href
    });
    contenidoTabla += contenido + ";"; // Separador de celdas (puedes cambiarlo según tu preferencia)
  }
  contenidoTabla += "\n"; // Salto de línea al final de cada fila
}

var fecha = new Date();
var year = fecha.getFullYear();
var month = (fecha.getMonth() + 1).toString().padStart(2, '0');
var day = fecha.getDate().toString().padStart(2, '0');
var hours = fecha.getHours().toString().padStart(2, '0');
var minutes = fecha.getMinutes().toString().padStart(2, '0');
var fechaFormateada = year + month + day + '_' + hours + minutes;

// Obtener una porción de la URL como parte del nombre del archivo
var url = window.location.href;
var part4 = url.split("/")[5];
var filename = part4.split(".")[0];
// Crear un enlace para descargar el archivo
var enlaceDescarga = document.createElement("a");
enlaceDescarga.href = "data:text/plain;charset=utf-8," + encodeURIComponent(contenidoTabla);
enlaceDescarga.download = filename+ "_bpb_" + fechaFormateada + ".txt"; // Nombre del archivo de salida
// Simular un clic en el enlace de descarga
enlaceDescarga.click();
