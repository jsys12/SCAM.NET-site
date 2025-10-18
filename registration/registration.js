document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#main_form_registration');
    const login = document.querySelector('#main_form_registration_user');
    const email = document.querySelector('#main_form_registration_email');
    const password = document.querySelector('#main_form_registration_password');
    const passwordConfirm = document.querySelector('#main_form_registration_confirm_password');
    const errorMessage = document.querySelector('#error_message');
    
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const loginVal = login.value;
        const emailVal = email.value;
        const passwordVal = password.value;


        if (passwordVal !== passwordConfirm.value) {
            errorMessage.classList.add('error');
            errorMessage.textContent = "Пароли должны совпадать";
        } else {
            console.log(passwordVal)
            console.log(passwordConfirm.value)
            fetch(`http://127.0.0.1:8000/insert_user/?username=${loginVal}&gmail=${emailVal}&password=${passwordVal}`)
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if(result['message'] == 'User inserted successfully'){
                    errorMessage.textContent = "Вы успешно зарегестрировались!"
                }
            });
        }
    });
});