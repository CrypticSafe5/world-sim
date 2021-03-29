const NPC = require('../NPC');

class StoneCutter extends NPC {
	constructor() {
		this.pick = this.pick.bind(this);
		this.carryStone = this.carryStone.bind(this);
	}

	pick() { }
	carryStone() { }
}

module.exports = StoneCutter;
