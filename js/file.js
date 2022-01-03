        //Задаём переменные для загрузки файла, добавления файла и родителя
const fileParent = document.querySelector('.files-body')
let fileAdd = document.querySelector('.file-add')
const fileLoad = document.querySelector('.file-load')

        //Добавляем к переменным обработчик клика с вызовом функции добавления
fileAdd.addEventListener('click', addNewLoading)
const addClone = fileAdd.cloneNode(true)
        //Добавляем обработчик для нового загрузчика
addClone.addEventListener('click',addNewLoading)

        //Функция добавления загрузчика
function addNewLoading()
{
        //Создаём переменную, ярлык и класс для элемента удаления
    const trashBin = document.createElement('img')
    trashBin.addEventListener('click', deleteLoading)
    trashBin.src="/images/trash.svg"
    trashBin.classList.add('trash-bin')
        //Стилизация, которую не получилось подсоединить через CSS
    trashBin.style.marginLeft = '20px'
    trashBin.style.width = '1.3rem'


        //Замена элемента добавления на элемент загрузки
    let loadClone = fileLoad.cloneNode(true)
    loadClone.appendChild(trashBin)
    fileParent.removeChild(fileAdd)
    fileParent.appendChild(loadClone)
    fileParent.appendChild(addClone)    
        //Добавление ээлемента добавления
    fileAdd = document.querySelector('.file-add')
}

        //Функция удаления выбранного загрузчика
function deleteLoading()
{
        //Определение удаляемого файла
    let trashBin = document.querySelector('.trash-bin')
        //Нахождение удаляемого блока
    let deletingFile = trashBin.parentNode
    fileParent.removeChild(deletingFile) 
}



