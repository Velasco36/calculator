const screen = document.getElementById('screen');

// manipular botones en pantalla
window.addEventListener('load', () => {
  Array.from(document.getElementsByClassName('cal-button')).forEach(
    (button) => {
      button.addEventListener('click', () => {
        switch (button.value) {
          case 'AC':
            screen.value = '';
            break;
          case '=':
            calcular();
            break;
          default:
            actualizar(button);
            break;
        }
      });
    }
  );
});

// Solo para ingresar numeros
window.addEventListener('keypress', function (e) {
  const code = e.charCode;
  const number = e.key;
  if (code >= 42 && code < 58) {
    screen.value += number;
    return;
  }
});

// validar teclas
window.addEventListener('keydown', function (e) {
  const keyboard = e.key;

  if (keyboard === 'Backspace') {
    return (screen.value = screen.value.substring(0, screen.value.length - 1));
  }

  if (keyboard === 'Delete') {
    screen.value = '';
  }

  if (keyboard === 'Enter' && screen.value !== '') {
    return calcular();
  }

  if (keyboard === '%') {
    return (screen.value += number);
  }
});

function calcular() {
  try {
    screen.value = eval(screen.value);
  } catch (e) {
    screen.value = 'ERROR';
  }
}

function actualizar(button) {
  if (screen.value === 0) {
    screen.value = ' ';
  }
  screen.value += button.value;
}
