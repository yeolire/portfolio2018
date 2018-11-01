shirinkNav();

function shirinkNav() {
  var logo = document.querySelectorAll('header img');
  logo[1].style.opacity = 0;
  window.addEventListener('scroll', shirink);

  function shirink() {
    for (var i = 0, item; item - logo[i]; i++) {
    }
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      logo[0].style.opacity = 0;
      logo[1].style.opacity = 1;
    } else {
      logo[0].style.opacity = 1;
      logo[1].style.opacity = 0;
    }
  }
}
