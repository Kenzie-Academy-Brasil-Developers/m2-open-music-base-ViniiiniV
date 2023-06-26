function render(array) {
    const discsList = document.querySelector('.disc-list__container')

    discsList.innerHTML = ''

    array.forEach(disc => {
        const album = createCard(disc)
        
        discsList.appendChild(album)
    })
    
}

function createCard(product) {
    const disc = document.createElement('li')
    const divImg = document.createElement('div')
    const img = document.createElement('img')
    const divDiscInfo = document.createElement('div')
    const divBand = document.createElement('div')
    const bandName = document.createElement('h3')
    const discRelease = document.createElement('p')
    const discName = document.createElement('h2')
    const divDiscPrice = document.createElement('div')
    const price = document.createElement('p')
    const purchaseButton = document.createElement('button')
  
    disc.classList.add('disc')
    divImg.classList.add('img')
    divDiscInfo.classList.add('disc-info')
    divBand .classList.add('band')
    divDiscPrice.classList.add('disc-price')
    
    img.src = product.img
    img.alt = product.title
  
    bandName.innerText = product.band
    discRelease.innerText = product.year
    discName.innerText = product.title
  
    price.innerText = `R$ ${product.price.toFixed(2).replace(".", ",")}`

    purchaseButton.innerText = 'Comprar'
  
    divDiscPrice.append(price, purchaseButton)
    divBand.append(bandName, discRelease)
    divDiscInfo.append(divBand, discName, divDiscPrice)
    divImg.append(img)
    disc.append(divImg, divDiscInfo)
  
    return disc
}

const filterBySection = (array, sectionToFilter) => {
    const filtered = array.filter(value => {    
        if(value.category == sectionToFilter) {
        return value
        }
    })    
    return filtered
}

function filterByCategory(array) {
  
    const buttons = document.querySelectorAll(".musical-genre__buttons > input[type='radio']")
     
    buttons.forEach(button => {
      button.addEventListener('click', (event) => {

        if(event.target.id === 'todos'){
            render(array)
            filterByRange(array)       
        } else {
          const filtered = filterBySection(array, event.target.value)
          render(filtered)
          filterByRange(filtered)
        }
      })
    })
}


function filterByRange(array){
    const inputRange = document.querySelector('#range')
    const priceRange = document.querySelector('.musical-price__header > p')
    const discsList = document.querySelector('.disc-list__container')
    const notFound = document.createElement('p')

    notFound.classList.add('not-found-products')
    notFound.innerText = 'Nenhum produto encontrado ;-;'

    
    inputRange.addEventListener('input', () => {

        priceRange.innerText = `Até R$ ${Number(inputRange.value).toFixed(2).replace(".", ",")}`
        
        const filtered = array.filter(product => product.price <= inputRange.value)
        
        if(filtered.length === 0) {
            discsList.innerHTML = ''
            discsList.appendChild(notFound)
        } else {
            render(filtered)
        }
    })
}   

render(products)
filterByCategory(products)
filterByRange(products)