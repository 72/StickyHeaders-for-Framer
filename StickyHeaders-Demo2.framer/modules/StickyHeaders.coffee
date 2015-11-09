###
StickyHeaders for FramerJS
Created by @72mena
###
class exports.StickyHeaders

	@enableFor: (sC) ->

		_stickyHeaders = []
		_dataSH = []

		# Run Once. Setup Vars.
		sC.once Events.TouchStart, ->

			# Check for StickyHeaders.
			_stickyHeaders = sC.content.subLayers[0].subLayersByName("StickyHeader")

			if _stickyHeaders.length > 0
				# Save their initial Y value.
				for layer, i in _stickyHeaders
					_dataSH.push(layer.y)

		# Scroll logic.
		sC.on Events.Move, ->

			# If there are StickyHeaders, calculate their placement.
			if _stickyHeaders.length > 0
				for layer, i in _stickyHeaders

					layer.y  =  _dataSH[i]
					_thisY   =  _dataSH[i] - sC.scrollY
					_fixedY  =  _dataSH[i] + -_thisY

					if i is 0
						if _thisY <= 0
							layer.y = _fixedY

					if i > 0
						_prevStickyPosition = _dataSH[i] - _stickyHeaders[i-1].height
						_prevMaxY = _stickyHeaders[i-1].height

						# Transition
						if _thisY < _prevMaxY
							_stickyHeaders[i-1].y = _prevStickyPosition

						# New Sticky
						if _thisY <= 0
							layer.y = _fixedY