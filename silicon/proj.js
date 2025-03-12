// Dark Mode Toggle
const toggleSwitch = document.querySelector('.toggle input');
toggleSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});

// Buy Now Button Alert
const buyNowButton = document.querySelector('#butt');
buyNowButton.addEventListener('click', () => {
    alert('Nice selection Dude');
});
