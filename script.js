const scroll = (function() {

  let prevY=window.pageYOffset;
  let height = document.querySelector('.section').clientHeight;
  window.addEventListener('resize', function() {
    height = document.querySelector('.section').clientHeight
  });

  window.addEventListener('scroll', () => {

    let currentY = window.pageYOffset;
    let i = (Math.floor(currentY / height) + 1);

    let targetY;

    window.addEventListener('wheel', e=>{

      if(e.deltaY > 10){
        targetY=height*i;
        window.scrollTo(0, targetY);
      }else if(e.deltaY<10){

      }

    });

    });

})();
