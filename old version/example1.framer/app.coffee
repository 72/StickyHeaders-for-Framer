# by: @72mena

# Import Module
{StickyHeaders} = require "StickyHeaders"

#Headers data
dataSet = [
	{"y":43,  "labelText":"9:30", "subLabelText":"AM"}, 
	{"y":206, "labelText":"12:00", "subLabelText":"PM"},
	{"y":914, "labelText":"1:00", "subLabelText":"PM"},
	{"y":1566, "labelText":"1:30", "subLabelText":"PM"},
	{"y":2102, "labelText":"2:00", "subLabelText":"PM"},
	{"y":2478, "labelText":"2:30", "subLabelText":"PM"},
	{"y":2641, "labelText":"3:00", "subLabelText":"PM"},
	{"y":3175, "labelText":"4:00", "subLabelText":"PM"}
]

#Style for main Label
mainLabel =
	color: "#1D1D26"
	fontFamily: "Avenir"
	fontWeight: "500"
	fontSize: "32px"
	textAlign: "left"
	marginLeft: "40px"
	# Set this value to "red" to notice the transitions.
	backgroundColor: "transparent"
	# This value is for styling purposes only. The "height" value that affects the header transition is "headerHeight", commented in 'myScroll'
	height: "100px" 
	width: "130px"

#Style for sublabel
subLabel =
	color: "gray"
	fontFamily: "Avenir"
	fontWeight: "500"
	fontSize: "28px"
	marginTop: "12px"
	textAlign: "left"
	backgroundColor: "transparent"

#Setup
myScroll = new StickyHeaders
	data: dataSet
	labelStyle: mainLabel
	subLabelStyle: subLabel
	# This value affects the headers transition. Defaults to 100.
	# headerHeight: 100
	scrollImage: "images/list-day1.png"
	scrollHeight: 4000
