import AllureJasmineReporter from 'allure-jasmine';

const reporter = new AllureJasmineReporter({
  resultsDir: 'allure-results/jest'
});

(jasmine as any).getEnv().addReporter(reporter);