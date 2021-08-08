// Request 1: Click to Change Text.
let greeting = document.querySelector('.greeting')

greeting.addEventListener('click', function (event){
    greeting.innerHTML = 'Have a Good Time!'
}) 

// Request 2: Click to Show/Close Menu.
let showMenu = document.querySelector('.showmenu')
let menuList = document.querySelector('.menulist')

showMenu.addEventListener('click', function (event){
  if (menuList.style.display == 'none') {
    menuList.style.display = 'block'
    showMenu.textContent = 'X'
  } else {
    menuList.style.display = 'none'
    showMenu.textContent = '☰'
  }
})


// Request 3: Click to Show More Content Boxes.
const toggleList = document.querySelector('.action-btn')
const listDiv = document.querySelector('.listDiv')

toggleList.addEventListener('click', function (event){
  if (listDiv.style.display == 'none') {
    listDiv.style.display = 'flex'
    listDiv.style.flexFlow = 'row wrap'
    listDiv.style.justifyContent = 'space-between'
    listDiv.style.alignItems = 'center'
  } else {
    listDiv.style.display = 'none'
  }
})