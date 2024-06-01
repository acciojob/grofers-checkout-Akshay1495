const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const prices=document.querySelectorAll('.price')
	let totalPrice=0
	prices.forEach((item)=>totalPrice+=Number(item.textContent))
	  const table=document.querySelector('table')
	const total=document.getElementById('total')
	if(total){
		total.remove()
	}
	table.innerHTML+=`
		 <tr id="total">
	      <td class="item">Total</td>
	      <td class="prices" id="ans">${totalPrice}</td>
	    </tr>
	`
};

getSumBtn.addEventListener("click", getSum);
