import { ProductModel } from "./J_ProductModel.js";

export class ProductModelF{
	constructor() {
		const _ = this;
		_.ProductModel = new ProductModel();
	}
	get_products(){
			const _ = this;
			_.goods = _.ProductModel.goods;
	}
	async get_price(id){
		const _ = this;
		return await	_.ProductModel.get_price(id);
	}
}
