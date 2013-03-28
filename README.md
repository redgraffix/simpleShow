simpleShow
==========

Very simple light weight jquery light box for images only

Usage
=====
This plug-in takes the link inside of an anchor tag with the class of ```.viewThumb``` and displays it as a lightbox image. It only works with image files, no options, no frills.
Css file styles how the lightbox is displayed. the anchor tags, can be styled however needed. The ```href``` needs to point to the image location. Also a title needs to be included on the anchor tag, the plug-in pulls the title and displays it as part of the lightbox.

Structure
=========
The Html structure should look something like this
```<a class="viewThumb" href="yourImageURL.jpg" title="text displayed at top of lightbox">anchor text</a>```
include the css to style simpleShow and the js file to make it work.
