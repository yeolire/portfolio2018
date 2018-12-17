(function scrollPage() {
  var sections = document.querySelectorAll('section');

  window.addEventListener('scroll', move);

  function move() {
    var current = window.pageYOffset + 1;
    var height = sections[0].clientHeight;
    window.addEventListener('resize', function() {
      height = sections[0].clientHeight;
    });

    var isChrome = !!window.chrome;
    if (isChrome) {
      window.addEventListener('wheel', function(e) {
        var delta=e.deltaY
        var i = Math.floor(current / height)+1;
        console.log(delta, delta>0, i);
        if (delta < 0) {
          sections[i-1].scrollIntoView({
            behavior: 'smooth'
          });
        } else if (delta >= 0) {
          sections[i].scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    }
  }
})();
