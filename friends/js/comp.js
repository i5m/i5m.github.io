$(document).ready(function(){

  $("#wlcmfun").click(function(){
    $("#mergepybox").slideDown();
    $("#wlcmimg").fadeOut();
  });
  
  $("#resultpyfun1").click(function(){
    $("#mergepybox").fadeOut();
    $("#resultpybox").fadeIn();
    $("#anspybox").fadeOut();
  });

  $("#mergepyfun").click(function(){
    $("#mergepybox").fadeIn();
    $("#resultpybox").fadeOut();
    $("#anspybox").fadeOut();
  });

  $("#anspyfun").click(function(){
    $("#mergepybox").fadeOut();
    $("#resultpybox").fadeOut();
    $("#anspybox").fadeIn();
  });

  $("#resultpyfun2").click(function(){
    $("#mergepybox").fadeOut();
    $("#resultpybox").fadeIn();
    $("#anspybox").fadeOut();
  });
  
});