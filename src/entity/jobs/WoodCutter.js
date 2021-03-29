const NPC = require('../NPC');

class WoodCutter extends NPC {
	constructor() {
		this.chop = this.chop.bind(this);
		this.carryWood = this.carryWood.bind(this);
	}

	chop() { }
	carryWood() { }
}

module.exports = WoodCutter;
