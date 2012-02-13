var D2Bot = {
	sendMessage: function (winclass, hwnd, msgID, msg) {
		sendCopyData(winclass, hwnd, msgID, msg);
	},
	printToConsole: function (msg) {
		this.sendMessage(null, "D2Bot #", 0, "printToConsole;" + msg);
	},
	printToItemLog: function (msg) {
		this.sendMessage(null, "D2Bot #", 0, "printToItemLog;" + msg);
	},
	updateStatus: function (msg) {
		this.sendMessage(null, "D2Bot #", 0, "updateStatus;" + msg);
	},
	updateRuns: function () {
		this.sendMessage(null, "D2Bot #", 0, "updateRuns");
	},
	updateChickens: function () {
		this.sendMessage(null, "D2Bot #", 0, "updateChickens");
	},
	requestGameInfo: function () {
		this.sendMessage(null, "D2Bot #", 0, "requestGameInfo");
	},
	restart: function (reset) {
		if (arguments.length > 0) {
			this.sendMessage(null, "D2Bot #", 0, "restartProfile;" + reset.toString());
		} else {
			this.sendMessage(null, "D2Bot #", 0, "restartProfile");
		}
	},
	CDKeyInUse: function () {
		this.sendMessage(null, "D2Bot #", 0, "CDKeyInUse");
	},
	CDKeyDisabled: function () {
		this.sendMessage(null, "D2Bot #", 0, "CDKeyDisabled");
	},
	joinMe: function(window, gameName, gameCount, gamePass, isUp) {
		this.sendMessage(null, window, 1, gameName + gameCount + "/" + gamePass + "/" + isUp);
	},
	requestGame: function (who) {
		this.sendMessage(null, who, 3, me.profile);
	}
};

var DataFile = {
	create: function () {
		var obj, string;

		obj = {
			runs: 0,
			experience: 0,
			deaths: 0,
			lastArea: ""
		};

		string = JSON.stringify(obj);

		FileTools.writeText("data/" + me.profile + ".json", string);
	},
	getStats: function () {
		var obj, string;
		
		string = FileTools.readText("data/" + me.profile + ".json");
		obj = JSON.parse(string);
		
		return {runs: obj.runs, experience: obj.experience, lastArea: obj.lastArea};
	},
	updateStats: function (count, exp, area) {
		var obj, string;

		string = FileTools.readText("data/" + me.profile + ".json");		
		obj = JSON.parse(string);

		if (count) {
			obj.runs = count;
		}

		if (exp) {
			obj.experience = exp;
		}
		
		if (area) {
			obj.lastArea = area;
		}

		string = JSON.stringify(obj);

		FileTools.writeText("data/" + me.profile + ".json", string);
	},
	updateDeaths: function () {
		var obj, string;

		string = FileTools.readText("data/" + me.profile + ".json");
		obj = JSON.parse(string);
		obj.deaths = obj.deaths + 1;
		string = JSON.stringify(obj);

		FileTools.writeText("data/" + me.profile + ".json", string);
	}
};

var ControlAction = {
	click: function () {
		var control = getControl(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);

		if (!control) {
			print("control not found")
			return false;
		}

		delay(clickdelay);
		control.click(arguments[5], arguments[6]);

		return true;
	},

	setText: function () {
		var control = getControl(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);

		if (!control) {
			return false;
		}

		delay(textdelay);
		control.setText(arguments[5]);
		
		return true;
	},

	getText: function () {
		var control = getControl(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);

		if (!control) {
			return false;
		}

		return control.getText();
	},

	clickRealm: function () {
		return this.click(4, 257, 500, 292, 160, 403, 350 + arguments[0] * 25);
	}
}