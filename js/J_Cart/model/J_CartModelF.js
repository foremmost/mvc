//import { UpdateCntObs } from "../Observer.js";
import { CartStorageModel } from "./J_CartStorageModel.js";
export class CartModelF {
	// Фасад
	constructor(obs) {
		const _ = this;
		_.obs =obs;
		_.CartStorage = new CartStorageModel();
	}

	add_product( id, cnt ) {
		const _ = this;
		_.CartStorage.add_product( id, cnt );
		_.update_cnt();
	}

	update_cnt() {
		const _ = this;
		_.obs.sending( _.CartStorage.get_cnt() );
	}

	init() {
		const _ = this;
		_.CartStorage.init();
		_.update_cnt();
		return _;
	}
}
