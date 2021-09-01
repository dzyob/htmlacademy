let keys = document.querySelectorAll('.key');
let display = document.querySelector('.display');
let clearButton = document.querySelector('.clear');
let enter = document.querySelector('.enter');

enter.onclick = function () {
    let breaks = document.createElement('br');
    display.append(breaks);
}

for (let key of keys) {
    key.onclick = function () {
        display.append(key.textContent);
    }
}
clearButton.onclick = function () {
    display.textContent = '';
}