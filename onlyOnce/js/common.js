const toggle = (function() {
  const btns = Array.from(document.querySelectorAll('.toggle'));

  btns.forEach(function(btn){
    btn.addEventListener('click', function() {
      const links = document.querySelector('.nav__links');

      for (let i = 0, item; item = btns[i]; i++) {
        btns[i].classList.toggle('on');
      }
      links.classList.toggle('on');
    })
  });


})();


const stickyNav = (function() {



})();
