var book = {
    writter: 'jhanker Mahmud',
    title: 'habulder jonno programming',
    publisher: 'penguine',
    price: 200,
    pages: 250,
}

var mobile = {
    name: 'vivo',
    model: 'y15',
    brand: 'china',
    price: 10000,
    camera: 'front 5px and back 13px ',
    storage: '16 gb',
    ram: '2gb',
}

// console.log(mobile.storage);


// console.log(mobile.price);

var mobilePrice = mobile.price;

console.log(mobilePrice);

var pricePropertyName = ['price']

//  way 1
mobile.price = 8000;
mobile.price = 5000;
// way 2
mobile['price'] = 4000;
// way 3
var pricePropertyName = ['price']
mobile[pricePropertyName] = 3000;


console.log(mobile.price)


// pracice recap

// object

var mobile = {
    price: 22000,
    storage: '32gb',
    ram: '4gb',
    brand: 'vivo',
}

// showing all
console.log(mobile);

// showing specific properties
console.log(mobile.price);


// updating a specific property way 1

mobile.price = 26000;
console.log(mobile);

// updating a specific property way 2

mobile.price = 26000;
mobile['price'] = 30000;
console.log(mobile)

// updating a specific properties way 3

var mobilePrice = 'price';
mobile[mobilePrice] = 32000;
console.log(mobile);