//import { _Product } from "../../J_Product/J_Product";

export class CartController{
	constructor(config){
		const _ = this;
		_.config = config;
		_.model = config.model;
	}
	init(){
		const _ = this;
		_.config.add_to_cart_btn.forEach( (product) => {
			product.onclick = function ( e ) {
				e.preventDefault();
				let id = this.getAttribute('data-j-id') * 1;
				_.model.add_product(id,1);
			}
		});
	}
}
