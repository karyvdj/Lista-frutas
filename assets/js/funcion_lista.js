var enLista = [];
function listaFruta(){
  var añadirFruta = document.getElementById('agregarFruta').value;
  if (añadirFruta != ""){
    document.getElementById("listaOrdenada").innerHTML += "<li>" + añadirFruta + "</li>";
    enLista.push(añadirFruta);
  }
}
