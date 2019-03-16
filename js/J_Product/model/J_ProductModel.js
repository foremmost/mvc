export class ProductModel{
	constructor() {
		const _ = this;
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
	async get_products(id){
		return await this.fetch('GET',"js/products.json",null);
		/*await fetch("js/products.json").then(async function ( response ) {
			console.log(response.json())
			return await response.json();
		})*/
	}
	async get_product(id){

	}
}
