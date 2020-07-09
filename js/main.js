'use-strict';
const iconMenu = document.querySelector('.menu__container--icon');
const toggleMenu = document.querySelector('.second__main');
const toggleMenuList = document.querySelector('.second__main--list');
const imgMenu = document.querySelector('.menu__container--icon > img');
const firstMenuOptions = document.querySelectorAll('.top__main--list > li');

const getMenu =()=>{
    toggleMenu.classList.toggle('visible')
    showCloseIcon()
}

const showCloseIcon =()=>{
    if(toggleMenu.classList.contains('visible')){
        imgMenu.setAttribute('src','./images/cerrar.svg')
        addOptions()
    }else{
        imgMenu.setAttribute('src','./images/icon8.svg')
    }
}

const addOptions =()=>{
    firstMenuOptions.forEach(option=>{
        option.style.cssText='color:#203354; font-weight:400; text-transform:capitalize'; 
        toggleMenuList.insertBefore(option,toggleMenuList.lastElementChild)
    })
}






iconMenu.addEventListener('click',getMenu);


