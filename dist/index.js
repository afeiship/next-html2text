/*!
 * name: @jswork/next-html2text
 * description: Strip html to text for next.
 * homepage: https://github.com/afeiship/next-html2text
 * version: 1.0.0
 * date: 2021-02-01 10:32:38
 * license: MIT
 */

(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.html2text = function (inHtml) {
    if (!inHtml) return inHtml;
    var tmp = document.createElement('DIV');
    tmp.innerHTML = inHtml;
    return tmp.textContent || tmp.innerText || '';
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.html2text;
  }
})();
