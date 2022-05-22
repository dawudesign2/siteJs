const Main = () => {
    const body = document.querySelector('body');

    const main = document.createElement('main');
    main.classList.toggle('main');
    body.appendChild(main);
}

export default Main;