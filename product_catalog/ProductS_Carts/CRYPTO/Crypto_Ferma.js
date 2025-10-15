const button_favorite = document.querySelector('#button_favorite');

button_favorite.addEventListener('click', function() {
    const Crypto = {
        name: 'Крипто-Ферма',
        price: '899$',
        image: "../product_catalog/ProductS_Carts/CRYPTO/content/crypto.jpeg"
    };

    let favorite = JSON.parse(localStorage.getItem('favorite'));
    favorite.push(Crypto);
    localStorage.setItem('favorite', JSON.stringify(favorite));


    alert('Товар добавлен в избранное');
    updateFavoriteCounter();
});

function updateFavoriteCounter() {
    const favorite = JSON.parse(localStorage.getItem('favorite'));
    const itemCounter = document.getElementById('item_counter');
    itemCounter.textContent = `В ИЗБРАННОМ ${favorite.length} ТОВАРОВ`;
}