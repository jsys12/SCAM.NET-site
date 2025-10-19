window.onload = function() {
    const favorite = JSON.parse(localStorage.getItem('favorite')) || [];
    const favoriteContainer = document.getElementById('item_list');

    function renderItem () {
        favoriteContainer.innerHTML = ''
        
        if (favorite.length > 0) {
            favorite.forEach((product, index) => {
                const productElement = document.createElement('div');
                productElement.classList.add('product');
                
                const buttonBasket = document.createElement('button');
                buttonBasket.classList.add('product_1_button');
                buttonBasket.textContent = 'ДОБАВИТЬ В КОРЗИНУ';

                const buttonDelete = document.createElement('button');
                buttonDelete.classList.add('buttonBasket')
                buttonDelete.textContent = 'УДАЛИТЬ'

                buttonDelete.addEventListener('click', function() {
                    favorite.splice(index, 1)
                    localStorage.setItem('favorite', JSON.stringify(favorite))
                    renderItem()
                    updateFavoriteCounter();
                })

                buttonBasket.addEventListener('click', function() {
                    const cart = JSON.parse(localStorage.getItem('cart'))
                    cart.push(product)
                    localStorage.setItem('cart', JSON.stringify(cart))
                    alert('Товар добавлен в корзину')
                })

                productElement.innerHTML = `
                    <img class = 'product_1_GURU' src="${product.image}" alt="${product.name}">
                    <h3 class = 'product_1_GURU_text'>${product.name}</h3>
                    <p class = 'product_1_price'>${product.price}</p>
                `;

                productElement.appendChild(buttonDelete);
                productElement.appendChild(buttonBasket);

                favoriteContainer.appendChild(productElement);
                
            });
        } else {
            favoriteContainer.innerHTML = '<p class = "empty">В избранном пока ничего нет</p>';
        }
    }

    renderItem()
    updateFavoriteCounter();
};

function updateFavoriteCounter() {
    const favorite = JSON.parse(localStorage.getItem('favorite')) || [];
    const itemCounter = document.getElementById('item_counter');
    itemCounter.textContent = `В ИЗБРАННОМ ${favorite.length} ТОВАРОВ`;
}





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

