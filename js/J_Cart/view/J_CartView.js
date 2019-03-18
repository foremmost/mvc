export class CartView{
	constructor(cartObs){
		const _ = this;
		_.cntobs =cartObs.get('cnt');
		_.sumobs =cartObs.get('sum');
		_.init();
	}
	init(){
		const _ = this;
		(  () =>{
			let product_cnt = document.querySelector('.product_cnt');
			_.cntobs.subscribe( cnt =>{
				product_cnt.textContent = cnt;
			});
			let product_sum = document.querySelector('.product_sum');
			_.sumobs.subscribe( sum =>{
				product_sum.textContent = sum;
			});
		})();
	}
}
