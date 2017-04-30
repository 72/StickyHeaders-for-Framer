###
StickyHeaders for Framer
By @72mena
###
class exports.StickyHeaders

	@enableFor: (scrollComponent, topMargin) ->

		dataSH = []
		topMargin ?= 0

		# Check for sticky headers.
		stickyHeaders = scrollComponent.content.childrenWithName("StickyHeader")
		if stickyHeaders.length > 0
			for header in stickyHeaders
				dataSH.push(header.y)

			# Scroll logic. I'm using 'change:y' instead of 'onMove' to detect animations and mousewheel.
			scrollComponent.content.on "change:y", ->
				for header, i in stickyHeaders
					header.y = dataSH[i]
					currentY = dataSH[i] - scrollComponent.scrollY

					if i > 0
						prevStickyPosition = dataSH[i] - stickyHeaders[i-1].height
						prevMaxY = stickyHeaders[i-1].height + topMargin

						if currentY < prevMaxY
							stickyHeaders[i-1].y = prevStickyPosition

					if currentY <= topMargin
						header.y = scrollComponent.scrollY + topMargin