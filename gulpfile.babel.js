'use strict'
require('babel-core/register')
import gulp from 'gulp'
import del from 'del'
import sourcemaps from 'gulp-sourcemaps'
import eslint from 'gulp-eslint'
import babel from 'gulp-babel'
import server from 'gulp-develop-server'
import prepend from 'prepend-file'
import mocha from 'gulp-mocha'
import fs from 'fs'

const DEST = '_build'
const SRC = 'src'
const TEST_GLOB = `test/**/*.js`
const MODULES_GLOB = `${SRC}/modules/**/*.js`
const MAIN_GLOB = `${SRC}/*.js`

gulp.task('clean', function () {
  return del(DEST)
})

gulp.task('main', function () {
  gulp.src(MAIN_GLOB)
    .pipe(eslint()).pipe(eslint.format())
    .pipe(sourcemaps.init())
    .pipe(babel({ presets: [ 'es2015' ] }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(DEST))
})

gulp.task('modules', function () {
  gulp.src(MODULES_GLOB)
    .pipe(eslint()).pipe(eslint.format())
    .pipe(sourcemaps.init())
    .pipe(babel({ presets: [ 'es2015' ] }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(`${DEST}/modules/`))
})

gulp.task('watch', ['default'], function () {
  server.listen({ path: DEST })
  gulp.watch(MAIN_GLOB, ['main', server.restart])
  gulp.watch(MODULES_GLOB, ['modules', server.restart])
})

gulp.task('finalize', ['default'], function () {
  prepend('./_build/index.js', '#!/usr/bin/env node\n')
  fs.chmodSync('./_build/index.js', '0770')
})

gulp.task('test', function () {
  return gulp.src(TEST_GLOB, { read: false })
    .pipe(mocha({ reporter: 'spec' }))
})

gulp.task('test-watch', ['default'], function () {
  gulp.watch(TEST_GLOB, ['test'])
  gulp.watch(MODULES_GLOB, ['modules', 'test'])
})

gulp.task('default', ['main', 'modules', 'test'])
