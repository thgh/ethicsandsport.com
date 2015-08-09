'use strict';

var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

var forEach = function(array, callback, scope) {
	if (array)
		for (var i = 0; i < array.length; i++) {
			callback.call(scope, i, array[i]);
		}
};

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

// Tags inside a tags
var tags = $$('.list--tags');
forEach(tags, function(index, elem) {
	console.log(elem)
	elem.addEventListener('click', function(event) {
		event.stopPropagation();
		event.preventDefault();
		var href = event.target.dataset.href;
		console.log(event.target)
		if (!href) return;
		window.location.href = href;
	});
});
