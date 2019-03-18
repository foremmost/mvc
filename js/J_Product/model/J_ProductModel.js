export class ProductModel{
	constructor() {
		const _ = this;
		_.init();
	}
	async fetch(method,path,send){
		return new Promise( function (resolve,reject) {
			const req = new XMLHttpRequest();
			try {
				req.open(method, path);
				req.onload = function(){
					if( ( req.status === 200 ) && (req.responseText) ){
						const json = JSON.parse(req.responseText);
						resolve(json);
						return true;
					}
				};
				if( !send ){
					req.send({});
					return true;
				}
				if( typeof send === 'object' ){
					req.send(JSON.stringify(send));
				}else{
					req.send(send);
				}
			} catch ( err ) {
				reject(err);
				throw new Error(err);
			}
		});
	}
	async get_products(){
		return await this.fetch('GET',"js/products.json",null);
	}
	async get_product(id){
		return await this.fetch('GET',"js/products.json",null);
	}
	async get_price(id){
		const _ = this;
		_.current_product = await _.get_product(id);
		return _.current_product.price;
	}
	init(){
		const _ = this;
		( async () => {
		//	_.goods = await _.get_products();
		})()
	}
}
