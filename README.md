# stickyStamps-Framer
A Framer module to create scroll components with sticky stamps.


## How to use in Framer Studio

1. Create a new Framer project.
2. Download `ScrollWithStickyStamps.coffee` and put it in the `modules` folder.
3. Add this line at the top of your document.
```coffeescript
{ScrollWithStickyStamps} = require "ScrollWithStickyStamps"
```

## Examples

### Usage
This is the basic usage to create a new scroll with sticky stamps. Note that these 3 attributes are **required**: data, image and imageHeight.

```coffeescript
myScroll = new ScrollWithStickyStamps
	data: dataSet
	image: "images/list-day1.png"
	imageHeight:4000
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

- **image:** This is the **path** to your scroll background image. Export the scroll from your design comp **without** the stamps (these are being created dynamically from the array).

- **imageHeight:** This **number** is the height of the scroll image. The module uses this value to determine the constrains of the scroll component.

### About extra attributes
This is an example of a more powerful usage for this module. Here we are using 3 new attributes: labelStyle, subLabelStyle and stampHeight.

```coffeescript
myScroll = new ScrollWithStickyStamps
	data: dataSet
	labelStyle: mainLabel
	subLabelStyle: subLabel
	stampHeight: 220
	image: "images/list-day1.png"
	imageHeight:4000
```

- **labelStyle & subLabelStyle:** These stylesets are very important to bring up to life your prototype. Replicate the stamp's style from your design comp with CSS.
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

- **stampHeight:** Although you might be using a `height` value in your `mainLabel` styleset, the **stampHeight** attribute is the one the module uses as a reference to determine the "collision" between two stamps. (Defaults to 100)

##wip
