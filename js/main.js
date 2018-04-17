


var genero = document.getElementById("genero");
var kind = document.getElementById("kind");


function buscar() {
  var buscar = document.getElementById("search").value;
  if (buscar == "") {
    alert("Ingresa algo a buscar");
    return false;
  }
}

function login(){
  var correo = document.getElementById("email").value;
  var contraseña = document.getElementById("Contraseña").value;
  if (correo == ""||contraseña=="") {
    alert("Campos vacios ");
    return false;
  }

}

function registro(){
  var nombre = document.getElementById("Nombre").value;
  var apellido = document.getElementById("Apellido").value;
  var correox = document.getElementById("email").value;
  var contraseñax = document.getElementById("Contraseña").value;
  var contraseña2 = document.getElementById("Contraseña2").value;
  var pais = document.getElementById("pais").value;
  var estado = document.getElementById("estado").value;
  var ciudad = document.getElementById("ciudad").value;
  if (nombre == ""||apellido==""||correox==""||contraseñax==""||contraseña2==""||pais==""||estado==""||ciudad=="") {
    alert("Campos vacios ");
    return false;
  }
  else if (contraseñax!=contraseña2){
  alert("Las contraseñas no coinciden");
  return false;
}
}

function correoy(){
    var correoy = document.getElementById("email").value;
    if (correoy == "") {
      alert("Campos vacios ");
      return false;
    }
}

function genero() {
  var seleccionado = false;
  for (var i = 0; i < genero.length; i++) {
    if (genero[i].checked) {
      seleccionado = true;
      break;
    }
  }

  if (!seleccionado) {
    return false;
  }
}

function kind() {
  var seleccionado = false;
  for (var i = 0; i < kind.length; i++) {
    if (kind[i].checked) {
      seleccionado = true;
      break;
    }
  }

  if (!seleccionado) {
    return false;
  }
}
