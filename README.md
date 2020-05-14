# next-html2text
> Strip html to text for next.

## installation
```bash
npm install -S @feizheng/next-html2text
```

## usage
```js
import '@feizheng/next-html2text';

nx.html2text("<p>we&#x27;d|better|not.|I|don&#x27;t|want|to|miss|the|train|.</p>")
// we'd|better|not.|I|don't|want|to|miss|the|train|.
```

## resources
- https://stackoverflow.com/questions/822452/strip-html-from-text-javascript
- https://ourcodeworld.com/articles/read/376/how-to-strip-html-from-a-string-extract-only-text-content-in-javascript
