

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
  function changeImg() {
    function calcImgId(direction) {
      if(currentImg === undefined && direction === 'right'){
        currentImg = 2;
        return;
      } else if(currentImg === undefined && direction === 'left') {
        currentImg = 8;
        return;
      }
        
      
      if(direction === 'right') {
        if(currentImg === 8) {
          currentImg = 1;
        } else {
          currentImg += 1;
        }
      } else {
        if(currentImg === 1) {
          currentImg = 8;
        } else {
          currentImg -= 1;
        }
      }
    }
    function getCurrentImg() {
      return currentImg;
    }
    function classToggle(direction) {
      let visibleElement = document.querySelector(`#pic${getCurrentImg()}`);

      let previousElementNum = getCurrentImg() - 1;
      let nextElementNum = getCurrentImg() + 1;

      if(previousElementNum === 0) { previousElementNum = 8; }
      if(nextElementNum === 9) { nextElementNum = 1; }
      
      if(direction === 'right') {
        let previousElement = document.querySelector(`#pic${previousElementNum}`)
        previousElement.classList.toggle('visible');
    } else {
        let nextElement = document.querySelector(`#pic${nextElementNum}`)
        nextElement.classList.toggle('visible');
      }

      visibleElement.classList.toggle('visible'); 

    }


    
      return { calcImgId, getCurrentImg, classToggle }
    
  }
  document.querySelector(left).addEventListener('click', () => {
    changeImg().calcImgId('left');
    changeImg().classToggle('left');

    // console.log(changeImg().getCurrentImg());
    // call image changer with the current IMG, set display to none, prevsibling dispay toggle
    // visible classs on. default 1 will be visible.

  })
  document.querySelector(right).addEventListener('click', () => {
    changeImg().calcImgId('right');
    changeImg().classToggle('right');

    // console.log(changeImg().getCurrentImg());
  })


}

createSlider('.image-container', '.left', '.right')
/* hit right, current display none, nextsibling displays, hit left, current none, prevsibling dispays

ID what is current, every time this called. it needs to get current. hide current, 
and then display left/right

*/