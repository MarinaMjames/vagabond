//Pixelbay API

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
  }).done(function(response){
    console.log(response);

    var image = response.hits[0].webformatURL;
        var image1 = response.hits[1].webformatURL;


    console.log(image);

    $("#Image1").attr("src", image);
    $("#Image2").attr("src", image1);


  })
}

$("#search").on("click", function(event){
  event.preventDefault();
  console.log("CLICK WORKS")
  $("#city-info").empty();
  getPixelbay();

});




