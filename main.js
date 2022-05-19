const showMenu = () => {
    let menu = document.querySelector('.menu');
    let menuDropped = document.querySelector('.menu-dropped');
    menu.setAttribute('onclick', 'hideMenu()');  
    menuDropped.style.height = '50px';
    menuDropped.style.background = '#fff';
    menuDropped.style.width = '101.2%';
    menuDropped.style.margin = '0 0 0 -8px';
    setInterval(() => {
        let menuDropped = document.querySelector('.menu-dropped');
        menuDropped.innerHTML = '<a class="menu-items" href="../main.html">Accueil du site</a><a class="menu-items" href="allquiz.html">Tous les quiz</a><a class="menu-items">Nous contacter</a>';
    }, 500);
};

 ;

const hideMenu = () => {
    let menu = document.querySelector('.menu');
    let menuDropped = document.querySelector('.menu-dropped');
    menu.setAttribute('onclick', 'showMenu()');
    menuDropped.style.height = '0';
    menuDropped.style.overflow = 'hidden';
};