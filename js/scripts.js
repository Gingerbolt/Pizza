// back end
function pizzaOrder(toppings, size){
  this.toppings = toppings;
  this.size = size;
};
pizzaOrder.prototype.totalCalc = function() {
    if (this.size == 1) {
    return ((this.toppings.length * 2) + 4);
  } else if (this.size == 2) {
    return ((this.toppings.length * 2) + 6);
  } else if (this.size == 3) {
    return ((this.toppings.length * 2) + 8);
  };
};
// front end
$(document).ready(function(){
  $("button#currentValueButton").click(function(event){
    event.preventDefault();
    var toppingsArray = [];
    pizzaSizeInput = $("input[type='radio'][name='sizeRadio']:checked").val();
    $("input[type='checkbox']:checked").each(function (){
      toppingsArray.push($(this).val());
    });
    if (pizzaSizeInput === undefined) {
      alert("Please select a size for your order!");
    } else {
    var userOrder = new pizzaOrder(toppingsArray, pizzaSizeInput);
    totalPrice = "$" + userOrder.totalCalc() + ".00";
    $("#priceOutput").text(totalPrice);
    $("#priceOutput").show();
    };
  });
});
