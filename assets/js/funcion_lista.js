function listaFruta(){
  var añadirFruta = document.getElementById('agregarFruta').value;
  if(añadirFruta != ""){
    var nuevaFruta = document.createElement("li");
    nuevaFruta.innerHTML= añadirFruta;
    document.getElementById('listaOrdenada').appendChild(nuevaFruta);
    document.getElementById('agregarFruta').value="";
  }
}
function quitarFruta(){
  var frutaQuitar= document.getElementById('listaOrdenada');
  console.log(frutaQuitar);
  frutaQuitar.removeChild(frutaQuitar.lastElementChild);
}
