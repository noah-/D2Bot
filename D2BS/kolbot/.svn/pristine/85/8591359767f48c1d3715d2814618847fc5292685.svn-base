function FastDiablo() {
	var i, tick, seal;
	
	this.openSeal = function (id) {
		Pather.moveToPreset(108, 2, id, 4);

		seal = getUnit(2, id);

		if (seal) {
			for (i = 0; i < 3; i += 1) {
				seal.interact();

				tick = getTickCount();

				while (getTickCount() - tick < 500) {
					if (seal.mode) {
						return true;
					}

					delay(10);
				}
			}
		}
		
		return false;
	};

	Town.doChores();
	Pather.useWaypoint(107);
	Precast.doPrecast(true);

	if (!this.openSeal(395) || !this.openSeal(396)) {
		throw new Error("Failed to open seals");
	}

	for (i = 0; i < 10; i += 1) {
		if (getUnit(1, getLocaleString(2851))) {
			break;
		}

		delay(300);
	}

	Attack.kill(getLocaleString(2851)); // Grand Vizier of Chaos
	Pickit.pickItems();

	if (!this.openSeal(394)) {
		throw new Error("Failed to open seals");
	}

	Pather.moveTo(me.x, me.y + 30);

	for (i = 0; i < 10; i += 1) {
		if (getUnit(1, getLocaleString(2852))) {
			break;
		}

		delay(300);
	}

	Attack.kill(getLocaleString(2852)); // Lord De Seis
	Pickit.pickItems();

	if (!this.openSeal(392) || !this.openSeal(393)) {
		throw new Error("Failed to open seals");
	}

	for (i = 0; i < 10; i += 1) {
		if (getUnit(1, "infector of souls")) {
			break;
		}

		delay(300);
	}

	Attack.kill(getLocaleString(2853)); // Infector of Souls
	Pickit.pickItems();
	Pather.moveTo(7793, 5288);

	for (i = 0; i < 40; i = i + 1) {
		if (getUnit(1, 243)) {
			break;
		}

		delay(500);
	}

	Attack.kill(243); // Diablo
	Pickit.pickItems();

	return true;
}