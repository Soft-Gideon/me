// 'use strict';
const sec = document.querySelectorAll('section');
const header = document.querySelector('header');
const headerLink = document.querySelectorAll('header ul li a');

// Add class to the active link when scrolling
const activeLink = {
  currentSec: 'home',
  addLinkStyle: () => {
    sec.forEach((secId) => {
      if (window.scrollY >= secId.offsetTop) {
        activeLink.currentSec = secId.id;
      }
    })
    headerLink.forEach((link) => {
      if (link.href.includes(activeLink.currentSec)) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    })
  }
}
activeLink.addLinkStyle();

// Hide and show header when scrolling
export const scrollHeader = {
  currentScrollY: 0,
  cursorOn: false,
  hideHeader: () => {
    if (window.scrollY > scrollHeader.currentScrollY && window.scrollY > 30 && !scrollHeader.cursorOn) {
      header.style.top = '-100px';
    } else {
      header.style.top = '0';
    }
    scrollHeader.currentScrollY = window.scrollY;
  }
}
header.addEventListener('mouseenter', () => {
  scrollHeader.cursorOn = true;
})
header.addEventListener('mouseleave', () => {
  scrollHeader.cursorOn = false;
})
window.addEventListener('scroll', () => {
  activeLink.addLinkStyle();
  scrollHeader.hideHeader();
});


// ============== typed js ================
const homeType = document.querySelector('#home .typing');
const typed = new Typed(homeType, {
  strings: ['Software Developer', 'UI/UX Designer', 'Website Designer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

setTimeout(() => {
  alert(`PLEASE KINDLY NOTE:
THIS WEBSITE IS ON DEVELOPMENT MODE. THE WEBSITE MAY NOT FULLY FUNCTION AS EXPECTED AND SOME CONTENT ARE JUST THERE FOR PLACE HOLDING.`);
}, 5000)