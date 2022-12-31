export default function menu() {   
    const 
    menu = document.querySelectorAll('.menu li'), 
    display = (c, t) => c.setAttribute('style', `display: ${ t }`),
    classList = (c, t) => t == 'add' ? c.classList.add('active-menu') : c.classList.remove('active-menu'),
    reset = () => document.querySelectorAll('.content-container ul').forEach(ul => {
        display(ul, 'none');
        display(basic, 'none');
        menu.forEach(m => classList(m, 'remove'));
    });
    
    const basic = document.querySelector(`.ux-basic`);
    menu.forEach(m => {
        classList(m, 'remove');
        m.addEventListener('click', () => {
            reset();            
            display(document.querySelector(`.${ m.getAttribute('rel') }`), 'block');
            display(basic, 'none');
            classList(home, 'remove');
            classList(m, 'add');
        });
    });
    
    const home = document.querySelector('.home');
    classList(home, 'add');
    home.addEventListener('click', () => {
        reset();
        display(basic, 'block');
        basic.childNodes.forEach(u => display(u, 'block'));
        classList(home, 'add');
    });
};