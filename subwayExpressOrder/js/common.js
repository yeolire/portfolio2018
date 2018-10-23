back();

function back(){
  const btn=document.getElementById('back');
  btn.addEventListener('click',()=>history.back())
}
