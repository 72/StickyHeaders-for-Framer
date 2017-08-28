# Create the scroll component
mainScroll = new ScrollComponent
	width: Screen.width
	height: Screen.height
	scrollHorizontal: false
	backgroundColor: 'white'

# Create Headers and add them to the scroll component
header1 = new Layer
	name: 'StickyHeader'
	html: '1'
	y: 175, width: Screen.width, height: 120
	backgroundColor: '#1E88E5'
	parent: mainScroll.content

header2 = new Layer
	name: 'StickyHeader'
	html: '2'
	y: 1000, width: Screen.width, height: 95
	backgroundColor: '#AA00AA'
	parent: mainScroll.content

header3 = new Layer
	name: 'StickyHeader'
	html: '3'
	y: 1775, width: Screen.width, height: 120
	backgroundColor: '#3949AB'
	parent: mainScroll.content

header4 = new Layer
	name: 'StickyHeader'
	html: '4'
	y: 3475, width: Screen.width, height: 120
	backgroundColor: 'pink'
	parent: mainScroll.content

# Enable StickyHeaders for your scroll component
StickyHeaders.enableFor(mainScroll)