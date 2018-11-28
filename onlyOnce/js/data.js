var dom = {
  nav: '.nav__links',
  link: '.nav__link',
  subtitle: '.sub__title',
  main: '.main'
}

var fetchPage= function (name, domstr) {
  fetch(name).then(function(response) {
    response.text().then(function(text) {
      document.querySelector(domstr).innerHTML = text;
    });
  });
}

if (location.hash) {
  fetchPage(location.hash.substr(2), dom.main);
} else {
  fetchPage('index', dom.main);
}

fetch('menu').then(function(response) {
  response.text().then(function(text) {
    var items = text.split(',');

    var tags = '';
    items.forEach(function(item, i) {
      item = item.trim();
      var tag = `<li><a class="nav__link" href="#${item}" onclick="fetchPage('${item}', '${dom.main}')">${item}</a></li>`;
      tags += tag;
    });
    document.querySelector(dom.nav).innerHTML = tags;
  });
});
