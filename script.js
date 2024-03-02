
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
var playing = false;

for(var i=0; i<block.length; i++){
  block[i].onclick = function(){
    for(var it=0; it<block.length; it++){
      block[it].className = '_block';
    };
    
    content.className = 'content  __open';
    toggleClass(this, ' __active');
    // aud.play();
    playing = true;
    
    document.querySelector('._block.__active').onclick = function(){
      toggleClass(this, ' __active');
      toggleClass(content, ' __open');
      if(playing){
        aud.pause();
        playing = false;
      } else {
        aud.play();
        playing = true;
      }
    }
  }
}
