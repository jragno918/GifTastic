<script>
// Array of animals
var animals = ["dog", "cat", "rabbit", "hamster", "skunk", "goldfish", "bird", "ferret", "turtle", "sugarglider", "chincilla", "hedgehog", "hermit crab", "gerbil", "pygmy goat", "chicken", "capybara", "teacup pig", "serval",
               "salamander", "frog"];

// Function for displaying gifs
function renderButtons() {
  // Deletes buttons so they don't show duplicates
  $("#animal-view").empty();
  // Loop through array of animals
  for (var i = 0; i<animal.length; i++) {
    // Creates the button
    var btn = $("<button>");
    // Adds a class to the button
    btn.addclass("animal");
    // Adds a data-attribute
    btn.attr("data-name", animals[i]);
    // Adds the buttons text
    $("animal-view").append(btn);
  }
}

// On click event created
$("add-animal").on("click", function(event) {
  // Prevents for from submitting itself
  event.preventDefault();
  // Grabs text from input box
  var animal = $("#animal-input").val().trim();
  // Adds animal from text box and puts it in the animals array
  animals.push(animal);
  // Calls renderButtons which controls the processing of the animal array
  renderButtons();
});

// Event listener for all button elements
$("button").on("click", function() {
  var creatures = $(this).attr("data-person")
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + creatures + "&api_key=dc6zaTOxFJmzC&limit=10"
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function(response) {
      var results = response.data;
      for (var i = 0; i < results.length; i++) {
        if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
          var gifDiv = $("<div class='item'>");
          var p = $("<p>").text("Rating: " + rating);
          var animalImage = $("<img>")
          animalImage.attr("src", results[i].images.fixed_height.url);
          gifDiv.append(p);
          gifDiv.append(animalImage);
          $("#animal-appear-here").prepend(gifDiv);
        }
      }
    })
</script>
})
