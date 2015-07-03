class exports.StickyStamps extends Layer

	constructor: (@options={}) ->
		# Set Defaults
		@options.data ?= null
		@options.stampHeight ?= 100
		@options.stampWidth ?= 160
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
		@offscreen = -@options.stampHeight
		# First y value becomes 'fixed' position by default
		@fixed = @data[0].y
		# Range in which a new stamp will push the previous one
		@threshold = @fixed + @options.stampHeight
		# Array to hold stamps (called containers)
		@timeStamps = []
		# Build
		@setup()
		@createStamps()
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

	createStamps: () =>
		# Iterate 'data'
		for object, i in @data
			# Create timestamp/sticky container
			@container = new Layer
				width: @options.stampWidth
				height: @options.stampHeight
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
			@timeStamps.push @container

	bindEvents: () =>
		# This is the fun part:
		@scroller.on Events.Move, =>
			# Update yOffset each time the scroll moves
			@yOffset = @scroller.scrollY
			# Update each stamp's y position according to yOffset
			for stamp, i in @timeStamps
				stamp.y = @data[i].y - @yOffset
			# Iterate stored Y values in 'data' to determine which stamp remains static; also, determine when to transition to the next/previous stamp.
			for object, i in @data
				# First stamp should be sticky by default...
				if i == 0
					if @timeStamps[0].y <= @fixed
						@timeStamps[0].y = @fixed
				# ...until the next stamp tries to come into place.
				if i > 0
					thisminY = object.y - @threshold
					thismaxY = thisminY + @options.stampHeight + @fixed
					if @timeStamps[i].y < @threshold
						# Stamp transition!
						@timeStamps[i-1].y = Utils.modulate(@yOffset, [thisminY, thismaxY], [@fixed, @offscreen], true)
					if @timeStamps[i].y <= @fixed
						# Set it to become a fixed timestamp... for now.
						@timeStamps[i].y = @fixed