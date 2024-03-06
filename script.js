function toggleClass(obj, cls) {
  var currentClass = obj.className,
    reg = new RegExp(cls, 'gi');
  if (reg.test(currentClass)) {
    obj.className = currentClass.replace(cls, '');
  } else {
    obj.className += cls;
  }
}

var block = document.querySelectorAll('._block');
var content = document.querySelector('.content');
var aud = document.querySelector('audio');

document.addEventListener('click', function (event) {
  if (event.target.classList.contains('_block') && !event.target.classList.contains('f3-image')) {
    var clickedBlock = event.target;
    var content = document.querySelector('.content');
    content.classList.add('__open');
    clickedBlock.classList.add('__active');

    
  }
  document.addEventListener('click', function (event) {
    // Check if the clicked element is a block with __active class
    if (event.target.classList.contains('close')) {
      // Remove __active class from clicked block
      clickedBlock.classList.remove('__active');
      // Remove __open class from content
      var content = document.querySelector('.content');
      content.classList.remove('__open');
    }
  });
});


function toggleText(index) {
  const bgs = document.querySelectorAll('.f3-item-bg');
  const bg = bgs[index];
  const title = document.querySelectorAll('.item_title');
  const date = document.querySelectorAll('.item_date-box');
  // Get the current transform style
  const transformStyle = window.getComputedStyle(bg).getPropertyValue('transform');

  // Check if the element is already scaled
  if (transformStyle !== 'none') {
    // If it's already scaled, remove the transform
    bg.style.webkitTransform = '';
    bg.style.msTransform = '';
    bg.style.transform = '';
  } else {
    // If it's not scaled, scale it
    bg.style.webkitTransform = 'scale(10)';
    bg.style.msTransform = 'scale(10)';
    bg.style.transform = 'scale(10)';
  }
  title[index].style.opacity = '1';
  date[index].style.opacity = '1';
}

function toggleHover() {
  const cardHover = document.querySelector('.close.open-frame.f4-bg .card-hover');
  const isHovered = cardHover.classList.contains('hovered');
  
  if (isHovered) {
    cardHover.classList.remove('hovered');
  } else {
    cardHover.classList.add('hovered');
  }
}
