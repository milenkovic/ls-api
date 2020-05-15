import Jasmine from 'jasmine';

const jasmine = new Jasmine(null);

// Set location of test files
jasmine.loadConfig({
    random: true,
    spec_dir: 'tests',
    spec_files: [
        './**/*.test.ts',
    ],
    stopSpecOnExpectationFailure: false,
});

jasmine.execute();
