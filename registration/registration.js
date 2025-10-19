const input_search = document.querySelector('#input_search')
const products = document.querySelector('#products')

const items = [
    { name: 'Гигабайт гуру', price: 2000, url: '../product_catalog/ProductS_Carts/GIGA/Gigabyte_Guru.html' },
    { name: 'Видеокурс "Невидимая раскрутка"', price: 800, url: '../product_catalog/ProductS_Carts/VIDEO/Nevidimaya_Raskrutka.html' },
    { name: 'Мета мусор', price: 1300, url: '../product_catalog/ProductS_Carts/META/Meta_Musor.html' },
    { name: 'Крипто-Ферма', price: 750, url: '../product_catalog/ProductS_Carts/CRYPTO/Crypto_Ferma.html' },
    { name: 'SEO-Заговор', price: 900, url: '../product_catalog/ProductS_Carts/SEO/SEO_Zagovor.html' },
    { name: 'Кирпич', price: 1200, url: '../product_catalog/ProductS_Carts/BREAK/Kirpich.html' },
];


function rendrItems(list) {
    products.innerHTML = ''

    if (list.length === 0) {
        products.innerHTML = '<div class = "card">Товары не найдены</div>'
        return
    }

    list.forEach(item => {
        const card = document.createElement('div')
        card.classList.add('card')
        card.textContent = `${item.name} - ${item.price}`
        card.addEventListener('click', function() {
            window.location.href = item.url
        })
        products.appendChild(card)
    });
}
products.style.display = 'none'

input_search.addEventListener('input', function() {
    const inputValue = input_search.value.toLowerCase().trim()
    const filtredItems = items.filter(item =>
        item.name.toLocaleLowerCase().includes(inputValue)
    )
    rendrItems(filtredItems)
    products.style.display = 'block'
})

document.addEventListener('click', function() {
    if (!input_search.contains(event.target) && !products.contains(event.target))
        products.style.display = 'none'
})



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