import React from "react";

import Product from "./product.js"

class Cart {
    constructor(arr){
        this.arr = arr;
    }
    addProduct(name){
        p = findProduct(name);
        this.arr.push(p);
    }
}