var test = require("tap").test;

var helmsman = require('..');

var cli = helmsman({ prefix: 'testcommand', localFolder: './bin'});

test('construct an instance of a helmsman', function(t){
  t.plan(3);

  t.equal(cli.localFolder.substr(-8), 'test/bin', 'The localFolder is set');
  t.equal(cli.prefix, 'testcommand-', 'The prefix is properly set');
  t.equal(cli.availableCommands.subcommand.description, 'A test', 'A subcommand\'s meta data is loaded');
});

test('description', function(t) {
  t.plan(1);
  t.ok(cli.parse(), 'Everything parses without error');
});