/*!
 * name: @jswork/next-html2text
 * description: Strip html to text for next.
 * homepage: https://github.com/afeiship/next-html2text
 * version: 1.0.1
 * date: 2021-03-05 10:33:55
 * license: MIT
 */

(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var HTML_RE = /<\/?[a-z][\s\S]*>/i;

  nx.html2text = function (inHtml) {
    if (!inHtml) return inHtml;
    var tmp = document.createElement('DIV');
    tmp.innerHTML = inHtml;
    var result = tmp.textContent || tmp.innerText || '';
    return HTML_RE.test(result) ? nx.html2text(result) : result;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.html2text;
  }
})();
