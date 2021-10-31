var gulp = require("gulp");
// var shell = require('gulp-shell');
//
// // This compiles new binary with source change
// gulp.task("install-binary", shell.task([
//     'go install /home/gauravmahal/git_repos/Learn-New-Skills/gorestful/ch1/romanserver'
// ]));
//
// // Second argument tells install-binary is a deapendency for restart-supervisor
// gulp.task("restart-supervisor", ["install-binary"], shell.task([
//     'supervisorctl restart myserver'
// ]))
//
// gulp.task('watch', function() {
//     // Watch the source code for all changes
//     gulp.watch("*", ['install-binary', 'restart-supervisor']);
// });
//
// gulp.task('default', ['watch']);
//

const { watch, series } = require('gulp');
const shell = require('gulp-shell');

function restartSupervisor(cb) {
    shell('echo Hello !! ')
    // place code for your default task here
    // shell.task([
    //     'supervisorctl restart myserver'
    // ]);
    cb();
}


function installBinary(cb) {
    // place code for your default task here
    // shell.task([
    //     'go install /home/gauravmahal/git_repos/Learn-New-Skills/gorestful/ch1/romanserver'
    // ]);
    cb();
}

gulp.task('greet', shell.task('echo Hello, World!'))

exports.default = function () {
    watch('romanserver/*', series(installBinary, restartSupervisor));
};
