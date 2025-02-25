const container = document.getElementById('container')
const headerTitle = document.createElement('h1')
const btnCreateNewGrid = document.createElement('button')
const gridContainer = document.createElement('div')
const gridContainerSize = 580

let gridNumber = 20
let gridSize = gridContainerSize / gridNumber

// CLASS ATTRIBUTE
headerTitle.setAttribute('class','title')
gridContainer.setAttribute('class','gridContainer')

// GRID CONTAINER
gridContainer.style.width=`${gridContainerSize}px`
gridContainer.style.height=`${gridContainerSize}px`

headerTitle.innerText='Etch A Sketch'
btnCreateNewGrid.textContent='New Grid'
btnCreateNewGrid.addEventListener('click', ()=>newGridHandler())

container.append(
    headerTitle,
    btnCreateNewGrid,
    gridContainer
)

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
            alert(`change grid content ${newGrid}`)
        }
    }
}

for (let index = 0; index < (gridNumber * gridNumber); index++) {
    const gridBox = document.createElement('div')
    gridBox.style.width = `${gridSize}px`
    gridBox.style.height = `${gridSize}px`
    gridBox.style.boxShadow = '0 0 0px 0.5px black'
    gridContainer.append(gridBox)
}

