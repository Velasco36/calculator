
window.addEventListener('load', () => {

    //se guarda el elemento que se necesiaa del html
    const display = document.querySelector('.calculator')
    const buttons = document.getElementsByClassName ('cal-button')

    //convertir el htmlcollection a arraay
    const keypadButtonsArray = Array.from(buttons);

    //Iteramos en los botones
    keypadButtonsArray.forEach(( button) =>{
        //a cada boton le agragamos un listener
        button.addEventListener('click', ()=> {
            console.log(button.value)
        })
    })

});