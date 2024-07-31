const menubtn = document.querySelector('.menu')
menu = document.querySelector('header ul')
up = document.querySelector('.up')

menubtn.onclick = function() {
  if (!menu.classList.contains('open')) {
    menu.classList.add('open')
    menubtn.style.transform = 'rotate(180deg)'
    menubtn.classList.remove('uil-bars')
    menubtn.classList.add('uil-times')
  } else {
    menu.classList.remove('open')
    menubtn.style.transform = 'rotate(0deg)'
    menubtn.classList.add('uil-bars')
    menubtn.classList.remove('uil-times')
  }
}

window.addEventListener('scroll', () => {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    up.style.display = "block"
  } else {
    up.style.display = "none"
  }
  if (menu.classList.contains('open')) {
    menu.classList.remove('open')
    menubtn.style.transform = 'rotate(0deg)'
    menubtn.classList.add('uil-bars')
    menubtn.classList.remove('uil-times')
  }
})

up.addEventListener('click', () => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
})


const htmlbar = document.getElementById('bar1')
cssbar = document.getElementById('bar2')
jsbar = document.getElementById('bar3')

window.addEventListener('scroll', () => {
  if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
    htmlbar.classList.add('activehtml')
    cssbar.classList.add('activecss')
    jsbar.classList.add('activejs')
  }
})

document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.querySelector('.switchcircle');
  const body = document.body;
  const icon = document.querySelector('.switchcircle ion-icon');
  let isDarkMode = false;

  toggle.addEventListener('click', function() {
      if (isDarkMode) {
          // Switch to light mode
          body.style.backgroundColor = 'white';
          body.style.color = 'black';
          icon.setAttribute('name', 'moon-outline');
      } else {
          // Switch to dark mode
          body.style.backgroundColor = 'black';
          body.style.color = 'white';
          icon.setAttribute('name', 'sunny-outline');
      }
      isDarkMode = !isDarkMode;
  });
});