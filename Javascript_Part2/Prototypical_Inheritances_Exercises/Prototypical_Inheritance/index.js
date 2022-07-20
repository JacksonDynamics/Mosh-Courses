// Parent object
function HtmlElement() {
    this.click = function() {
        console.log('clicked');
    }
}
// Inheritance settings of Parent object into it's prototype
HtmlElement.prototype.focus = function() {
    console.log('focused');
}




// Another constructor and setting the default for the parameter as an empty []
function HtmlSelectElement(items = []) {
    this.items = items;

    // we have 2 methods in this function
    this.addItem = function(item) {
        this.items.push(item);
    }

    this.removeItem = function(item) {
        this.items.splice(this.items.indexOf(item), 1);
    }
}    

// We are setting the prototype to an INSTANCE of the HtmlElement()
HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;
