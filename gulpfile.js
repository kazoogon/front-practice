const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('img', function(){ //imgっていたタスクしてねー
    gulp.src('img/*.+(jpg|png|)') 
        .pipe(imagemin()) //imageminの処理してね
        .pipe(gulp.dest('./dist/img')); //できたのdistフォルダに置いといて
})

gulp.task('default', ['img']);