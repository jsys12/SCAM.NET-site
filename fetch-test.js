const form1 = document.querySelector('#form-test');

const loginInput = document.querySelector('#login-test');
const passwordInput = document.querySelector('#password-test');

form1.addEventListener('submit', (event) => {
    event.preventDefault();

    const login = loginInput.value;
    const password = passwordInput.value;

    fetch(`http://127.0.0.1:8000/select_user_password/?username=${login}&password=${password}`)
    .then(res => res.json())
    .then(result => {
        console.log(result)
        result = result['result']
        console.log(result)
        if(result['Error'] == "Password doesn't match"){
            alert("Password or login doesn't match")
        } else if (result['id'] >= 0){
            const userData = {"login" : login, "gmail": result["gmail"],"ID" : result["id"]}
            sessionStorage.setItem("userData", JSON.stringify(userData))
            document.location.href = 'http://127.0.0.1:5500/profile.html'
        }
    })
})