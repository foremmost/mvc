import { CartModelObserver } from "./Observer.js";
import {CartModelF } from './model/J_CartModelF.js'
import {CartView } from './view/J_CartView.js'
import {CartController } from './controller/J_CartController.js'

window.addEventListener('load',function (  ) {
	let UpdateCntObs = new CartModelObserver();
	new CartView(UpdateCntObs);
	let facade = new CartModelF(UpdateCntObs);
	new CartController(facade);
})

