var browserSync = require('browser-sync');
var gulp = require('gulp');
var syncSrc= ["*.html","*.js"];
gulp.task('browser-sync',function (){
    browserSync.init({
        server:{
            baseDir:'./'
        }
    })
})
gulp.task("watch",["browser-sync"], function(){
gulp.watch(syncSrc).on("change",browserSync.reload);
});