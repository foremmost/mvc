import { ProductModelF } from "../../J_Product/model/J_ProductModelF.js"

export class CartStorageModel{
	constructor(){
		const _ = this;
		_.sum = 0;
		_.goods = new Map();
		_.product = new ProductModelF();

	}
	get_sum(){
		return this.sum;
	}
	get_items_from_storage(){
		const _ = this;
		let j_raw_cart = localStorage.getItem('j-cart');
		if(!j_raw_cart) {
			return null;
		};
		let j_cart = new Map([...JSON.parse(j_raw_cart)]);
		return j_cart;
	}
	add_to_storage(){
		const _ = this;
		let j_raw_cart = localStorage.getItem('j-cart');
		if(!j_raw_cart) {
			localStorage.setItem('j-cart',JSON.stringify([..._.goods]));
		}
		localStorage.removeItem('j-cart');
		localStorage.setItem('j-cart',JSON.stringify([..._.goods]));
	}
	add_product(id,cnt){
		const _ = this;
		if(!_.goods.has(id)){
			_.goods.set(id,0);
		}
		_.inc_product_cnt(id,'+',cnt);
		_.add_to_storage();
		_.update_sum();
	}
	inc_product_cnt(id,type='+',cnt=1){
		const _ = this;
		let count  = _.goods.get(id);
		if(type === '+'){
			count+= cnt;
			_.goods.set(id,count);
		}
		else{
			count+= cnt;
			_.goods.set(id,count);
		}
	}
	update_sum(){
		const _ = this;
		_.sum = 0;
		_.goods.forEach( (cnt) =>{
			_.sum+=cnt;
		});
	}
	async init(){
		const _ = this;
		let storage_items = _.get_items_from_storage();
		if(storage_items){
			_.goods = storage_items;
		}
		_.update_sum();

		console.log(await _.product.get_products())
	}
}
