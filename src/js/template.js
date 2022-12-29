export default function template() {  
    document.querySelector('main').innerHTML += `
        <aside>
            <h3 class='home'>UX [Home]</h3>
            <nav>
                <ul class='menu'></ul>
            </nav>
        </aside>
        <section class="content-container"></section>
    `;
};