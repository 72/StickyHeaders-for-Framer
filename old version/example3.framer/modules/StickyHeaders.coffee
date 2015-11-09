class exports.StickyHeaders extends Layer

	constructor: (@options={}) ->
		# Set Defaults
		@options.data ?= null
		@options.headerHeight ?= 100
		@options.headerWidth ?= 160
		@options.scrollImage ?= null
		@options.scrollHeight ?= 100
		@options.width ?= Screen.width
		@options.height ?= Screen.height
		@options.labelStyle ?= color: "black", background: null
		@options.subLabelStyle ?= color: "black", background: null

		super @options

		@data = @options.data
		# Value for headers to be considered being 'offscreen'
		@offscreen = -@options.headerHeight
		# First y value becomes 'fixed' position by default
		@fixed = @data[0].y
		# Range in which a new header will push the previous one
		@threshold = @fixed + @options.headerHeight
		# Array to hold headers/containers
		@headersContainers = []
		# Build
		@setup()
		@createHeaders()
		@bindEvents()

	setup: () =>
		# Create Scroll Component
		@scroller = new ScrollComponent
			width: @options.width
			height: @options.height
			scrollHorizontal: false
			backgroundColor: "white"
			superLayer: @
		# Content for scroll component
		@list = new Layer
			width: @options.width
			height: @options.scrollHeight
			image: @options.scrollImage
			backgroundColor: null
			superLayer: @scroller.content

	createHeaders: () =>
		# Iterate 'data'
		for object, i in @data
			# Create header container
			@container = new Layer
				width: @options.headerWidth
				height: @options.headerHeight
				y: object.y
				backgroundColor: null
				clip: false
				superLayer: @
			# Create main label
			@label = new Layer
				html: object.labelText
				style: @options.labelStyle
				clip: false
				superLayer: @container
			# Add subLabel
			@subLabel = new Layer
				html: object.subLabelText
				style: @options.subLabelStyle
				clip: false
				superLayer: @label
			# Add container to headersContainers array
			@headersContainers.push @container

	bindEvents: () =>
		# This is the fun part:
		@scroller.on Events.Move, =>
			# Update yOffset each time the scroll moves
			@yOffset = @scroller.scrollY
			# Update each header's y position according to yOffset
			for container, i in @headersContainers
				container.y = @data[i].y - @yOffset
			# Iterate stored Y values in 'data' to determine which header remains static; also, determine when to transition to the next/previous header.
			for object, i in @data
				# First header should be sticky by default...
				if i == 0
					if @headersContainers[0].y <= @fixed
						@headersContainers[0].y = @fixed
				# ...until the next header tries to come into place.
				if i > 0
					thisminY = object.y - @threshold
					thismaxY = thisminY + @options.headerHeight + @fixed
					if @headersContainers[i].y < @threshold
						# Headers transition!
						@headersContainers[i-1].y = Utils.modulate(@yOffset, [thisminY, thismaxY], [@fixed, @offscreen], true)
					if @headersContainers[i].y <= @fixed
						# Set the new one to become a fixed header.
						@headersContainers[i].y = @fixed