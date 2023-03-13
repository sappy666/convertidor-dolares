function validarMonto(monto) {
    // Verificar si el monto es un número válido
    if (isNaN(monto)) {
      return false;
    }
    
    // Verificar si el monto tiene más de dos decimales
    var partes = monto.toString().split(".");
    if (partes.length > 1 && partes[1].length > 2) {
      return false;
    }
    
    // El monto es válido
    return true;
  }
function convertirDolaresAPesos(dolares) {
  // Definir el tipo de cambio
  var tipoDeCambio = 745;
  
  // Calcular la cantidad de pesos chilenos
  var pesos = dolares * tipoDeCambio;
  
  // Devolver la cantidad de pesos chilenos
  return pesos;
}
const montoDolaresInput = document.getElementById("monto-dolares");
const btnCambiar = document.getElementById("btn-enviar");

btnCambiar.addEventListener("click", function(){
  let montoDolares = montoDolaresInput.value;
  let montoPesos;
  if(validarMonto(montoDolares)){
    // El monto es válido, hacer algo con él
    montoPesos = convertirDolaresAPesos(montoDolares);
    alert(montoPesos);
  }
  else{
    // El monto no es válido, mostrar un mensaje de error
    alert("El monto ingresado no es válido.");
  }
});
    