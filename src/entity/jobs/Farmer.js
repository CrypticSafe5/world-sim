const NPC = require('../NPC');

class Farmer extends NPC {
	constructor() {
		this.farm = this.farm.bind(this);
	}

	farm() { }
}

module.exports = Farmer;
