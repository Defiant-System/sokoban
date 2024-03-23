
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
		let bEl = el.find("> .board:first"),
			pEl = el.find(".player").get(0);
		return {
			grid: {
				w: parseInt(bEl.cssProp("--w"), 10),
				h: parseInt(bEl.cssProp("--h"), 10),
				size: parseInt(bEl.cssProp("--size"), 10),
			},
			offset: {
				top: +bEl.prop("offsetTop"),
				left: +bEl.prop("offsetLeft"),
				width: +bEl.prop("offsetWidth"),
				height: +bEl.prop("offsetHeight"),
			},
		};
	},
	zoomOut() {
		// zoom/fade out top-level player
		this.els.topLevel.css({
				"--btX": this.els.zoomLevel.cssProp("--btX"),
				"--btY": this.els.zoomLevel.cssProp("--btY"),
				"--btS": this.els.zoomLevel.cssProp("--btS"),
				"--ptX": this.els.zoomLevel.cssProp("--ptX"),
				"--ptY": this.els.zoomLevel.cssProp("--ptY"),
				"--ptS": this.els.zoomLevel.cssProp("--ptS"),
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
		/* from:    g: 9x9    w: 553    t: 69     s: 62    
		 * to:      g: 5x5    w: 405    t: 122    s: 82   
		 * coord:   x: 6      y: 3
		 */

		// render mini map
		let player = { y: 2, x: 0 },
			{ htm } = Game.paint(coord.mini, { player, zoom: true }),
			from = this.getBoard(this.els.topLevel),
			to = this.getBoard(this.els.zoomLevel.html(htm.join(""))),
			btX = 126,
			btY = -71,
			btS = from.grid.size / to.offset.width,
			ptX = -255,
			ptY = -1,
			ptS = to.offset.width / to.grid.size;

		// render
		this.els.zoomLevel.css({
				"--btX": `${btX}px`, "--btY": `${btY}px`, "--btS": btS,
				"--ptX": `${ptX}px`, "--ptY": `${ptY}px`, "--ptS": ptS,
			});

		btX = ((from.grid.w * to.offset.width) / 2) - (from.offset.width / 2) - (coord.x * to.offset.width) - (from.offset.left - to.offset.left);
		btY = ((from.grid.h * to.offset.height) / 2) - (from.offset.height / 2) - (coord.y * to.offset.width) - (from.offset.top - to.offset.top) + 30;
		btS = to.offset.width / from.grid.size;
		ptX = 38;
		ptY = 3;
		ptS = (from.grid.size / to.grid.w) / from.grid.size;
			
		// top-level zoom in
		this.els.topLevel.css({
				"--btX": `${btX}px`, "--btY": `${btY}px`, "--btS": btS,
				"--ptX": `${ptX}px`, "--ptY": `${ptY}px`, "--ptS": ptS,
			});
		
		requestAnimationFrame(() => {
			this.els.view.cssSequence("zoom-in", "transitionend", el => {
				// temp flag
				this.zoomed = true;
			});
		});
	}
};
