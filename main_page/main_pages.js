const input_search = document.querySelector('#input_search')
const products = document.querySelector('#products')


    const items = [
        { name: 'Гигабайт гуру', price: 2000},
        { name: 'Видеокурс "Невидимая раскрутка"', price: 800 },
        { name: 'Мета мусор', price: 1300 },
        { name: 'Крипто-Ферма', price: 750 },
        { name: 'SEO-Заговор', price: 900 },
        { name: 'Кирпич', price: 1200 },
    ]

    function renderItems(list) {
        products.innerHTML = ''

        if (list.length === 0) {
            products.innerHTML = '<div class="card">Товары не найдены</div>'
            return
        }

        list.forEach((item) => {
            const newDiv = document.createElement('div')
            newDiv.classList.add('card')
            newDiv.textContent = `${item.name} - ${item.price}`
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
