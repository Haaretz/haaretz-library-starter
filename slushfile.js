const gulp = require('gulp'),
	yarn = require('gulp-yarn'),
	conflict = require('gulp-conflict'),
	template = require('gulp-template'),
	path = require('path'),
	inquirer = require('inquirer'),
	_ = require('lodash'),
	execS = require('child_process').execSync;

const defaults = {
	moduleNaturalName: process.argv[3] || 'htz-',
	get moduleSafeName() {
		return this.moduleNaturalName.replace(' ', '-');
	},
	moduleDescription: '',
	moduleAuthorName: execS('git config user.name', { encoding: 'utf8' }).split('\n')[0],
	moduleAuthorEmail: execS('git config user.email', { encoding: 'utf8' }).split('\n')[0]
};

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
			const targetFolder = path.join(process.cwd(), options.moduleSafeName);
			gulp.src(__dirname + '/template/**', { dot: true })  // Note use of __dirname to be relative to generator
				.pipe(template(options))                 // Lodash template support
				.pipe(conflict(targetFolder))                    // Confirms overwrites on file conflicts
				.pipe(gulp.dest(targetFolder))                   // Without __dirname here = relative to cwd
				.pipe(yarn({ ignoreScripts: true }))                         // Run `npm install --ignore-scripts`
				.on('end', function () {
					execS('git init ' + targetFolder); // create git empty repo
					done();                                // Finished!
				})
				.resume();
		});
});