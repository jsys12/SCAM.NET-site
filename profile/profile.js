// const list = document.querySelector('#list');

//   list.addEventListener('change', function() {
//     const page = this.value;
//     if (page) {
//       window.location.href = page;
//     }
//   });


let userData = localStorage.getItem("userData")
console.log(userData)



if (userData) {
    userData = JSON.parse(userData);
    const login = document.querySelector('#profile_name')
    const gmail = document.querySelector('#profile_email')
    // const id = document.querySelector('#id')

    login.textContent = userData['username']
    gmail.textContent = userData['gmail']
} else {
    window.location.href = '../sign_in/sign_in.html';
}