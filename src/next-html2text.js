(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  nx.html2text = function (inHtml) {
    if(!inHtml) return inHtml;
    var tmp = document.createElement("DIV");
    tmp.innerHTML = inHtml;
    return tmp.textContent || tmp.innerText || "";
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.html2text;
  }
})();
