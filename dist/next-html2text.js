/*!
 * name: @feizheng/next-html2text
 * description: Strip html to text for next.
 * homepage: https://github.com/afeiship/next-html2text
 * version: 1.0.0
 * date: 2020-05-14T08:50:57.741Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  nx.html2text = function (inHtml) {
    var tmp = document.createElement("DIV");
    tmp.innerHTML = inHtml;
    return tmp.textContent || tmp.innerText || "";
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.html2text;
  }
})();

//# sourceMappingURL=next-html2text.js.map
