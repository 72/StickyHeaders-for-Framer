# StickyStamps-for-Framer
A Framer module to create scroll components with sticky stamps.


## How to use in Framer Studio

1. Create a new Framer project.
2. Download `StickyStamps.coffee` and put it in the `modules` folder.
3. Add this line at the top of your document.
```coffeescript
{StickyStamps} = require "StickyStamps"
```

## Examples

### Usage
This is the basic usage to create a new scroll with sticky stamps. Note that these 3 attributes are **required**: data, scrollImage and scrollHeight.

```coffeescript
myScroll = new StickyStamps
	data: dataSet
	scrollImage: "images/list-day1.png"
	scrollHeight:4000
```

### About required attributes
Let's explain what each attribute is for, and what type of data should be passed on.

- **data:** Expects an **array** with the info needed to create the stamps. Each item in the array must be structured like this:
  - y: Stamp's initial Y position. (Get this value from your design comp).
  - labelText: Content for stamp's main label.
  - subLabelText: Content for stamp's sublabel.
```coffeescript
dataSet = [
	{"y":50,  "labelText":"9:30", "subLabelText":"AM"}, 
	{"y":210, "labelText":"12:00", "subLabelText":"PM"},
	#and so on...
]
```

- **scrollImage:** This is the **path** to your scroll image. Export the image from your design comp **without** the stamps (these will be created dynamically from the array).

- **scrollHeight:** This **number** is the height of your scroll image. The module uses this value to determine the constrains of the scroll component.

### About extra attributes
This is an example of a more robust usage for this module. Here we are using 3 new attributes: labelStyle, subLabelStyle and stampHeight.

```coffeescript
myScroll = new StickyStamps
	data: dataSet
	labelStyle: mainLabel
	subLabelStyle: subLabel
	stampHeight: 220
	scrollImage: "images/list-day1.png"
	scrollHeight:4000
```

- **labelStyle & subLabelStyle:** Use these attributes to set the style of the stamps. Replicate the style from your design with CSS.
```coffeescript
mainLabel =
	color: "#000"
	fontFamily: "Avenir"
	fontWeight: "500"
	fontSize: "32px"
	textAlign: "left"
	marginLeft: "40px"
	backgroundColor: "transparent"
	height: "100px"
	width: "130px"
subLabel =
	color: "gray"
	fontFamily: "Avenir"
	fontWeight: "500"
	fontSize: "28px"
	marginTop: "12px"
	textAlign: "left"
	backgroundColor: "transparent"
```

- **stampHeight:** Even if you use a `height` value in your `mainLabel` styleset, the **stampHeight** attribute is the one the module uses as a reference to determine the "collision" between two stamps. (Defaults to 100)


##Contact

Twitter: [@72mena](http://twitter.com/72mena)
