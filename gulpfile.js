import gulp from 'gulp';
import browserSync from 'browser-sync';
import del from 'del';
import styles from './gulp/compileStyles.mjs';
import { copy, copyImages, copySvg } from './gulp/copyAssets.mjs';
import js from './gulp/compileScripts.mjs';
import { svgo, sprite, createWebp, optimizeImages } from './gulp/optimizeImages.mjs';
import html from './gulp/compileHtml.mjs';

const server = browserSync.create();
const streamStyles = () => styles().pipe(server.stream());
const clean = () => del('dist');
const refresh = (done) => {
  server.reload();
  done();
};

const syncServer = () => {
  server.init({
    server: './dist',
    notify: false,
    open: true,
    cors: true,
    ui: false,
  });

  gulp.watch('./src/html/**/*.html', gulp.series(html, refresh));
  gulp.watch('./src/sass/**/**', streamStyles);
  gulp.watch('./src/js/**/*.{js,json}', gulp.series(js, refresh));
  gulp.watch('./src/data/**/*.{js,json}', gulp.series(copy, refresh));
  gulp.watch('./src/img/**/*.svg', gulp.series(copySvg, sprite, html, refresh));
  gulp.watch('./src/img/**/*.{png,jpg,webp}', gulp.series(copyImages, createWebp, html, refresh));

  gulp.watch('./src/favicon/**', gulp.series(copy, refresh));
  gulp.watch('./src/video/**', gulp.series(copy, refresh));
  gulp.watch('./src/downloads/**', gulp.series(copy, refresh));
};

const build = gulp.series(clean, svgo, copy, createWebp, styles, sprite, js, html);
const start = gulp.series(build, syncServer);

export { html, build, start };
