const urlInput = document.querySelector('.url-input');

document
  .querySelector('.btn')
  .addEventListener('click', () => {
    fetch('http://localhost:8888' + urlInput.value)
      .then((res) => {
        console.log('browser.js: ', res);
      });
  });