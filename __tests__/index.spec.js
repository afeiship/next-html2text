(function () {
  require('../src');

  describe('api.basic test', () => {
    test('shoud get text when html exist', function () {
      var html = '<p>we&#x27;d|better|not.|I|don&#x27;t|want|to|miss|the|train|.</p>';
      expect(nx.html2text(html)).toBe(`we'd|better|not.|I|don't|want|to|miss|the|train|.`);
    });

    test('empty tag will get empty', function () {
      var html = '<p></p>';
      expect(nx.html2text(html)).toBe('');
    });

    test('shoud get html when html is empty', function () {
      var html = '';
      expect(nx.html2text(html)).toBe('');
    });
  });
})();
