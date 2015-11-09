# StickyHeaders-for-Framer
A module to enable sticky headers within Framer's Scroll Components.


## Examples
- [Demo 1](http://share.framerjs.com/rkgf7ahv74zb/)
- [Demo 2](http://share.framerjs.com/fzvyfeal4l3r/)

## Installation

1. Create a new Framer project.
2. Download `StickyHeaders.coffee` and put it in the `modules` folder.
3. Add this line at the top of your document.
```coffeescript
{StickyHeaders} = require "StickyHeaders"
```

## How to use

Demo1 and Demo2 show a list of conference talks grouped by their starting time. The starting times are the sticky headers.

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


3 - Add the content to your ScrollComponent as you normally do.
For this demo, I'm using a .png with the list of talks.
```coffeescript
list = new Layer
	width: Screen.width
	height: 4750
	image: 'images/list.png'
	superLayer: conferenceTalks.content
```


4 - Create your sticky headers as sublayers of the content, in this case `list`.
Make sure to add `name: 'StickyHeader'`, this tells the module that this is a sticky header.
```coffeescript
header1 = new Layer
	y: 175, width: Screen.width, height: 140
	name: 'StickyHeader'
	superLayer: list
```
Since this is a `Layer` as any other, you can use it as a superLayer and add everything you need in it.


5 - Enable sticky headers for your main Scroll Component, in this case `conferenceTalks`.
```coffeescript
StickyHeaders.enableFor conferenceTalks
```


## Planning your prototype
Make sure to plan ahead what you need to show in your prototype. My workflow is:
- Design a complete scroll with headers and list items in Sketch or Photoshop.
- Export the scroll as a .png **without** the headers (just group the headers in one layer and turn it off).
- Put the .png in the `images` folder inside the Framer projet.
- Install this module.
- Refer to the design comp to get the values needed to create the headers.

[Medium - Unlocking ideas with Framer Studio](https://medium.com/@72mena/unlocking-ideas-with-framer-studio-790b5e9c249f) - See this module in action in one of the projects I was working on.

##Contact
Twitter: [@72mena](http://twitter.com/72mena)
