// Karma configuration
// Generated on Thu Nov 12 2015 09:48:48 GMT-0500 (COT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [

      'src/main/webapp/bower_components/angular/angular.js',
      'src/main/webapp/bower_components/angular-animate/angular-animate.js',
      'src/main/webapp/bower_components/angular-aria/angular-aria.js',
      'src/main/webapp/bower_components/angular-material-icons/angular-material-icons.js',
      'src/main/webapp/bower_components/angular-messages/angular-messages.js',
      'src/main/webapp/bower_components/angular-mocks/angular-mocks.js',
      'src/main/webapp/bower_components/angular-route/angular-route.js',
      'src/main/webapp/bower_components/angular-sanitize/angular-sanitize.js',
      'src/main/webapp/bower_components/angular-touch/angular-touch.js',
      'src/main/webapp/bower_components/angular-translate/angular-translate.js',
      'src/main/webapp/bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
      'src/main/webapp/bower_components/angular-ui-router/release/angular-ui-router.js',

      'src/main/webapp/scripts/app.js',
      'src/main/webapp/main.controller.js',
      'src/main/webapp/routes.js',
      'src/main/webapp/translations.js',
      'src/main/webapp/scripts/**/*.js'
      
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: { 
      'src/main/webapp/scripts/**/*.controller.js':['coverage'],
      'src/main/webapp/scripts/**/*.service.js':['coverage']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'html', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity
  })
}
