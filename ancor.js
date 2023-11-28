
//fuction

function scrollTo(el) {
  window.scroll({
    left: 0,
    top: el.offsetTop,
    behavior: 'smooth'
  })
}

//about me page
const aboutMe = document.querySelector('.aboutMe');
const firstSection = document.querySelector('.first-section');
aboutMe.addEventListener('click', () => {
  scrollTo(firstSection);
})

//tarifs page
const tarifs = document.querySelector('.tarifs');
const secondSection = document.querySelector('.second-section');
tarifs.addEventListener('click', () => {
  scrollTo(secondSection);
});

//process page
const process = document.querySelector('.process');
const thirdSection = document.querySelector('.third-section');
process.addEventListener('click', () => {
  scrollTo(thirdSection);
});

//FAQ page
const faq = document.querySelector('.faq');
const fifthSection = document.querySelector('.fourth-section');
faq.addEventListener('click', () => {
  scrollTo(fifthSection);
})