const form = document.querySelector('.auth-form');

const h2 = document.querySelector('#h2')

const delete_Text = document.querySelector('#result_text')

const username = document.querySelector('#login')
const pass = document.querySelector('#password')

username.value = 'stas'
pass.value = '12345'

form.addEventListener('submit', (event) => {
    event.preventDefault();
    h2.textContent = '';

    const username_Value = username.value;
    const pass_Value = pass.value;

    const url = `https://my-fastapi-app-tfwi.onrender.com/select_user_password/?username=${username_Value}&password=${pass_Value}`

    delete_Text.textContent = '';


    fetch(url)
    .then(res => res.json())
    .then(result => {
        result = result['result']
        console.log(result)
        h2.textContent = `Логин: ${result["username"]}; Почта: ${result['gmail']}; ID: ${result["id"]}`;
    })
})