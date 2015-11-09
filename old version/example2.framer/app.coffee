# by: @72mena

# Import Module
{StickyHeaders} = require "StickyHeaders"

# Headers data
dataSet = [
	{"y":50,  "labelText":"28", "subLabelText":"June"}, 
	{"y":220, "labelText":"29", "subLabelText":"June"},
	{"y":900, "labelText":"30", "subLabelText":"June"},
	{"y":1570, "labelText":"1", "subLabelText":"July"},
	{"y":2100, "labelText":"2", "subLabelText":"July"},
	{"y":2500, "labelText":"3", "subLabelText":"July"},
	{"y":3000, "labelText":"4", "subLabelText":"July"},
	{"y":3500, "labelText":"5", "subLabelText":"July"}
]

# Style for main Label
mainLabel =
	color: "#1D1D26"
	fontFamily: "Verdana"
	fontWeight: "700"
	fontSize: "32px"
	textAlign: "center"
	marginLeft: "0"
	backgroundColor: "transparent"
	height: "80px"
	width: "750px"
	paddingTop: "6px"
	borderBottom: "1px solid #CCC"
	borderTop: "1px solid #CCC"

# Style for sublabel
subLabel =
	color: "gray"
	fontFamily: "Verdana"
	fontWeight: "500"
	fontSize: "28px"
	marginTop: "12px"
	textAlign: "center"
	backgroundColor: "transparent"
	height: "40px"
	width: "750px"

# Setup
myScroll = new StickyHeaders
	data: dataSet
	labelStyle: mainLabel
	subLabelStyle: subLabel
	headerHeight: 80
	#scrollImage: "path to image"
	scrollHeight: 4000