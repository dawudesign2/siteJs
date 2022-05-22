const Footer = () => {
    const body = document.querySelector('body');

    const footer = document.createElement('footer');
    footer.classList.toggle('footer');
    body.appendChild(footer);
}

export default Footer;