tabMenu();

function tabMenu() {
  const btns = document.querySelectorAll('.sub-tab');
  const contents = document.querySelectorAll('.tab-content');
  Array.prototype.forEach.call(btns, function(btn) {
    btn.addEventListener('click', openTab);
  });

  function openTab() {
    for (let i = 0, item; item = btns[i]; i++) {
      btns[i].classList.remove('active');
      contents[i].classList.remove('active');
    }
    this.classList.add('active');
    let i = Array.prototype.indexOf.call(btns, this);
    contents[i].classList.add('active');
  }
}
