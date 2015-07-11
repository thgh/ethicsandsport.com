'use strict';

var $ = document.querySelector.bind(document);

var navToggle = function() {
	classie.toggle($('body'), 'nav-open');
};
