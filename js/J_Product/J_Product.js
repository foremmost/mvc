import {J_ProductView} from "./view/J_ProductView.js";
import {ProductFacade} from "./model/ProductFasad.js";

export class J_Product{
	constructor() {
		const _ = this;
		_.view = new J_ProductView(new ProductFacade());
		
	}
	async init(){
		const _ = this;
		await _.view.init();
	}
}
