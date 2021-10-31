/*


Name: custom.js
Author: TemplateMilk
Website: https://www.templatemilk.com

*/







/*====================================================


	Table of Contents
	
	
		01. Loading Screen 
		
		02. Sliders 
		
		04. Lightbox

	
	
====================================================*/



jQuery(document).ready(function($) {
	
	
	"use strict";

	
	
/*======================

	01. Loading Screen 

========================*/



	setTimeout(function(){
		$('body').addClass('loaded');
		$('h1').css('color','#222222');
	}, 0);

	
	
	
	
	
/*======================

	02. Sliders 

========================*/



	$(".rslides").responsiveSlides({
	  auto: true,             // Boolean: Animate automatically, true or false
	  speed: 500,            // Integer: Speed of the transition, in milliseconds
	  timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
	  pager: false,           // Boolean: Show pager, true or false
	  nav: false,             // Boolean: Show navigation, true or false
	  random: false,          // Boolean: Randomize the order of the slides, true or false
	  pause: false,           // Boolean: Pause on hover, true or false
	  pauseControls: true,    // Boolean: Pause when hovering controls, true or false
	  prevText: "Previous",   // String: Text for the "previous" button
	  nextText: "Next",       // String: Text for the "next" button
	  maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
	  navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
	  manualControls: "",     // Selector: Declare custom pager navigation
	  namespace: "rslides",   // String: Change the default namespace used
	  before: function(){},   // Function: Before callback
	  after: function(){}     // Function: After callback
	});
	
	

	
/*======================

	04. Lightbox 

========================*/





	lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    });
	
	
	

	
});