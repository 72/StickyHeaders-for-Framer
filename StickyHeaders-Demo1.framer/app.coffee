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
	height: 4000
	image: 'images/list-day1.png'
	parent: conferenceTalks.content

# Create Sticky Headers. Notice name: 'StickyHeader'
header1 = new Layer
	y: 206, width: 150, height: 350
	html: "12:00pm - Sticky Headers can contain anything"
	backgroundColor: "rgba(140,170,200,1)"
	name: 'StickyHeader'
	parent: conferenceTalks.content

header2 = new Layer
	y: 914, width: 150, height: 210
	html: "1:00pm - You can set custom height values"
	backgroundColor: "rgba(110,200,155,1)"
	name: 'StickyHeader'
	parent: conferenceTalks.content

header3 = new Layer
	y: 1566, width: 150, height: 100
	html: "1:30pm"
	backgroundColor: "rgba(140,170,200,1)"
	name: 'StickyHeader'
	parent: conferenceTalks.content

header4 = new Layer
	y: 2102, width: 130, height: 200
	html: "2:00pm - You can set custom Y values"
	backgroundColor: "rgba(110,200,155,1)"
	name: 'StickyHeader'
	parent: conferenceTalks.content

header5 = new Layer
	y: 2641, width: 160, height: 160
	borderRadius: 80
	backgroundColor: "rgba(140,170,200,1)"
	name: 'StickyHeader'
	parent: conferenceTalks.content

header6 = new Layer
	y: 3175, width: 130, height: 100
	html: "4:00pm"
	backgroundColor: "rgba(110,200,155,1)"
	name: 'StickyHeader'
	parent: conferenceTalks.content	

# Enable StickyHeaders for this Scroll Component.
StickyHeaders.enableFor(conferenceTalks)

# You can pass an optional value to set the top margin for sticky headers.
#StickyHeaders.enableFor(conferenceTalks, 100)
