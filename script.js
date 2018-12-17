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
        var i = Math.floor(current / height);
        if (e.deltaY < 0) {
          sections[i].scrollIntoView({
            behavior: 'smooth'
          });
        } else if (e.deltaY > 0) {
          sections[i + 1].scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    }
  }
})();
