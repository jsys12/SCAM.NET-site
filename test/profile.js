let userData = sessionStorage.getItem("userData")

if (userData) {
    userData = JSON.parse(userData);
    const login = document.querySelector('#login')
    const gmail = document.querySelector('#gmail')
    const id = document.querySelector('#id')

    login.textContent = userData['login']
    gmail.textContent = userData['gmail']
    id.textContent = userData['ID']
    // Дополнительная логика
} else {
    // Обработка случая отсутствия данных (например, редирект на логин)
    window.location.href = 'index.html';
}