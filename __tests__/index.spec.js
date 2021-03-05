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

    test('nested html should be text', () => {
      var html = `<p><span style="color:#abb2bf">&lt;</span><span style="color:#e06c75">p</span><span style="color:#abb2bf">&gt;</span><br/><span style="color:#abb2bf">    &lt;</span><span style="color:#e06c75">span</span> <span style="color:#d19a66">style</span><span style="color:#abb2bf">=</span><span style="color:#98c379">&quot;color: red&quot;</span><span style="color:#abb2bf">&gt;absdfds&lt;/</span><span style="color:#e06c75">span</span><span style="color:#abb2bf">&gt;</span><br/><span style="color:#abb2bf">    &lt;</span><span style="color:#e06c75">em</span><span style="color:#abb2bf">&gt;asdfldsfj&lt;/</span><span style="color:#e06c75">em</span><span style="color:#abb2bf">&gt;</span><br/><span style="color:#abb2bf">    &lt;</span><span style="color:#e06c75">em</span><span style="color:#abb2bf">&gt;asdfldsfj&lt;/</span><span style="color:#e06c75">em</span><span style="color:#abb2bf">&gt;</span><br/><span style="color:#abb2bf">&lt;/</span><span style="color:#e06c75">p</span><span style="color:#abb2bf">&gt;</span></p>`;

      expect(nx.html2text(html)).toBe('    absdfds    asdfldsfj    asdfldsfj');
    });
  });
})();
