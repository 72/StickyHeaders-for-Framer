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
	height: 4000
	image: 'images/list-day1.png'
	superLayer: conferenceTalks.content

# 4. Create Headers (name: 'StickyHeader')
header1 = new Layer
	y: 206, width: 150, height: 350
	html: "12:00pm - Sticky Headers can contain anything"
	backgroundColor: '#00AA00'
	name: 'StickyHeader'
	superLayer: list

header2 = new Layer
	y: 914, width: 150, height: 210
	html: "1:00pm - You can set custom height values"
	backgroundColor: '#AA00AA'
	name: 'StickyHeader'
	superLayer: list

header3 = new Layer
	y: 1566, width: 150, height: 100
	html: "1:30pm"
	backgroundColor: '#33DD20'
	name: 'StickyHeader'
	superLayer: list

header4 = new Layer
	y: 2102, width: 130, height: 200
	html: "2:00pm - You can set custom Y values"
	backgroundColor: '#00AA00'
	name: 'StickyHeader'
	superLayer: list

header5 = new Layer
	y: 2641, width: 160, height: 160
	borderRadius: 80
	backgroundColor: '#AA00AA'
	name: 'StickyHeader'
	superLayer: list

header6 = new Layer
	y: 3175, width: 130, height: 100
	html: "4:00pm"
	backgroundColor: '#00AA00'
	name: 'StickyHeader'
	superLayer: list	

# 5. Enable StickyHeaders for this Scroll Component 
StickyHeaders.enableFor conferenceTalks