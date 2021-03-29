const NPC = require('../NPC');

class Guard {
	constructor() {
		this.patrol = this.patrol.bind(this);
	}

	patrol() { }
}

module.exports = Guard;
