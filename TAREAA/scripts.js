function changeImage(element) {
    // Change the image source and alternative text
    element.src = 'cross-check-icon-symbol-on-transparent-background-free-png.webp';
    element.alt = 'Nueva Imagen';
  }
  
  function showDescription(button) {
    // Toggle the display of the description
    let description = button.nextElementSibling;
    description.style.display = description.style.display === 'none' ? 'block' : 'none';
  }
  
  function completeTask(button) {
    // Mark a task as completed
    let taskItem = button.parentElement;
    let taskText = taskItem.querySelector('span');
    taskText.classList.toggle('completed');
  }
  
  function applyDiscount(button) {
    // Apply a discount to the product price
    let productCard = button.parentElement;
    let priceElement = productCard.querySelector('.price');
    let currentPrice = parseFloat(priceElement.textContent.replace('$', ''));
    let newPrice = (currentPrice * 0.9).toFixed(2);
    priceElement.textContent = `$${newPrice}`;
  }