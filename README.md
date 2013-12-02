# getClass Name Example #

```html
<div id="myelement" class="test r-border active"></div>
```

```javascript
$('myelement').getClassName(0); // return test
$('myelement').getClassName(1); // return r-border
$('myelement').getClassName(2); // return active

$('myelement').getClassName('r-'); // return r-border
```
