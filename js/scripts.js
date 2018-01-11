$(document).ready(function() {
  $("#riderHeight").submit(function(event){
    var heightInInches = parseInt($("#height").val());

    if (heightInInches >= 48){
      $(".over48").addClass("highlight");
    } else if(heightInInches >= 60){
      $(".over60").addClass("highlight");

    }
    event.preventDefault();
  });
})
