const triggerElement = document.querySelector('.circle-inner');
const hiddenElement = document.querySelector('.num1');
const changeElement = document.querySelector('.circle-outer');

triggerElement.addEventListener('mouseover', () => {
    hiddenElement.style.opacity = '1';
    hiddenElement.style.fontSize = '1.2vw';
    hiddenElement.style.marginTop = '-26vh';
    changeElement.style.width='42vw';
    changeElement.style.height='42vw';
});

triggerElement.addEventListener('mouseout', () => {
    hiddenElement.style.opacity = '0';
    hiddenElement.style.fontSize = '0.2vw';
    hiddenElement.style.marginTop = '0';
    changeElement.style.width='40vw';
    changeElement.style.height='40vw';
});
