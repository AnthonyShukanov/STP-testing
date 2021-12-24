const report = require('vue-cucumber-html-reporter');
exports.config = {
    reporters: [
        // Like this with the default options, see the options below
        'cucumberjs-json',

        // OR like this if you want to set the folder and the language
        [ 'cucumberjs-json', {
                jsonFolder: './reports',
                language: 'ru',
            },
        ],
    ],
    specs: [
        './features/**/*.feature'
    ],
    // Patterns to exclude.
    exclude: [],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['devtools'],
    framework: 'cucumber',
        cucumberOpts: {
        require: ['./features/step-definitions/*.js'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        snippets: true,
        source: true,
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    },
    afterSession() {
        report.generate({
            jsonDir: './reports',
            reportPath: './reports',
            metadata:{
                browser: {
                    name: 'chrome',
                    version: '60'
                },
                device: 'Local test machine',
                platform: {
                    name: 'ubuntu',
                    version: '16.04'
                }
            },
            customData: {
                title: 'Run info',
                data: [
                    {label: 'Project', value: 'Custom project'},
                    {label: 'Release', value: '1.2.3'},
                    {label: 'Cycle', value: 'B11221.34321'},
                    {label: 'Execution Start Time', value: 'Nov 19th 2017, 02:31 PM EST'},
                    {label: 'Execution End Time', value: 'Nov 19th 2017, 02:56 PM EST'}
                ]
            }
        })
    } 
}
