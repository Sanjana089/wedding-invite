
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
  const photos = document.querySelectorAll('.photo');
  const hrs = document.querySelectorAll('.hr');
  const texts = document.querySelectorAll('.text');
  photos[index].classList.toggle('active');
  hrs[index].classList.add('grow');
  texts[index].classList.add('show');
}
