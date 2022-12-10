import gulp from 'gulp';

const copySvg = () =>
  gulp.src('./src/img/**/*.svg', { base: 'src' })
      .pipe(gulp.dest('./dist'));

const copyImages = () =>
  gulp.src('./src/img/**/*.{png,jpg,webp}', { base: 'src' })
      .pipe(gulp.dest('dist'));

const copy = () =>
  gulp.src([
    './src/**.html',
    './src/fonts/**',
    './src/img/**',
    './src/favicon/**'
  ], {
    base: './src',
  })
      .pipe(gulp.dest('./dist'));

export { copy, copyImages, copySvg };
