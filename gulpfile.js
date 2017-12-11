const gulp = require("gulp");
const ts = require("gulp-typescript");
const stylus = require('gulp-stylus');
const rename = require('gulp-rename');
const csso = require('gulp-csso');
const tsProject = ts.createProject("tsconfig.json");

gulp.task('ts', () => tsProject
  .src()
  .pipe(tsProject())
  .js.pipe(gulp.dest("./dist"))
);

gulp.task('styl-site', () => gulp
  .src('./src/assets/styl/site/index.styl')
  .pipe(stylus({
    compress: true
  }))
  .pipe(rename('site.min.css'))
  .pipe(gulp.dest('./dist/static/css'))
);

gulp.task('styl-dashboard', () => gulp
  .src('./src/assets/styl/dashboard/index.styl')
  .pipe(stylus({
    compress: true
  }))
  .pipe(rename('dashboard.min.css'))
  .pipe(gulp.dest('./dist/static/css'))
);

gulp.task('css', () => gulp
  .src('./src/assets/css/*.css')
  .pipe(csso())
  .pipe(rename('vendor.min.css'))
  .pipe(gulp.dest('./dist/static/css'))
);

gulp.task('watch', () => {
  gulp.watch('./src/ts/**/*.tsx', ['ts']);
  gulp.watch('./src/assets/styl/site/**/*.styl', ['styl-site']);
});



gulp.task("default", ['ts', 'css', 'styl-site', 'styl-dashboard', 'watch']);
