// Object with nested structure, getters, and setters
const person = {
    name: "Alice",
    address: {
        street: "123 Main St",
        city: "Wonderland",
        _zip: "00000",
        get zip() {
            return this._zip;
        },
        set zip(value) {
            if (/^\d{5}$/.test(value)) {
                this._zip = value;
            } else {
                console.warn("Invalid ZIP code format.");
            }
        }
    },
    _age: 30,
    get age() {
        return this._age;
    },
    set age(value) {
        if (value > 0 && value < 120) {
            this._age = value;
        } else {
            console.warn("Invalid age value.");
        }
    },
    getSummary() {
        return `Name: ${this.name}, Age: ${this.age}, Address: ${this.address.street}, ${this.address.city}, ZIP: ${this.address.zip}`;
    }
};

// Manipulate fields using setters
person.age = 35;
person.address.zip = "54321";

// Output summary using object function
console.log(person.getSummary());
