
Level["2-10"] = {
	grid: 9,
	bg: "#b87441",
	filter: "sepia(1) hue-rotate(315deg) saturate(1.5) brightness(0.85)",
	player: { y: 7, x: 4 },
	void: [{ y: 7, x: 1 }],
	exit: { y: 6, x: 1 },
	block: [
		{ y: 6, x: 3, mini: "2-10" },
	],
	walls: [
		[{ "key": "NE" }, { "key": "NS" }, { "key": "NS" }, { "key": "NWS" }, {}, { "key": "NE" }, { "key": "N" }, { "key": "N" }, { "key": "NW" }],
		[{ "key": "WE","sub":["NW-NE"] }, {}, {}, {}, {}, { "key": "E" }, { "key": "S" }, { "key": "F" }, { "key": "W" }],
		[{ "key": "WE" }, {}, { "key": "NSE" }, { "key": "NS" }, { "key": "NS" }, { "key": "WS","sub":["NW-NE","NE-WS"] }, {}, { "key": "SE","sub":["NE-NW"] }, { "key": "W" }],
		[{ "key": "WE" }, {}, {}, {}, {}, {}, {}, {}, { "key": "WE","sub":["NE-NW"] }],
		[{ "key": "WE" }, {}, {}, {}, {}, {}, {}, {}, { "key": "WE" }],
		[{ "key": "E" }, { "key": "NS","sub":["NE-ES"] }, { "key": "NWS" }, {}, { "key": "NE" }, { "key": "NS" }, { "key": "NS" }, { "key": "N" }, { "key": "W","sub":["NE-WS"] }],
		[{ "key": "WE","sub":["NW-NE"] }, {}, {}, {}, { "key": "WSE","sub":["NW-NE"] }, {}, {}, { "key": "E","sub":["NE-NW"] }, { "key": "W" }],
		[{ "key": "WE" }, {}, {}, {}, {}, {}, {}, { "key": "E" }, { "key": "W" }],
		[{ "key": "SE" }, { "key": "NS","sub":["NE-ES"] }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "S","sub":["NE-WS"] }, { "key": "WS" }]
	]
};
