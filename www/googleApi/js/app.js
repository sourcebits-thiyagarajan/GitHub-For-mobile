
/**===========================================
		App = testapp2
=============================================*/

/*global angular*/

var app = angular.module('testApp2', ['ngRoute']);

app.config(function () {
	'use strict';

	console.log('app config::');

	
});

/**=======================================
	App = run
========================================*/

app.run(function () {
	'use strict';
	console.log('app run::');
	//$location.path('templates/');
});


/**=======================================
			App = constant
==========================================*/

app.constant('appConfig', {

	//console.log('app config::');

});

/*======= end of constants ===============*/