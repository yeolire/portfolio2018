toggleMenu();
hideNav();
// tabMenu();

function toggleMenu(){
  const nav=document.querySelector('header nav');
  const btn=Array.from(document.querySelectorAll('header button'));
  btn.forEach(function(e){
    e.addEventListener('click',toggle);
  })
  function toggle(){
    for (let i=0, item;item=btn[i];i++){
      btn[i].classList.add('on');
    }
    this.classList.remove('on');
    btn[0].className==='on' ? nav.style.display='none': nav.style.display='block';
  }
  var mql = window.matchMedia("screen and (min-width: 700px)")
  mql.addListener(function(e) {
      if(e.matches) {
        nav.style.display='flex';
      }else{
        nav.style.display='none';
        btn[0].classList.add('on');
        btn[1].classList.remove('on');
      }
  });
}

function hideNav(){
  const nav=document.querySelector('header');
  let prev=window.pageYOffset;
  window.onscroll=function(){
    let current=window.pageYOffset;
    if (current>innerHeight*0.4){
      nav.style.background='#000';
    }else{
      nav.style.background='none';
    }
    if(current<prev){
      nav.style.top='0';
    }else{
      nav.style.top='-80px';
    }
    prev=current;
  }
}

function tabMenu(){
  const btns=Array.from(document.querySelectorAll(''));
  btns.forEach(function(btn){
    btn.addEventListener('click',open);
  });
  function open(){
    const contents=document.querySelectorAll('');
    for(let i=0, item;item=btns[i];i++){
      btns[i].classList.remove('active');
      contents[i].classList.remove('active');
    }
    this.classList.add('active');
    let i=btns.indexOf(this);
    contents[i].classList.add('active');
  }
}
