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