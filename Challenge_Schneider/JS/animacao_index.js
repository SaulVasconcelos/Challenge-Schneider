var video = document.getElementById('planta');
var source = document.createElement('source');

source.setAttribute('src', 'VIDEO/tree1.mp4');
source.setAttribute('type','video/webm'); 

video.appendChild(source);
video.play();

var points = 499; //points calculado a partir dos desafios e jogos

if(points > 500){ //a arvore cresce se seus pontos forem maiores q 500
    changeTo2();
}

if(points > 1000){ //a arvore cresce se seus pontos forem maiores q 1000
    changeTo3();
}

function changeTo2(){
    video.pause();

    source.setAttribute('src','VIDEO/tree2.mp4');
    source.setAttribute('type','video/webm');

    video.load();
    video.play();

};

function changeTo3(){
    video.pause();

    source.setAttribute('src','VIDEO/tree3.mp4');
    source.setAttribute('type','video/webm');

    video.load();
    video.play();

};


