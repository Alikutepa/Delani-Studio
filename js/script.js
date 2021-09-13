// what we do section
$(document).ready(function(){
  $(".design").click(function(){
      $(".img1").toggle();
      $(".desc1").toggle();
  });
  $(".development").click(function(){
      $(".img2").toggle();
      $(".desc2").toggle();
  });
  $(".product").click(function(){
      $(".img3").toggle();
      $(".desc3").toggle();
  });
});

//portfolio
$(document).ready( function() {

  $('.hoverImage').hover( function() {
     $(this).find('.hoverTitle').fadeIn(300);
  }, function() {
     $(this).find('.hoverTitle').fadeOut(100);
 });
   
  
});


//form validation and thank you message
function popUpMessage(){
  var name =$("#name").val();
  var email=$("#email").val();
  var message=$("#message").val();
  if (name === "" || email === "" || message ==="") {
  alert("Please fill in all fields!")
} else {
  alert("Thank you " + name + "! Your message has been received. We shall get back to you shortly.");
      document.getElementById("form");      
};
};
