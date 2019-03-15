/*
class _J_Controller{
	constructor(model,view){
		const _ = this;
		_.model = model;
		_.view = view;
	}
}
class _J_Model{
	constructor(){
		const _ = this;
	}
}

class _J_View{
	constructor(){
		const _ = this;
	}
}
let J_Controller = new _J_Controller(new _J_Model(),new _J_View());
console.log(J_Controller);

class EventObserver {
	constructor () {
		this.observers = []
	}

	subscribe (fn) {
		this.observers.push(fn)
	}

	unsubscribe (fn) {
		this.observers = this.observers.filter(subscriber => subscriber !== fn)
	}

	broadcast (data) {
		this.observers.forEach(subscriber => subscriber(data))
	}
}

const blogObserver = new EventObserver()

const textField = document.querySelector('.textField')
const countField = document.querySelector('.countField');
const test = document.querySelector('.test');

const getWordsCount = text =>
		text ? text.trim().split(/\s+/).length : 0;
textField.addEventListener('keyup', () => {
	blogObserver.broadcast(textField.value)
})
blogObserver.subscribe(text => {
	countField.innerHTML = getWordsCount(text)
})
blogObserver.subscribe(text => {
	test.innerHTML =text.toUpperCase();
})*/
