let count = 0;
let totalPrice = 0;
const pricePerItem = 6500;

// Select DOM elements
const addToCartButton = document.getElementById('addToCartButton');
const itemCount = document.getElementById('itemCount');
const totalPriceElement = document.getElementById('totalPrice');
const successMessage = document.getElementById('successMessage');

// Add event listener for the 'Add to Cart' button
addToCartButton.addEventListener('click', function () {
  // Increment count and calculate the total price
  count += 1;
  totalPrice += pricePerItem;

  // Update the DOM elements
  itemCount.textContent = `Items in Cart: ${count}`;
  totalPriceElement.textContent = `Total Price: ৳ ${totalPrice}`;

  // Show success message briefly
  successMessage.classList.remove('hidden');
  setTimeout(() => {
    successMessage.classList.add('hidden');
  }, 2000);
});