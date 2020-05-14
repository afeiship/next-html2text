# next-html2text
> Strip html to text for next.

## installation
```bash
npm install -S @feizheng/next-html2text
```

## usage
```js
import '@feizheng/next-html2text';

nx.html2text("<p>we&#x27;d|better|not.|I|don&#x27;t|want|to|miss|the|train|yeah!</p>")
// we'd|better|not.|I|don't|want|to|miss|the|train|.
```

## resources
- https://stackoverflow.com/questions/822452/strip-html-from-text-javascript
