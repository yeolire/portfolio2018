const toggle = (function() {
  const btns = Array.from(document.querySelectorAll('.toggle'));

  const show=function() {
    const remove = document.querySelector('.remove');
    const lists = document.querySelector('.nav__links');

    for (let i = 0, item; item = btns[i]; i++) {
      btns[i].classList.toggle('on');
    }
    lists.classList.toggle('on');
    remove.classList.toggle('on');
  }

  btns.forEach(function(btn){
    btn.addEventListener('click', show);
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
