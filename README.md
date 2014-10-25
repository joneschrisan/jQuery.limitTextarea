# jQuery.limitTextarea
Jquery plugin to limit the chacters within a text area.

## Copywrite And Licence
The MIT License (MIT)

Copyright (c) 2014 Chris 'CJ' Jones

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Files:
jQuery.limitTextarea.css

jQuery.limitTextarea.js

## Required Files:
jQuery.limitTextarea.css

jQuery.limitTextarea.js

## Usage:
```javascript
jQuery(elemnt).limitTextarea(options);
```
```html
<textarea id="id" data-options></textarea>
```


### Required:
**element**: The element(s) within the page to add the limit to.

**id**: The element id.

### Optional:
**options**: Any of the options specified below or editable methods.

**data-options**: Any of the data options specified below.


##Example:
```html
<link rel="stylesheet" type="text/css" media="screen" href="jQuery.limitTextarea.css" />

<script type="text/javascript" src="jQuery.limitTextarea.js"></script>
<script type="text/javascript">
    jQuery(docuemnt).ready(function() {
        jQuery('#myTextarea').limitTextarea();
    });
</script>
```

<textarea id="myTextarea" class="limitTextarea" data-limitTextarea-limit="10"></textarea>

##Options:
**limit**: (*Int*) The maximum limit of characters for the text area

##Data Options:
**data-limitTextarea-limit**: *(Int)* The maximum limit of characters for the text area.

**data-limitTextarea-characterCount**: *(Int)* The current charactor count.

**data-limitTextarea-isEmpty**: *(Bool)* True if the text area is empty false if not.

**data-limitTextarea-limitReached**: *(Bool)* True if the limt has been reached false if not.


##Editable Methods:
**afterInit**: Fired after *init* is called.

**afterKeyDown**: Fired after *onKeyDown* fires.

**afterKeyUp**: Fired after *onKeyUp* fires.

**afterMouseDown**: Fired after *onMouseDown* fires.

**afterMouseUp**: Fired after *onMouseUp* fires.

**afterContextMenu**: Fired after *onContextMenu* fires.

**afterCut**: Fired after *onCut* fires.

**afterPaste**: Fired after *onPaste* fires.

**afterEmpty**: Fired after *onEmpty* fires.

**afterNotEmpty**: Fired after *onNotEmpty* fires.

**afterWithinLimit**: Fired after *onWithinLimit* fires.

**afterReachLimit**: Fired after *onReachLimit* fires.

##Public Methods:
**init**: Called on object create. Should only be called again to reset the object.

**drawCounter**: Internal method, called by init. Draws the counter mesasge text.

**addStyles**: Internal method, called by init. Adds classed to the drawn elements.

**updateCounter**: used to update the value of the counter.


**characterCount([*Int value*])**: Sets or gets the current character count. (Sets: data-limitTextarea-characterCount)

**limit([*Int value*])**: Sets or gets the maximum limit. (Sets: data-limitTextarea-limit)

##Handeled Events:
**onKeyDown**: Fired when a keyboard button is depressed. *Calls characterCount* *Fires afterKeyDown*

**onKeyUp**: Fired when a keyboard button is released. *Calls characterCount* *Fires afterKeyUp*

**onMouseDown**: Fired when a mouse button is depressed. *Calls characterCount* *Fires afterMouseDown*

**onMouseUp**: Fired when a mouse button is depressed. *Calls characterCount* *Fires afterMouseUp*

**onContextMenu**: Fired when the context menu is opened. *Calls characterCount* *Fires afterContextMenu*

**onCut**: Fired when a selection is cut. *Calls characterCount* *Fires afterCut*

**onPaste**: Fired when something is pasted. *Calls characterCount* *Fires afterPaste*

**onEmpty**: Fired when the text area is empty and characterCount is called. *Fires afterEmpty*

**onNotEmpty**: Fired when the text area is not empty and characterCount is called. *Fires afterNotEmpty*

**onWithinLimit**: Fired when the limit has not been reached and characterCount is called. *Fires afterWithinLimit*

**onReachLimit**: Fired when the limit has been resched and characterCount is called. *Fires afterReachLimit*
