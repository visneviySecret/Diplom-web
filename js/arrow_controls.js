
document.onkeydown = function(e){
    if(e.code == 'ArrowRight') {
        let right = document.querySelector('.right-arrow')
        let url = right.href
        document.location.href = url
    }
    if(e.code == 'ArrowLeft') {
        let left = document.querySelector('.left-arrow')
        let url = left.href
        document.location.href = url
    }
}

/*keydawn/keyup - пользовательское нажатие по клавишам ArrowLeeft*/
/*let teamLastChild = document.querySelector('table>tbody>tr:last-child')*/
