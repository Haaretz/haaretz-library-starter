const gulp = require('gulp'),
	install = require('gulp-install'),
	conflict = require('gulp-conflict'),
	template = require('gulp-template'),
	inquirer = require('inquirer'),
	_ = require('lodash'),
	execS = require('child_process').execSync;

const defaults = {
	moduleNaturalName: process.argv[3] || 'htz-',
	moduleDescription: '',
	moduleAuthorName: execS('git config user.name', { encoding: 'utf8' }).split('\n')[0],
	moduleAuthorEmail: execS('git config user.email', { encoding: 'utf8' }).split('\n')[0]
};
defaults.moduleSafeName = defaults.moduleNaturalName.replace(' ', '-');

// const textTransform =textTransformation(transformString);

gulp.task('default', function (done) {
	inquirer.prompt([
		{ type: 'input', name: 'moduleNaturalName', message: 'Give your module a name', default: defaults.moduleNaturalName },
		{ type: 'input', name: 'moduleDescription', message: 'Please describe what your module does$', default: defaults.moduleDescription },
		{ type: 'confirm', name: 'moveon', message: 'Continue?' }
	]).then(
		function (answers) {
			if (!answers.moveon) {
				return done();
			}
			delete (answers.moveon);
			let options = _.defaults(answers, defaults);
			gulp.src(__dirname + '/template/**',{dot:true})  // Note use of __dirname to be relative to generator
				.pipe(template(options))                 // Lodash template support
				.pipe(conflict('./' + answers.moduleSafeName))                    // Confirms overwrites on file conflicts
				.pipe(gulp.dest('./' + answers.moduleSafeName))                   // Without __dirname here = relative to cwd
				.pipe(install())                         // Run `bower install` and/or `npm install` if necessary
				.on('end', function () {
					execS('git init ./'+ answers.moduleSafeName);
					done();                                // Finished!
				})
				.resume();
		});
});