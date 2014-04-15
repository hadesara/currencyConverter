module.exports = function(config) {
    config.set({
        basePath: '../',

        files: [
            'app/client/lib/angular.min.js',
            'app/client/app.js',
            'app/client/indexCtrl.js'
            // ,
            // 'app/lib/angular/angular.js',
            // 'app/lib/angular/angular-*.js',
            // 'app/js/**/*.js',
            // 'test/lib/recaptcha/recaptcha_ajax.js',
            // 'test/lib/angular/angular-mocks.js',
            // 'test/unit/**/*.js'
        ],

        exclude: [
            //'app/lib/angular/angular-loader.js',
            'app/client/lib/angular/*.min.js'
            //,'app/lib/angular/angular-scenario.js'
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['PhantomJS'],

        plugins: [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-phantomjs-launcher'
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }

    })
}