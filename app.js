var Customer = /** @class */ (function () {
    function Customer(fname, lname) {
        this.firstName = fname;
        this.lastName = lname;
    }
    return Customer;
}());
function customerLogger(customer) {
    console.log("".concat(customer.firstName, " ").concat(customer.lastName));
}
var customer = new Customer('Jane', 'Doe');
// customerLogger(customer);
customerLogger('Jane Doe'); // compiler error 
