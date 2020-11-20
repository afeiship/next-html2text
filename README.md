# next-html2text
> Strip html to text for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-html2text
```

## usage
```js
import '@jswork/next-html2text';

nx.html2text("<p>we&#x27;d|better|not.|I|don&#x27;t|want|to|miss|the|train|.</p>")
// we'd|better|not.|I|don't|want|to|miss|the|train|.
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-html2text/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-html2text
[version-url]: https://npmjs.org/package/@jswork/next-html2text

[license-image]: https://img.shields.io/npm/l/@jswork/next-html2text
[license-url]: https://github.com/afeiship/next-html2text/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-html2text
[size-url]: https://github.com/afeiship/next-html2text/blob/master/dist/next-html2text.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-html2text
[download-url]: https://www.npmjs.com/package/@jswork/next-html2text
