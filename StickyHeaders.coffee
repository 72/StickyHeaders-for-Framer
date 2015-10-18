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
		# Save 'Data'
		@data = @options.data
		# Value for stamps to be considered being 'offscreen'
		@offscreen = -@options.headerHeight
		# First y value becomes 'fixed' position by default
		@fixed = @data[0].y
		# Range in which a new stamp will push the previous one
		@threshold = @fixed + @options.headerHeight
		# Array to hold headers (called containers)
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
			# Create timestamp/sticky container
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
			# Add container to timeStamps array
			@headersContainers.push @container

	bindEvents: () =>
		# This is the fun part:
		print 'here'
		@scroller.on Events.Move, =>
			# Update yOffset each time the scroll moves
			@yOffset = @scroller.scrollY
			# Update each stamp's y position according to yOffset
			for header, i in @headersContainers
				header.y = @data[i].y - @yOffset
			# Iterate stored Y values in 'data' to determine which stamp remains static; also, determine when to transition to the next/previous stamp.
			for value, i in @data
				# First stamp should be sticky by default...
				if i == 0
					if @headersContainers[0].y <= @fixed
						@headersContainers[0].y = @fixed
				# ...until the next stamp tries to come into place.
				if i > 0
					thisminY = value.y - @threshold
					thismaxY = thisminY + @options.headerHeight + @fixed
					if @headersContainers[i].y < @threshold
						# Stamp transition!
						@headersContainers[i-1].y = Utils.modulate(@yOffset, [thisminY, thismaxY], [@fixed, @offscreen], true)
					if @headersContainers[i].y <= @fixed
						# Set it to become a fixed timestamp... for now.
						@headersContainers[i].y = @fixed