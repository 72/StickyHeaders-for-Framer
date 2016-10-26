# 1. Import module
{StickyHeaders} = require 'StickyHeaders'

# 2. Create Scroll Component
conferenceTalks = new ScrollComponent
	width: Screen.width
	height: Screen.height
	scrollHorizontal: false
	backgroundColor: 'white'

###
# 3. Content of Scroll Component
###

# List image.
list = new Layer
	width: Screen.width
	height: 4750
	image: 'images/list.png'
	parent: conferenceTalks.content

# Create Sticky Headers. Notice name: 'StickyHeader'
header1 = new Layer
	y: 175, width: Screen.width, height: 140
	html: "12:00pm - Sticky Headers can contain anything"
	backgroundColor: "rgba(140,170,200,1)"
	name: 'StickyHeader'
	parent: conferenceTalks.content

header2 = new Layer
	y: 1000, width: Screen.width, height: 70
	html: "1:00pm - You can set custom height values"
	backgroundColor: "rgba(195,180,200,1)"
	name: 'StickyHeader'
	parent: conferenceTalks.content

header3 = new Layer
	y: 1775, width: Screen.width, height: 120
	html: "1:30pm"
	backgroundColor: "rgba(140,170,200,1)"
	name: 'StickyHeader'
	parent: conferenceTalks.content

header4 = new Layer
	y: 2432, width: Screen.width, height: 120
	html: "2:00pm - You can set custom Y values"
	backgroundColor: "rgba(195,180,200,1)"
	name: 'StickyHeader'
	parent: conferenceTalks.content

header5 = new Layer
	y: 3090, width: Screen.width, height: 120
	html: "3:00pm"
	backgroundColor: "rgba(140,170,200,1)"
	name: 'StickyHeader'
	parent: conferenceTalks.content

header6 = new Layer
	y: 3745, width: Screen.width, height: 120
	html: "4:00pm"
	backgroundColor: "rgba(195,180,200,1)"
	name: 'StickyHeader'
	parent: conferenceTalks.content

# Enable StickyHeaders for this Scroll Component.
StickyHeaders.enableFor(conferenceTalks)

# You can pass an optional value to set the top margin for sticky headers.
#StickyHeaders.enableFor(conferenceTalks, 100)
