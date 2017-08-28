# Sticky headers for Framer
A Framer module to enable sticky headers within scroll components.

<a href='https://open.framermodules.com/Sticky Headers'>
    <img alt='Install with Framer Modules'
    src='https://www.framermodules.com/assets/badge@2x.png' width='160' height='40' /></a>


## Examples
- [Demo 1](https://framer.cloud/peGYM/)
- [Demo 2](https://framer.cloud/bgIIg/)

## Installation

1. Download `StickyHeaders.coffee` and put it in your `modules` folder.
2. Add this line at the top of your document.
```coffeescript
{StickyHeaders} = require "StickyHeaders"
```

## How to use

***Guide***

Demo 1 and Demo 2 show a list of conference talks grouped by their starting time. The headers for each group are sticky headers.

1 - Import the module.
```coffeescript
{StickyHeaders} = require "StickyHeaders"
```


2 - Create a Scroll Component as you normally do.
```coffeescript
conferenceTalks = new ScrollComponent
	width: Screen.width
	height: Screen.height
	scrollHorizontal: false
```


3 - Create the headers. **Set their parent to be the Scroll Component, and their name to be 'StickyHeader'**.
```coffeescript
header1 = new Layer
	y: 175, width: Screen.width, height: 140
	name: 'StickyHeader'
	parent: conferenceTalks.content
```
Since this is a `Layer` as any other, you can use it as a parent and nest inside anything you need.


4 - Enable the module for your scroll component.
```coffeescript
StickyHeaders.enableFor(conferenceTalks)
```


Optional - You can pass a second parameter to set a custom top margin for the sticky headers. By default the value is 0.
```coffeescript
StickyHeaders.enableFor(conferenceTalks, 100)
```


## Planning your prototype
Make sure to plan ahead what you need to show in your prototype. My workflow is:
- Design the view/list in Sketch or PS.
- Export the list as a .png **without** the headers.
- Export each header apart from the list.
- Create the scroll component in Framer and then the layers for each header.

[Medium - Unlocking ideas with Framer Studio](https://medium.com/@72mena/unlocking-ideas-with-framer-studio-790b5e9c249f) - This module has changed a lot from my initial exploration described in this article, but the recommendations I shared still hold. Give it a read if you have a chance.

I hope this module saves you some time on your projects.

## Contact
Twitter: [@72mena](http://twitter.com/72mena)
