const audio = new Audio("music/Inception.mp3");

audio.loop = true; 
audio.volume = 0.5;


$('#play-pause-button').on("click",function(){
  
  if($(this).hasClass('play'))
   {
     $(this).removeClass('play');
     $(this).addClass('pause');
     audio.play();
   }
  else
   {
     $(this).removeClass('pause');
     $(this).addClass('play');
     audio.pause();
   }
});

audio.onended = function() {
     $("#play-pause-button").removeClass('pause');
     $("#play-pause-button").addClass('play');
};