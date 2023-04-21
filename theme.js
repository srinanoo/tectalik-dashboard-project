const colorTheme = document.querySelectorAll('[name="theme"]');
const storetheme = function (theme) {
    localStorage.setItem("theme", theme);
}
colorTheme.forEach(themeOption => {
    themeOption.addEventListener('click', () => {
        storetheme(themeOption.id);
    });
});
const retriveTheme = function () {
    const activeTheme = localStorage.getItem("theme");
    colorTheme.forEach((themeOption) => {
        if (themeOption.id === activeTheme) {
            themeOption.checked = true;
        }
    });
};
document.onload = retriveTheme();
const buttonTheme = document.querySelectorAll('[name="color"]');
const storebutton = function (color) {
    localStorage.setItem("color", color);
}
buttonTheme.forEach(themelist => {
    themelist.addEventListener('click', () => {
        storebutton(themelist.id);
    });
});
const retrivecolor = function () {
    const activecolor = localStorage.getItem("color");
    buttonTheme.forEach((themelist) => {
        if (themelist.id === activecolor) {
            themelist.checked = true;
        }
    });
};
document.onload = retrivecolor();

let nav_button = document.getElementById('nav-button');
let settings_close = document.getElementById('settings-close');
let settings_sidebar = document.getElementById('settings-sidebar');
document.onclick = function (e) {
    if (!nav_button.contains(e.target) && !settings_sidebar.contains(e.target)) {
        settings_sidebar.classList.remove('active');
    }
}
nav_button.onclick = function () {
    settings_sidebar.classList.toggle('active');
}
