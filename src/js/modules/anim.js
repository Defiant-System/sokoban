
let Anim = {
	init() {
		// fast references
		let APP = parabox,
			view = APP.content.find(".game-view");
		this.els = {
			view,
			topLevel: view.find(".top-level"),
			zoomLevel: view.find(".zoom-level"),
		};
	},
	getBoard(el) {
		let board = el.find("> .board:first");
		return {
			grid: {
				w: parseInt(board.cssProp("--w"), 10),
				h: parseInt(board.cssProp("--h"), 10),
				size: parseInt(board.cssProp("--size"), 10),
			},
			offset: {
				top: +board.prop("offsetTop"),
				left: +board.prop("offsetLeft"),
				width: +board.prop("offsetWidth"),
				height: +board.prop("offsetHeight"),
			}
		};
	},
	zoomOut() {
		let btX = 126,
			btY = -71,
			btS = 0.15,
			ptX = -255,
			ptY = -1,
			ptS = 5;
		// zoom/fade out top-level player
		this.els.topLevel.css({
				"--btX": `${btX}px`, "--btY": `${btY}px`, "--btS": btS,
				"--ptX": `${ptX}px`, "--ptY": `${ptY}px`, "--ptS": ptS,
			});

		this.els.view.cssSequence("zoom-out", "transitionend", el => {
			// reset root element
			el.removeClass("zoom-in zoom-out");
			// empty zoom level element
			this.els.zoomLevel.html("");
			// temp flag
			delete this.zoomed;
		});
	},
	zoomGrid(coord) {
		// render mini map
		let player = { y: 2, x: 0 },
			{ htm } = Game.paint(coord.mini, { player, zoom: true }),
			btX = 126,
			btY = -71,
			btS = .15,
			ptX = -255,
			ptY = -1,
			ptS = 5;
		// render
		this.els.zoomLevel.css({
				"--btX": `${btX}px`, "--btY": `${btY}px`, "--btS": btS,
				"--ptX": `${ptX}px`, "--ptY": `${ptY}px`, "--ptS": ptS,
			})
			.html(htm.join(""));

		let from = this.getBoard(this.els.topLevel),
			to = this.getBoard(this.els.zoomLevel);

		/* from:    g: 9x9    w: 553    t: 69     s: 62    
		 * to:      g: 5x5    w: 405    t: 122    s: 82   
		 * coord:   x: 6      y: 3
		 */
		btX = ((from.grid.w * to.offset.width) / 2) - (from.offset.width / 2) - (coord.x * to.offset.width) - (from.offset.left - to.offset.left);
		btY = ((from.grid.h * to.offset.height) / 2) - (from.offset.height / 2) - (coord.y * to.offset.width) - (from.offset.top - to.offset.top) + 30;
		btS = to.offset.width / from.grid.size;
		ptX = 38;
		ptY = 2;
		ptS = 0.2;
			
		// top-level zoom in
		this.els.topLevel.css({
				"--btX": `${btX}px`, "--btY": `${btY}px`, "--btS": btS,
				"--ptX": `${ptX}px`, "--ptY": `${ptY}px`, "--ptS": ptS,
			});
		
		this.els.view.cssSequence("zoom-in", "transitionend", el => {
			// temp flag
			this.zoomed = true;
		});
	}
};
