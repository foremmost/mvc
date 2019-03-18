import { J_Cart } from "./J_Cart/J_Cart.js";

let config = {};
config['add_to_cart_btn'] = document.querySelectorAll('.add_product');
new J_Cart(config);
