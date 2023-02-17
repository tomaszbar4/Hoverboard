const squares = 500
const boxContainer = document.querySelector('.box-container')

createBoxes()


function createBoxes() {
    for (let i = 0; i < squares; i++) {
        const square = document.createElement('div')
        square.classList.add('box')
        boxContainer.append(square)

        const boxes = document.querySelectorAll('.box')

        boxes.forEach(box => {
            box.addEventListener('mouseover', () => {
                const color = generateRandomColor()
                box.style.backgroundColor = color
                box.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
            })
            box.addEventListener('mouseout', () => {
                setTimeout(resetColor, 1000)
                function resetColor() {
                    box.style.backgroundColor = 'rgb(26, 26, 26)'
                    box.style.boxShadow = '0 0 0'
                }
            })
        })
    }
}

function generateRandomColor() {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    return `rgb(${r}, ${g}, ${b})`
}


