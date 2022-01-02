const toggleSwitch = document.querySelectorAll('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.forEach(element => {
            toggleSwitch.checked = true;
        });
    }
}

function switchTheme(e) {
    var currentTheme;
    if (e.target.checked) {
        currentTheme = 'dark';
    } else {
        currentTheme = 'light';
    }
    toggleSwitch.forEach(element => {
        element.checked = e.target.checked;
    });
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
}
toggleSwitch.forEach(element => {
    element.addEventListener('change', switchTheme, false);
});