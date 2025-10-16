const button_favorite = document.querySelector('#button_favorite');

button_favorite.addEventListener('click', function() {
    const Video = {
        name: 'Невидимая раскрутка',
        price: '249$',
        image: "../product_catalog/ProductS_Carts/VIDEO/content/video.png"
    };

    let favorite = JSON.parse(localStorage.getItem('favorite')) || [];
    favorite.push(Video);
    localStorage.setItem('favorite', JSON.stringify(favorite));


    alert('Товар добавлен в избранное');
    updateFavoriteCounter();
});

function updateFavoriteCounter() {
    const favorite = JSON.parse(localStorage.getItem('favorite')) || [];
    const itemCounter = document.getElementById('item_counter');
    itemCounter.textContent = `В ИЗБРАННОМ ${favorite.length} ТОВАРОВ`;

}
