function pizzaOrder(toppings, size){
  this.toppings = toppings;
  this.size = size;
};
pizzaOrder.prototype.totalCalc = function() {
  if (this.size == 1) {
  totalPrice = "$" + ((this.toppings.length * 2) + 4) + ".00";
} else if (this.size == 2) {
  totalPrice = "$" + ((this.toppings.length * 2) + 6) + ".00";
} else if (this.size == 3) {
  totalPrice = "$" + ((this.toppings.length * 2) + 8) + ".00";
} else {
  totalPrice = "Invalid Order"
  errorReadoutSize();
}
priceReadout();
};
errorReadoutSize = function() {
  $("#warningPlace").text("Please be sure to select a size for your pizza!")
};
priceReadout = function() {
  $("#priceOutput").text(totalPrice)
  $("#priceOutput").show()
};

$(document).ready(function(){
  $("button#currentValueButton").click(function(event){
    event.preventDefault();
    pizzaSizeArg = $("input[type='radio'][name='sizeRadio']:checked").val();
    var toppingsArray = [];
    $("input[type='checkbox']:checked").each(function (){
      toppingsArray.push($(this).val());
    });
    var userOrder = new pizzaOrder(toppingsArray, pizzaSizeArg);
    userOrder.totalCalc();
  });
});
