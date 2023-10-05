const triggerElement = document.querySelector('.circle-inner');
const hiddenElement = document.querySelector('.num1');
const changeElement = document.querySelector('.circle-outer');

// Add a mouseover event listener to the trigger element
triggerElement.addEventListener('mouseover', () => {
    hiddenElement.style.opacity = '1';
    hiddenElement.style.fontSize = '1.4vw';
    hiddenElement.style.marginTop = '-47vh';
    changeElement.style.width='42vw';
    changeElement.style.height='42vw';
});

// Add a mouseout event listener to the trigger element (optional, to hide the element when no longer hovered)
triggerElement.addEventListener('mouseout', () => {
    // When the trigger element is no longer hovered, set opacity to 0 to hide it
    hiddenElement.style.opacity = '0';
    hiddenElement.style.fontSize = '0.3vw';
    hiddenElement.style.marginTop = '0';
    changeElement.style.width='40vw';
    changeElement.style.height='40vw';
});
