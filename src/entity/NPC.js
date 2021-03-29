class NPC {
	constructor({ age, sex, partner, pregnant, occupation, inventory }) {
		this._age = age;
		this._sex = sex;
		this._partner = partner;
		this._pregnant = pregnant;
		this._occupation = occupation;
		this._inventory = inventory;

		this.main = this.main.bind(this);
	}

	main() { }
}

module.exports = NPC;
