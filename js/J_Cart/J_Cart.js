import { CartModelObserver } from "./Observer.js";
import { 		CartModelF		 } from './model/J_CartModelF.js'
import { 		CartView			 } from './view/J_CartView.js'
import { 	CartController	 } from './controller/J_CartController.js'

class J_Cart{
	constructor(config){
		let
			cartObs = new Map();
		cartObs.set('cnt',new CartModelObserver());
		cartObs.set('sum',new CartModelObserver());
		let cmodel = new CartModelF(cartObs);
		new CartView(cartObs);
		cmodel.init();
		config.model = cmodel;
		new CartController(config).init();
	}
}




export  {J_Cart}
