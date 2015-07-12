'use strict';

var $ = document.querySelector.bind(document);

// Mobile navigation toggle
var navToggle = function() {
	classie.toggle($('body'), 'nav-open');
};

// Tab navigation
var tabs = $('.tabs-2');
if (tabs) {
	tabs.addEventListener('click', function(event) {
		var p = event.target.parentNode;
		var a = $('.tab.tab-active');
		if (a) {
			classie.remove(a, 'tab-active');
		}
		if (classie.has(p, 'tab') && p !== a) {
			event.preventDefault();
			event.stopPropagation();
			classie.add(p, 'tab-active');
		}
	});

	// Cancel tab navigation
	document.body.addEventListener('click', function(event) {
		var a = $('.tab.tab-active');
		if (a) {
			classie.remove(a, 'tab-active');
		}
	});
}
