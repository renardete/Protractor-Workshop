"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const reporter_1 = require("./helpers/reporter");
exports.config = {
    framework: 'jasmine',
    specs: ['../test/google.spec.js'],
    SELENIUM_PROMISE_MANAGER: false,
    onPrepare: () => {
        protractor_1.browser.ignoreSynchronization = true;
        reporter_1.reporter();
    },
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ['--headless', '--disable-gpu']
        }
    }
};
//# sourceMappingURL=headless.config.js.map