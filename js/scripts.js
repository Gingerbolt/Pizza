var toppingsArray = [];
var size;
function pizzaOrder(toppings, size){
  this.toppings = [];
  this.size = size;
};
totalPriceSmall = function() {
var totalPrice = (toppings.length * 2) + 4
}
totalPriceMedium = function() {
var totalPrice = (toppings.length * 2) + 6
}
totalPriceLarge = function() {
var totalPrice = (toppings.length * 2) + 8
}
pizzaOrder.prototype.totalCalc = function(toppings, size) {
  if (size == "Small") {
  totalPriceSmall()
  priceReadout()
  console.log("small triggered")
} else if (size == "Medium") {
  totalPriceMedium()
  priceReadout()
  console.log("medium triggered")
} else if (size == "Large") {
  totalPriceLarge()
  priceReadout()
  console.log("large triggered")
} else {
  errorReadoutSize()
};

};
errorReadoutSize = function() {
  $("#warningPlace").text("Please be sure to select a size for your pizza!")
}
priceReadout = function() {
  totalPrice = totalPrice.toString()
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
    $("#toppingsList input:checked").each(function (){
      toppingsArray.push($(this).val());
    });
    var userOrder = new pizzaOrder(toppingsArray, pizzaSizeArg);
    userOrder.totalCalc();
    console.log(pizzaSizeArg);
  });
});
