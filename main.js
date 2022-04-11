window.addEventListener('scroll', function(){
    const header = document.getElementById('header');
    header.classList.toggle("sticky", window.scrollY > 0);
  });

  (function (){

    'use strict';
  
    $('ul.navigation >li').on('click', function(e){
  
      e.preventDefualt();
  
      $('ul.navigation >li').removeClass('active');
      $(this).addClass('active');
  
  
    });
  });(jQuery)