const builder = require('../../public');

test('creates simple lambda', async () => {
  await builder.build({
    files: [],
    entrypoint: 'test.php',
    workPath: __dirname,
    config: {},
    meta: {},
  });
});
