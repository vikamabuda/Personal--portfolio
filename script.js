const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar) {
    bar.addEventListener('click', () => {
      nav.classList.add('active');
    })
};

if(close) {
    close.addEventListener('click', () => {
      nav.classList.remove('active');
    })
};


// -----------Google form--------------

const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");
const scriptURL = 'https://script.google.com/macros/s/AKfycbw9ZeTKtNYwDzgkLlqbbzbeqB3fa5TtgRVnbJ0h5TODDYU-ZAxaTM-Ht1HtANZ0ajw/exec'; // Replace with your actual script ID

form.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(form);
    const email = formData.get('Email');

    fetch(scriptURL, { method: 'POST', body: formData })
        .then(response => {
            msg.innerHTML = "Message sent successfully";
            setTimeout(function () {
                msg.innerHTML = "";
            }, 5000);
            form.reset();
        })
        .catch(error => console.error('Error!', error.message));
});


