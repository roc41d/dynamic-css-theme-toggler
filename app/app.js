// DOM Elements

const darkBtn = document.getElementById('dark');
const lightBtn = document.getElementById('light');
const solidBtn = document.getElementById('solid');
const body = document.body;

// Apply the cached them on reload
const theme = localStorage.getItem('theme');

if (theme) {
  body.classList.add(theme);
}


// Buttons Event handlers

darkBtn.onclick = () => {
    body.classList.replace('light', 'dark');
    localStorage.setItem('theme', 'dark');
};

lightBtn.onclick = () => {
    body.classList.replace('dark', 'light');
    localStorage.setItem('theme', 'light');
};