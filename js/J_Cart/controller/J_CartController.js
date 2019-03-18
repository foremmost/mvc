//import { _Product } from "../../J_Product/J_Product";

export class CartController{
	constructor(model){
		const _ = this;
		_.model = model;
		_.init();
	}
	init(){
		const _ = this;
		(  ()=>{
			let add_product = document.querySelectorAll('.add_product');
			add_product.forEach( (product) => {
				product.onclick = function ( e ) {
					e.preventDefault();
					let id = this.getAttribute('data-j-id') * 1;
					_.model.add_product(id,1);
				}
			});
		//	_.model.update_cnt();
		} )();
	}
}