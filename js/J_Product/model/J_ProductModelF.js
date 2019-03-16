import { ProductModel } from "./J_ProductModel.js";

export class ProductModelF{
	constructor() {
		const _ = this;
		_.ProductModel = new ProductModel();
	}
async get_products(){
		const _ = this;
		return await 	_.ProductModel.get_products();
}
}
