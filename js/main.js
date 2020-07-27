document.getElementById("enviar").addEventListener("click", enviarDatos);
document.getElementById("cantidad").addEventListener("keyup", enviarDatos);
document
  .getElementById("valor-unitario")
  .addEventListener("change", enviarDatos);

function enviarDatos(evento) {
  //var cantidad,valor_unitario,total;
  let cantidad, valor_unitario, total;
  cantidad = document.getElementById("cantidad").value;
  valor_unitario = document.getElementById("valor-unitario").value;
  //console.log(cantidad,valor_unitario);
  total = cantidad * valor_unitario;
  document.getElementById("valor-total").value = total;
  // console.log(event.type);

  if (evento.type == "click") {
    evento.preventDefault();//frena la ejecucion
  }
}

function sumar(a, b) {
  var sum;
  suma = a + b + 1;
  console.log(sum);
}

//var numero1;
//var numero2;
//
//numero1 = 8;
//numero2 = 5;
//suma = numero1 + numero2;
//
//console.log("la suma es :"+suma);
