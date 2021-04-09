const pSelector = document.getElementsByTagName('p');

const longPara = "Duolingo removes language barriers by connecting people that need websites translated with students that are learning a language. Through trial and error the team at Duolingo has mastered the art of data driven product development through AB testing and a focus on the right metrics to optimize. driven product development through AB testing and a focus on the right metrics to optimize.";
const shortPara = "Duolingo removes language barriers by connecting people that need websites translated with students that are learning a language. Through trial and error the team at Duolingo has mastered the art..";

pSelector[1].innerHTML = pSelector[9].innerHTML = longPara;

for( let i = 2; i < pSelector.length-1; i++){

    pSelector[i].innerHTML = shortPara;

}

document.querySelector('.col9').style.marginBottom = '100px';


const imagSelector = document.getElementsByClassName('imag');

for( let i = 0; i < imagSelector.length; i++){

     imagSelector[i].style.backgroundImage = `url("images/img${(i === 6) ? i : i+1}.jpg")`;
     imagSelector[i].style.backgroundPosition = "center";
     imagSelector[i].style.backgroundAttachment = "cover";

}









