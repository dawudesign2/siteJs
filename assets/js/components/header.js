const Header = () => {
    const body = document.querySelector('body');

    const header = document.createElement('header');
    header.classList.toggle('header');
    body.appendChild(header);

    const nav = document.createElement('nav');
    nav.classList.toggle('nav');
    header.appendChild(nav);

    const link = (href, title) => {
        const a = document.createElement('a');
        a.href = href;
        a.textContent = title;
        nav.appendChild(a);
    }
    
    link('#', 'type de bien');
    link('#', 'achat & location');
    link('#', 'ville');
    link('#', 'rechercher');
}

export default Header;