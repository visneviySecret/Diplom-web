let personList = document.querySelector('.person-list')
const fileAdd = document.querySelector('.file-add')
const fileLoad = document.querySelector('.file-load')
const personAdder = document.querySelector('.person-adder')

fileAdd.addEventListener('click', addNewLoading)
const trashBin = document.createElement('img')
trashBin.src="images/trash.svg"
trashBin.classList.add('trash-bin')
trashBin.style.marginLeft = '10px'
trashBin.style.marginRight = '1.6rem'
trashBin.style.width = '1.5rem'


function addNewLoading()                //Функция добавления 
{
    const loadClone = fileLoad.cloneNode(true)
    let trashClone = trashBin.cloneNode(true)
    trashClone.addEventListener('click', deleteLoading)
    loadClone.appendChild(trashClone)
    personList.appendChild(loadClone)
}



function deleteLoading()                //Функция удаления элемента
{
    let last = personList.lastChild
    last.remove()    
    let i = document.querySelectorAll('.team-person')
    if (i.length === 2)
        {
        personAdder.removeChild(trashBin)
        }
}







