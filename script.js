const scroll = (function() {

  const section = document.querySelectorAll('.section');
  const length = section.length - 1;
  const height = section[0].clientHeight;
  window.addEventListener('resize', function() {
    height = section[0].clientHeight
  });

  window.addEventListener('scroll', () => {
    let currentY = window.pageYOffset + 1;
    let target = (Math.floor(currentY / height) + 1);
    if (target >= length) {
      target = 0;
    }

    window.addEventListener('wheel', e => {
      if (e.deltaY > 0) {
        window.scrollTo(0, target * height);
      } else if (e.delta < 0) {
        window.scrollTo(0, (targetY - 1) * height);
      }
    });

  });

})();
