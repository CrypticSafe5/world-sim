const NPC = require('../NPC');

class Guard extends NPC {
	constructor() {
		this.patrol = this.patrol.bind(this);
	}

	patrol() { }
}

module.exports = Guard;
