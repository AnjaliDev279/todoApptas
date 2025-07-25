module.exports = function (config) {
config.set({
basePath: '',
frameworks: ['jasmine'],
// files: [
// 'https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js',
// 'https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular-mocks.js',
// 'app.js',
// 'tests/*.spec.js'
// ],
files: [
'node_modules/angular/angular.js',
'node_modules/angular-mocks/angular-mocks.js',
'app.js',
'tests/*.spec.js'
],
browsers: ['ChromeHeadless'],
singleRun: true
});
};