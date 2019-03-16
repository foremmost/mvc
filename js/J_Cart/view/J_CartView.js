export class CartView{
	constructor(obs){
		const _ = this;
		_.obs =obs;
	}
	init(){
		const _ = this;
		let product_cnt = document.querySelector('.product_cnt');
		_.obs.subscribe( cnt =>{
			product_cnt.textContent = cnt;
		} );
		return this;
	}
}