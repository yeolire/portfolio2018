tabMenu();

function tabMenu() {
  const btns = Array.from(document.querySelectorAll('.sub-tab'));
  const contents = document.querySelectorAll('.tab-content');
  btns.forEach(function(btn) {
    btn.addEventListener('click', openTab);
  });

  function openTab() {
    for (let i = 0, item; item = btns[i]; i++) {
      btns[i].classList.remove('active');
      contents[i].classList.remove('active');
    }
    this.classList.add('active');
    let i = btns.indexOf(this);
    contents[i].classList.add('active');
  }
}
