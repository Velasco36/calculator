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
          console.log(display)

       
        calculadora(button, display)
          
          
        })
    })

});

// tarea validar que solo reciba numeros
window.addEventListener('keypress', printNumber);
function printNumber(e) {

  const screen = document.getElementById('screen');
  const code = e.charCode
  const number = e.key

  console.log(number)
  
  
  //console.log(screen)
 

  if (number === 'Backspace'){
    console.log('borrar')
  }
  // || code ==127 || code ==13 || code ==32 || code ==98
  if (code === 127){
    
    screen.value = value.substring(0, value.length -1)
  }

  if (code === 13 && screen.value !== ''){
    return calcular(screen) 
  }
  //calcular Enter
  if (code === 32){
    return calcular(screen, number);
  }
  //Borrar 
  if (code ===98){
    screen.value = screen.value.substring(0, screen.value.length -1)
  }

  //validar que solo se puedan colocar numero
  if (code >=42 && code <=58)  {
    
    screen.value += number
  }
  if (code ===37){
    screen.value += number
  }
 
}  
 
//Errores no puedes usar el teclado y los numeros de la calculadora al mism tiempo suma los dos numeros por teclado y deja en el display los numeros que indroduciste  con su teclado

//bug con ac y el teclado nomal 


function calculadora(button, display) {

  console.log(button.value)
  

  switch (button.value) {
  
    case 'AC':
      //console.log('precionando borrar')
      //borrar(display);

      borrar(display, button);
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
    display.value = ' ';
  }

  display.value += button.value;
}

function borrar(display, button) {
 
  
  
    display.value = '';
    //button.value = ''
    display.value += display.value
    
  
  
  
}
