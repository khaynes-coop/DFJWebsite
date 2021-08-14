import React from "react";

class Product{
    constructor(name, price, quantity, id){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.id = id;
    }
    get priceP() {
        return this.price;
    }
    get nameN() {
        return this.name;
    }
    get quantityQ() {
        return this.quantity;
    }
    get idI() {
        return this.id;
    }
}