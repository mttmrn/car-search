
const signUpForm = document.querySelector('#signup-form');

signUpForm.addEventListener('submit', e => {
    // prevent form submit
    e.preventDefault();

    // need to access your api
    const email = signUpForm.querySelector('#email-signup').value,
          password = signUpForm.querySelector('#password-signup').value,
          confirm = signUpForm.querySelector('#confirm').value;

    const url = 'http://localhost:3000';

    fetch(`${url}/auth/register`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password,
            confirmPass: confirm
        })
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    });
});