let list = document.querySelector('.list')
const add = document.querySelector('.add')
const form = document.querySelector('.form')
const adder = document.querySelector('.adder')


add.addEventListener('click', addNew)
const trashBin = document.createElement('img')
trashBin.src="/images/trash.svg"
trashBin.classList.add('trash-bin')
trashBin.style.marginLeft = '10px'
trashBin.style.marginRight = '0.5rem'
trashBin.style.position = 'middle'
trashBin.style.width = '1.3rem'


function addNew()               
{
    let trashClone = trashBin.cloneNode(true)
    const clone = form.cloneNode(true)
    trashClone.addEventListener('click', function(){
        trashClone.parentNode.remove()
        let newList = list.querySelectorAll('.economic-data-string')
        for (i = 0; i <= list.childElementCount-1; i++){
            newList[i].firstElementChild.innerHTML = i+1
        }
    })
    clone.appendChild(trashClone)
    let counter = list.lastElementChild
    let i = Number(counter.textContent)
    i += 1
    clone.firstElementChild.textContent = i
    list.appendChild(clone)
}
