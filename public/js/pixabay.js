// On Click function for each gif button that pushes that value into the queryURL variable
$("#search").click(function(){
   event.preventDefault();
  console.log("Search button was clicked!!!!");
  // empties the div with id food-gifs so that only those of the button clicked are shown
  $("#city-info").empty();

// stored the data-name in the variable gifClicked
var cityInput = $(this).attr("data-name");
// console.log("Gif Button was clicked! I have a data-name of: " + gifClicked);
  // URL that gets called in the ajax function that is requesting info from the Giphy API
  var queryURL = 
  "https://pixabay.com/api/?key=5926841-97276293940f3f4726623eeab&q=" + cityInput;
  // console.log(queryURL);
  // ajax function that requests information from the Giphy API
  $.ajax({
    url: queryURL,
    method: "GET"
  })
// once response is given from the giphy API do all this stuff: 
  .done(function(response) {
    console.log(response);
    // get the data from response and store it in variable gif
    var cityImage = response;
      // console.log(gif);
// loop through the gif reponse data
      for (i = 0; i < cityImage.length; i++){
        // create p tag
        var p = $("<p>");
        //add class of rating to p tags
        p.addClass("rating");
        // add text to p tag of Rating: and the rating from the gif responses
        // p.text("Rating: " + gif[i].rating);
        // store img tag in variable gifImg
        var cityImg = $("<img>");