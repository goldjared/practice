createDropMenu('.menu-container', '.menu-drop');

function createDropMenu(menuContainer, dropSelect) {
  const drop = document.querySelector(dropSelect);

  function toggleDrop() {
      drop.classList.toggle('visible')
  }

  document.querySelector(menuContainer).addEventListener('mouseenter', () => {
    toggleDrop();
  })

  document.querySelector(menuContainer).addEventListener('mouseleave', () => {
    toggleDrop();
  })

  
}