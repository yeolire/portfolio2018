scrolling();
modal();

function scrolling() {
  var num = 6;
  window.addEventListener('scroll', function() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && num <= 15) {
      addImg();
      addImg();
      addImg();
      modal();
    }
  });
  function addImg() {
    num++;
    var i = num - 1;
    var add_div = document.createElement('div');
    var add_img = document.createElement('img');
    add_div.appendChild(add_img);
    document.querySelector('main.gallery').appendChild(add_div);
    var img = document.querySelectorAll('main.gallery div img');
    img[i].src = '../img/gallery/gallery' + num + '.jpg';
    img[i].alt = 'sample photo' + num;
    return num;
  }
}

function modal() {
  var images = Array.from(document.querySelectorAll('main.gallery div img'));
  var modal = document.getElementById('modal');
  var close_btn = document.querySelector('#modal .close');
  images.forEach(function(img) {
    img.addEventListener('click', open);
  });
  close_btn.addEventListener('click', close);
  window.addEventListener('click', function(e) {
    if (e.target == modal) {
      close();
    }
  });
  function open() {
    var i = images.indexOf(this);
    var modalImg = document.querySelector('#modal img');
    modalImg.src = images[i].src;
    modal.style.display = 'block';
  }
  function close() {
    modal.style.display = 'none';
  }
}
