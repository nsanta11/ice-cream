// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");
      var newDevour = $(this).data("newdevour");
  
      var newDevouredState = {
        devoured: newDevour
      };
  
      // Send the PUT request.
      $.ajax("/api/icecream/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          console.log("changed devour to", newDevour);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newSundae = {
        name: $("#ic").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/icecream", {
        type: "POST",
        data: newSundae
      }).then(
        function() {
          console.log("created new sundae");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-sundae").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/icecream/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted sundae", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  