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
const instagram = 'https://www.instagram.com/mtzinnn7/'
const portifolio = 'https://remarkable-flan-ac674a.netlify.app/';
const sistema = 'https://github.com/matheusmatosr/sistema-de-chamadas'
const covid = 'https://matheusmatosr.github.io/Cuidados_covid---HTML-CSS/';
const git = 'https://github.com/matheusmatosr?tab=repositories';
const github = 'https://github.com/matheusmatosr';
const matosflix = 'https://pre-alpha-codigo-safe.netlify.app';
const financeiro = 'https://imaginative-pithivier-189a8e.netlify.app/';
const sistemaRotinas = 'https://github.com/matheusmatosr/crud_csharp';
const loja = 'https://github.com/matheusmatosr/loja-produtos-frontend';

function chamarGithub2(){
    window.location = github;
}
function chamarlinkedin(){
    window.location = linkedin;
}
function chamarInstagram() {
    window.location = instagram
}
function chamarPortifolio(){
    window.location = portifolio;
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
function chamarMatosflix(){
    window.location = matosflix;
}
function chamarFinanceiro(){
    window.location = financeiro;
}
function chamarSistemaRotinas() {
    window.location = sistemaRotinas;
}