let stagesAdd = document.querySelectorAll('.mini-plus')
let stagesLoad = document.querySelector('.string')
let newElement = stagesLoad.cloneNode(true)
let index = 5

function addElement(element)                //Функция добавления 
{
    let trashBin
    let stagesClone = newElement.cloneNode(true)
    let stagesList = element.parentNode.previousElementSibling
    stagesClone.firstElementChild.id = `checkbox${index}`
    stagesClone.firstElementChild.nextElementSibling.setAttribute('for', `checkbox${index}`)
    index += 1
    stagesList.appendChild(stagesClone)
    let stagesAdder = element.parentNode
    if(stagesAdder.childElementCount === 1)
    {   
        trashBin = document.createElement('img')
        trashBin.src="/images/trash.svg"
        trashBin.classList.add('trash-bin')
        trashBin.style.marginLeft = '15px'
        trashBin.style.width = '0.8rem'
        trashBin.style.marginRight = '15px'
        trashBin.style.position = 'middle'
        stagesList.lastElementChild.appendChild(trashBin)
    }
    
    trashBin.onclick = function deleting()                //Функция удаления элемента
    {
        let deleted = trashBin.parentNode
        deleted.remove()   
    }
}




