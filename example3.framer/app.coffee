# Import Module
{StickyStamps} = require "StickyStamps"

#Stamps data
dataSet = [
	{"y":50,  "labelText":"28", "subLabelText":"June"}, 
	{"y":320, "labelText":"29", "subLabelText":"June"},
	{"y":900, "labelText":"30", "subLabelText":"June"},
	{"y":1570, "labelText":"1", "subLabelText":"July"},
	{"y":2100, "labelText":"2", "subLabelText":"July"},
	{"y":2500, "labelText":"3", "subLabelText":"July"},
	{"y":3000, "labelText":"4", "subLabelText":"July"},
	{"y":3500, "labelText":"5", "subLabelText":"July"}
]

#Style for main Label
mainLabel =
	color: "#FFF"
	fontFamily: "Verdana"
	fontWeight: "400"
	fontSize: "60px"
	textAlign: "center"
	marginLeft: "40px"
	backgroundColor: "skyblue"
	height: "220px"
	width: "220px"
	paddingTop: "85px"
	borderRadius: "50%"

#Style for sublabel
subLabel =
	color: "yellow"
	fontFamily: "Verdana"
	fontWeight: "800"
	fontSize: "24px"
	marginTop: "24px"
	textAlign: "center"
	backgroundColor: "transparent"
	height: "40px"
	width: "220px"

#Setup
myScroll = new StickyStamps
	data: dataSet
	labelStyle: mainLabel
	subLabelStyle: subLabel
	stampHeight: 220
	#scrollImage: "path to image"
	scrollHeight: 4000
