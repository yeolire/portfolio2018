var agent = navigator.userAgent.toLowerCase();

if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1)) {
  forIE();
}

function forIE() {
  toggleMenu();
  hideNav();
  tabMenu();

  function toggleMenu() {
    var nav = document.querySelector('header nav');
    var btn = document.querySelectorAll('header button');
    Array.prototype.forEach.call(btn, function(e) {
      e.addEventListener('click', toggle);
    })
    function toggle() {
      for (var i = 0, item; item = btn[i]; i++) {
        btn[i].classList.add('on');
      }
      this.classList.remove('on');
      btn[0].className === 'on'
        ? nav.style.display = 'none'
        : nav.style.display = 'block';
    }
    var mql = window.matchMedia("screen and (min-width: 700px)");
    mql.addListener(function(e) {
      if (e.matches) {
        nav.style.display = 'flex' || 'block';
      } else {
        nav.style.display = 'none';
        btn[0].classList.add('on');
        btn[1].classList.remove('on');
      }
    });
  }

  function hideNav() {
    var nav = document.querySelector('header');
    var prev = window.pageYOffset;
    window.onscroll = function() {
      var current = window.pageYOffset;
      if (current > innerHeight * 0.4) {
        nav.style.background = '#000';
      } else {
        nav.style.background = 'none';
      }
      if (current < prev || prev < 0) {
        nav.style.top = '0';
      } else {
        nav.style.top = '-80px';
      }
      prev = current;
    }
  }

  function tabMenu() {
    var btns = document.querySelectorAll('.order .tab button');
    Array.prototype.forEach.call(btns, function(btn) {
      btn.addEventListener('click', open);
    });
    function open() {
      var contents = document.querySelectorAll('.order .table');
      for (var i = 0, item; item = btns[i]; i++) {
        btns[i].classList.remove('on');
        contents[i].classList.remove('on');
      }
      this.classList.add('on');
      var i = btns.indexOf(this);
      contents[i].classList.add('on');
    }
  }
}
