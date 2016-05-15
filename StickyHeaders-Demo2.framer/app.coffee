# 1. Import module
{StickyHeaders} = require 'StickyHeaders'

# 2. Create Scroll Component
conferenceTalks = new ScrollComponent
	width: Screen.width
	height: Screen.height
	scrollHorizontal: false
	backgroundColor: 'white'

# 3. Create content of Scroll Component
list = new Layer
	width: Screen.width
	height: 4750
	image: 'images/list.png'
	parent: conferenceTalks.content

# 4. Create Headers (name: 'StickyHeader')
header1 = new Layer
	y: 175, width: Screen.width, height: 140
	html: "12:00pm - Sticky Headers can contain anything"
	backgroundColor: '#00AA00'
	name: 'StickyHeader'
	parent: list

header2 = new Layer
	y: 1000, width: Screen.width, height: 70
	html: "1:00pm - You can set custom height values"
	backgroundColor: '#AA00AA'
	name: 'StickyHeader'
	parent: list

header3 = new Layer
	y: 1775, width: Screen.width, height: 120
	html: "1:30pm"
	backgroundColor: '#33DD20'
	name: 'StickyHeader'
	parent: list

header4 = new Layer
	y: 2432, width: Screen.width, height: 120
	html: "2:00pm - You can set custom Y values"
	backgroundColor: '#00AA00'
	name: 'StickyHeader'
	parent: list

header5 = new Layer
	y: 3090, width: Screen.width, height: 120
	html: "3:00pm"
	backgroundColor: '#AA00AA'
	name: 'StickyHeader'
	parent: list

header6 = new Layer
	y: 3745, width: Screen.width, height: 120
	html: "4:00pm"
	backgroundColor: '#00AA00'
	name: 'StickyHeader'
	parent: list	

# 5. Enable StickyHeaders for this Scroll Component 
StickyHeaders.enableFor conferenceTalks
