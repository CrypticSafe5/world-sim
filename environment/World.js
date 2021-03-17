const villageData = require('../data/villages.json');
const dayCycle = require('../config/dailyCycle.json');
const seasonCycle = require('../config/seasonalCycle.json');
const Village = require('./Village');

class World {
	constructor() {
		// Time stats
		this._year = -1; // To set the season to 0 for initialization
		this._season = -1; // To set the season to 0 for initialization
		this._day = -1; // To set the season to 0 for initialization
		this._time = -1; // To set the time to 0 for initialization
		this._dayCycle = null;

		this._villages = null;

		this.start = this.start.bind(this);
		this.main = this.main.bind(this);
	}

	async start() {
		// Initialize entities
		this._villages = villageData.map((e) => new Village(e));

		// Start game loop
		await this.main();
	}

	async main() {
		const startTime = Date.now();

		// Manage time/season
		this._time = (this._time >= (process.env.DAY_CYCLE_LENGTH * dayCycle.length) - 1) ? 0 : this._time + 1;
		this._dayCycle = Math.floor(this._time / process.env.DAY_CYCLE_LENGTH);
		if (!this._time) {
			this._day = (this._day >= (process.env.SEASON_CYCLE_LENGTH) - 1) ? 0 : this._day + 1;
			if (!this._day) {
				this._season = (this._season >= (seasonCycle.length) - 1) ? 0 : this._season + 1;
				if (!this._season) this._year += 1;
			}
		}
		console.table({
			time: `${((this._time < 10) ? '0' : '') + this._time}:00`,
			dayTime: dayCycle[this._dayCycle],
			date: `${this._day}/${this._year}`,
			season: seasonCycle[this._season]
		});

		// Perform entity actions
		await Promise.all(this._villages.map(async ({ main }) => main()));

		// Ensure consistent tick
		const endTime = Date.now();
		setTimeout(this.main, (1000 - (endTime - startTime)) * process.env.TIME_RATIO);
	}
}

module.exports = World;
