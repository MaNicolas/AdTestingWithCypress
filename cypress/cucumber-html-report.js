var reporter = require('cucumber-html-reporter');
var options = {
    theme: "bootstrap",
    jsonFile: "cypress/cucumber-json",
    output: "./reports/cucumber-htmlreport.html",
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    metadata: {
        "App Version": "0.3.2",
        "Test Environment": "STAGING",
        "Browser": "Chrome  90.0.4430.212",
        "Platform": "Windows 10",
        "Parallel": "Scenarios",
        "Executed": "Remote"
    }
};

reporter.generate(options);