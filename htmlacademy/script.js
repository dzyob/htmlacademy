let themeButton = document.querySelector('.themeButton')
themeButton.onClick = function () {
    var cssLink = $('link[href*="basic-light-theme/style.css"]');
    cssLink.replaceWith('<link href="basic-dark-theme/style.css">');
}
