/*

Format:
	'name' : '',							Name of the site
	'description' : '',						Description of the data
	'url' : ['',''],						1st URL is the live data, 2nd the source code
	'img' : '',								image to display
	'skills' : ['','','','',''],			Technologies used, HTML, CSS, PHP, Wordpress, React.js etc

*/

var p = (function () {
	var projects = [{
		'name': 'React Todo App',
		'description' : 'Todo Application build on React and Redux which let\'s you add new tasks to the list and search existing todo items. Completed tasks are automatically archieved and can be made visible with the select box. Data is stored locally in the browser',
		'url': ['http://thawing-river-94231.herokuapp.com','https://github.com/rscheffers82/React-ToDo'],
		'img' : 'images/react-todo-app.jpg',
		'tech' : ['React', 'Redux', 'Javscript','JSX','SCSS','HTML']
	},{
		'name': 'Brilliant Massage Therapy',
		'description' : 'Wordpress website build in collaboration with <a href="http://www.thinkupdesign.ca" target="_blank">ThinkUp Design</a>. We incorporated two websites of the client into on professional SEO optimised and visual appealing website. While I mainly worked on the setup and functionality of the site, ThinkUp Design led the design aspect.',
		'url': ['http://jolitabrilliant.com'],
		'img' : 'images/jolita-brilliant.jpg',
		'tech' : ['Wordpress','Visual Composer','HTML','CSS','Photoshop']
	},{
		'name': 'React Countdown App',
		'description' : 'Countdown and Timer app build on React',
		'url': ['http://blooming-brushlands-69434.herokuapp.com','https://github.com/rscheffers82/ReactTimerApp'],
		'img' : 'images/react-timer-app.jpg',
		'tech' : ['React','Javscript','JSX','SCSS','HTML']
	},{
		'name': 'React Weather App',
		'description' : 'Weather App build on React using the Open Weather Map API',
		'url': ['http://desolate-sierra-89528.herokuapp.com/','https://github.com/rscheffers82/ReactWeatherApp'],
		'img' : 'images/react-weather-app.jpg',
		'tech' : ['React','Javscript','JSX','SCSS','HTML', 'API']
	},{
		'name': 'Black Belt Proofreader',
		'description' : 'WordPress based website build in collaboration with the owner.',
		'url': ['http://blackbeltproofreader.com'],
		'img' : 'images/blackbeltproofreader.jpg',
		'tech' : ['Wordpress','Divi Builder','HTML','CSS','Photoshop']
	},{
		'name': 'Simon',
		'description' : 'Simon: an electronic retro game build on mainly jQuery, Javascript, SCSS and HTML. This assignment was part of FreeCodeCamp\'s curriculum.',
		'url': ['https://rscheffers82.github.io/Simon-game/','https://github.com/rscheffers82/Simon-game'],
		'img' : 'images/simon.jpg',
		'tech' : ['HTML','SCSS','Gulp','Javascript','Photoshop']
	},{
		'name': 'Tic Tac Toe',
		'description' : 'Classic Tic Tac Toe game that has two player and single player mode gameplay. Several levels of AI are build in that rely on the NegaMax algoritm to calculate the score of a future moves.',
		'url': ['https://rscheffers82.github.io/Tic-Tac-Toe-JS-game/','https://github.com/rscheffers82/Tic-Tac-Toe-JS-game'],
		'img' : 'images/tic-tac-toe.jpg',
		'tech' : ['HTML','SCSS','Gulp','Javascript', 'negaMax algoritm', 'Photoshop']
	},{
		'name': 'Sand Timer',
		'description' : 'Sand Timer application designed to boost productivity by setting a focused work and break time. Both times can be regulated by sliders and the timer is in a continues loop. The base concept was taken from the pomodoro timer. The app is displayed on HTML Canvas element and build modular, making it easy to integrate on other sites.',
		'url': ['https://codepen.io/roycode/full/rLyZgm','https://github.com/rscheffers82/Pomodoro-Timer'],
		'img' : 'images/sand-timer.jpg',
		'tech' : ['HTML','canvas','CSS','Javascript']
	},{
		'name': 'Calculator',
		'description' : 'Solar Calculator build on jQuery and Javascript',
		'url': ['http://codepen.io/roycode/full/qNapgw','https://github.com/rscheffers82/calculator-html-css-js'],
		'img' : 'images/calculator-js.jpg',
		'tech' : ['HTML','CSS','jQuery','Javascript','Photoshop']
	},{
		'name': 'Weather App',
		'description' : 'Weather Application which based on the user\'s IP or browser information displays their local weather using the <a href="https://darksky.net/dev" target="_blank">Dark Sky API</a>.',
		'url': ['http://codepen.io/roycode/full/WwqYrB','http://codepen.io/roycode/pen/WwqYrB'],
		'img' : 'images/Weather-application-in-javascript.jpg',
		'tech' : ['HTML','SCSS','Bootstrap','Javascript','API']
	},{
		'name': 'Wikimedia Viewer',
		'description' : 'The Wikimedia Viewer application uses the Wikimedia Web API to retrieve information from WikiPedia and displays it.',
		'url': ['http://codepen.io/roycode/full/VjZZvw','http://codepen.io/roycode/pen/VjZZvw'],
		'img' : 'images/wikipedia-viewer.jpg',
		'tech' : ['HTML','CSS','Bootstrap','Javascript','API']
	},{
		'name': 'Quote Generator',
		'description' : 'Be inspired by some of the world most beautiful quotes. This application uses an AJAX request to load in quotes that the reader can share via Twitter.',
		'url': ['http://codepen.io/roycode/full/NNJzmG','http://codepen.io/roycode/pen/NNJzmG'],
		'img' : 'images/random-quote-generator-javascript.jpg',
		'tech' : ['HTML','CSS','Bootstrap','Javascript']
	},{
		'name': 'Tribute page',
		'description' : 'One of my earlier projects which aim was to build a tribute page using HTML and CSS. ',
		'url': ['http://codepen.io/roycode/full/BKPamX','http://codepen.io/roycode/pen/BKPamX'],
		'img' : 'images/Project-StevenGreer.jpg',
		'tech' : ['HTML','CSS']
	}]

/*	},{			fix app, currently not displaying anything
		'name': 'TwitchTV JSON API data',
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

	return{
		modal: function (number) {
			//var {name, description, img, url, tech} = projects[number];
			var name = projects[number].name;
			var description = projects[number].description;
			var img = projects[number].img;
			var url = projects[number].url
			var tech = projects[number].tech;

			function showTech() {
				var data = '<div class="tech-wrapper">';
				tech.forEach(function(item){
					data += '<div class="tech">' + item + '</div>';
				});
				data += '</div>';
				return( data );
			}
			function showImg() {
				var data = '<div class="modal-img-wrapper">' +
					'<a href="' + url[0] +'" target="_blank">' +
					'<img class="img-responsive" src="' + img + '" alt="' + name + '"></a>' +
		        '</div>'
				return data;


			}
			function showDescription() {
				return '<div class="description-wrapper"><p>' + description + '</p></div>'
			}

			$('.modal-title').html(name);
			$('.modal-body').html( showImg() + showTech() + showDescription() );
			$(".site").attr('href', url[0]);
			$(".project-image").attr('href', url[0]);


			console.log( url[1] );
			if ( url[1] ) {
				$(".code").removeClass("hide-btn");
				$(".code").attr('href', url[1]);
			} else {
				$(".code").addClass("hide-btn");
			}
		},
		showProjects: function () {
			var data = '';
			for ( i = 0; i < projects.length; i++ ){
			  if ( i === 0 ) data += '<div class="row">'
			  data += '<div class="col-xs-4 text-center">' +
			                '<div class="project">' +
			                  '<a data-number="' + i + '"  data-toggle="modal" data-target=".bd-example-modal-lg">' +
			                    '<h4>'+projects[i].name+'</h4>' +
			                    '<img class="img-responsive" src="'+projects[i].img+'" alt="'+projects[i].name+'">' +
			                  '</a>' +
			                '</div>' +
			             '</div>';
			  if ( i > 0 && (i+1)%3 === 0 ) data += '</div><div class="row">'
			}
		return data;
		}
	}



})();
