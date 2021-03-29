class Village {
	constructor({ id, citizens, inventory }) {
		this._id = id;
		this._citizens = citizens;
		this._inventory = inventory;

		this.main = this.main.bind(this);
	}

	main() {
		// console.info('Village - ' + this._id + ' - Pop - ' + this._citizens.length);
	}
}

module.exports = Village;
