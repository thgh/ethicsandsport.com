/**
 * split.js
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2015, Thomas Ghysels
 * https://thomasg.be
 */
(function() {
	'use strict';
	var split = document.getElementById('split'),
		leftIntro = split.querySelector('.split-intro.side-left'),
		rightIntro = split.querySelector('.split-intro.side-right'),
		leftPage = split.querySelector('.page.side-left .list'),
		rightPage = split.querySelector('.page.side-right .list');

	function back(page) {
		if (!classie.has(split, page)) return false;
		classie.remove(split, page);
		split.style.height = '250px';
		return true;
	}

	function openLeft() {
		if (back('split--right')) return;
		classie.add(split, 'split--left');
		split.style.height = rightPage.clientHeight + 'px';
	}

	function openRight() {
		if (back('split--left')) return;
		classie.add(split, 'split--right');
		split.style.height = leftPage.clientHeight + 'px';
	}
	if (leftIntro && rightIntro) {
		leftIntro.addEventListener('click', openLeft);
		rightIntro.addEventListener('click', openRight);
		leftIntro.addEventListener('touchstart', openLeft);
		rightIntro.addEventListener('touchstart', openRight);
	}
})();
