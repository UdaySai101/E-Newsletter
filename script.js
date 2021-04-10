'!use strict';

const pSelector = document.getElementsByTagName('p');

const longPara = "Duolingo removes language barriers by connecting people that need websites translated with students that are learning a language. Through trial and error the team at Duolingo has mastered the art of data driven product development through AB testing and a focus on the right metrics to optimize. driven product development through AB testing and a focus on the right metrics to optimize.";
const shortPara = "Duolingo removes language barriers by connecting people that need websites translated with students that are learning a language. Through trial and error the team at Duolingo has mastered the art..";

pSelector[1].innerHTML = pSelector[9].innerHTML = longPara;

for (let i = 2; i < pSelector.length - 1; i++) {

    pSelector[i].innerHTML = shortPara;

}

document.querySelector('.col10').style.marginBottom = '100px';

const imagSelector = document.getElementsByClassName('imag');

let colSelector = [];

for (let i = 0; i < imagSelector.length; i++) {

    imagSelector[i].style.backgroundImage = `url("images/img${(i === 6) ? i : i + 1}.jpg")`;
    imagSelector[i].style.backgroundPosition = "center";
    imagSelector[i].style.backgroundAttachment = "cover";
    colSelector[i] = document.querySelector(`.col${i + 1}`);
}

colSelector[10] = document.querySelector(`.col10`);

colSelector.map(c => {
    c.addEventListener('mouseover', () => {
        c.style.transform = 'scale(1.01)';
        c.style.backgroundColor = "#656a99";
        c.style.transition = 'transform .1s';
        c.style.cursor = 'pointer';
    });

    c.addEventListener('mouseout', () => {
        c.style.backgroundColor = "#5a5f89";
        c.style.transform = 'scale(1)';
    })
});

const radColors = ['invert(70%)', 'invert(81%) sepia(92%) saturate(2779%) hue-rotate(4deg) brightness(109%) contrast(104%)', 'invert(69%) sepia(7%) saturate(1139%) hue-rotate(204deg) brightness(83%) contrast(90%)', 'invert(85%) sepia(10%) saturate(5175%) hue-rotate(288deg) brightness(102%) contrast(97%)', 'invert(83%) sepia(18%) saturate(1619%) hue-rotate(125deg) brightness(81%) contrast(86%)', 'invert(100%)', 'invert(100%)', 'invert(89%) sepia(13%) saturate(335%) hue-rotate(200deg) brightness(89%) contrast(95%)', 'invert(63%) sepia(8%) saturate(3389%) hue-rotate(176deg) brightness(98%) contrast(95%)'];

const radbSelector = document.getElementsByClassName('radiobut');

for (let i = 0; i < radbSelector.length; i++) {
    radbSelector[i].style.filter = radColors[i];
}

 const spn = document.getElementsByClassName('span');

spn[0].innerHTML  = spn[1].innerHTML = shortPara;