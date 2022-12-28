import * as json from './json/index.js';
import * as jsonBasic from './json/ux.js';

let activeMenu;
const ux = json.default, 
      basic = jsonBasic.default, 
      main = document.querySelector('main');

main.innerHTML += `
    <aside>
        <h3 class='home'>UX [Home]</h3>
        <nav>
            <ul class='menu'></ul>
        </nav>
    </aside>
    <section class="content-container"></section>
`;

const container = document.querySelector('.content-container'), 
      menuUL = document.querySelector('.menu');

container.innerHTML += `<div class="ux-basic"><h3>UX Design</h3><br></div>`;

for(let b of basic.list) { 
    document.querySelector('.ux-basic').innerHTML += `<ul class="${ b.id }"><li><h4>${ b.title }</h4></li></ul>`;   
    for(let i of b.list) document.querySelector(`.${ b.id }`).innerHTML += `<li><a href="${ i.link }" target="_blank">${ i.title }</a></li>`; 
}

const mountContainers = (u) => container.innerHTML += `<ul class="${ ux[u].id }"><li><h3>${ ux[u].title }</h3></li></ul>`;

const mountLinkLists = (u) => {
    for(let i of ux[u].list) document.querySelector(`.${ u }`).innerHTML += `<li><a href="${ i.link }" target="_blank">${ i.title }</a></li>`;
}

const mountMenu = (u) => { 
    for(let m of [{ id: ux[u].id, title: ux[u].title }]) menuUL.innerHTML += `<li rel='${ m.id }'>${ m.title }</li>`;
};

Object.keys(ux).forEach(u => {
    mountMenu(u);
    mountContainers(u);
    mountLinkLists(u);
});

const menuList = document.querySelectorAll('.menu li'), 
reset = () => document.querySelectorAll('.content-container ul').forEach(ul => {
    ul.setAttribute('style', 'display: none');
    menuList.forEach(m => m.classList.remove('active-menu'));
});

const uxBasic = document.querySelector(`.ux-basic`);
menuList.forEach(m => {
    m.classList.remove('active-menu');
    m.addEventListener('click', () => {
        activeMenu = m.getAttribute('rel');
        reset();
        document.querySelector(`.${ activeMenu }`).setAttribute('style', 'display: block');
        uxBasic.setAttribute('style', 'display: none');
        home.classList.remove('active-menu');
        m.classList.add('active-menu');
    })
})

const home = document.querySelector('.home');
home.classList.add('active-menu');
home.addEventListener('click', () => {
    reset();
    uxBasic.setAttribute('style', 'display: block');
    uxBasic.childNodes.forEach(u => u.setAttribute('style', 'display: block'))
    home.classList.add('active-menu');
})
