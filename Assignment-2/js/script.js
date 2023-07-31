document.addEventListener("DOMContentLoaded", function (event) {

  // check the place order button is pressed or not
  var orderButton = document.getElementById("order-btn"); 

  // If button is pressed run the bellow function
  orderButton.addEventListener("click", function () {

      // get the pizza base size, crust and sauce which customer was selected and store it into different variables
      var baseSize = document.getElementById("size").value;
      var crust = document.getElementById("crust").value;
      var sauce = document.querySelector('input[name="sauce"]:checked');

      // Check if a sauce is selected
      if (!sauce) {
        alert("Please select atleast one sauce!");
        return; // Exit the function 
      }

      sauce = sauce.value; // Get the selected sauce value
      var toppings = document.querySelectorAll('input[type="checkbox"]:checked'); // Get the selected toppings value
      var delivery = document.getElementById("delivery").checked; // check for user want a delivery of pizza or not
      var paymentMethod = document.getElementById("payment-method").value; //get the value of selected payment method

      // Display which size of base, crust, sauce and toppings the customer selected 
      var orderInformation = "Order Details:\n";
      orderInformation += "Size: " + baseSize + "\n";
      orderInformation += "Crust: " + crust + "\n";
      orderInformation += "Sauce: " + sauce + "\n";
      orderInformation += "Toppings: ";
      var toppingsDisplay = "";
      var toppingsPrice = 0;
      for (var i = 0; i < toppings.length; i++) {
        orderInformation += toppings[i].value + " ";
        toppingsDisplay += toppings[i].value + ", ";
        toppingsPrice += 0.99; // Each topping costs $0.99
      }
      orderInformation += "\n";
      orderInformation += "Delivery: " + (delivery ? "Yes" : "No") + "\n";

      // Calculate the price based on size of base and toppings
      var basePrice = 0;
      if (baseSize === "small") {
        basePrice = 9.99;
      } else if (baseSize === "medium") {
        basePrice = 12.99;
      } else if (baseSize === "large") {
        basePrice = 15.99;
      } else if (baseSize == "X-large") {
        basePrice = 18.99;
      }

      var totalPrice = basePrice + toppingsPrice;

      // Add tax and tax rate is 13%.
      var tax = totalPrice * 0.13;
      totalPrice += tax;

      // Calculate and display the total amount of pizza which is customized by customer
      orderInformation += "Base Price: $" + basePrice.toFixed(2) + "\n";
      orderInformation += "Toppings Price: $" + toppingsPrice.toFixed(2) + "\n";
      orderInformation += "Tax (13%): $" + tax.toFixed(2) + "\n";
      orderInformation += "Total Amount: $" + totalPrice.toFixed(2) + "\n";
      orderInformation += "Payment Method: " + paymentMethod + "\n";

      // Show every details of pizza and bill in alert box when customer place the order
      alert(orderInformation);
      document.getElementById("show-toppings").textContent = toppingsDisplay.slice(0, -2); // Remove the trailing comma and space
      document.getElementById("total-price").value = totalPrice.toFixed(2); // Display the total price in the payment section
  });
});
