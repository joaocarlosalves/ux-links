export default function menu() {   
    const 
    menuList = document.querySelectorAll('.menu li'), 
    display = (c, t) => c.setAttribute('style', `display: ${ t }`),
    classList = (c, t) => t == 'add' ? c.classList.add('active-menu') : c.classList.remove('active-menu'),
    reset = () => document.querySelectorAll('.content-container ul').forEach(ul => {
        display(ul, 'none');
        display(uxBasic, 'none');
        menuList.forEach(m => classList(m, 'remove'));
    });
    
    const uxBasic = document.querySelector(`.ux-basic`);
    menuList.forEach(m => {
        classList(m, 'remove');
        m.addEventListener('click', () => {
            reset();            
            display(document.querySelector(`.${ m.getAttribute('rel') }`), 'block');
            display(uxBasic, 'none');
            classList(home, 'remove');
            classList(m, 'add');
        });
    });
    
    const home = document.querySelector('.home');
    classList(home, 'add');
    home.addEventListener('click', () => {
        reset();
        display(uxBasic, 'block');
        uxBasic.childNodes.forEach(u => display(u, 'block'));
        classList(home, 'add');
    });
};