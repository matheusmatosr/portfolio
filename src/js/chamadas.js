// Botão Ver Mais
const escondido = document.getElementById('div-escondido');
const ver = document.getElementById('ver');

function vermais() {
    if (escondido.style.display == "none") {
    escondido.style.display='flex';
    ver.innerHTML='ver menos';
    } else {
        escondido.style.display='none';
        ver.innerHTML='ver mais';
    }
}

// Botões do menu responsivo
function openMenu() {
    document.querySelector(".menu-responsivo").style.height = '100%';
    document.querySelector(".btn-menu").style.display='none';
}

function fechaMenu() {
    document.querySelector(".menu-responsivo").style.height = '0';
    document.querySelector(".btn-menu").style.display='block';
}

function removerBtn() {
    const x = document.querySelector(".menu-responsivo");
    const btn = document.querySelector(".btn-menu");
    if (window.innerWidth >= 650) {
        btn.style.display='none';
    } else if (window.innerWidth >= 650 || x.style.height=='100%') {
        btn.style.display='none';
    } else {
        btn.style.display='block';
    }
}

// Chamada dos botões de redes sociais e projetos
const linkedin = 'https://www.linkedin.com/in/matheus-matos-1a523221b/';
const matoscontrol = 'https://matoscontrol.netlify.app/';
const sistema = 'https://sistema-de-chamadas.vercel.app/'
const covid = 'https://matheusmatosr.github.io/Cuidados_covid---HTML-CSS/';
const git = 'https://github.com/matheusmatosr?tab=repositories';
const github = 'https://github.com/matheusmatosr';
const the_movie = 'https://github.com/matheusmatosr/the_movie';
const bike = 'https://loja-bike-five.vercel.app/';
const sistemaRotinas = 'https://github.com/matheusmatosr/crud_csharp';
const loja = 'https://github.com/matheusmatosr/loja-produtos-frontend';

function chamarGithub2(){
    window.location = github;
}
function chamarlinkedin(){
    window.location = linkedin;
}
function chamarMatosControl(){
    window.location = matoscontrol;
}
function chamarSistema(){
    window.location = sistema;
}
function chamarLoja(){
    window.location = loja;
}
function chamarGithub(){
    window.location = git;
}
function chamarTheMovie(){
    window.location = the_movie;
}
function chamarBike(){
    window.location = bike;
}
function chamarSistemaRotinas() {
    window.location = sistemaRotinas;
}