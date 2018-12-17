sound()
shirinkNav();
scrollPage();

function sound() {
  var audio = document.getElementById('audio');
  var play = document.querySelector('.btn-play');
  var pause = document.querySelector('.btn-pause');
  play.addEventListener('click', function() {
    audio.play();
    play.classList.remove('on');
    pause.classList.add('on');
  });
  pause.addEventListener('click', function() {
    audio.pause();
    pause.classList.remove('on');
    play.classList.add('on');
  });
}

function shirinkNav() {
  var logo = document.querySelectorAll('header img');
  logo[1].style.opacity = 0;
  window.addEventListener('scroll', shirink);

  function shirink() {
    for (var i = 0, item; item - logo[i]; i++) {}
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      logo[0].style.opacity = 0;
      logo[1].style.opacity = 1;
    } else {
      logo[0].style.opacity = 1;
      logo[1].style.opacity = 0;
    }
  }
}

function scrollPage() {
  var links = document.querySelectorAll('#menu>a');
  window.addEventListener('scroll', move);

  function move() {
    var links = document.querySelectorAll('#menu a');
    var sections = document.querySelectorAll('section');
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

    if (current < height) {
      removeAllClass(links, 'on');
      links[0].classList.add('on');
    } else if (current < height * 2) {
      removeAllClass(links, 'on');
      links[1].classList.add('on');
    } else if (current < height * 3) {
      removeAllClass(links, 'on');
      links[2].classList.add('on');
    } else if (current < height * 4) {
      removeAllClass(links, 'on');
      links[3].classList.add('on');
    } else if (current < height * 5) {
      removeAllClass(links, 'on');
      links[4].classList.add('on');
    } else if (current < height * 6) {
      removeAllClass(links, 'on');
      links[5].classList.add('on');
    } else if (current < height * 7) {
      removeAllClass(links, 'on');
      links[6].classList.add('on');
    } else {
      removeAllClass(links, 'on');
      links[7].classList.add('on');
    }
  }

  function removeAllClass(arr, classname) {
    for (var i = 0, item; item = arr[i]; i++) {
      arr[i].classList.remove(classname);
    }
  }
}
