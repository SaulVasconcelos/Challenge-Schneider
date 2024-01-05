function menuShow() {
    let menuMobile = document.querySelector('.nav2');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "../IMG/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "../IMG/close_white_36dp.svg";
    }
}

function menuShow2() {
    let menuMobile = document.querySelector('.nav2');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "IMG/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "IMG/close_white_36dp.svg";
    }
}