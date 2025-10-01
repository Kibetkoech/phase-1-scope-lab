// Write your solution in this file!
// 1. Declare customerName in the global scope
var customerName = 'bob';

// 2. A function that modifies the global variable customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// 3. Declare bestCustomer in global scope and set it inside a function
var bestCustomer;
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// 4. Overwrite the best customer
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// 5. leastFavoriteCustomer should never be reassigned (const)
const leastFavoriteCustomer = 'some initial value';
function changeLeastFavoriteCustomer() {
  // This should cause an error if reassigned, which the test expects
  leastFavoriteCustomer = 'new customer';
}

