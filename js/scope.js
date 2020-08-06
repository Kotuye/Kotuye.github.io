// Global scope.
var globalName = "Joe";

function somthing() {
    var globalName = "Jack";
    console.log(globalName);
}
somthing();

console.log(globalName);