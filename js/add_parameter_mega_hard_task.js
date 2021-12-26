const list = document.querySelector('.text-list')
let parameters = document.querySelector('.parameters-list')
const textBlock = document.querySelector('.text-area-block')
const parameterBlock = parameters.firstElementChild
let allParameters = parameters.querySelectorAll('.combo')


for (i = 0; i <= parameters.childElementCount; i ++)
{
    allParameters[i].addEventListener('click', function()
    {
    trashBin = document.createElement('img')
    trashBin.src="images/trash.png"
    trashBin.style.width = '20px'
    trashBin.style.position = 'absolute'
    trashBin.addEventListener('click', function()
        {
        let title = this.parentNode.firstElementChild.innerText
        this.parentNode.style.display = 'none'  
        let newBlock = parameterBlock.cloneNode('true')
        newBlock.firstElementChild.nextElementSibling.firstElementChild.innerHTML = title
        parameters.appendChild(newBlock)
        parameters = document.querySelector('.parameters-list')
        allParameters = parameters.querySelectorAll('.combo')
        })
    
    let title = this.lastElementChild.firstElementChild.innerText
    this.style.display = 'none'
    let newBlock = textBlock.cloneNode(true)
    newBlock.firstElementChild.innerHTML = title
    newBlock.style.position = 'relative'
    newBlock.appendChild(trashBin)
    newBlock.style.zIndex = '1'
    trashBin.style.zIndex = '3'
    trashBin.style.right = '0.5rem'
    trashBin.style.top = '2rem'
    list.appendChild(newBlock)    
    })   
}
