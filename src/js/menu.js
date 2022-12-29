export default function menu() {
    let activeMenu;
    
    const 
    menuList = document.querySelectorAll('.menu li'), 
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
        });
    });
    
    const home = document.querySelector('.home');
    home.classList.add('active-menu');
    home.addEventListener('click', () => {
        reset();
        uxBasic.setAttribute('style', 'display: block');
        uxBasic.childNodes.forEach(u => u.setAttribute('style', 'display: block'));
        home.classList.add('active-menu');
    });
};