// what we do section
$(document).ready(function(){
  $(".design").click(function(){
      $(".img1").toggle();
      $(".text1").toggle();
  });
  $(".development").click(function(){
      $(".img2").toggle();
      $(".text2").toggle();
  });
  $(".product").click(function(){
      $(".img3").toggle();
      $(".text3").toggle();
  });
});

//portfolio
//$(document).ready( function() {

 // $('#hoverImage').hover( function() {
  //    $(this).find('#hoverTitle').fadeIn(300);
  //}, function() {
   //   $(this).find('#hoverTitle').fadeOut(100);
 // });
   
  
//});

  $('#image1 a img').hover(function () {
    $(this).stop().animate({
        opacity: .3
    }, 200);
    $('.text1').removeClass('hide');
}, function () {
    $(this).stop().animate({
        opacity: 1}, 600);
    $('.text1').addClass('hide');
});
$('#image2 a img').hover(function () {
  $(this).stop().animate({
      opacity: .3
  }, 200);
  $('.text2').removeClass('hide');
}, function () {
  $(this).stop().animate({
      opacity: 1}, 600);
  $('.text2').addClass('hide');
});
$('#image3 a img').hover(function () {
  $(this).stop().animate({
      opacity: .3
  }, 200);
  $('.text3').removeClass('hide');
}, function () {
  $(this).stop().animate({
      opacity: 1}, 600);
  $('.text3').addClass('hide');
});
$('#image4 a img').hover(function () {
  $(this).stop().animate({
      opacity: .3
  }, 200);
  $('.text4').removeClass('hide');
}, function () {
  $(this).stop().animate({
      opacity: 1}, 600);
  $('.text4').addClass('hide');
});
$('#image5 a img').hover(function () {
  $(this).stop().animate({
      opacity: .3
  }, 200);
  $('.text5').removeClass('hide');
}, function () {
  $(this).stop().animate({
      opacity: 1}, 600);
  $('.text5').addClass('hide');
});
$('#image6 a img').hover(function () {
  $(this).stop().animate({
      opacity: .3
  }, 200);
  $('.text6').removeClass('hide');
}, function () {
  $(this).stop().animate({
      opacity: 1}, 600);
  $('.text6').addClass('hide');
});
$('#image7 a img').hover(function () {
  $(this).stop().animate({
      opacity: .3
  }, 200);
  $('.text7').removeClass('hide');
}, function () {
  $(this).stop().animate({
      opacity: 1}, 600);
  $('.text7').addClass('hide');
});
$('#image8 a img').hover(function () {
  $(this).stop().animate({
      opacity: .3
  }, 200);
  $('.text8').removeClass('hide');
}, function () {
  $(this).stop().animate({
      opacity: 1}, 600);
  $('.text8').addClass('hide');
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
