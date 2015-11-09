require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"StickyHeaders":[function(require,module,exports){

/*
StickyHeaders for FramerJS
Created by @72mena
 */
exports.StickyHeaders = (function() {
  function StickyHeaders() {}

  StickyHeaders.enableFor = function(sC) {
    var _dataSH, _stickyHeaders;
    _stickyHeaders = [];
    _dataSH = [];
    sC.once(Events.TouchStart, function() {
      var i, j, layer, len, results;
      _stickyHeaders = sC.content.subLayers[0].subLayersByName("StickyHeader");
      if (_stickyHeaders.length > 0) {
        results = [];
        for (i = j = 0, len = _stickyHeaders.length; j < len; i = ++j) {
          layer = _stickyHeaders[i];
          results.push(_dataSH.push(layer.y));
        }
        return results;
      }
    });
    return sC.on(Events.Move, function() {
      var _fixedY, _prevMaxY, _prevStickyPosition, _thisY, i, j, layer, len, results;
      if (_stickyHeaders.length > 0) {
        results = [];
        for (i = j = 0, len = _stickyHeaders.length; j < len; i = ++j) {
          layer = _stickyHeaders[i];
          layer.y = _dataSH[i];
          _thisY = _dataSH[i] - sC.scrollY;
          _fixedY = _dataSH[i] + -_thisY;
          if (i === 0) {
            if (_thisY <= 0) {
              layer.y = _fixedY;
            }
          }
          if (i > 0) {
            _prevStickyPosition = _dataSH[i] - _stickyHeaders[i - 1].height;
            _prevMaxY = _stickyHeaders[i - 1].height;
            if (_thisY < _prevMaxY) {
              _stickyHeaders[i - 1].y = _prevStickyPosition;
            }
            if (_thisY <= 0) {
              results.push(layer.y = _fixedY);
            } else {
              results.push(void 0);
            }
          } else {
            results.push(void 0);
          }
        }
        return results;
      }
    });
  };

  return StickyHeaders;

})();


},{}],"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvc2V0ZW50YXlkb3MvR2l0SHViL1N0aWNreUhlYWRlcnMtZm9yLUZyYW1lci9TdGlja3lIZWFkZXJzLURlbW8xLmZyYW1lci9tb2R1bGVzL1N0aWNreUhlYWRlcnMuY29mZmVlIiwiL1VzZXJzL3NldGVudGF5ZG9zL0dpdEh1Yi9TdGlja3lIZWFkZXJzLWZvci1GcmFtZXIvU3RpY2t5SGVhZGVycy1EZW1vMS5mcmFtZXIvbW9kdWxlcy9teU1vZHVsZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FDQUE7Ozs7QUFJTSxPQUFPLENBQUM7OztFQUViLGFBQUMsQ0FBQSxTQUFELEdBQVksU0FBQyxFQUFEO0FBRVgsUUFBQTtJQUFBLGNBQUEsR0FBaUI7SUFDakIsT0FBQSxHQUFVO0lBR1YsRUFBRSxDQUFDLElBQUgsQ0FBUSxNQUFNLENBQUMsVUFBZixFQUEyQixTQUFBO0FBRzFCLFVBQUE7TUFBQSxjQUFBLEdBQWlCLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBVSxDQUFBLENBQUEsQ0FBRSxDQUFDLGVBQXhCLENBQXdDLGNBQXhDO01BRWpCLElBQUcsY0FBYyxDQUFDLE1BQWYsR0FBd0IsQ0FBM0I7QUFFQzthQUFBLHdEQUFBOzt1QkFDQyxPQUFPLENBQUMsSUFBUixDQUFhLEtBQUssQ0FBQyxDQUFuQjtBQUREO3VCQUZEOztJQUwwQixDQUEzQjtXQVdBLEVBQUUsQ0FBQyxFQUFILENBQU0sTUFBTSxDQUFDLElBQWIsRUFBbUIsU0FBQTtBQUdsQixVQUFBO01BQUEsSUFBRyxjQUFjLENBQUMsTUFBZixHQUF3QixDQUEzQjtBQUNDO2FBQUEsd0RBQUE7O1VBRUMsS0FBSyxDQUFDLENBQU4sR0FBWSxPQUFRLENBQUEsQ0FBQTtVQUNwQixNQUFBLEdBQVksT0FBUSxDQUFBLENBQUEsQ0FBUixHQUFhLEVBQUUsQ0FBQztVQUM1QixPQUFBLEdBQVksT0FBUSxDQUFBLENBQUEsQ0FBUixHQUFhLENBQUM7VUFFMUIsSUFBRyxDQUFBLEtBQUssQ0FBUjtZQUNDLElBQUcsTUFBQSxJQUFVLENBQWI7Y0FDQyxLQUFLLENBQUMsQ0FBTixHQUFVLFFBRFg7YUFERDs7VUFJQSxJQUFHLENBQUEsR0FBSSxDQUFQO1lBQ0MsbUJBQUEsR0FBc0IsT0FBUSxDQUFBLENBQUEsQ0FBUixHQUFhLGNBQWUsQ0FBQSxDQUFBLEdBQUUsQ0FBRixDQUFJLENBQUM7WUFDdkQsU0FBQSxHQUFZLGNBQWUsQ0FBQSxDQUFBLEdBQUUsQ0FBRixDQUFJLENBQUM7WUFHaEMsSUFBRyxNQUFBLEdBQVMsU0FBWjtjQUNDLGNBQWUsQ0FBQSxDQUFBLEdBQUUsQ0FBRixDQUFJLENBQUMsQ0FBcEIsR0FBd0Isb0JBRHpCOztZQUlBLElBQUcsTUFBQSxJQUFVLENBQWI7MkJBQ0MsS0FBSyxDQUFDLENBQU4sR0FBVSxTQURYO2FBQUEsTUFBQTttQ0FBQTthQVREO1dBQUEsTUFBQTtpQ0FBQTs7QUFWRDt1QkFERDs7SUFIa0IsQ0FBbkI7RUFqQlc7Ozs7Ozs7O0FDRmIsT0FBTyxDQUFDLEtBQVIsR0FBZ0I7O0FBRWhCLE9BQU8sQ0FBQyxVQUFSLEdBQXFCLFNBQUE7U0FDcEIsS0FBQSxDQUFNLHVCQUFOO0FBRG9COztBQUdyQixPQUFPLENBQUMsT0FBUixHQUFrQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIjIyNcblN0aWNreUhlYWRlcnMgZm9yIEZyYW1lckpTXG5DcmVhdGVkIGJ5IEA3Mm1lbmFcbiMjI1xuY2xhc3MgZXhwb3J0cy5TdGlja3lIZWFkZXJzXG5cblx0QGVuYWJsZUZvcjogKHNDKSAtPlxuXG5cdFx0X3N0aWNreUhlYWRlcnMgPSBbXVxuXHRcdF9kYXRhU0ggPSBbXVxuXG5cdFx0IyBSdW4gT25jZS4gU2V0dXAgVmFycy5cblx0XHRzQy5vbmNlIEV2ZW50cy5Ub3VjaFN0YXJ0LCAtPlxuXG5cdFx0XHQjIENoZWNrIGZvciBTdGlja3lIZWFkZXJzLlxuXHRcdFx0X3N0aWNreUhlYWRlcnMgPSBzQy5jb250ZW50LnN1YkxheWVyc1swXS5zdWJMYXllcnNCeU5hbWUoXCJTdGlja3lIZWFkZXJcIilcblxuXHRcdFx0aWYgX3N0aWNreUhlYWRlcnMubGVuZ3RoID4gMFxuXHRcdFx0XHQjIFNhdmUgdGhlaXIgaW5pdGlhbCBZIHZhbHVlLlxuXHRcdFx0XHRmb3IgbGF5ZXIsIGkgaW4gX3N0aWNreUhlYWRlcnNcblx0XHRcdFx0XHRfZGF0YVNILnB1c2gobGF5ZXIueSlcblxuXHRcdCMgU2Nyb2xsIGxvZ2ljLlxuXHRcdHNDLm9uIEV2ZW50cy5Nb3ZlLCAtPlxuXG5cdFx0XHQjIElmIHRoZXJlIGFyZSBTdGlja3lIZWFkZXJzLCBjYWxjdWxhdGUgdGhlaXIgcGxhY2VtZW50LlxuXHRcdFx0aWYgX3N0aWNreUhlYWRlcnMubGVuZ3RoID4gMFxuXHRcdFx0XHRmb3IgbGF5ZXIsIGkgaW4gX3N0aWNreUhlYWRlcnNcblxuXHRcdFx0XHRcdGxheWVyLnkgID0gIF9kYXRhU0hbaV1cblx0XHRcdFx0XHRfdGhpc1kgICA9ICBfZGF0YVNIW2ldIC0gc0Muc2Nyb2xsWVxuXHRcdFx0XHRcdF9maXhlZFkgID0gIF9kYXRhU0hbaV0gKyAtX3RoaXNZXG5cblx0XHRcdFx0XHRpZiBpIGlzIDBcblx0XHRcdFx0XHRcdGlmIF90aGlzWSA8PSAwXG5cdFx0XHRcdFx0XHRcdGxheWVyLnkgPSBfZml4ZWRZXG5cblx0XHRcdFx0XHRpZiBpID4gMFxuXHRcdFx0XHRcdFx0X3ByZXZTdGlja3lQb3NpdGlvbiA9IF9kYXRhU0hbaV0gLSBfc3RpY2t5SGVhZGVyc1tpLTFdLmhlaWdodFxuXHRcdFx0XHRcdFx0X3ByZXZNYXhZID0gX3N0aWNreUhlYWRlcnNbaS0xXS5oZWlnaHRcblxuXHRcdFx0XHRcdFx0IyBUcmFuc2l0aW9uXG5cdFx0XHRcdFx0XHRpZiBfdGhpc1kgPCBfcHJldk1heFlcblx0XHRcdFx0XHRcdFx0X3N0aWNreUhlYWRlcnNbaS0xXS55ID0gX3ByZXZTdGlja3lQb3NpdGlvblxuXG5cdFx0XHRcdFx0XHQjIE5ldyBTdGlja3lcblx0XHRcdFx0XHRcdGlmIF90aGlzWSA8PSAwXG5cdFx0XHRcdFx0XHRcdGxheWVyLnkgPSBfZml4ZWRZIiwiIyBBZGQgdGhlIGZvbGxvd2luZyBsaW5lIHRvIHlvdXIgcHJvamVjdCBpbiBGcmFtZXIgU3R1ZGlvLiBcbiMgbXlNb2R1bGUgPSByZXF1aXJlIFwibXlNb2R1bGVcIlxuIyBSZWZlcmVuY2UgdGhlIGNvbnRlbnRzIGJ5IG5hbWUsIGxpa2UgbXlNb2R1bGUubXlGdW5jdGlvbigpIG9yIG15TW9kdWxlLm15VmFyXG5cbmV4cG9ydHMubXlWYXIgPSBcIm15VmFyaWFibGVcIlxuXG5leHBvcnRzLm15RnVuY3Rpb24gPSAtPlxuXHRwcmludCBcIm15RnVuY3Rpb24gaXMgcnVubmluZ1wiXG5cbmV4cG9ydHMubXlBcnJheSA9IFsxLCAyLCAzXSJdfQ==
