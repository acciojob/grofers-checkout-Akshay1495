document.addEventListener('DOMContentLoaded', function() {
    var priceElements = document.querySelectorAll('.price');
    var totalPrice = 0;

    priceElements.forEach(function(priceElement) {
        totalPrice += parseInt(priceElement.textContent);
    });

    var totalDiv = document.getElementById('ans');
    totalDiv.textContent = 'Total: ' + totalPrice;
});
