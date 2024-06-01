const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);


var totalDiv = document.getElementById('ans');
totalDiv.textContent = 'Total: ' + totalPrice;

const getSum = () => {
    const priceElements = document.querySelectorAll('.price');
    let totalPrice = 0;

    priceElements.forEach(priceElement => {
        totalPrice += parseInt(priceElement.textContent);
    });

    const totalRow = document.createElement('tr');
    const totalCellName = document.createElement('td');
    totalCellName.textContent = 'Total';
    const totalCellPrice = document.createElement('td');
    totalCellPrice.className = 'ans';
    totalCellPrice.textContent = totalPrice;

    totalRow.appendChild(totalCellName);
    totalRow.appendChild(totalCellPrice);

    const table = document.querySelector('table');
    table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);
