import { ProductModel } from "./J_ProductModel.js";

export class ProductModelF{
	constructor() {
		const _ = this;
		_.ProductModel = new ProductModel();
	}
get_products(){
		const _ = this;
		return  	_.ProductModel.get_products();
}
}
