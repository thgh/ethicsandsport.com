'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var swig = require('gulp-swig');
var data = require('gulp-data');
var connect = require('gulp-connect');
var livereload = require('gulp-livereload');

var paths = {
	css: './assets/css/',
	sass: ['./assets/scss/*.scss'],
	swig: ['./assets/swig/**/*.html'],
	pages: ['./assets/swig/*.html']
};

gulp.task('default', ['watch', 'live', 'sass', 'swig']);

gulp.task('watch', function() {
	livereload.listen();
	gulp.watch(paths.sass, ['sass']);
	gulp.watch(paths.swig, ['swig']);
});

gulp.task('live', function() {
	connect.server({
		port: 9999,
		livereload: true
	});
});

gulp.task('sass', ['time'], function(done) {
	gulp.src('./assets/scss/screen.scss')
		.pipe(sass({
				outputStyle: 'compressed'
			})
			.on('error', function(err) {
				console.error('Error!', err.message);
				done();
			}))
		.pipe(gulp.dest(paths.css))
		.pipe(livereload())
		.on('end', done);
});

gulp.task('swig', ['time'], function(done) {
	gulp.src(paths.pages)
		.pipe(data(require('./assets/data.json')))
		.pipe(swig({
			load_json: true,
			defaults: {
				cache: false
			}
		}))
		.pipe(gulp.dest('./'))
		.pipe(livereload())
		.on('end', done);
});

gulp.task('time', function(done) {
	var d = new Date();
	console.log('\n  ' + d.getHours() + ':' + ('0' + d.getMinutes()).slice(-2) + ':' + ('0' + d.getSeconds()).slice(-2) + '\n');
	done();
});
