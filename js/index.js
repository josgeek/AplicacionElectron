var x;
var texto;


function mensaje() {
var texto = document.getElementById('tiempo');
n--,
texto.innerHTML=n;
}

if (n>0) {
  var texto = document.getElementById('tiempo');
n--;
texto.html=n;

}else{
  clearInterval(x);
}




setTimeout(showMesaje,3000);
}

function showMensaje(){

  alert('Hola mundo!');
  clearInterval(x);
}

function showMensaje1() {
alert('Mensaje de una sola vez');
}
