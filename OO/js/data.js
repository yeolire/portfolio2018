var dom = {
  nav: '.nav__links',
  link: '.nav__link',
  subtitle: '.sub__title',
  main: '.main',
  body: 'body'
}

var fetchPage = function(name) {
  fetch(name).then(function(response) {
    if(response.status==='404'){
      document.querySelector(dom.subtitle).textContent = 'Not found';
      document.querySelector(dom.main).innerHTML = 'Not found';
    }
    response.text().then(function(text) {
      var items, title, contents;

      items = text.split('%%%');
      title = items[0].trim();
      contents = items[1];

      document.querySelector(dom.subtitle).textContent = title;
      document.querySelector(dom.main).innerHTML = contents;
    });
  });
}


var load = function() {
  fetch('menu').then(function(response) {
    response.text().then(function(text) {
      var items = text.split(',');
      var tags = '';
      items.forEach(function(item, i) {
        item = item.trim();
        var tag = `<li><a class="nav__link" href="#${item}" onclick="fetchPage('${item}')">${item}</a></li>`;
        tags += tag;
      });
      document.querySelector(dom.nav).innerHTML = tags;
    });
  });

  if (location.hash) {
    fetchPage(location.hash.substr(1));
  } else {
    fetchPage('home');
  }
}

load();

document.querySelector(dom.body).addEventListener('click', function(e){
  if(e.target.classList.contains('btn') || e.target.classList.contains('disabled')){
    var hash=e.target.href.split('#')[1];
    fetchPage(hash);
  }
});
