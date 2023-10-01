//View functionality
const div = document.querySelector('.view');
const button = document.querySelector('.button');
let isOpen = false;
const viewer = () => {
    if (isOpen === false) {
        div.style.display = 'block'
        button.innerHTML = 'View less';
        isOpen = true;
    } else if (isOpen === true) {
        div.style.display = 'none'
        button.innerHTML = 'View more';
        isOpen = false;
    }
}
const banner = document.getElementById('banner');
const bgImage = ['image 1.png', 'image 2.png', 'image 3.png'];
let currentIndex = 0;
const changeBanner= () => {
    currentIndex = (currentIndex + 1) % bgImage.length;
    let url = bgImage[currentIndex];
    banner.style.cssText = `background-image: url('./img/${url}'); transition: all 4s ease-in-out;`;
} 

setInterval(changeBanner, 5000)

const colors = [
   'rgba(250, 9, 198, 0.7137254902)',
   '#39b301',
   '#a9b301',
   '#ff0101',
   '#0156ff',
   '#ffaec8',
   '#b97a56'
]

const randomColors = (colors) => {
    return colors[Math.floor(Math.random() * colors.length)];
}
const span = document.querySelector('.sub-item h2 span');
let texts = ['Design', 'Art', 'Innovation'];
let currentText = 0;
span.style.color = '#b97a56';
const changeColor = () => {
    currentText = (currentText + 1) % texts.length;
    let text = texts[currentText];
    span.innerHTML = text;
    span.style.color = randomColors(colors);
}

setInterval(changeColor, 5000);

