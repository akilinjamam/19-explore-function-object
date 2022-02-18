var skyColor = 'white'

var phones = ['xiaomi', 'samsung', 'motorola', 'iphone', 'nokia'];
// updating number 3 position.
phones[3] = 'walton';
console.log(phones);

// check an element exist in array

// if not available

if (phones.indexOf('oppo') == -1) {
    console.log('oppo is not available');
}

// if available

if (phones.indexOf('samsung') != -1) {
    console.log('yes! samsung is available  ')
}