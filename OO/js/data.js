var dom = {
  nav: '.nav__links',
  link: '.nav__link',
  subtitle: '.sub__title',
  main: '.main'
}

var fetchPage = function(name) {
  fetch(name).then(function(response) {
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
  fetchPage(location.hash.substr(2));
} else {
  fetchPage('home');
}
