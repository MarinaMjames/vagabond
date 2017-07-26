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
    var image2 = response.hits[2].webformatURL;
    var image3 = response.hits[3].webformatURL;
    var image4 = response.hits[4].webformatURL;
    var image5 = response.hits[5].webformatURL;
    var image6 = response.hits[6].webformatURL;
    var image7 = response.hits[7].webformatURL;
       


    console.log(image);



    $("#Image1").attr("src", image);
    $("#Image2").attr("src", image1);
    $("#Image3").attr("src", image2);
    $("#Image4").attr("src", image3);
    $("#Image5").attr("src", image4);
    $("#Image6").attr("src", image5);
    $("#Image7").attr("src", image6);
    $("#Image8").attr("src", image7);

  })
}

/* Hide carousel till city is searched for*/
$(function(){
  $("#carousel-example-generic").hide();
});

$("#search").on("click", function(event){
  $('#carousel-example-generic').show();
  event.preventDefault();
  console.log("CLICK WORKS")
  $("#city-info").empty();
  getPixelbay();

});




