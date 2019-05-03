import { Config } from 'protractor';

export const config: Config = {
  framework: 'jasmine',
  specs: [ '../test/google.spec.ts' ],
  seleniumAddress: 'http://localhost:4444/wd/hub'
};
