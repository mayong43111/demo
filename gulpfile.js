var gulp = require('gulp');
var pump = require('pump');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var rev = require('gulp-rev');
var htmlmin = require('gulp-htmlmin');
var revCollector = require('sog-gulp-rev-collector');

// ts 编译
gulp.task('default', [], function (cb) {
    var tsProject = ts.createProject('tsconfig.json');

    pump([
        gulp.src(['src/**/*.ts']),
        sourcemaps.init({ loadMaps: true }),
        tsProject(),
        sourcemaps.write('.'),
        gulp.dest('src')
    ], cb);
});

// deploy
gulp.task('deploy-tsc', [], function (cb) {
    var tsProject = ts.createProject('tsconfig.json');

    pump([
        gulp.src(['src/**/*.ts']),
        sourcemaps.init({ loadMaps: true }),
        tsProject(),
        rev(),
        sourcemaps.write('.'),
        gulp.dest('dist'),
        rev.manifest('js.json'),
        gulp.dest('rev')
    ], cb);
});

gulp.task('deploy-htm', [], function (cb) {
    pump([
        gulp.src(['src/**/*.htm']),
        htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }),
        gulp.dest('dist')
    ], cb);
});

gulp.task('deploy-replace', ['deploy-htm', 'deploy-tsc'], function (cb) {
    pump([
        gulp.src(['dist/**/*.htm', 'dist/**/*.js']),
        revCollector(['manifest.json', 'rev/**/*.json']),
        gulp.dest('dist')
    ], cb);
});

gulp.task('deploy', ['deploy-replace', 'deploy-htm', 'deploy-tsc']);