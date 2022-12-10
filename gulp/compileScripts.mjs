import gulp from 'gulp';
import webpackStream from 'webpack-stream';
import webpackConfig from '../webpack.config.cjs';

const compileScripts = () =>
  gulp.src(['src/js/main.js'])
      .pipe(webpackStream(webpackConfig))
      .pipe(gulp.dest('dist/js'));

export default compileScripts;
