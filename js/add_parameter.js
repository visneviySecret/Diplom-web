const list = document.querySelector('.text-list')
const parameters = document.querySelector('.parameters-list')
const textBlock = document.querySelector('.text-area-block')
const parameterBlock = parameters.firstElementChild

function addTextBlock(element)
{
    trashBin = document.createElement('img')
    trashBin.src="images/cross.svg"
    trashBin.style.width = '1rem'
    trashBin.style.position = 'absolute'
    trashBin.classList = "cross"
    trashBin.addEventListener('click', function(){
        let title = this.parentNode.firstElementChild.innerText
        console.log(element)
        let deleted = this.parentNode
        deleted.remove()   
        let newBlock = parameterBlock.cloneNode('true')
        newBlock.firstElementChild.nextElementSibling.firstElementChild.innerHTML = title
        parameters.appendChild(newBlock)

    })
    
    let title = element.lastElementChild.firstElementChild.innerText
    element.remove()

    let newBlock = textBlock.cloneNode(true)
    newBlock.firstElementChild.innerHTML = title
    newBlock.style.position = 'relative'
    newBlock.appendChild(trashBin)
    newBlock.style.zIndex = '1'
    trashBin.style.zIndex = '3'
    trashBin.style.right = '0.7rem'
    trashBin.style.top = '2.4rem'
    list.appendChild(newBlock)    
}