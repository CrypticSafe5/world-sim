const NPC = require('../NPC');

class Miner extends NPC {
	constructor() {
		this.mine = this.mine.bind(this);
	}

	mine() { }
}

module.exports = Miner;
