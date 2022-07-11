import Toastify from 'toastify-js';

export default function styledToastify(value, error) {
  let styleError = '#b8b8b8';

  if (error) {
    styleError = '#f7a5a5';
  }

  Toastify({
    text: value,
    duration: 3000,
    destination: 'https://github.com/apvarun/toastify-js',
    newWindow: true,
    close: true,
    style: {
      padding: '10px',
      index: '1000',
      position: 'fixed',
      top: 0,
      right: '10px',
      border: '1px solid gray',
      borderTop: '2px solid red',
      borderBottom: '2px solid red',
      borderRadius: '5px',
      background: styleError,
      color: 'white',
    },
  }).showToast();
}
