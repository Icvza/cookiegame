
const number = document.getElementById('counter')
const getStart = document.getElementById('startButton')

getStart.addEventListener("click", createName)

function createName(){
     let namePrompt = prompt('name')
     let name = namePrompt
     let nameHtml = document.createElement('p')
     nameHtml.innerHTML = name
     document.querySelector('.headerText').appendChild(nameHtml)
     createImg()
}

function createImg() {
     createCounter()
     let image = document.createElement("img")
     image.src = "https://media.gettyimages.com/photos/homemade-chocolate-chip-cookie-on-white-overhead-xxxl-picture-id157511634?s=612x612"
     image.setAttribute('class', 'cookieImg')
     image.addEventListener('click', () => {
          number.innerHTML++
          upgrade()
     })
     document.querySelector('div').appendChild(image)
     getStart.remove()
}

function createCounter(){
     let header = document.createElement('p')
     header.innerHTML = "Cookies you've made"
     document.querySelector('.headerText').prepend(header)
}


function upgrade (){
          if (number.innerHTML == 15) {
               useUpgrade()
          } 
          if (number.innerHTML == 30) {
               useUpgrade()
          } 
          if (number.innerHTML == 50) {
               useUpgrade()
          } 
          if (number.innerHTML == 63) {
               useUpgrade()
          } 
          if (number.innerHTML == 75) {
               useUpgrade()
          } 
          if (number.innerHTML == 80) {
               useUpgrade()
          } 
          if (number.innerHTML == 90) {
               useUpgrade()
          } 
          if (number.innerHTML == 93) {
               useUpgrade()
          } 
          if (number.innerHTML == 100) {
               useUpgrade()
          } 
          if (number.innerHTML == 120) {
               useUpgrade()
          } 
          if (number.innerHTML == 130) {
               useUpgrade()
          } 
          if (number.innerHTML == 135) {
               useUpgrade()
          } 
          if (number.innerHTML == 146) {
               useUpgrade()
          } 
          if (number.innerHTML == 159) {
               useUpgrade()
          } 
          if (number.innerHTML == 250) {
               useUpgrade()
          } 
          if (number.innerHTML == 225) {
               useUpgrade()
          } 
}

function useUpgrade(){
     if (document.getElementById('button-id') === null) {
          let upgradeButton = document.createElement("button")
          upgradeButton.innerHTML = 'POWER UPGRADE: Add 5 '
          upgradeButton.setAttribute('id', 'button-id')
          upgradeButton.addEventListener('click', () => {
               let newNumber = parseInt(number.innerHTML) + 5 
               number.innerHTML = newNumber.toString()
               upgradeButton.remove() 
          })
          document.querySelector('.upgrade').appendChild(upgradeButton)
     }
}





