import $ from '../core';

$.prototype.getAttr = function(name) {
		return this[0].getAttribute(name);
}

$.prototype.setAttr = function(name, value) {
	for (let i = 0; i < this.length; i++) {
		if (!this[i].getAttribute(name, value)) {
			continue;
		}
		return this[i].setAttribute(name, value);
	}

	return this;
}

$.prototype.removeAttr = function (name) {
	for (let i = 0; i < this.length; i++) {
		if (!this[i].getAttribute(name)) {
			continue;
		}
		return this[i].removeAttribute(name);
	}

	return this;
}

$.prototype.toggleAttr = function (name, value) {
	for (let i = 0; i < this.length; i++) {
		if(this[i].hasAttribute(name)) {
			this[i].removeAttribute(name)
		} else if(name && !value){
			this[i].setAttribute(name, '')
		} else {
			this[i].setAttribute(name, value)
		}
	}

	return this;
}

