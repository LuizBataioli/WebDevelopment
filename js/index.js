function validaBusca() {
    if (document.querySelector('#q').value == '') {
        alert('Não podia ter deixado em branco a busca!')
        return false;
    }
}

document.querySelector('#form-busca').onsubmit = validaBusca;

var banner = ["./img/html.png", "./img/css.png", "./img/js.png"]
var bannerAtual = 0;
function trocaBanner() {
    bannerAtual = (bannerAtual + 1) % 3;
    document.querySelector('.destaque img').src = banner[bannerAtual];
}
var timer = setInterval(trocaBanner, 1000);

var controle = document.querySelector('.pause');
controle.onclick = function () {
    if (controle.className == 'pause') {
        clearInterval(timer);
        controle.className = 'play';
    }
    else {
        timer = setInterval(trocaBanner, 1000);
        controle.className = 'pause';

    }
    return false;
};





