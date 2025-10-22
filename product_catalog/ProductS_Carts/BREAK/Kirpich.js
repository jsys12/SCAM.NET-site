const button_favorite = document.querySelector('#button_favorite');
const button_buy = document.getElementById('button_buy')
const message_favorite = document.querySelector('#message_favorite')


button_buy.addEventListener('click', function() {
    alert('ваш товар однажды появится в корзине')
})

button_favorite.addEventListener('click', function () {
    const Break = {
        name: 'Кирпич',
        price: '$79',
        image: "content/break.webp"
    };

    let favorite = JSON.parse(localStorage.getItem('favorite')) || [];
    favorite.push(Break);
    localStorage.setItem('favorite', JSON.stringify(favorite));


    message_favorite.classList.add('message_favorite_animation')
    message_favorite.textContent = 'Товар добавлен в избрaнное'

    setTimeout (() => {
        message_favorite.classList.remove('message_favorite_animation')
        message_favorite.textContent = ''
    }, 2000)
    
    updateFavoriteCounter();
});

function updateFavoriteCounter() {
    const favorite = JSON.parse(localStorage.getItem('favorite')) || [];
    const itemCounter = document.getElementById('item_counter');
    if (!itemCounter) return
    itemCounter.textContent = `В ИЗБРАННОМ ${favorite.length} ТОВАРОВ`;
}
