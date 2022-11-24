$(document).ready(function(){
    $('.plate').click(function(){
        $(this).toggleClass('active');
        $(this).parent().find('.navbar').slideToggle();
    });


    var url = window.location.pathname, 
    urlRegExp = new RegExp(url.replace(/\/$/,'') + "$");
    $('.navbar ul li a').each(function(){
      if(urlRegExp.test(this.href.replace(/\/$/,''))){
        $(this).parent().addClass('active');
      }
    });


  
});



