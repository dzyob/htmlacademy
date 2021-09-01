let keys = document.querySelectorAll('.key');
let display = document.querySelector('.display');
let clearButton = document.querySelector('.clear');


for (let key of keys) {
    key.onclick = function () {
        display.append(key.textContent);
    }
}
clearButton.onclick = function () {
    display.textContent = '';
}