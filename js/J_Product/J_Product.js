
class ProductModel{
	constructor() {
		const _ = this;
	}
	async get_products(id){
	
	}
	async get_product(id){
	
	}
}
class ProductFasad{
	constructor() {
		const _ = this;
	}
}
class ProductView{
	constructor() {
		const _ = this;
	}
	init(){}
}
class ProductController{
	constructor(model) {
		const _ = this;
		_.model = model;
	}
	init(){}
}

class _Product{
	constructor(){
		const _ = this;
		_.view = new ProductView().init();
		_.controller = new ProductController(new ProductFasad()).init();
	}
}