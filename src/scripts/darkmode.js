const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");

const dark_logo = document.querySelector(".dark_logo");
const white_logo = document.querySelector(".white_logo");

const dark_logo_footer = document.querySelector(".dark_logo_footer");
const white_logo_footer = document.querySelector(".white_logo_footer");

const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme:dark)").matches;
const mainMenuScroll = document.getElementById('mainMenu');
const active = document.querySelector('.active');

const htmlElement = document.documentElement;

// Apply theme based on user preference stored in localStorage or system preference
if (userTheme === 'dark') {
    htmlElement.classList.add('dark');
    sun.classList.remove('hidden');
    moon.classList.add('hidden');
    dark_logo.classList.add('hidden');
    white_logo.classList.remove('hidden');
    dark_logo_footer.classList.add('hidden');
    white_logo_footer.classList.remove('hidden');
} else if (userTheme === 'light') {
    htmlElement.classList.remove('dark');
    moon.classList.remove('hidden');
    sun.classList.add('hidden');
    dark_logo.classList.remove('hidden');
    white_logo.classList.add('hidden');
    dark_logo_footer.classList.remove('hidden');
    white_logo_footer.classList.add('hidden');
} else if (systemTheme) {
    htmlElement.classList.add('dark');
    sun.classList.remove('hidden');
    moon.classList.add('hidden');
    dark_logo.classList.add('hidden');
    white_logo.classList.remove('hidden');
    dark_logo_footer.classList.add('hidden');
    white_logo_footer.classList.remove('hidden');
} else {
    htmlElement.classList.remove('dark');
    moon.classList.remove('hidden');
    sun.classList.add('hidden');
    dark_logo.classList.remove('hidden');
    white_logo.classList.add('hidden');
    dark_logo_footer.classList.remove('hidden');
    white_logo_footer.classList.add('hidden');
}

moon.addEventListener('click', () => {
    sun.classList.remove('hidden');
    moon.classList.add('hidden');
    htmlElement.classList.add('dark');
    const newTheme = 'dark';
    localStorage.setItem('theme', newTheme);
    dark_logo.classList.add('hidden');
    white_logo.classList.remove('hidden');
    dark_logo_footer.classList.add('hidden');
    white_logo_footer.classList.remove('hidden');


});

sun.addEventListener('click', () => {
    moon.classList.remove('hidden');
    sun.classList.add('hidden');
    htmlElement.classList.remove('dark');
    const newTheme = 'light';
    localStorage.setItem('theme', newTheme);
    dark_logo.classList.remove('hidden');
    white_logo.classList.add('hidden');
    dark_logo_footer.classList.remove('hidden');
    white_logo_footer.classList.add('hidden');

    

    
});

const bgBlackElement = mainMenuScroll.querySelector('.bg-black');
if(bgBlackElement){
    console.log("dgdgd");
    mainMenuScroll.classList.add('dark');
}
else{

}
