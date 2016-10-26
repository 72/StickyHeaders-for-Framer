# StickyHeaders for Framer
A module to enable sticky headers within Framer's Scroll Components.


## Examples
- [Demo 1](http://share.framerjs.com/fli8fyvsn2eb/)
- [Demo 2](http://share.framerjs.com/ry0x8mpmnbsn/)

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
	parent: conferenceTalks.content
```


4 - Create your sticky headers ***and set their parent to be the Scroll Component***.
Make sure to add the attribute `name: 'StickyHeader'`, this tells the module that this is a sticky header.
```coffeescript
header1 = new Layer
	y: 175, width: Screen.width, height: 140
	name: 'StickyHeader'
	parent: conferenceTalks.content
```
Since this is a `Layer` as any other, you can use it as a parent and add everything you need inside it.


5 - Enable sticky headers for your main Scroll Component, in this case `conferenceTalks`.
```coffeescript
StickyHeaders.enableFor(conferenceTalks)
```


Optional - You can pass a second parameter to set a custom top margin for the sticky headers. By default the value is 0.
```coffeescript
StickyHeaders.enableFor(conferenceTalks, 100)
```


## Planning your prototype
Make sure to plan ahead what you need to show in your prototype. My workflow is:
- Design a complete view with headers and list items in Sketch or Photoshop.
- Export the comp as a .png **without** the headers (just group the headers in one layer and turn it off). Export each header apart from the list.
- Put the .png in the `images` folder inside the Framer projet.
- Install this module.
- Create the headers in Framer. These could be simple layers with the .png linked to the `image` attribute.

[Medium - Unlocking ideas with Framer Studio](https://medium.com/@72mena/unlocking-ideas-with-framer-studio-790b5e9c249f) - See this module in action in one of the projects I was working on.

##Contact
Twitter: [@72mena](http://twitter.com/72mena)
