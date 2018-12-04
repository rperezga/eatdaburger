
$(function() {
  $(".devourit").on("click", function(event) {
    
    var id = $(this).data("id");

    console.log(id)

    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT"
    }).then(
      function() {
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {

    console.log('Di click aqui')
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#inputBurger").val().trim(),
      devoured: false
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("added new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
