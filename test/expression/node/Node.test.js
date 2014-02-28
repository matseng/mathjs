// test Node
var assert = require('assert'),
    approx = require('../../../tools/approx'),
    math = require('../../../index')(),
    Node = require('../../../lib/expression/node/Node');

describe('Node', function() {

  it ('should create a Node', function () {
    var n = new Node();
    assert(n instanceof Node);
  });

  it ('should find a Node', function () {
    var n = new Node();

    assert.deepEqual(n.find(), [n]);
    assert.deepEqual(n.find({type: Node}), [n]);
    assert.deepEqual(n.find({type: Date}), []);
  });

  it ('should match a Node when not providing a filter', function () {
    var node = new Node();
    assert.equal(node.match(), true);
  });

  it ('should stringify a Node', function () {
    var node = new Node();
    assert.equal(node.toString(), '');
  });

  it ('should throw an error in case of wrong arguments for compile', function () {
    var node = new Node();
    assert.throws(function () {
      node.compile()
    }, /Object expected/);
  });

  it ('should throw an error when compiling an abstract node', function () {
    var node = new Node();
    assert.throws(function () {
      node.compile(math)
    }, /Cannot compile a Node interface/);
  });

  it ('should match a node by its type', function () {
    var node = new Node();

    assert.equal(node.match(), true);
    assert.equal(node.match({type: Node}), true);
  });

  it ('should match a node by its properties', function () {
    var node = new Node();
    node.a = 2;
    node.b = 'c';

    assert.equal(node.match(), true);
    assert.equal(node.match({type: Node}), true);
    assert.equal(node.match({type: Date}), false);
    assert.equal(node.match({properties: {a: 2}}), true);
    assert.equal(node.match({properties: {a: 3}}), false);
    assert.equal(node.match({properties: {a: 2, b: 'c'}}), true);
    assert.equal(node.match({properties: {a: 2, b: 'd'}}), false);
    assert.equal(node.match({properties: {b: 'c'}}), true);
  });

  it ('should ignore inherited fields when matching', function () {
    Object.prototype.xyz = 123;
    var node = new Node();
    node.xyz = 'something else';

    var filter = {
      properties: {}
    };

    assert.equal(filter.xyz, 123);
    assert.equal(node.xyz, 'something else');
    assert.equal(node.match(filter), true);

    delete Object.prototype.xyz;
  });

});