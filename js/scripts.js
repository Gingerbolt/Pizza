var toppingsArray = []
var totalPrice
errorReadoutSize = function() {
  $("#warningPlace").text("Please be sure to select a size for your pizza!")
}

$(document).ready(function(){
  $("form#radioForm").submit(function(event) {
    event.preventDefault();

    function pizzaorder(toppings[], size){
      this.toppings = toppings;
      this.size = size;
    };
    pizzaorder.totalCalc() = function() {
      if (size == "Small") {
      totalPrice = (toppings.length * 2) + 4
    } else if (size == "Medium") {
      totalPrice = (toppings.length * 2) + 6
    } else if (size == "Large") {
      totalPrice = (toppings.length * 2) + 8
    } else {
      errorReadoutSize()
    };
      
    };

    var userOrder = new pizzaOrder(toppingsArray, pizzaSizeArg);

    $("button#currentValueButton").click(function(){
      pizzaSizeArg = $("#pizzaSize input:radio:checked").val();
      console.log(costModifier);
      $("#toppingsList input:checkbox:checked").val().push(toppingsArray);
      console.log(toppingsArray);
    });
  });
});
