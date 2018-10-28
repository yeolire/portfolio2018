gallery();

function gallery() {
  var num=6;
  window.onscroll = function() {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && num<=15) {
        addImg();
        addImg();
        addImg();
      }
  }
  function addImg(){
    num++;
    var i=num-1;
    var add_div = document.createElement('div');
    var add_img = document.createElement('img');
    add_div.appendChild(add_img);
    document.querySelector('main.gallery').appendChild(add_div);
    var img=document.querySelectorAll('main.gallery div img');
    img[i].src='../img/gallery/gallery'+num+'.jpg';
    img[i].alt='sample photo'+num;
    return num;
  }
}
