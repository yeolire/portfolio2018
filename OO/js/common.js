const toggle = (function() {
  const btns = Array.from(document.querySelectorAll('.toggle'));

  btns.forEach(function(btn){
    btn.addEventListener('click', function() {
      const links = document.querySelector('.nav__links');
      const remove = document.querySelector('.remove');

      for (let i = 0, item; item = btns[i]; i++) {
        btns[i].classList.toggle('on');
      }
      links.classList.toggle('on');
      remove.classList.toggle('on');
    });
  });


})();


const stickyNav = (function() {
  window.addEventListener('scroll', function(){
    const header=document.querySelector('.header');
    header.classList.add('sticky');
    if(window.pageYOffset<10){
      header.classList.remove('sticky');
    }
  });
})();
