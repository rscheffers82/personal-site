/*

Format:
	'name' : '',							Name of the site
	'description' : '',						Description of the project
	'url' : ['',''],						1st URL is the live project, 2nd the source code
	'img' : '',								image to display
	'skills' : ['','','','',''],			Technologies used, HTML, CSS, PHP, Wordpress, React.js etc

*/

var project = function() {
	var display = function (item) {

	};
	var projects = [{
		'number': '1',	
		'name': 'React Countdown App',
		'description' : 'Countdown and Timer app build on React',
		'url': ['http://blooming-brushlands-69434.herokuapp.com','https://github.com/rscheffers82/ReactTimerApp'],
		'img' : 'images/react-timer-app.jpg',					
		'tech' : ['React','Javscript','JSX','SCSS','HTML']
	},{	
		'number': '2',	
		'name': 'Brilliant Massage Therapy',
		'description' : 'Wordpress website build in collaboration with ThinkUp Design. We incorporated two websites of the client into on professional SEO optimised and visual appealing website. While I mainly worked on the setup and functionality of the site, ThinkUp Design led the design aspect.',
		'url': ['http://jolitabrilliant.com','#'],
		'img' : 'images/jolita-brilliant.jpg',						
		'tech' : ['Wordpress','Visual Composer','HTML','CSS','Photoshop']	
	},{
		'number': '3',	
		'name': 'React Weather App',
		'description' : 'Weather App build on React using the Open Weather Map API',
		'url': ['http://desolate-sierra-89528.herokuapp.com/','https://github.com/rscheffers82/ReactWeatherApp'],
		'img' : 'images/react-weather-app.jpg',					
		'tech' : ['React','Javscript','JSX','SCSS','HTML', 'API']
	},{					
		'number': '4',	
		'name': 'Black Belt Proofreader',
		'description' : '',
		'url': ['http://blackbeltproofreader.com','#'],
		'img' : 'images/blackbeltproofreader.jpg',						
		'tech' : ['Wordpress','Divi Builder','HTML','CSS','Photoshop']	
	},{
		'number': '5',	
		'name': 'Simon',
		'description' : 'Simon: an electronic game of memory skill. Test how sharp your memory still is... Recreated by Roy Scheffers using HTML, SCSS and Javascript as part of FreeCodeCamp\'s curriculum.',
		'url': ['https://rscheffers82.github.io/Simon-game/','https://github.com/rscheffers82/Simon-game'],
		'img' : 'images/simon.jpg',
		'tech' : ['HTML','SCSS','Gulp','Javascript','Photoshop']
	},{
		'number': '6',	
		'name': 'Tic Tac Toe',
		'description' : 'One or two player game',
		'url': ['https://rscheffers82.github.io/Tic-Tac-Toe-JS-game/','https://github.com/rscheffers82/Tic-Tac-Toe-JS-game'],
		'img' : 'images/tic-tac-toe.jpg',
		'tech' : ['HTML','SCSS','Gulp','Javascript', 'NegaMax algoritm', 'Photoshop']
	},{
		'number': '7',	
		'name': 'Sand Timer',
		'description' : 'Alternative design to the pomodoro timer to increase productivity.',
		'url': ['https://codepen.io/roycode/full/rLyZgm','https://github.com/rscheffers82/Pomodoro-Timer'],
		'img' : 'images/sand-timer.jpg',
		'tech' : ['HTML','canvas','CSS','Javascript']
	},{
		'number': '8',	
		'name': 'Calculator',
		'description' : 'Solar Calculator',
		'url': ['http://codepen.io/roycode/full/qNapgw','https://github.com/rscheffers82/calculator-html-css-js'],
		'img' : 'images/calculator-js.jpg',
		'tech' : ['HTML','CSS','Javascript','Photoshop']
	},{
		'number': '9',	
		'name': 'Weather App',
		'description' : 'Load local weather',
		'url': ['http://codepen.io/roycode/full/WwqYrB','http://codepen.io/roycode/pen/WwqYrB'],
		'img' : 'images/Weather-application-in-javascript.jpg',								
		'tech' : ['HTML','SCSS','Bootstrap','Javascript','API']
	},{
		'number': '10',	
		'name': 'Wikimedia Viewer',
		'description' : '',
		'url': ['http://codepen.io/roycode/full/VjZZvw','http://codepen.io/roycode/pen/VjZZvw'],
		'img' : 'images/wikipedia-viewer.jpg',
		'tech' : ['HTML','CSS','Bootstrap','Javascript','API']
	},{
		'number': '11',	
		'name': 'Quote Generator',
		'description' : 'Be inspired by some of the world most beautiful quotes',
		'url': ['http://codepen.io/roycode/full/NNJzmG','http://codepen.io/roycode/pen/NNJzmG'],
		'img' : 'images/random-quote-generator-javascript.jpg',								
		'tech' : ['HTML','CSS','Bootstrap','Javascript']
	},{
		'number': '12',	
		'name': 'Tribute page',
		'description' : 'First project',
		'url': ['http://codepen.io/roycode/full/BKPamX','http://codepen.io/roycode/pen/BKPamX'],
		'img' : 'images/Project-StevenGreer.jpg',								
		'tech' : ['HTML','CSS']

/*	},{			fix app, currently not displaying anything
		'name': 'TwitchTV JSON API project',
		'description' : 'Load Twitch TV data into the site',
		'url': ['http://rscheffers82.github.io/TwitchTV','https://github.com/rscheffers82/TwitchTV'],
		'img' : 'images/Weather-application-in-javascript.jpg',
		'tech' : ['HTML','CSS','Bootstrap','Javascript','API']
*/
/*	},{
		'name': '',
		'description' : '',
		'url': ['',''],
		'img' : '',		// 400 * 250						
		'tech' : ['','','','','']
*/
	}]

};



/*
Idea, drop down window with more information
For ideas

- http://sergiopedercini.com/				- drop down effect (tic tac toe)
- http://www.goslingo.com/ 					- how projects are shown, Jquery
This project was undertaken in collaboration with Lick Studio

*/