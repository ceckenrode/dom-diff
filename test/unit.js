const reqTests = require.context('./unit', true, /^.*\.js$/);
reqTests.keys().map(reqTests);
