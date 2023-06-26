function renderDarkMode () {
    const darkModeButton = document.querySelector('.mode__controller')
    const darkModeButtonImg = document.querySelector('.mode__controller > img')
    const html = document.querySelector('html')
    const localStoragePreference = JSON.parse(localStorage.getItem('darkMode'))
  
    if(localStoragePreference) {
        darkModeButtonImg.src = '../src/assets/img/sun.svg'
        html.classList.add('dark__mode')
    } else {
        darkModeButtonImg.src = '../src/assets/img/moon.svg'
        html.classList.remove('dark__mode')
    }
  
    darkModeButton.addEventListener('click', () => {
        html.classList.toggle('dark__mode')
  
      if(html.classList.contains('dark__mode')) {
        darkModeButtonImg.src = '../src/assets/img/sun.svg'
        localStorage.setItem('darkMode', true)
      } else {
        darkModeButtonImg.src = '../src/assets/img/moon.svg'
        localStorage.setItem('darkMode', false)
      }
    })
  }

  renderDarkMode()
