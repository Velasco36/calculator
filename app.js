window.addEventListener('load', () => {
  //se guarda el elemento que se necesiaa del html
  const display = document.querySelector('.ans');

  const buttons = document.getElementsByClassName('cal-button');

    //convertir el htmlcollection a arraay
    const keypadButtonsArray = Array.from(buttons);

    //Iteramos en los botones
    keypadButtonsArray.forEach(( button) =>{
        //a cada boton le agragamos un listener 
        button.addEventListener('click', ()=> {

        //console.log(display.value, "display")
        //console.log(button.value, "boton" )
        //console.log(button, "todo del boton")
        calculadora(button, display)
          
          
        })
    })

});

// tarea validar que solo reciba numeros
window.addEventListener('keypress', printNumber);
function printNumber(e) {

  const screen = document.getElementById('screen');
  const code = e.charCode
  var value = screen.value;

  if (e.key === 'Backspace'){
    console.log('borrar')
  }
  // || code ==127 || code ==13 || code ==32 || code ==98
  if (code === 127){
    screen.value = value.substring(0, value.length -1)
  }

  if (code == 13 && screen.value !== ''){
    return calcular(screen) 
  }

  if (code === 32){
    return calcular(screen);
  }

  if (code ==98){
    screen.value = value.substring(0, value.length -1)
  }

  //validar que solo se puedan colocar numero
  if (code >=42 && code <=58)  {
    screen.value += e.key
  }
}  

function calculadora(button, display) {
  switch (button.value) {
    case 'C':
      borrar(display);
      break;
    case '=':
      calcular(display);
      break;

    default:
      actualizar(display, button);
      break;
  }
}

function calcular(display) { 

  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = 'ERROR';
  }
}


function actualizar(display, button) {
  if (display.value === 0) {
    display.value = '';
  }

  display.value += button.value;
}

function borrar(display) {
  display.value = '';
}
