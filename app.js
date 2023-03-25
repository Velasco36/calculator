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
  if (code === 127){
    screen.value = value.substring(0, value.length -1)
    console.log( screen.value)

    console.log('eliminando')
  }

  
  //validar que solo se puedan colocar numero
  if (code >=42 && code <=58 || code ==127 || code ==13 || code ==32 || code ==98)  {

 
  
    //console.log(screen.value + 'screen')

    let res= calcular(screen)
    console.log(res + ' res')
    if (code == 13 &&  (res !== 'ERROR' || res !== undefined )){
      screen.value = res 
      
      
      
     


/*
      

       
      if(screen.vale ===undefined){
        screen.value = ' '  
        return screen
      }else {
        calcular(screen)
      }

      
 */  //calcular(screen)
      
      //calcular(screen)
      
 
      console.log('hola2')

    }else{
      
      screen.value += e.key

      

    }

    console.log( screen.value)




    if (code == 32){
      console.log(e.key)
      calcular(screen)
      
      console.log( screen.value)

    }




    if (code ==98){
      screen.value = value.substring(0, value.length -1)
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

  try {
    return eval(display.value);// si solo tienes un operador no evalues nada
  } catch (e) {
    return 'ERROR';
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
