var size;
function pizzaOrder(toppings, size){
  this.toppings = toppings;
  this.size = size;
};

pizzaOrder.prototype.totalCalc = function() {
  if (size == "Small") {
  return (toppings.length * 2) + 4
  console.log("small triggered")
} else if (size == "Medium") {
  return (toppings.length * 2) + 6
  console.log("medium triggered")
} else if (size == "Large") {
  return (toppings.length * 2) + 8
  console.log("large triggered")
} else {
  errorReadoutSize()
};
};
errorReadoutSize = function() {
  $("#warningPlace").text("Please be sure to select a size for your pizza!")
}
priceReadout = function(totalPrice) {
  $("#priceOutput").text("$" + totalPrice + ".00")
  $("#priceOutput").show()
}

// end arguably redundant functions
$(document).ready(function(){
  $("form#radioForm").submit(function(event) {
    event.preventDefault();

  });
  $("button#currentValueButton").click(function(event){
    event.preventDefault();
    pizzaSizeArg = $("input[type='radio'][name='sizeRadio']:checked").val();
    pizzaSizeOrder = pizzaSizeArg.toString();
    var toppingsArray = [];
    $("input[type='checkbox']:checked").each(function (){
      toppingsArray.push($(this).val());
    });
    var userOrder = new pizzaOrder(toppingsArray, pizzaSizeOrder);
    console.log();
    priceReadout();
  });
});
