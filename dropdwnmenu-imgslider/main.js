

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

createDropMenu('.menu-container', '.menu-drop');

function createSlider(imgHolder, left, right) {
  const imageContainer = document.querySelector(imgHolder);
  let currentImg;
  function changeImg(direction) {
    (function getCurrentImg() {
      if(currentImg > 7) {
        return currentImg = 1;
      }
      if(currentImg === undefined){
        return currentImg = 1;
      } else {
        return currentImg += 1;
      }
    }())
    
    if(direction === 'left'){
      console.log(currentImg);
    }
  }
  document.querySelector(left).addEventListener('click', () => {
    changeImg('left');
  })
  document.querySelector(right).addEventListener('click', () => {
    console.log('right');
  })


}

createSlider('.image-container', '.left', '.right')
/* hit right, current display none, nextsibling displays, hit left, current none, prevsibling dispays

ID what is current, every time this called. it needs to get current. hide current, 
and then display left/right

*/