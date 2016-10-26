###
StickyHeaders for Framer
By @72mena
###
class exports.StickyHeaders

	@enableFor: (sC, topMargin) ->

		dataSH = []
		topMargin ?= 0

		# Check for StickyHeaders.
		stickyHeaders = sC.content.childrenWithName("StickyHeader")
		if stickyHeaders.length > 0
			for header, i in stickyHeaders
				dataSH.push(header.y)

		# Scroll logic. This fix detects animations and mousewheel.
		sC.content.on "change:y", ->

			if stickyHeaders.length > 0
				for header, i in stickyHeaders

					header.y = dataSH[i]
					currentY = dataSH[i] - sC.scrollY

					if i > 0
						prevStickyPosition = dataSH[i] - stickyHeaders[i-1].height
						prevMaxY = stickyHeaders[i-1].height + topMargin

						if currentY < prevMaxY
							stickyHeaders[i-1].y = prevStickyPosition

					if currentY <= topMargin
						header.y = sC.scrollY + topMargin