# StickyHeaders-for-Framer
A module to create scroll components with sticky headers in Framer.


## Examples
- [Example 1](http://share.framerjs.com/v20yzoofy9g7/) - Prototype with `scrollImage`.
- [Example 2](http://share.framerjs.com/kh5hd0tba1qb/) - Prototype without `scrollImage`, (focus on sticky headers).
- [Example 3](http://share.framerjs.com/o3wndnnbnlqy/) - Prototype without `scrollImage`, (focus on sticky headers).

## Installation

1. Create a new Framer project.
2. Download `StickyHeaders.coffee` and put it in the `modules` folder.
3. Add this line at the top of your document.
```coffeescript
{StickyHeaders} = require "StickyHeaders"
```

## How to use

This is the basic usage to create a new scroll with sticky headers.

```coffeescript
myScroll = new StickyHeaders
	data: dataSet
	scrollImage: "images/list-day1.png"
	scrollHeight: 4000
```

### About basic attributes
Let's explain what each attribute is for, and what type of data should be passed on.

- **data:** Expects an **array** with the info needed to create the headers. Each item in the array must be structured like this:
  - y: Header's initial Y position. (Get this value from your design comp).
  - labelText: Content for header's main label.
  - subLabelText: Content for header's sublabel. If you don't need a subLabel, add it to the array but leave its value empty.
```coffeescript
dataSet = [
	{"y":50,  "labelText":"9:30", "subLabelText":"AM"},
	{"y":210, "labelText":"12:00", "subLabelText":"PM"},
	#and so on...
]
```

- **scrollImage:** This is the **path** to your scroll image. Export the image from your design comp **without** the headers (these will be created dynamically from the array).

- **scrollHeight:** This **number** is the height of your scroll image. The module uses this value to determine the constrains of the scroll component.

### About extra attributes
This is an example of a more robust usage for this module. Here we are using 3 new attributes: labelStyle, subLabelStyle and headerHeight.

```coffeescript
myScroll = new StickyHeaders
	data: dataSet
	labelStyle: mainLabel
	subLabelStyle: subLabel
	headerHeight: 220
	scrollImage: "images/list-day1.png"
	scrollHeight:4000
```

- **labelStyle & subLabelStyle:** Use these attributes to set the style of the headers. Replicate the style from your design with CSS.
```coffeescript
mainLabel =
	backgroundColor: "transparent"
	color: "#000"
	fontFamily: "Avenir"
	fontSize: "32px"
	fontWeight: "500"
	textAlign: "left"
	marginLeft: "40px"
	height: "100px"
	width: "130px"
subLabel =
	backgroundColor: "transparent"
	color: "gray"
	fontFamily: "Avenir"
	fontSize: "28px"
	fontWeight: "500"
	marginTop: "12px"
	textAlign: "left"
```

- **headerHeight:** Even if you use a `height` value in your `mainLabel` styleset, the **headerHeight** attribute is the one the module uses as a reference to determine the "collision" between two headers. (Defaults to 100)


## Planning your prototype
Make sure to plan ahead what you need to show in your prototype. My workflow is:
- Design a complete scroll with stamps and list items in Sketch or Photoshop.
- Export the scroll as a .png **without** the headers (just group the headers in one layer and turn it off).
- Put the .png in the `images` folder inside the Framer projet.
- Install this module.
- Refer to the design comp to get the values needed to create the headers: array for `data` (y, labelText, subLabelText) and styles (CSS) for `labelStyle` and `subLabelStyle`.

[Medium - Unlocking ideas with Framer Studio](https://medium.com/@72mena/unlocking-ideas-with-framer-studio-790b5e9c249f) - See this module in action in one of the projects I was working on.

##Contact
Twitter: [@72mena](http://twitter.com/72mena)
