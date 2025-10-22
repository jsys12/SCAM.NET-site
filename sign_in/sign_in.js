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




document.addEventListener("DOMContentLoaded", () => {
    
    const form = document.querySelector('#main_form_sign_in');
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        const data = {}
        const formData = new FormData(form);
        data["username"] = formData.get("username");
        data["password"] = formData.get("password");
        
        fetch ( "http://127.0.0.1:8000/auth/", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result)
            if(result["Error"] == "Password / username doesn't match"){
                // Тут прикол типа пароль не подходит пиши
            } else {
                localStorage.setItem("userData", JSON.stringify(result["result"]))
                setTimeout(() => {window.location.href = '../profile/profile.html';}, 10000)
            }
        });
    });
});