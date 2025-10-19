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


    function renderItems(list) {
        products.innerHTML = ''

        if (list.length === 0) {
            products.innerHTML = '<div class="card">Товары не найдены</div>'
            return
        }

        list.forEach((item, index) => {
            const newDiv = document.createElement('div')
            newDiv.classList.add('card')
            newDiv.textContent = `${item.name} - ${item.price}`
            newDiv.addEventListener('click', function() {
                window.location.href = item.url
            })
            products.appendChild(newDiv)

        });
    }
    products.style.display = 'none'

    input_search.addEventListener('input', function() {
        const inputValues = input_search.value.toLowerCase().trim()

        const filtredItems = items.filter(item =>
            item.name.toLocaleLowerCase().includes(inputValues)
        )
        renderItems(filtredItems)
        products.style.display = 'block'
    })

    document.addEventListener('click', function(event) {
        if (!input_search.contains(event.target) && !products.contains(event.target)) {
            products.style.display = 'none'
        }
    })