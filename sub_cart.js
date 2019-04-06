"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 2

   Author: 
   Date:   

   Filename: sub_cart.js


   Functions List:
   setupCart() 
      Sets up the event handlers for the Add to Order buttons on the web page.
      
   addItem(e)
      Adds the food item associated with the Add to Order button to the shopping
      cart, keeping track of the number of items of each product ordered by 
      the customer.

*/

window.addEventListener("load", setupCart);
// Creates a function that calls in the aside element with the class of addButton. Every time the addButton is clicked, an item is added
function setupCart() {
      var addButtons = document.getElementsByClassName("addButton")
      for (var i = 0; i < addButtons.length; i++) {
            addButtons[i].onclick = addItem
      }
}
//Creates a function that adds an item to the cart and allows for it to be added many times by cloning the node
function addItem(e) {
      var foodItem = e.target.nextElementSibling;
      var foodID = foodItem.getAttribute("id");
      var foodDescription = foodItem.cloneNode(true);
      var cartBox = document.getElementById("cart")
      var duplicateOrder = false;
      for (var n = cartBox.firstChild; n = n.nextElementSibling; n !== null) {
            if (n.id === foodID) {
                  duplicateOrder = true;
                  n.firstChild.textContent++;
                  break;
            }

      }
      // If the duplicate order variable is returns a value of false, it will store the span element in the orderCount variable and will set the orderCount to the text string of 1
      if (duplicateOrder === false) {
            var orderCount = document.createElement("span")
            orderCount.textContent = "1";
            foodDescription.insertBefore(orderCount, foodDescription.firstChild);
            cartBox.appendChild(foodDescription);

      }
}