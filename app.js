$(".spoiler").hide();

$(".eachDiv").append("<button class='spoilerButton genericBorder buttonBorder'>Reveal Spoiler</button>");

$(".spoilerButton").click(function() {
  $(this).prev().show();
  (this).remove('slow');
});

// $("#addSpoiler").click(function() {
//   $('.containingDiv').append("<div class='genericBorder eachDiv'><span class='spoiler'></span></div>");
//   $(".spoiler").hide();
//   $(".eachDiv").append("<button class='spoilerButton genericBorder buttonBorder'>Reveal Spoiler</button>");
// });