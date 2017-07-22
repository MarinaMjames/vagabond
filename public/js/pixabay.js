    function getPixelbay (){
  event.preventDefault;
// stores data-name in variable city input after click
  var cityInput = document.querySelector('.uk-select').value;
  console.log(cityInput);

  var queryURL = "https://pixabay.com/api/?key=5926841-97276293940f3f4726623eeab&q=" + cityInput;
  console.log(queryURL);

  $.ajax({
    url: queryURL,
    method: "GET",
    cors: true
  });
}

$("#search").on("click", function(event){
  event.preventDefault();
  console.log("CLICK WORKS")
  $("#city-info").empty();
  getPixelbay();

});
