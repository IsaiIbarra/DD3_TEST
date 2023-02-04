import Swal from 'sweetalert2';
import instructions from '../assets/instructions.png';

function sweetAlert({ type, typeToast, message, data, confirmFunction }) {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top',
    iconColor: 'white',
    customClass: {
      popup: 'colored-toast',
    },
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
  });

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger',
    },
    buttonsStyling: false,
  });

  switch (type) {
    case 'toast':
      return Toast.fire({
        icon: typeToast,
        title: message,
      });

    case 'loseGame':
      return swalWithBootstrapButtons
        .fire({
          title: 'Estadistícas',
          html:
            `<div>Jugadas</div>` +
            `<div><b>${data.wordsPlayed}</b></div>` +
            `<div>Ganadas</div>` +
            `<div><b>${data.wins}</b></div>` +
            '<br/>' +
            `<div>La palabra era</div>` +
            `<div><b>${data.word}</b></div>` +
            '<br/>' +
            '<div>Tiempo</div>' +
            `<div><b>${data.timer}</b</div>`,
          confirmButtonText: 'Aceptar',
          allowOutsideClick: false,
          allowEscapeKey: false,
        })
        .then((result) => {
          if (result.isConfirmed) {
            confirmFunction();
          }
        });

    case 'statistics':
      return swalWithBootstrapButtons.fire({
        title: 'Estadistícas',
        html:
          `<div>Jugadas</div>` +
          `<div><b>${data.wordsPlayed}</b></div>` +
          `<div>Ganadas</div>` +
          `<div><b>${data.wins}</b></div>`,
        confirmButtonText: 'Aceptar',
      });

    case 'instructions':
      return swalWithBootstrapButtons
        .fire({
          imageUrl: instructions,
          imageWidth: 400,
          imageHeight: 'auto',
          imageAlt: 'Custom image',
          confirmButtonText: '¡Jugar!',
        })
        .then((result) => {
          return true;
        });
    default:
      return false;
  }
}

export default sweetAlert;
