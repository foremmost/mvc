import { ProductModelF } from "../../J_Product/model/J_ProductModelF.js"

export class CartStorageModel{
	constructor(cartObs){
		const _ = this;
		_.cntobs =cartObs.get('cnt');
		_.sumobs =cartObs.get('sum');
		_.sum = 0;
		_.cnt = 0;
		_.goods = new Map();
		_.product = new ProductModelF();
	}
	get_cnt(){
		return this.cnt;
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
	async add_product(id,cnt){
		const _ = this;
		if(!_.goods.has(id)){
			_.goods.set(id,0);
		}
		_.inc_product_cnt(id,'+',cnt);
		_.add_to_storage();
		_.update_cnt();
		await _.update_sum();
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
	update_cnt(){
		const _ = this;
		_.cnt = 0;
		_.goods.forEach( (cnt) =>{
			_.cnt+=cnt;
		});
		_.cntobs.sending( _.get_cnt() );
	}
	async update_sum(){
		const _ = this;
		_.sum = 0;
		let goods = [..._.goods.keys()],
			vals = [..._.goods.values()];
		for(let i=0;i < goods.length;i++){
			let id = goods[i],
					amount = vals[i],
				price = await _.product.get_price(id);
			_.sum+= (price * amount);
		}
		_.sumobs.sending( _.get_sum() );
	}
	async init(){
		const _ = this;
			let storage_items = _.get_items_from_storage();
			if(storage_items){
				_.goods = storage_items;
			}
			_.update_cnt();
			await _.update_sum();
	}
}
