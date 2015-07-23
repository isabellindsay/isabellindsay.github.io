
$(document).ready(function()
{
  $("#html").click(function(){
    $("#p1").text("...and I live in New York, NY (but was born in London). Next year I'll be starting at Middlebury College in VT. I started coding through my schools intro class and this past year I took AP CS. Thats really been my only experience with CS, so Im really excited to be at Google this summer! Besides coding, I love traveling, biking, finding new restaurants to eat at with my friends, and chocolate (I'll pretty much eat anything if its chocolate). When I can, I also watch a lot of netflix -- my favorites are Scandal, Orange is the New Black. I have one sister (whos 13 months younger than me) and a dog (an English Springer Spaniel named Lucy).");

    // $("p1").click(function(){
    //   $("#whereismidd").attr("src", "https://www.google.com/maps/dir/Google,+9th+Avenue,+New+York,+NY/Middlebury+College,+Old+Chapel+Road,+Middlebury,+VT/@42.3545432,-76.0471827,7z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x89c259bf14f1f51f:0xcc1b5ab35bd75df0!2m2!1d-74.0031284!2d40.7412541!1m5!1m1!1s0x4cb55cfe57e0bf8f:0xe98319ad86dd27bb!2m2!1d-73.1773286!2d44.0083035"> Where is Middlebury?);

    $("#android").attr("src", "https://lh6.googleusercontent.com/-1h8fpwV_jU4/VWaOq3ANbgI/AAAAAAAAABE/u73KN7OKY0U/s250-no/isabel%2B.gif");
  });



  $("#wazzup").hover(
    function(){
      $(this).attr("src", "http://i.giphy.com/eoVusT7Pi9ODe.gif");
      // $(this).finish("src", "http://i.giphy.com/eoVusT7Pi9ODe.gif");
      $(this).slideDown("src", "http://i.giphy.com/eoVusT7Pi9ODe.gif");
  });

});

// <img src=" https://www.google.com/maps/dir/Google,+9th+Avenue,+New+York,+NY/Middlebury+College,+Old+Chapel+Road,+Middlebury,+VT/@42.3545432,-76.0471827,7z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x89c259bf14f1f51f:0xcc1b5ab35bd75df0!2m2!1d-74.0031284!2d40.7412541!1m5!1m1!1s0x4cb55cfe57e0bf8f:0xe98319ad86dd27bb!2m2!1d-73.1773286!2d44.0083035">
