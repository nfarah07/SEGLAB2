var products = [
	{
		name: "Almond container",
		lactose: true,
		nuts: false,
		price:3.99
	},
	{
		name: "Brocolli Bag",
		lactose: true,
		nuts: true,
		price:7.99
	},
	{
		name: "24-PACK Watter bottles",
		lactose: true,
		nuts: true,
		price: 10.00
    }
    ,
	{
		name: "Peanut Butter",
		lactose: true,
		nuts: false,
		price: 3.79
	},
	{
		name: "Tofu",
		lactose: true,
		nuts: true,
		price: 4.65
	},
	{
		name: "Chocolate Milk",
		lactose: false,
		nuts: true,
		price: 2.50
	},
	{
		name: "Salted Pistachios",
		lactose: true,
		nuts: false,
		price: 7.89
	},
	{
		name: "Chicken Breast 4pcs",
		lactose: true,
		nuts: true,
		price: 21.99
	},
	{
		name: "Chocolate Brownies",
		lactose: false,
		nuts: true,
		price: 7.99
	},
	{
		name: "Maynards sour patch kids",
		lactose: true,
		nuts: true,
		price: 2.99
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Lactose") && (prods[i].lactose == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Nuts") && (prods[i].nuts == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
