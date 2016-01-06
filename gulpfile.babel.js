'use strict'
require('babel-core/register')
import gulp from 'gulp'
import del from 'del'
import sourcemaps from 'gulp-sourcemaps'
import eslint from 'gulp-eslint'
import babel from 'gulp-babel'
import server from 'gulp-develop-server'

const DEST = '_build'
const SRC = ['src/*.js']

gulp.task('clean', function () {
  return del([DEST + '/**/*'])
})

gulp.task('default', ['clean'], function () {
  return gulp.src(SRC)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(sourcemaps.init())
		.pipe(babel({ presets: [ 'es2015' ] }))
    .pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(DEST))
})

gulp.task('watch', ['default'], function () {
  server.listen({ path: DEST })
  gulp.watch(SRC, ['default', server.restart])
})
