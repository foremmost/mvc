//import { UpdateCntObs } from "../Observer.js";
import { CartStorageModel } from "./J_CartStorageModel.js";
export class CartModelF {
	// Фасад
	constructor(cartObs) {
		const _ = this;
		_.CartStorage = new CartStorageModel(cartObs);
	}
	async add_product( id, cnt ) {
		const _ = this;
		await _.CartStorage.add_product( id, cnt );
	}

	async init() {
		const _ = this;
		await _.CartStorage.init();
	}
}
