/*

Format:
	'name' : '',							Name of the site
	'description' : '',						Description of the data
	'url' : ['',''],						1st URL is the live data, 2nd the source code
	'img' : '',								image to display
	'skills' : ['','','','',''],			Technologies used, HTML, CSS, PHP, WordPress, React.js etc

*/

var p = (function () {				// eslint-disable-line
	var imgBaseDir = 'images/';
	var projects = [{
		'name': 'Brilliant Massage Therapy',
		'description' : 'This is a client project in which I merged two sites into one in collaboration with Andrew from <a href="http://www.thinkupdesign.ca" target="_blank">ThinkUp Design</a>. After having done market research regarding local massage businesses and competing WordPress templates, we presented the client with the possible designs. The <a href="http://jacqueline.themerex.net" target="_blank">Jacqueline theme</a> was chosen.<br/> I migrated the current blog to a new WordPress site and installed the theme. After having styled most of the content and the revolution slider, Andrew took care of the intricate design fixes. The final result; a professional, SEO optimised, mobile ready and visual appealing site.',
		'url': ['http://jolitabrilliant.com'],
		'img' : 'jolita-brilliant.jpg',
		'tech' : ['WordPress','Photoshop','CSS','HTML'],
		'category' : ['featured', 'wordpress']
	},{
		'name': 'Cusmariu Life Coaching',
		'description' : 'For this project Julie asked me to upgrade her static website to a dynamic and responsive WordPress site. As she already had extensive content on her previous site, specifically in relation to podcast interviews, the challenge was to present her services and content in a much clearer way.<br />To achieve this, a large part of the work involved creating various page and post templates files. Her new website runs on the <a href="https://demo.woothemes.com/canvas" target="_blank">Canvas parent theme</a> with the child theme that is heavily customized. Besided web development, I also assisted Julie with valuable insights into how she can better engage her audience which resulted in large changes to the home, about and work with me pages.',
		'url': ['https://http://www.juliecusmariu.com/','https://github.com/rscheffers82/wordpress-custom-design'],
		'img' : 'julie-cusmariu-project.jpg',
		'tech' : ['WordPress', 'PHP', 'Photoshop','CSS','HTML'],
		'category' : ['featured', 'wordpress']
	},{
		'name': 'Meteor Notes',
		'description' : 'Notes is a responsive mobile first web app built using Meteor & React. For this project, the request was to create an application that stores notes for each user. This was achieved by using Meteor\'s accounts API. Multiple Meteor Session variables track the state of the application and React renders the UI depending on the route that is visited. On top of this, SCSS styles and media queries make this app look elegant on any screen size.', 
		'url': ['https://rs-notes.herokuapp.com','https://github.com/rscheffers82/Meteor-notes'],
		'img' : 'responsive-overview-meteor-react-notes-app.jpg',
		'tech' : ['Meteor', 'React', 'JSX', 'Sass','HTML'],
		'category' : ['featured', 'meteor', 'react', 'backend', 'fullstack']
	},{
		'name': 'Meteor Short Lnk',
		'description' : 'This application was built utilizing a Meteor backend and a react frontend interface. The main requirements for the project were to offer users a secure personal space to create and track shortened URLs and allow anyone with a shortened URL to be redirected to the full URL.<br/> Creating a personal secure space was achieved by using Meteor\'s build-in authentication library. New URL\'s are saved in a SimpleSchema format in the MongoDB using Meteor methods. Redirection happens at the backend of the app and login is not required. <br /> Once users visit the shortened URL, the app fetches the request and using Meteor\'s WebApp library and Node\'s req, res and next objects to redirect the user when the URL is found. When this is the case, behind the scenes the last visited and visit count values are updated.',
		'url': ['https://rs-lnk.herokuapp.com','https://github.com/rscheffers82/short-lnk-meteor'],
		'img' : 'short-lnk-meteor-project-roy-scheffers.jpg',
		'tech' : ['Meteor', 'React', 'JSX', 'Sass','HTML'],
		'category' : ['featured', 'meteor', 'react', 'backend', 'fullstack']
	},{
		'name': 'React List',
		'description' : 'A personal project used to sharpen my skills in React and Redux. This app lets you add tasks to a list and search existing to-do items. Completed tasks are automatically archived and can be made visible again with the Show completed select box. Prior to this version, data was stored locally in the browser. Now, data is stored in Firebase using google authentication.',
		'url': ['http://list11.herokuapp.com','https://github.com/rscheffers82/React-List-Application'],
		'img' : 'react-to-do-app.jpg',
		'tech' : ['React', 'Redux','JSX','Sass','HTML', 'Foundation'],
		'category' : ['featured', 'react', 'frontend']
	},{
		'name': 'Meteor Score Keep',
		'description' : 'In order to explore Meteor and get familiar with its eco-system, I build this project. The requirement was to create a database that records players and their score. On the front-end, players can be added and removed and their score increased and decreased. Animations are added using the React Flip Move library. Once completed, the app was deployed to Heroku with the help of the meteor horse build pack.',
		'url': ['https://score-keep11.herokuapp.com','https://github.com/rscheffers82/score-keeper'],
		'img' : 'score-keep.jpg',
		'tech' : ['Meteor', 'React', 'JSX', 'Sass','HTML'],
		'category' : ['meteor', 'react']
	},{
		'name': 'Exercise Tracker API',
		'description' : 'Exercise Tracker is built on Node and Express to deepen my knowledge of creating APIs. To make this project a little more intuitive to use and visual, a partial front-end UI is created using Materialize CSS. This setup is chosen for API demo purposes and it is not meant to be a full stack app.<br /> The "Create new user" and "Add Exercise" are POST routes that return JSON data. The "View logs" is a GET route which through an AJAX call will request the user\'s previous exercise data based on the start and end date when provided, and display it in a table underneath the three boxes.',
		'url': ['https://rs82.herokuapp.com/exercise/','https://github.com/rscheffers82/API-microservices/tree/master/exercise-tracker'],
		'img' : 'exercise-api-project.jpg',
		'tech' : ['Node','Express','MongoDB', 'JavaScript', 'MaterializeCSS'],
		'category' : ['api', 'backend']
	},{
		'name': 'Five API projects',
		'description' : 'This is one of my pet projects used to become familiar with Node, Express and MongoDB. I build five API apps that take input through either POST or GET and return JSON data. My favorite project was the Exercise Tracker. Here users can register, track their exercises and view logs. I added a front-end UI using Materialize CSS, although the Add user and Add Exercise POST routes will return JSON data for demonstration purposes.',
		'url': ['https://rs82.herokuapp.com/','https://github.com/rscheffers82/API-microservices'],
		'img' : 'API-collection.jpg',
		'tech' : ['Node','Express','MongoDB', 'JavaScript', 'MaterializeCSS'],
		'category' : ['featured', 'api', 'backend']
	},{
		'name': 'Black Belt Proofreader',
		'description' : 'This project was built in collaboration with the business owner. Zorana started her own business as a legal transcript proofreader and needed a website to advertise her services. I provided her with the hosting and installed WordPress with the <a href="https://www.elegantthemes.com/gallery/divi" target="_blank">Divi theme</a>. I successfully implemented the overall styling and ensured that the site was supported by various mobile devices while she took care of the content and rough layout. All customization was saved in a child theme.',
		'url': ['http://blackbeltproofreader.com'],
		'img' : 'blackbeltproofreader.jpg',
		'tech' : ['WordPress','Photoshop','CSS','HTML'],
		'category' : ['featured', 'wordpress']
	},{
		'name': 'Simon',
		'description' : 'This is my graduation project for the Front-end Program from <a href="https://www.freecodecamp.com" target="_blank">FreeCodeCamp</a>. Simon is an electronic retro game initially launched in 1978 after which it quickly became a pop culture symbol of the 70s and 80s.<br/>To recreate this game, I started of by creating the interface in Photoshop. Once done I transferred this to a simple page using HTML and Sass. The game logic was added using jQuery and JavaScript. For example, Simon will not accept input until it is switched on. By pressing start button a random sequence of 20 steps is generated and the first move is displayed by lighting up the corresponding color. The user much match this and as the game progresses the sequence becomes more complex. The game is eventually won after all 20 steps in the sequence are completed. This project helped me to program game logic into an application as well as make it look visually appealing on all devices.',
		'url': ['https://rscheffers82.github.io/Simon-game/','https://github.com/rscheffers82/Simon-game'],
		'img' : 'simon.jpg',
		'tech' : ['JavaScript','Sass','HTML','Photoshop'],
		'category' : ['featured', 'frontend']
	},{
		'name': 'React Countdown App',
		'description' : 'This is one of my personal projects used to become familiar with re-using React components. In this timer app the countdown and timer parts of the application use the same components but slightly different logic is used in each. Building this app helped me to understand how props are passed down to child components and how application states are managed by a main parent container component. The application is styled using the <a href="foundation.zurb.com" target="_blank">Foundation</a> framework and deployed live on Heroku.',
		'url': ['http://blooming-brushlands-69434.herokuapp.com','https://github.com/rscheffers82/ReactTimerApp'],
		'img' : 'react-timer-app.jpg',
		'tech' : ['React','JSX','Sass','HTML', 'Foundation'],
		'category' : ['frontend', 'react']
		},{
		'name': 'Tic Tac Toe',
		'description' : 'A classic Tic Tac Toe game that has two and single player game-play. Several levels of AI are build in that rely on the negaMax algorithm to calculate the score of future moves. It\'s one of my personal projects that I love and hate. I struggled quite a bit to understand the negaMax and MiniMax algorithms and how I can translate them into code that works. At the same time I enjoyed the larger functions I setup, which are used for each state of the game. Besides that I experimented with a modal to make it a single page app. The end result: a smooth game that entertains even the experienced Tic Tac Toe player',
		'url': ['https://rscheffers82.github.io/Tic-Tac-Toe-JS-game/','https://github.com/rscheffers82/Tic-Tac-Toe-JS-game'],
		'img' : 'tic-tac-toe.jpg',
		'tech' : ['JavaScript','Sass', 'HTML','negaMax algoritm','Photoshop'],
		'category' : ['featured', 'frontend']
	},{
		'name': 'Sand Timer',
		'description' : 'Sand Timer application designed to boost productivity by setting a focused work and break time. Both times can be regulated by sliders and the timer is in a continues loop. The base concept was taken from the pomodoro timer. The app is displayed on HTML Canvas element and build modular, which allows the app to easily be integrated on other sites.',
		'url': ['https://codepen.io/roycode/full/rLyZgm','https://github.com/rscheffers82/Pomodoro-Timer'],
		'img' : 'sand-timer.jpg',
		'tech' : ['JavaScript','CSS','HTML','HTML Canvas'],
		'category' : ['frontend']
	},{
		'name': 'React Weather App',
		'description' : 'This is one of my first apps build on React. The application uses the Axios library to retrieve weather data from the <a href="http://openweathermap.org" target="_blank">Open Weather Map API</a> and shows the temperature based on the city provided. I use the React Router component to create a single window multi page app. The Get Weather page shows the weather based on the city entered. The Favorites page shows a list of cities which, when clicked, provide data through the URL to the main weather component and then displays the weather. Error handling is incorporated in case the API fails.',
		'url': ['http://desolate-sierra-89528.herokuapp.com/','https://github.com/rscheffers82/ReactWeatherApp'],
		'img' : 'react-weather-app.jpg',
		'tech' : ['React','JSX','Sass','HTML','API'],
		'category' : ['react', 'api']
	},{
		'name': 'Calculator',
		'description' : 'A solar calculator styled using CSS and made functional by utilizing jQuery and JavaScript. It was a pretty straigh forward project that helped me greatly to understand CSS better and how to layout various element on the screen. Because of the many input elements, I used jQuery to catch input and various functions to perform the calculations.',
		'url': ['http://codepen.io/roycode/full/qNapgw','https://github.com/rscheffers82/calculator-html-css-js'],
		'img' : 'calculator-js.jpg',
		'tech' : ['JavaScript','CSS','HTML','Photoshop'],
		'category' : ['frontend']
	},{
		'name': 'Weather App',
		'description' : 'A weather application which, based on the user\'s IP or browser information, displays the local weather using the <a href="https://darksky.net/dev" target="_blank">Dark Sky API</a>. This was a simple API project that I loved building, due to the creativity I could put into it. The various weather conditions each have their own background and the weather icon changes based on the current weather. The location is retrieved in multiple ways depending on the available information, either via browser info or via <a href="http://ip-api.com" target=_blank">ip-api.com</a>.',
		'url': ['http://codepen.io/roycode/full/WwqYrB','http://codepen.io/roycode/pen/WwqYrB'],
		'img' : 'Weather-application-in-javascript.jpg',
		'tech' : ['JavaScript','Sass','HTML','Bootstrap','API'],
		'category' : ['frontend', 'api']
	},{
		'name': 'Wikimedia Viewer',
		'description' : 'The Wikimedia Viewer application uses the Wikimedia Web API to retrieve information from WikiPedia and displays it.',
		'url': ['http://codepen.io/roycode/full/VjZZvw','http://codepen.io/roycode/pen/VjZZvw'],
		'img' : 'wikipedia-viewer.jpg',
		'tech' : ['JavaScript','CSS','HTML','Bootstrap','API'],
		'category' : ['API']
	}
	// },{
	// 	'name': 'Quote Generator',
	// 	'description' : 'Be inspired by some of the world most beautiful quotes. This application uses an AJAX request to load in quotes that the user can share via Twitter.',
	// 	'url': ['http://codepen.io/roycode/full/NNJzmG','http://codepen.io/roycode/pen/NNJzmG'],
	// 	'img' : 'random-quote-generator-javascript.jpg',
	// 	'tech' : ['JavaScript','CSS','HTML','Bootstrap'],
	// 	'category' : []
	// },{
	// 	'name': 'Tribute page',
	// 	'description' : 'One of my early projects which aim was to build a tribute page for a person that inspires you. In my case that\'s <a href="http://www.siriusdisclosure.com" target="_blank">Steven Greer</a>, who has done a tremendous work for humanity by bringing forward information on the ETs and UFOs subject that has been suppressed since the 1940s. This project helped me to get back into HTML and CSS.',
	// 	'url': ['http://codepen.io/roycode/full/BKPamX','http://codepen.io/roycode/pen/BKPamX'],
	// 	'img' : 'Project-StevenGreer.jpg',
	// 	'tech' : ['CSS','HTML'],
	// 	'category' : []
	// }
];

/*	},{			fix app, currently not displaying anything
		'name': 'TwitchTV JSON API data',
		'description' : 'Load Twitch TV data into the site',
		'url': ['http://rscheffers82.github.io/TwitchTV','https://github.com/rscheffers82/TwitchTV'],
		'img' : 'Weather-application-in-javascript.jpg',
		'tech' : ['HTML','CSS','Bootstrap','JavaScript','API']
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
			var url = projects[number].url;
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
					'<img class="img-responsive" src="' + imgBaseDir + img + '" alt="' + name + '"></a>' +
				'</div>';
				return data;

			}
			function showDescription() {
				return '<div class="description-wrapper"><p>' + description + '</p></div>';
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
			};

			var projectIcon = function (number) {
				return '<a href="' + projects[number].url[1] + '" target="_blank">' +
									'<i class="fa fa-github"></i> View code' +
								'</a>';
			};


// Currently I don't add elements correctly to the page. See the below two examples
// http://isotope.metafizzy.co/methods.html
// http://codepen.io/desandro/pen/ECKiw

			for ( var i = 0; i < projects.length; i++ ){
			let $project = $('<div class="project ' + getCategories(i) + '">' +
				'<div class="project-innerwrapper">' +
					'<a data-number="' + i + '"  data-toggle="modal" data-target=".bd-example-modal-lg">' +
						'<div class="title">' + projects[i].name + '</div>' +
							'<div class="img-wrapper">' +
								// '<img class="img-responsive" src="' + imgBaseDir + projects[i].img + '"></div>' +
								'<div class="img-responsive" style="background-image: url(' + imgBaseDir + projects[i].img + ');"></div>' +
							'</div>' +
					'</a>' +
					'<div class="project-action-icons">' +
						(projects[i].url[1] ? projectIcon(i) : '' ) +
						'<a data-number="' + i + '"  data-toggle="modal" data-target=".bd-example-modal-lg">' +
							'<i class="fa fa-info-circle"></i>More info' +
						'</a>' +
					'</div>' +
				'</div>');
			$grid.append( $project )
				.isotope( 'appended', $project );
			}
			window.setTimeout( function() {
				// $grid.isotope('layout');
				$grid.isotope({ filter: '.featured' });
			},1000);
		}
	};
})();
