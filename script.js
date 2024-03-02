
function toggleClass(obj, cls){
  var currentClass = obj.className,
      reg = new RegExp(cls, 'gi');
  if(reg.test(currentClass)){
   obj.className = currentClass.replace(cls, '');
  } else {
    obj.className += cls;
  }
}

var block = document.querySelectorAll('._block');
var content =  document.querySelector('.content');
var aud = document.querySelector('audio');
var spoiler = document.querySelectorAll('._spoiler');

for(var i=0; i<block.length; i++){
  block[i].onclick = function(){
    for(var it=0; it<block.length; it++){
      block[it].className = '_block';
      spoiler[it].style.opacity = 1;
    };
    
    content.className = 'content  __open';
    toggleClass(this, ' __active');
    
    document.querySelector('._block.__active').onclick = function(){
      toggleClass(this, ' __active');
      toggleClass(content, ' __open');

      for(var it=0; it<spoiler.length; it++){
        spoiler[it].style.opacity = 0;
      };
    }
  }
}
