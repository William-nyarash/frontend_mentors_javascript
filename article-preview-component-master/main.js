const shareBtn = document.getElementById('share');
const social = document.querySelector('.social_links'); 
const userInfo = document.querySelector('.user');
const shareb  =document.querySelector('.shareb');
const arrowDown = document.querySelector('.arrow-side');

let isVisible = false;

const toggleSocialLinks = () => {
  if (!shareBtn || !social || !userInfo || !arrowDown) return;

  isVisible = !isVisible;

  if (isVisible) {
    social.classList.add('shared');
    social.style.display = 'flex';
    userInfo.classList.add('hide_from_view');
  } else {
    social.classList.remove('shared');
    social.style.display = 'none';
    userInfo.classList.remove('hide_from_view');
  }
};

const mediaQuery = window.matchMedia('(min-width: 30rem)');

shareBtn.addEventListener('click', (e) => {
  if (mediaQuery.matches) {
    toggleSocialLinks();
  }
});

shareBtn.addEventListener('touchstart', (e) => {
  e.preventDefault();
    toggleSocialLinks();
});
shareb.addEventListener('touchend', (e) => {
  e.preventDefault();
    social.classList.remove('shared');
    social.style.display = 'none';
    userInfo.classList.remove('hide_from_view');
})