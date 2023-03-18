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
  //const enter = e.key
  
  //validar que solo se puedan colocar numero
  if (code >=42 && code <=58 || code ==127 || code ==13)  {
    screen.value += ` ${e.key}`;


    if (code == 13){

      //console.log(enter)

      //`${e-key}` = 'enter '


      console.log( screen + `desde e.key`)


      

//      screen.value += ` ${e.key}`;

    }

  }

  //screen.value += ` ${e.key}`;
  //console.log(e);


  console.log(e.charCode)



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
  console.log(display.value);

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
