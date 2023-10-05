const container2Elements = document.querySelectorAll('.container2');
    const circleElements = document.querySelectorAll('.circle');
    const circlesE = document.querySelector('.circles');

const circles2E = document.querySelector('.circles2');
const circles3E = document.querySelector('.circles3');
    const circle2Elements = document.querySelectorAll('.circle2');
    const circle3Elements = document.querySelectorAll('.circle3');

    // container2Elements.forEach((container2, index) => {
    //     container2.addEventListener('mouseenter', () => {
    //         // Change the background color of the corresponding circle
    //         circleElements[index].style.backgroundColor = 'red';
    //     });

    //     container2.addEventListener('mouseleave', () => {
    //         // Reset the background color when the mouse leaves
    //         circleElements[index].style.backgroundColor = 'ghostwhite';
    //     });
    // });

function highlightCircles() {
    circleElements.forEach(circle => {
        circle.classList.add('hovered');
    });
}
function unhighlightCircles() {
    circleElements.forEach(circle => {
        circle.classList.remove('hovered');
    });
}
// container2Elements.forEach(container2 => {
//     container2.addEventListener('mouseenter', highlightCircles);
//     container2.addEventListener('mouseleave', unhighlightCircles);
// });
circlesE.addEventListener('mouseenter', highlightCircles);
circlesE.addEventListener('mouseleave', unhighlightCircles);

//purplecircles hover
function highlightCircles2() {
    circle2Elements.forEach(circle2 => {
        circle2.classList.add('hovered2');
    });
}
function unhighlightCircles2() {
    circle2Elements.forEach(circle2 => {
        circle2.classList.remove('hovered2');
    });
}
circles2E.addEventListener('mouseenter', highlightCircles2);
circles2E.addEventListener('mouseleave', unhighlightCircles2);


function highlightCircles3() {
    circle3Elements.forEach(circle3 => {
        circle3.classList.add('hovered3');
    });
}
function unhighlightCircles3() {
    circle3Elements.forEach(circle3 => {
        circle3.classList.remove('hovered3');
    });
}
circles3E.addEventListener('mouseenter', highlightCircles3);
circles3E.addEventListener('mouseleave', unhighlightCircles3);


// circles2.addEventListener('mouseenter', () => {
//     circle2Elements.forEach(circle2 => {
//         circle2.style.backgroundColor = 'rgb(114,89,216)';
        
//     });
// });
// circles2.addEventListener('mouseleave', () => {
//     circle2Elements.forEach(circle2 => {

//         circle2.style.backgroundColor = 'ghostwhite';
        
//     });
// });

// circles3.addEventListener('mouseenter', () => {
//     circle3Elements.forEach(circle3 => {
//         circle3.style.backgroundColor = 'rgb(58,192,132)';
//     });
// });
// circles3.addEventListener('mouseleave', () => {
//     circle3Elements.forEach(circle3 => {
//         circle3.style.backgroundColor = 'ghostwhite';
//     });
// });