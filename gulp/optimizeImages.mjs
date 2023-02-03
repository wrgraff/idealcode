import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import webp from 'gulp-webp';
import { stacksvg } from 'gulp-stacksvg';

const svgo = () =>
  gulp
      .src('./src/img/**/*.{svg}')
      .pipe(
          imagemin([
            imagemin.svgo({
              plugins: [
                { removeViewBox: false },
                { removeRasterImages: true },
                { removeUselessStrokeAndFill: false }
              ],
            })
          ])
      )
      .pipe(gulp.dest('./src/img'));

const sprite = () => {
  return gulp
      .src('./src/img/sprite/*.svg')
      .pipe(stacksvg({ output: 'sprite' }))
      .pipe(gulp.dest('./dist/img'));
};

/*
  Optional tasks
  ---------------------------------

  Используйте отличное от дефолтного значение root, если нужно обработать отдельную папку в img,
  а не все изображения в img во всех папках.

  root = '' - по дефолту webp добавляются и обновляются во всех папках в src/img/
  root = 'content/' - webp добавляются и обновляются только в src/img/content/
*/

const createWebp = () => {
  const root = './';
  return gulp
      .src(`./src/img/${root}**/*.{png,jpg}`)
      .pipe(webp({ quality: 90 }))
      .pipe(gulp.dest(`./src/img/${root}`));
};

const optimizeImages = () =>
  gulp
      .src('./dist/img/**/*.{png,jpg}')
      .pipe(
          imagemin([
            imagemin.optipng({ optimizationLevel: 3 }),
            imagemin.mozjpeg({ quality: 75, progressive: true })
          ])
      )
      .pipe(gulp.dest('dist/img'));

export { svgo, sprite, createWebp, optimizeImages };
