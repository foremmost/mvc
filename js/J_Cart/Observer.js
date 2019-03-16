export class CartModelObserver{
	constructor(){
		const _ = this;
		_.subscribers = [];
	}
	subscribe (fn) {
		this.subscribers.push(fn);
	}
	unsubscribe (fn) {
		this.subscribers = this.subscribers.filter(subscriber => subscriber !== fn)
	}
	sending (data) {
		this.subscribers.forEach(fn => fn(data))
	}
}

//export const UpdateCntObs = new CartModelObserver();

