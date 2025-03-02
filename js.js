const container = document.getElementById('container')
const headerTitle = document.createElement('h1')
const link = document.createElement('a')
const btnNewGrid = document.createElement('button')
const btnResetGrid = document.createElement('button')
const navContainer = document.createElement('nav')
const btnContainer = document.createElement('div')
const gridContainer = document.createElement('div')
const gridContainerSize = 580
const colorPallets=['#FF6969','#FFDE4D','#FFB22C','#FF4C4C']

let gridNumber = 20
let gridSize = gridContainerSize / gridNumber

// CLASS ATTRIBUTE
headerTitle.setAttribute('class','title')
gridContainer.setAttribute('class','gridContainer')
btnContainer.setAttribute('class','btnContainer')
link.setAttribute('href','https://github.com/Stephan-Gabriel-SG')
link.setAttribute('target','_blank')

// GRID CONTAINER
gridContainer.style.width=`${gridContainerSize}px`
gridContainer.style.height=`${gridContainerSize}px`

// TEXT ELEMENT VALUE
headerTitle.innerText='Etch A Sketch'
btnNewGrid.textContent='New Grid'
btnResetGrid.textContent='Reset Grid'

// LINK CONTENT
link.innerHTML=`
    <img id='githubLogo' src='github.svg' alt='icon'/>
`
// LISTENER
btnNewGrid.addEventListener('click', ()=>newGridHandler())
btnResetGrid.addEventListener('click', ()=>resetGridChildrenColor())

// ADD TO CONTAINER
navContainer.append(
    headerTitle,
    link
)
btnContainer.append(
    btnNewGrid,
    btnResetGrid
)
container.append(
    navContainer,
    btnContainer,
    gridContainer
)

// INITIALIZATION
updateNewGrid(gridNumber, gridSize)
function newGridHandler () {
    let newGrid = parseInt(prompt('Enter a new value between 1-100 :'))
    if(isNaN(newGrid)){
        alert('Invalid number.\nPlease try again!')
        newGridHandler()
    }
    else{
        if(newGrid > 100){
            alert('The value must be less than 100.\nPlease try again!')
            newGridHandler()
        }
        else{
            updateNewGrid(newGrid, (gridContainerSize / newGrid))
        }
    }
}

// FUNCTIONS
function updateNewGrid(gridNumber, gridSize){
    clearGridChildren()
    for (let index = 0; index < (gridNumber * gridNumber); index++) {
        const gridBox = document.createElement('div')
        gridBox.style.width = `${gridSize}px`
        gridBox.style.height = `${gridSize}px`
        gridBox.style.boxShadow = '0 0 0px 0.5px #D9DFC6'
        gridBox.addEventListener('pointerenter',()=>{
            gridBox.style.backgroundColor= colorPallets[Math.floor(Math.random()*colorPallets.length)]
        })
        gridBox.addEventListener('mouseenter',()=>{
            gridBox.style.backgroundColor= colorPallets[Math.floor(Math.random()*colorPallets.length)]
        })
        gridBox.addEventListener('touchstart',()=>{
            gridBox.style.backgroundColor= colorPallets[Math.floor(Math.random()*colorPallets.length)]
        })
        gridContainer.append(gridBox)
    }
}

function clearGridChildren(){
    gridContainer.replaceChildren()
}

function resetGridChildrenColor(){
    let gridChildren = gridContainer.childNodes
    gridChildren.forEach(child=>child.style.background='transparent')
}
