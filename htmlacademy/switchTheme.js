let buttonTheme = document.querySelector('.buttonTheme')
buttonTheme.onclick = function () {
    if (!buttonTheme.classList.contains('nextTheme')) {
        document.getElementById("styleLink").href = "basic-dark-theme/style.css";
        document.getElementById("buttonTheme1").style = "background-color: #ceeaff; color: #260c26; height: 20px; width: 20px;";
    } else {
        document.getElementById("styleLink").href = "basic-light-theme/style.css";
        document.getElementById("buttonTheme1").style = "background-color: #260c26; color: #ceeaff; height: 20px; width: 20px;";
    }
    buttonTheme.classList.toggle('nextTheme');
    console.log(buttonTheme.classList.contains('nextTheme'));
}