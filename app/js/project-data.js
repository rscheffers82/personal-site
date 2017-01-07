/*

Format:
	'name' : '',							Name of the site
	'description' : '',						Description of the data
	'url' : ['',''],						1st URL is the live data, 2nd the source code
	'img' : '',								image to display
	'skills' : ['','','','',''],			Technologies used, HTML, CSS, PHP, Wordpress, React.js etc

*/

var p = (function () {
	var imgBaseDir = 'images/';
	var projects = [{
		'name': 'React Todo App',
		'description' : 'A personal project used to sharpen my skills in React and Redux. This app lets you add tasks to a list and search existing todo items. Completed tasks are automatically archived and can be made visible again with the Show completed select box. Prior to this version, data was stored locally in the browser. Now, data is stored in Firebase using google authentication.',
		'url': ['http://thawing-river-94231.herokuapp.com','https://github.com/rscheffers82/React-ToDo'],
		'img' : 'react-todo-app.jpg',
		'tech' : ['React', 'Redux','JSX','Sass','HTML', 'Foundation'],
		'category' : ['featured', 'frontend']
	},{
		'name': 'Brilliant Massage Therapy',
		'description' : 'This is a client project in which I merged two sites into one in collaboration with Andrew from <a href="http://www.thinkupdesign.ca" target="_blank">ThinkUp Design</a>. After having done market research regarding local massage businesses and competing WordPress templates, we presented the client with the possible designs. The <a href="http://jacqueline.themerex.net" target="_blank">Jacqueline theme</a> was chosen.<br/> I migrated the current blog to a new WordPress site and installed the theme. After having styled most of the content and the revolution slider, Andrew took care of the intricate design fixes. The final result; a professional, SEO optimised, mobile ready and visual appealing site.',
		'url': ['http://jolitabrilliant.com'],
		'img' : 'jolita-brilliant.jpg',
		'tech' : ['Wordpress','Photoshop','CSS','HTML'],
		'category' : ['featured', 'design']
	},{
		'name': 'React Countdown App',
		'description' : 'This is one of my personal projects used to become familiar with re-using React components. In this timer app the countdown and timer parts of the application use the same components but slightly different logic is used in each. Building this app helped me to understand how props are passed down to child components and how application states are managed by a main parent container component. The application is styled using the <a href="foundation.zurb.com" target="_blank">Foundation</a> framework and deployed live on Heroku.',
		'url': ['http://blooming-brushlands-69434.herokuapp.com','https://github.com/rscheffers82/ReactTimerApp'],
		'img' : 'react-timer-app.jpg',
		'tech' : ['React','JSX','Sass','HTML', 'Foundation'],
		'category' : ['frontend']
	},{
		'name': 'React Weather App',
		'description' : 'This is one of my first apps build on React. The application uses the Axios library to retrieve weather data from the <a href="http://openweathermap.org" target="_blank">Open Weather Map API</a> and shows the temperature based on the city provided. I use the React Router component to create a single window multi page app. The Get Weather page shows the weather based on the city entered. The Favorites page shows a list of cities which, when clicked, provide data through the URL to the main weather component and then displays the weather. Error handling is incorporated in case the API fails.',
		'url': ['http://desolate-sierra-89528.herokuapp.com/','https://github.com/rscheffers82/ReactWeatherApp'],
		'img' : 'react-weather-app.jpg',
		'tech' : ['React','JSX','Sass','HTML','API'],
		'category' : ['frontend']
	},{
		'name': 'Black Belt Proofreader',
		'description' : 'This project was build in collaboration with the business owner. Zorana started her own business as a legal transcript proofreader and needed a website to advertise her services. I provided her with the hosting and installed WordPress with the <a href="https://www.elegantthemes.com/gallery/divi" target="_blank">Divi theme</a>. She took care of the content and rough layout, while I assisted her with the finer CSS styling and made sure the site was supported by various mobile devices.',
		'url': ['http://blackbeltproofreader.com'],
		'img' : 'blackbeltproofreader.jpg',
		'tech' : ['Wordpress','Photoshop','CSS','HTML'],
		'category' : ['featured', 'design']
	},{
		'name': 'Simon',
		'description' : 'This is my graduation project for the Front-end Program from <a href="https://www.freecodecamp.com" target="_blank">FreeCodeCamp</a>. Simon is an electronic retro game initially launched in 1978 where after it quickly became a pop culture symbol of the 70s and 80s.<br/>To recreate this game, I started of by creating the interface in Photoshop. Once done I transferred this to a simple page using HTML and Sass. The game logic was added using jQuery and JavaScript. For example, Simon will not accept input until it is switched on. By pressing start button a random sequence of 20 steps is generated and the first move is displayed by lighting up the corresponding color. The user much match this and as the game progresses the sequence becomes more complex. The game is eventually won after all 20 steps in the sequence are completed. This project helped me to program game logic into an application as well as make it look visually appealing on all devices.',
		'url': ['https://rscheffers82.github.io/Simon-game/','https://github.com/rscheffers82/Simon-game'],
		'img' : 'simon.jpg',
		'tech' : ['Javascript','Sass','HTML','Photoshop'],
		'category' : ['featured', 'frontend', 'design']
	},{
		'name': 'Tic Tac Toe',
		'description' : 'A classic Tic Tac Toe game that has two and single player game-play. Several levels of AI are build in that rely on the negaMax algorithm to calculate the score of future moves. It\'s one of my personal projects that I love and hate. I struggled quite a bit to understand the negaMax and MiniMax algorithms and how I can translate them into code that works. At the same time I enjoyed the larger functions I setup, which are used for each state of the game. Besides that I experimented with a modal to make it a single page app. The end result: a smooth game that entertains even the experienced Tic Tac Toe player',
		'url': ['https://rscheffers82.github.io/Tic-Tac-Toe-JS-game/','https://github.com/rscheffers82/Tic-Tac-Toe-JS-game'],
		'img' : 'tic-tac-toe.jpg',
		'tech' : ['Javascript','Sass', 'HTML','negaMax algoritm','Photoshop'],
		'category' : ['featured', 'frontend']
	},{
		'name': 'Sand Timer',
		'description' : 'Sand Timer application designed to boost productivity by setting a focused work and break time. Both times can be regulated by sliders and the timer is in a continues loop. The base concept was taken from the pomodoro timer. The app is displayed on HTML Canvas element and build modular, which allows the app to easily be integrated on other sites.',
		'url': ['https://codepen.io/roycode/full/rLyZgm','https://github.com/rscheffers82/Pomodoro-Timer'],
		'img' : 'sand-timer.jpg',
		'tech' : ['Javascript','CSS','HTML','HTML Canvas'],
		'category' : ['featured', 'frontend']
	},{
		'name': 'Calculator',
		'description' : 'A solar calculator styled using CSS and made functional by utilizing jQuery and JavaScript. It was a pretty straigh forward project that helped me greatly to understand CSS better and how to layout various element on the screen. Because of the many input elements, I used jQuery to catch input and various functions to perform the calculations.',
		'url': ['http://codepen.io/roycode/full/qNapgw','https://github.com/rscheffers82/calculator-html-css-js'],
		'img' : 'calculator-js.jpg',
		'tech' : ['Javascript','CSS','HTML','Photoshop'],
		'category' : ['featured', 'frontend']
	},{
		'name': 'Weather App',
		'description' : 'a weather application which, based on the user\'s IP or browser information, displays the local weather using the <a href="https://darksky.net/dev" target="_blank">Dark Sky API</a>. This was a simple API project that I loved building, due to the creativity I could put into it. The various weather conditions each have their own background and the weather icon changes based on the current weather. The location is retrieved in multiple ways depending on the available information, either via browser info or via <a href="http://ip-api.com" target=_blank">ip-api.com</a>.',
		'url': ['http://codepen.io/roycode/full/WwqYrB','http://codepen.io/roycode/pen/WwqYrB'],
		'img' : 'Weather-application-in-javascript.jpg',
		'tech' : ['Javascript','Sass','HTML','Bootstrap','API'],
		'category' : ['featured', 'frontend']
	},{
		'name': 'Wikimedia Viewer',
		'description' : 'The Wikimedia Viewer application uses the Wikimedia Web API to retrieve information from WikiPedia and displays it.',
		'url': ['http://codepen.io/roycode/full/VjZZvw','http://codepen.io/roycode/pen/VjZZvw'],
		'img' : 'wikipedia-viewer.jpg',
		'tech' : ['Javascript','CSS','HTML','Bootstrap','API'],
		'category' : ['frontend']
	},{
		'name': 'Quote Generator',
		'description' : 'Be inspired by some of the world most beautiful quotes. This application uses an AJAX request to load in quotes that the user can share via Twitter.',
		'url': ['http://codepen.io/roycode/full/NNJzmG','http://codepen.io/roycode/pen/NNJzmG'],
		'img' : 'random-quote-generator-javascript.jpg',
		'tech' : ['Javascript','CSS','HTML','Bootstrap'],
		'category' : []
	},{
		'name': 'Tribute page',
		'description' : 'One of my early projects which aim was to build a tribute page for a person that inspires you. In my case that\'s <a href="http://www.siriusdisclosure.com" target="_blank">Steven Greer</a>, who has done a tremendous work for humanity by bringing forward information on the ETs and UFOs subject that has been suppressed since the 1940s. This project helped me to get back into HTML and CSS.',
		'url': ['http://codepen.io/roycode/full/BKPamX','http://codepen.io/roycode/pen/BKPamX'],
		'img' : 'Project-StevenGreer.jpg',
		'tech' : ['CSS','HTML'],
		'category' : []
	}]

/*	},{			fix app, currently not displaying anything
		'name': 'TwitchTV JSON API data',
		'description' : 'Load Twitch TV data into the site',
		'url': ['http://rscheffers82.github.io/TwitchTV','https://github.com/rscheffers82/TwitchTV'],
		'img' : 'Weather-application-in-javascript.jpg',
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
			// console.log('imgBaseDir: ', imgBaseDir);

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
					'<img class="img-responsive" src="' + imgBaseDir + img + '" alt="' + name + '"></a>' +
		        '</div>'
				return data;

			}
			function showDescription() {
				return '<div class="description-wrapper"><p>' + description + '</p></div>'
			}

			$('.modal-title').html(name);
			$('.modal-body').html( showImg() + showTech() + showDescription() );
			$(".info").attr('href', url[0]);
			$(".project-image").attr('href', url[0]);


			// console.log( url[1] );
			if ( url[1] ) {
				$(".code").removeClass("hide");
				$(".code").attr('href', url[1]);
			} else {
				$(".code").addClass("hide");
			}
		},


		loadProjectsInto: function ($grid) {

			var getCategories = function (number) {
				return projects[number].category.join(' ');
			}

			var projectIcon = function (number) {
				return '<a href="' + projects[number].url[1] + '" target="_blank">' +
									'<i class="fa fa-github"></i> View code' +
							 '</a>';
			}


// Currently I don't add elements correctly to the page. See the below two examples
// http://isotope.metafizzy.co/methods.html
// http://codepen.io/desandro/pen/ECKiw

			for ( i = 0; i < projects.length; i++ ){
			$project = $('<div class="project ' + getCategories(i) + '">' +
			 	'<div class="project-innerwrapper">' +
			 		'<div class="title">' + projects[i].name + '</div>' +
			//
					'<div class="img-wrapper">' +
						'<a data-number="' + i + '"  data-toggle="modal" data-target=".bd-example-modal-lg">' +
							'<img class="img-responsive" src="' + imgBaseDir + projects[i].img + '"></div>' +
						'</a>' +
						'<div class="project-action-icons">' +
							(projects[i].url[1] ? projectIcon(i) : '' ) +
							'<a data-number="' + i + '"  data-toggle="modal" data-target=".bd-example-modal-lg">' +
								'<i class="fa fa-info-circle"></i>More info' +
							'</a>' +
						'</div>' +
			 		'</div>' +
				'</div>');
			$grid.append( $project )
		     // add and lay out newly appended items
		     .isotope( 'appended', $project );
			}
			window.setTimeout( function() {
				$grid.isotope('layout');
			},1000);
		}
	}

})();
