$(document).ready(function(){
  $("form#radioForm").submit(function(event) {
    event.preventDefault();
    
    $("button#currentValueButton").click(function(){
      costModifier = $("#pizzaSize input:radio:checked").val();
      console.log(costModifier);
    });
  });
});
