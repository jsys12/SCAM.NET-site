const button_favorite = document.querySelector('#button_favorite');

button_favorite.addEventListener('click', function () {
    const Break = {
        name: 'Кирпич',
        price: '$79',
        image: "content/break.webp"
    };

    let favorite = JSON.parse(localStorage.getItem('favorite'));
    favorite.push(Break);
    localStorage.setItem('favorite', JSON.stringify(favorite));


    alert('Товар добавлен в избранное');
    updateFavoriteCounter();
});

function updateFavoriteCounter() {
    const favorite = JSON.parse(localStorage.getItem('favorite')) || [];
    const itemCounter = document.getElementById('item_counter');
    itemCounter.textContent = `В ИЗБРАННОМ ${favorite.length} ТОВАРОВ`;
}