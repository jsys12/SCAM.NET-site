const button_favorite = document.querySelector('#button_favorite')

button_favorite.addEventListener('click', function() {
    const Guru = {
        name: 'Гигабайт Гуру',
        price: '299$',
        image: "../product_catalog/ProductS_Carts/GIGA/content/флешка.jpg"
    }

    let favorite = JSON.parse(localStorage.getItem('favorite'))
    favorite.push(Guru)
    localStorage.setItem('favorite', JSON.stringify(favorite))

    alert('Товар добавленв коризну')
    updateFavoriteCounter()

    function updateFavoriteCounter() {
        const favorite = JSON.parse(localStorage.getItem('favorite'))
        const itemCounter = document.getElementById('item_counter')
        itemCounter.textContent = `В ИЗЬРАННОМ ${favorite.length} ТОВАРОВ`
    }
})