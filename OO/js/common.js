const toggle = (function() {

      document.querySelector('.header__wrap').addEventListener('click', function(e) {

          const classname = e.target.classList;
          const btns = document.querySelectorAll('.toggle');
          const nav = document.querySelector('.nav__links');
          const list = document.querySelector('.nav__link');

          show = function() {
            const remove = document.querySelector('.remove');

            for (let i = 0, item; item = btns[i]; i++) {
              btns[i].classList.toggle('on');
            }
            nav.classList.toggle('on');
            remove.classList.toggle('on');
          }

          if (classname.contains('toggle') || classname.contains('nav__link')) {
            show();
            console.log(e.target.className);
          });

      })();



const stickyNav = (function() {

  window.addEventListener('scroll', function() {

    const header = document.querySelector('.header');
    
    header.classList.add('sticky');

    if (window.pageYOffset < 10) {
      header.classList.remove('sticky');
    }

  });

})();
