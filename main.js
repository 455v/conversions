// Hacer calculadora sin interfas visual que convierta:
// metros a milimetros
// metros a centimetros
// minutos a segundos
// que pasos tendria que hacer para convertirlos de metros a milimetros

// Pedirle al ususario me de la cantidad de metros
// Guardarar la cantidad de metros (Aun  o se como se guardadria)
// Guardar en una viable cuanto equivale un metro a un milimetro
// tomar la cantidad de metros y multiplicarlos por la varable de los milimitros
// Guardar en una variable la resultante de la multiplicacion
// imprimir el resultado en milimetros
// preguntarle al usuario si quisisera hacer otra conversion

const milimetros = 1000;
const centimetros = 100;
const kilometros = 1000;
const segundos = 60;
const hora = 60;

function requestConversionOption() {
  const opcion = prompt(
    "¿Que tipo es la que necesitas? \n\n 1. Distancia \n 2. Tiempo"
  );
  return Number(opcion);
}

function requestConversionTypeDistance() {
  const typeDistance = prompt(
    "¿Que conversion necesitas? \n 1.Metros a milimetros \n 2. Metros a centimetros \n 3. Metros a Kilometros \n "
  );
  return Number(typeDistance);
}
function requestConversionTypeTime() {
  const typeTime = prompt(
    "¿Que conversion necesitas? \n\n 1.Minutos a Segundos \n 2.Minutos a Horas"
  );
  return Number(typeTime);
}

function conversionMeterToMilimers() {
  const metros = prompt("¿Cuantos metros necesitas convertir?");
  const resultado = metros * milimetros;
  return resultado;
}

function conversionMetersToCentimeters() {
  const metros = prompt("¿Cuantos metros necesitas convertir?");
  const resultado = metros * centimetros;
  return resultado;
}

function conversionMetersToKilometers() {
  const metros = prompt("¿Cuantos metros necesitas convertir?");
  const resultado = metros / kilometros;
  return resultado;
}

function conversionMinutesToSecons() {
  const minutos = prompt("Cuantos minutos necesitas convertir");
  const resultado = minutos * segundos;
  return resultado;
}
function conversionMinutesToHours() {
  const minutos = prompt("¿Cuantos minutos necesitas convertir?");
  const resultado = minutos / hora;
  return resultado;
}

function main() {
  let result = null;
  const opcion = requestConversionOption();
  if (opcion >= 3) {
    alert("Esta no esta en el menu");
    return main();
  }

  if (opcion === 1) {
    const typeDistance = requestConversionTypeDistance();
    if (typeDistance >= 4) {
      alert("Esta opcion no esta en el menu");
      return requestConversionTypeDistance();
    }
    if (typeDistance === 1) {
      result = conversionMeterToMilimers();
    }
    if (typeDistance === 2) {
      result = conversionMetersToCentimeters();
    }
    if (typeDistance === 3) {
      result = conversionMetersToKilometers();
    }
  }

  if (opcion === 2) {
    const typeTime = requestConversionTypeTime();
    if (typeTime >= 3) {
      alert("Esta opcion no esta en la opcion");
      return requestConversionTypeTime();
    }
    if (typeTime === 1) {
      result = conversionMinutesToSecons();
    }
    if (typeTime === 2) {
      result = conversionMinutesToHours();
    }
  }
  alert(`Tu conversion es: ${result}`);
}
main();
