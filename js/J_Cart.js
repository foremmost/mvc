class CartStorageModel{
	constructor(){
		const _ = this;
		_.sum = 0;
		_.goods = new Map();
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
		};
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
	init(){
		const _ = this;
		let storage_items = _.get_items_from_storage();
		if(storage_items){
			_.goods = storage_items;
		}
		_.update_sum();
	}
}
class CartModelObserver{
	constructor(){
		const _ = this;
		_.subscribers = [];
	}
	subscribe (fn) {
		this.subscribers.push(fn)
	}
	unsubscribe (fn) {
		this.subscribers = this.subscribers.filter(subscriber => subscriber !== fn)
	}
	sending (data) {
		this.subscribers.forEach(fn => fn(data))
	}
}

const UpdateCntObs = new CartModelObserver();

class CartModelF{
	constructor(){
		const _ = this;
		_.CartStorage = new CartStorageModel();
	}
	add_product(id,cnt){
		const _ = this;
		_.CartStorage.add_product(id,cnt);
		_.update_cnt();
	}
	update_cnt(){
		const _ = this;
		UpdateCntObs.sending(	_.CartStorage.get_sum());
	}
	init(){
		const _ = this;
		_.CartStorage.init();
		_.update_cnt();
		return _;
	}
}


class CartView{
	constructor(){
		const _ = this;
	} 
	init(){
		let product_cnt = document.querySelector('.product_cnt');
		UpdateCntObs.subscribe( cnt =>{
			product_cnt.textContent = cnt;
		} );
		return this;
	}
}
class CartController{
	constructor(model){
		const _ = this;
	_.model = model;
	}
	init(){
		const _ = this;
		let add_product = document.querySelectorAll('.add_product');
		add_product.forEach(   (product) =>{
			product.onclick = function ( e ) {
				e.preventDefault();
				let id = this.getAttribute('data-j-id') * 1;
				_.model.add_product(id,1);
			}
		});
		_.model.init();
		return _;
	}
}
class _Cart{
	constructor(){
		const _ = this;
		_.view = new CartView().init();
		_.controller = new CartController(new CartModelF()).init();
	}
}

window.onload = function (  ) {
	const Cart = new _Cart();
	console.log(Cart)
}

