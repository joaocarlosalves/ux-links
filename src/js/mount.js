import * as json from '../json/index.js';
import * as jsonBasic from '../json/ux.js';

export default function mount() {
    let 
    ux = json.default, 
    container = document.querySelector('.content-container'),
    uxBasic;

    container.innerHTML += `<div class="ux-basic"><h3>UX Design</h3><br></div>`;
    uxBasic = document.querySelector('.ux-basic');

    const 
    menuUL = document.querySelector('.menu'),

    mountContainers = (u, c) => c.innerHTML += `<ul class="${ u.id }"><li><h3>${ u.title }</h3></li></ul>`,

    mountLinkLists = (u) => {
        for(let i of u.list)                 
            document.querySelector(`.${ u.id }`).innerHTML += `
                <li>
                    <i class='flag flag-${ i.lang }'></i>
                    <a href="${ i.link }" target="_blank">${ i.title }</a>
                </li>
            `;            
    },

    mountMenu = (u) => { for(let m of [{ id: ux[u].id, title: ux[u].title }]) menuUL.innerHTML += `<li rel='${ m.id }'>${ m.title }</li>` };
    
    for(let b of jsonBasic.default.list) { 
        mountContainers(b, uxBasic);
        mountLinkLists(b);
    };

    Object.keys(ux).forEach(u => {
        mountMenu(u);
        mountContainers(ux[u], container);
        mountLinkLists(ux[u]);        
    });
};