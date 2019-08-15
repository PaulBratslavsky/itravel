const gulp = require('gulp');
const sass = require(`gulp-sass`);
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');


function style() {
  // 1. where is my css
  return gulp.src('./app/assets/scss/**/*.scss')
  // 2. pass file through sass compiler
  .pipe(sass().on('error', sass.logError))
  // 2.a prefixer
  .pipe(autoprefixer())
  // 3. where to save the file
  .pipe(gulp.dest('./app/assets/styles'))
  // 4. browser sync accross all browaers
  .pipe(browserSync.stream())
} 

function watch() {

  browserSync.init({
    server: {
      baseDir: './app/'
    }
  });

  gulp.watch('./app/assets/scss/**/*.scss', style);
  gulp.watch('./app/*.html').on('change', browserSync.reload);
  gulp.watch('./app/assets/js/*.js', browserSync.reload);
}

exports.style = style;
exports.watch = watch;


