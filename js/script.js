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
