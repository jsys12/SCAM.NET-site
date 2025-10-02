document.addEventListener("DOMContentLoaded", () => {
    
    const form = document.querySelector('#main_form_sign_in');
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        const formData = new FormData(form);
        const username = formData.get("username");
        const password = formData.get("password");
        
        fetch(`http://127.0.0.1:8000/auth/?username=${username}&password=${password}`)
        .then(res => res.json())
        .then(result => {
            console.log(result)
        });
    });
});