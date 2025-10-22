const button_favorite = document.getElementById('button_favorite');
const message_favorite = document.getElementById('message_favorite');

button_favorite.addEventListener('click', () => {
  const SEO = {
    name: 'SEO-Заговор',
    price: '$399',
    image: '../product_catalog/ProductS_Carts/SEO/content/keys.png'
  };

  const favorite = JSON.parse(localStorage.getItem('favorite')) || [];
  favorite.push(SEO);
  localStorage.setItem('favorite', JSON.stringify(favorite));

  message_favorite.textContent = 'Товар добавлен в избранное';
  message_favorite.classList.add('message_favorite_animation');
  setTimeout(() => {
    message_favorite.classList.remove('message_favorite_animation');
    message_favorite.textContent = '';
  }, 2000);

  updateFavoriteCounter();
});

function updateFavoriteCounter() {
  const favorite = JSON.parse(localStorage.getItem('favorite')) || [];
  const itemCounter = document.getElementById('item_counter');
  if (!itemCounter) return;
  itemCounter.textContent = `В ИЗБРАННОМ ${favorite.length} ТОВАРОВ`;
}
