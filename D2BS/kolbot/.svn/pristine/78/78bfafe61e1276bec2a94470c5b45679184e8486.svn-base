// Paladin attack

var ClassAttack = {
	skillRange: [],
	skillHand: [],
	skillElement: [],

	init: function () {
		var i;

		for (i = 0; i < Config.AttackSkill.length; i += 1) {
			this.skillHand[i] = getBaseStat("skills", Config.AttackSkill[i], "leftskill");
			this.skillElement[i] = Attack.getSkillElement(Config.AttackSkill[i]);

			switch (Config.AttackSkill[i]) {
			case 0: // Normal Attack
				this.skillRange[i] = Attack.usingBow() ? 20 : 3;
				break;
			case 96: // Sacrifice
			case 97: // Smite
			case 106: // Zeal
			case 112: // Blessed Hammer
			case 116: // Conversion
				this.skillRange[i] = 3;
				break;
			case 101: // Holy Bolt
			case 107: // Charge
				this.skillRange[i] = 10;
				break;
			case 121: // Fist of the Heavens
				this.skillRange[i] = 20;
				break;
			default: // Every other skill
				this.skillRange[i] = 25;
				break;
			}
		}
	},

	doAttack: function (unit) {
		// TODO: preattack, un-ntbot

		var index;

		index = (unit.spectype & 0x7) ? 1 : 3;

		if (Attack.getResist(unit, this.skillElement[index]) < 100) {
			if (this.skillRange[index] < 4 && getDistance(me, unit) > 5 && (getCollision(unit.area, unit.x, unit.y) & 0x1)) {
				return 1;
			}

			if (!this.doCast(unit, index)) {
				return 2;
			}

			return 3;
		}

		if (Config.AttackSkill[5] > -1 && Attack.getResist(unit, this.skillElement[5]) < 100) {
			if (this.skillRange[5] < 4 && getDistance(me, unit) > 5 && (getCollision(unit.area, unit.x, unit.y) & 0x1)) {
				return 1;
			}

			if (!this.doCast(unit, 5)) {
				return 2;
			}

			return 3;
		}

		return 1;
	},

	afterAttack: function () {
		Precast.doPrecast(false);

		if (Config.Redemption instanceof Array && (me.hp * 100 / me.hpmax < Config.Redemption[0] || me.mp * 100 / me.mpmax < Config.Redemption[1]) && Skill.setSkill(124, 0)) {
			delay(1500);
		}
	},

	doCast: function (unit, index) {
		if (Config.AttackSkill[index] === 112) {
			if (!this.checkHammerPosition(unit)) {
				this.getHammerPosition(unit);
			}
		} else if (Config.AttackSkill[index] === 101) {
			Attack.getIntoPosition(unit, this.skillRange[index], 0x2004, true);
		} else if (getDistance(me, unit) > this.skillRange[index] || checkCollision(me, unit, 0x4)) {
			Attack.getIntoPosition(unit, this.skillRange[index], 0x4);
		}

		if (Config.AttackSkill[index + 1] > -1) {
			Skill.setSkill(Config.AttackSkill[index + 1], 0);
		}

		return Skill.cast(Config.AttackSkill[index], this.skillHand[index], unit);
	},

	checkHammerPosition: function (unit) {
		var i,
			x = unit.x,
			y = unit.y,
			positions = [[x + 2, y + 1], [x + 2, y + 3], [x + 1, y + 3], [x - 5, y - 1]];

		for (i = 0; i < positions.length; i += 1) {
			if (getDistance(me, positions[i][0], positions[i][1]) < 2) {
				return true;
			}
		}

		return false;
	},

	getHammerPosition: function (unit) {
		var i,
			x = unit.x,
			y = unit.y,
			positions = [[x + 2, y + 1], [x + 2, y + 3], [x + 1, y + 3], [x - 5, y - 1]];

		//positions.sort(Attack.sortRooms);

		for (i = 0; i < positions.length; i += 1) {
			if (Attack.validSpot(positions[i][0], positions[i][1])) {
				return this.reposition(positions[i][0], positions[i][1]);
			}
		}

		return false;
	},

	reposition: function (x, y) {
		while (!me.idle) {
			delay(40);
		}

		if (getDistance(me, x, y) > 3) {
			return Pather.moveTo(x, y, 1);
		}

		clickMap(0, 0, x, y);
		delay(20);
		clickMap(2, 0, x, y);

		while (!me.idle) {
			delay(40);
		}

		return true;
	}
};