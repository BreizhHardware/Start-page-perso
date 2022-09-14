/*	GOOGLE
	----------------------------------------------------- */

eng.google = {
	pageTitle: "Google",
	logo: "../assets/images/google.png",
	places: {
		'Web'    : ["https://www.google.com/search?q=%query%", false],
		'Images' : ["https://images.google.com/images?q=%query%", false],
		'Maps'   : ["https://maps.google.com/maps?q=%query%", false]
	}
};


/*	WIKIPEDIA
	----------------------------------------------------- */
	
eng.wikipedia = {
	pageTitle: "Wikipedia",
	logo: "../assets/images/wikipedia.png",
	places: {
		'Search'        : ["https://fr.wikipedia.org/wiki/Special:Search?search=%query%&fulltext=Search", false],
		'Go to Article' : ["https://fr.wikipedia.org/wiki/Special:Search?search=%query%&go=Go", false],
	}
};


/*	YOUTUBE
	----------------------------------------------------- */

eng.youtube = {
	pageTitle: "YouTube",
	logo: "../assets/images/youtube.png",
	places: {
		'Videos' : ["https://www.youtube.com/results?search_query=%query%", false]
	},
};


/*	TWITTER
	----------------------------------------------------- */

eng.twitter = {
	pageTitle: "Twitter",
	logo: "../assets/images/twitter.png",
	places: {
		'Search Twitter' : ["https://twitter.com/search?q=%query%", false]
	}
};

/*	Twitch
	----------------------------------------------------- */

	eng.twicth = {
		pageTitle: "Twitch",
		logo: "../assets/images/twitch.png",
		places: {
			'Search Twitter' : ["https://www.twitch.tv/search?term=%query%", false]
		}
	};

/*	GitHub
	----------------------------------------------------- */

	eng.github = {
		pageTitle: "GitHub",
		logo: "../assets/images/github.png",
		places: {
			'Search Twitter' : ["https://github.com/search?q=%query%", false]
		}
	};


/*	Google Trad
	----------------------------------------------------- */

	eng.ggtrad = {
		pageTitle: "Google Traduction",
		logo: "../assets/images/ggtrad.png",
		places: {
			'Search Twitter' : ["https://translate.google.fr/?hl=fr&sl=auto&tl=fr&text=%query%", false]
		}
	};
