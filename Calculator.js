const add = document.getElementById('add')
const minus = document.getElementById('minus')
const times = document.getElementById('times')
const divide = document.getElementById('divide')

const input = document.getElementById('input-btn')

function display(val) {
    document.getElementById('result').value += val
    return val

}

function solve() {
    let x  = document.getElementById('result').value

    let y = eval(x)

    document.getElementById('result').value = y

    return y
}

function clearInput() {
   document.getElementById('result').value = ''

   
}