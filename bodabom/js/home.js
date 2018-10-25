changeBg();

function changeBg(){
  let count=1;
  setInterval(function(){
    count++;
    if(count>4){
      count=1;
    }
    const bg=document.querySelector('.bg');
    bg.style.backgroundImage=`url(img/home0${count}.jpg)`;
  }, 3000)
}
