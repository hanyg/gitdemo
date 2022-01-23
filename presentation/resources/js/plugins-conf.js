width: "100%",
height: "100%",
menu: {
    themes: [
         { name: 'Black', theme: 'reveal.js/css/theme/black.css' },
         { name: 'White', theme: 'reveal.js/css/theme/white.css' },
         { name: 'League', theme: 'reveal.js/css/theme/league.css' }

    ],
    themesPath: 'reveal.js/css/theme',
	transitions: true,
	markers: true,
	hideMissingTitles: true,
	numbers: true,
	width: 'half',
	custom: [
			{ title: 'Agenda', icon: '<i class="fa fa-link"></i>', src: 'agenda.html' },
			{ title: 'Documentation', icon: '<i class="fa fa-info"></i>', src: 'about.html' }
	]
},
keyboard: {
	67: function() { RevealChalkboard.toggleNotesCanvas() },	// toggle notes canvas when 'c' is pressed
	66: function() { RevealChalkboard.toggleChalkboard() },	// toggle chalkboard when 'b' is pressed
	46: function() { RevealChalkboard.clear() },	// clear chalkboard when 'DEL' is pressed
	 8: function() { RevealChalkboard.reset() },	// reset chalkboard data on current slide when 'BACKSPACE' is pressed
	68: function() { RevealChalkboard.download() },	// downlad recorded chalkboard drawing when 'd' is pressed
},
chalkboard: {
	boardmarkerWidth: 3,
	theme: "chalkboard",
	toggleChalkboardButton: { left: "70px" },
	toggleNotesButton: { left: "110px" },
},
customcontrols: {
		slideNumberCSS : 'position: fixed; display: block; right: 90px; top: auto; left: auto; width: 50px; bottom: 30px; z-index: 31; font-family: Helvetica, sans-serif; font-size:  12px; line-height: 1; padding: 5px; text-align: center; border-radius: 10px; background-color: rgba(128,128,128,.5)',
		controls: [
			{ icon: '<i class="fa fa-caret-left"></i>',
			  css: 'position: fixed; left: 30px; top: 30px; z-index: 30; font-size: 24px;',
			  action: 'Reveal.prev(); return false;'
			},
			{ icon: '<i class="fa fa-caret-right"></i>',
			  css: 'position: fixed; right: 30px; top: 30px; z-index: 30; font-size: 24px;',
			  action: 'Reveal.next(); return false;'
			},
			{
			  css: 'position: fixed; right: 30px; bottom: 130px; z-index: 30; font-size: 24px;',
			  icon: '<i class="fa fa-th"></i>',
			  action: 'Reveal.toggleOverview();'
			},
			{ icon: '<i class="fa fa-pen-square"></i>',
			  css: 'position: fixed; right: 30px; bottom: 380px; z-index: 30; font-size: 24px;',
			  action: 'RevealChalkboard.toggleChalkboard(); return false;'
			},
			{ icon: '<i class="fa fa-edit"></i>',
			  css: 'position: fixed; right: 30px; bottom: 410px; z-index: 30; font-size: 24px;',
			  action: 'RevealChalkboard.toggleNotesCanvas(); return false;'
			},
			{ icon: '<i class="fa fa-trash"></i>',
			  css: 'position: fixed; right: 30px; bottom: 220px; z-index: 30; font-size: 24px;',
			  action: 'RevealChalkboard.clear();'
			},
			{ icon: '<i class="fa fa-minus-circle"></i>',
			  css: 'position: fixed; right: 30px; bottom: 250px; z-index: 30; font-size: 24px;',
			  action: 'RevealChalkboard.reset();'
			},
			{ icon: '<i class="fa fa-download"></i>',
			  css: 'position: fixed; right: 30px; bottom: 280px; z-index: 30; font-size: 24px;',
			  action: 'RevealChalkboard.download();'
			},
			{ icon: '<i class="fa fa-sticky-note"></i>',
			  css: 'position: fixed; right: 30px; bottom: 160px; z-index: 30; font-size: 24px;',
			  action: 'RevealNotes.open();'
			},
			{ icon: '<i class="fa fa-paint-brush" style="color: blue !important;"></i>',
			  css: 'position: fixed; right: 30px; bottom: 440px; z-index: 30; font-size: 24px;',
			  action: "RevealChalkboard.setColor(1); return false;"
			},
			{ icon: '<i class="fa fa-paint-brush" style="color: red !important;"></i>',
			  css: 'position: fixed; right: 30px; bottom: 470px; z-index: 30; font-size: 24px;',
			  action: "RevealChalkboard.setColor(2); return false;"
			},
			{ icon: '<i class="fa fa-paint-brush" style="color: green !important;"></i>',
			  css: 'position: fixed; right: 30px; bottom: 500px; z-index: 30; font-size: 24px;',
			  action: "RevealChalkboard.setColor(3); return false;"
			},
			{ icon: '<i class="fa fa-paint-brush" style="color: orange !important;"></i>',
			  css: 'position: fixed; right: 30px; bottom: 530px; z-index: 30; font-size: 24px;',
			  action: "RevealChalkboard.setColor(4); return false;"
			},
			{ icon: '<i class="fa fa-paint-brush" style="color: purple !important;"></i>',
			  css: 'position: fixed; right: 30px; bottom: 560px; z-index: 30; font-size: 24px;',
			  action: "RevealChalkboard.setColor(5); return false;"
			},
			{ icon: '<i class="fa fa-paint-brush" style="color: yellow !important;"></i>',
			  css: 'position: fixed; right: 30px; bottom: 590px; z-index: 30; font-size: 24px;',
			  action: "RevealChalkboard.setColor(6); return false;"
			}//,
			//{ icon: '<i class="fa fa-volume-up"></i>',
			//  css: 'position: fixed; right: 30px; bottom: 700px; z-index: 30; font-size: 24px;',
			//  action: "Reveal.triggerKey(83);"
			//}
		]
}
