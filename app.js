
window.addEventListener('load', () => {
    const display = document.querySelector('.calculator')
    const buttons = document.getElementsByClassName ('cal-button')

    const keypadButtonsArray = Array.from(buttons);

    keypadButtonsArray.forEach(( button) =>{
        console.log(button)
    })

});