
Level[4] = {
	bg: "#626262",
	filter: "none",
	player: { y: 7, x: 1 },
	exit: { y: 6, x: 4 },
	void: [{ y: 1, x: 6 }, { y: 6, x: 6 }],
	block: [{ y: 4, x: 2, color: "yellow" }, { y: 3, x: 3, color: "blue" }],
	walls: [
		[{ key: "NE" }, { key: "N" }, { key: "N" }, { key: "N" }, { key: "N" }, { key: "N" }, { key: "NS" }, { key: "N" }, { key: "NW" }],
		[{ key: "E" }, { key: "F" }, { key: "F" }, { key: "F" }, { key: "F" }, { key: "W", sub: ["NW-NE"] }, {}, { key: "E", sub: ["NE-NW"] }, { key: "W" }],
		[{ key: "E" }, { key: "S" }, { key: "S" }, { key: "S" }, { key: "S" }, { key: "WS" }, {}, { key: "E" }, { key: "W" }],
		[{ key: "WE", sub: ["NW-NE"] }, {}, {}, {}, {}, {}, {}, { key: "E" }, { key: "W" }],
		[{ key: "WE" }, {}, {}, { key: "NE" }, { key: "N" }, { key: "NW" }, {}, { key: "E" }, { key: "W" }],
		[{ key: "E" }, { key: "NWS", sub: ["NE-ES"] }, {}, { key: "E" }, { key: "S" }, { key: "WS" }, {}, { key: "E" }, { key: "W" }],
		[{ key: "WE", sub: ["NW-NE"] }, {}, {}, { key: "WE", sub: ["NW-NE"] }, {}, {}, {}, { key: "E" }, { key: "W" }],
		[{ key: "WE" }, {}, {}, { key: "E" }, { key: "N", sub: ["NE-ES"] }, { key: "N" }, { key: "N" }, { key: "F", sub: ["NE-WS"] }, { key: "W" }],
		[{ key: "SE" }, { key: "NS", sub: ["NE-ES"] }, { key: "NS" }, { key: "S", sub: ["NE-WS"] }, { key: "S" }, { key: "S" }, { key: "S" }, { key: "S" }, { key: "WS" }],
	]
};
