const btn = document.getElementById('share');
const social = document.querySelector('.social_links'); 
const hide = document.querySelector('.user');
const clear = document.querySelector(".clear");

const showSocials = () => {
    social.classList.add('shared');
    social.style.display = 'flex';
    hide.classList.add('hide_from_view');
}

const hideSocials = () => {
    social.classList.remove('shared');
    social.style.display = 'none';
    hide.classList.remove('hide_from_view');
}

btn.addEventListener('mousedown', showSocials);
btn.addEventListener('touchstart', showSocials);

clear.addEventListener('mouseup', hideSocials );
clear.addEventListener('touchend', hideSocials);
