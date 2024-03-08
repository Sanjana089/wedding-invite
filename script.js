
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
  }
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

function startf4animation() {
  var block = document.querySelector('.block');
  var theBigDay = document.querySelector('.theBigDay');
  var block2 = document.querySelector('.block2');
  var texts = document.querySelectorAll('.venueAnimate');

  // Remove existing animation class
  block.classList.remove('animateBlock');
  theBigDay.classList.remove('animateH1');
  block2.classList.remove('roleBlock');
  texts.forEach(text => {
    text.classList.remove('roleAnimate');
  })

  // Trigger reflow to restart animation
  void block.offsetWidth;
  void theBigDay.offsetWidth;
  void block2.offsetWidth;
  texts.forEach(text => {
    void text.offsetWidth;
  })

  // Re-add animation class to restart animation
  block.classList.add('animateBlock');
  theBigDay.classList.add('animateH1');
  block2.classList.add('roleBlock');
  texts.forEach(text => {
    text.classList.add('roleAnimate');
  })
}