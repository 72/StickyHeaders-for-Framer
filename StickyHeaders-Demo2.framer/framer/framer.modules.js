require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"StickyHeaders":[function(require,module,exports){

/*
StickyHeaders for FramerJS
Created by @72mena
 */
exports.StickyHeaders = (function() {
  function StickyHeaders() {}

  StickyHeaders.enableFor = function(sC) {
    var _dataSH, _stickyHeaders, i, j, layer, len;
    _stickyHeaders = [];
    _dataSH = [];
    _stickyHeaders = sC.content.children[0].childrenWithName("StickyHeader");
    if (_stickyHeaders.length > 0) {
      for (i = j = 0, len = _stickyHeaders.length; j < len; i = ++j) {
        layer = _stickyHeaders[i];
        _dataSH.push(layer.y);
      }
    }
    return sC.content.on("change:y", function() {
      var _fixedY, _prevMaxY, _prevStickyPosition, _thisY, k, len1, results;
      if (_stickyHeaders.length > 0) {
        results = [];
        for (i = k = 0, len1 = _stickyHeaders.length; k < len1; i = ++k) {
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvc2V0ZW50YXlkb3MvR2l0SHViL1N0aWNreUhlYWRlcnMtZm9yLUZyYW1lci9TdGlja3lIZWFkZXJzLURlbW8yLmZyYW1lci9tb2R1bGVzL1N0aWNreUhlYWRlcnMuY29mZmVlIiwiL1VzZXJzL3NldGVudGF5ZG9zL0dpdEh1Yi9TdGlja3lIZWFkZXJzLWZvci1GcmFtZXIvU3RpY2t5SGVhZGVycy1EZW1vMi5mcmFtZXIvbW9kdWxlcy9teU1vZHVsZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FDQUE7Ozs7QUFJTSxPQUFPLENBQUM7OztFQUViLGFBQUMsQ0FBQSxTQUFELEdBQVksU0FBQyxFQUFEO0FBRVgsUUFBQTtJQUFBLGNBQUEsR0FBaUI7SUFDakIsT0FBQSxHQUFVO0lBR1YsY0FBQSxHQUFpQixFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVMsQ0FBQSxDQUFBLENBQUUsQ0FBQyxnQkFBdkIsQ0FBd0MsY0FBeEM7SUFFakIsSUFBRyxjQUFjLENBQUMsTUFBZixHQUF3QixDQUEzQjtBQUVDLFdBQUEsd0RBQUE7O1FBQ0MsT0FBTyxDQUFDLElBQVIsQ0FBYSxLQUFLLENBQUMsQ0FBbkI7QUFERCxPQUZEOztXQU1BLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBWCxDQUFjLFVBQWQsRUFBMEIsU0FBQTtBQUd6QixVQUFBO01BQUEsSUFBRyxjQUFjLENBQUMsTUFBZixHQUF3QixDQUEzQjtBQUNDO2FBQUEsMERBQUE7O1VBRUMsS0FBSyxDQUFDLENBQU4sR0FBWSxPQUFRLENBQUEsQ0FBQTtVQUNwQixNQUFBLEdBQVksT0FBUSxDQUFBLENBQUEsQ0FBUixHQUFhLEVBQUUsQ0FBQztVQUM1QixPQUFBLEdBQVksT0FBUSxDQUFBLENBQUEsQ0FBUixHQUFhLENBQUM7VUFFMUIsSUFBRyxDQUFBLEtBQUssQ0FBUjtZQUNDLElBQUcsTUFBQSxJQUFVLENBQWI7Y0FDQyxLQUFLLENBQUMsQ0FBTixHQUFVLFFBRFg7YUFERDs7VUFJQSxJQUFHLENBQUEsR0FBSSxDQUFQO1lBQ0MsbUJBQUEsR0FBc0IsT0FBUSxDQUFBLENBQUEsQ0FBUixHQUFhLGNBQWUsQ0FBQSxDQUFBLEdBQUUsQ0FBRixDQUFJLENBQUM7WUFDdkQsU0FBQSxHQUFZLGNBQWUsQ0FBQSxDQUFBLEdBQUUsQ0FBRixDQUFJLENBQUM7WUFHaEMsSUFBRyxNQUFBLEdBQVMsU0FBWjtjQUNDLGNBQWUsQ0FBQSxDQUFBLEdBQUUsQ0FBRixDQUFJLENBQUMsQ0FBcEIsR0FBd0Isb0JBRHpCOztZQUlBLElBQUcsTUFBQSxJQUFVLENBQWI7MkJBQ0MsS0FBSyxDQUFDLENBQU4sR0FBVSxTQURYO2FBQUEsTUFBQTttQ0FBQTthQVREO1dBQUEsTUFBQTtpQ0FBQTs7QUFWRDt1QkFERDs7SUFIeUIsQ0FBMUI7RUFkVzs7Ozs7Ozs7QUNGYixPQUFPLENBQUMsS0FBUixHQUFnQjs7QUFFaEIsT0FBTyxDQUFDLFVBQVIsR0FBcUIsU0FBQTtTQUNwQixLQUFBLENBQU0sdUJBQU47QUFEb0I7O0FBR3JCLE9BQU8sQ0FBQyxPQUFSLEdBQWtCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiMjI1xuU3RpY2t5SGVhZGVycyBmb3IgRnJhbWVySlNcbkNyZWF0ZWQgYnkgQDcybWVuYVxuIyMjXG5jbGFzcyBleHBvcnRzLlN0aWNreUhlYWRlcnNcblxuXHRAZW5hYmxlRm9yOiAoc0MpIC0+XG5cblx0XHRfc3RpY2t5SGVhZGVycyA9IFtdXG5cdFx0X2RhdGFTSCA9IFtdXG5cblx0XHQjIENoZWNrIGZvciBTdGlja3lIZWFkZXJzLlxuXHRcdF9zdGlja3lIZWFkZXJzID0gc0MuY29udGVudC5jaGlsZHJlblswXS5jaGlsZHJlbldpdGhOYW1lKFwiU3RpY2t5SGVhZGVyXCIpXG5cblx0XHRpZiBfc3RpY2t5SGVhZGVycy5sZW5ndGggPiAwXG5cdFx0XHQjIFNhdmUgdGhlaXIgaW5pdGlhbCBZIHZhbHVlLlxuXHRcdFx0Zm9yIGxheWVyLCBpIGluIF9zdGlja3lIZWFkZXJzXG5cdFx0XHRcdF9kYXRhU0gucHVzaChsYXllci55KVxuXG5cdFx0IyBTY3JvbGwgbG9naWMuIFdpdGggdGhpcyBmaXggaXQgbm93IGRldGVjdHMgYW5pbWF0aW9ucyBhbmQgbW91c2V3aGVlbC5cblx0XHRzQy5jb250ZW50Lm9uIFwiY2hhbmdlOnlcIiwgLT5cblxuXHRcdFx0IyBJZiB0aGVyZSBhcmUgU3RpY2t5SGVhZGVycywgY2FsY3VsYXRlIHRoZWlyIHBsYWNlbWVudC5cblx0XHRcdGlmIF9zdGlja3lIZWFkZXJzLmxlbmd0aCA+IDBcblx0XHRcdFx0Zm9yIGxheWVyLCBpIGluIF9zdGlja3lIZWFkZXJzXG5cblx0XHRcdFx0XHRsYXllci55ICA9ICBfZGF0YVNIW2ldXG5cdFx0XHRcdFx0X3RoaXNZICAgPSAgX2RhdGFTSFtpXSAtIHNDLnNjcm9sbFlcblx0XHRcdFx0XHRfZml4ZWRZICA9ICBfZGF0YVNIW2ldICsgLV90aGlzWVxuXG5cdFx0XHRcdFx0aWYgaSBpcyAwXG5cdFx0XHRcdFx0XHRpZiBfdGhpc1kgPD0gMFxuXHRcdFx0XHRcdFx0XHRsYXllci55ID0gX2ZpeGVkWVxuXG5cdFx0XHRcdFx0aWYgaSA+IDBcblx0XHRcdFx0XHRcdF9wcmV2U3RpY2t5UG9zaXRpb24gPSBfZGF0YVNIW2ldIC0gX3N0aWNreUhlYWRlcnNbaS0xXS5oZWlnaHRcblx0XHRcdFx0XHRcdF9wcmV2TWF4WSA9IF9zdGlja3lIZWFkZXJzW2ktMV0uaGVpZ2h0XG5cblx0XHRcdFx0XHRcdCMgVHJhbnNpdGlvblxuXHRcdFx0XHRcdFx0aWYgX3RoaXNZIDwgX3ByZXZNYXhZXG5cdFx0XHRcdFx0XHRcdF9zdGlja3lIZWFkZXJzW2ktMV0ueSA9IF9wcmV2U3RpY2t5UG9zaXRpb25cblxuXHRcdFx0XHRcdFx0IyBOZXcgU3RpY2t5XG5cdFx0XHRcdFx0XHRpZiBfdGhpc1kgPD0gMFxuXHRcdFx0XHRcdFx0XHRsYXllci55ID0gX2ZpeGVkWSIsIiMgQWRkIHRoZSBmb2xsb3dpbmcgbGluZSB0byB5b3VyIHByb2plY3QgaW4gRnJhbWVyIFN0dWRpby4gXG4jIG15TW9kdWxlID0gcmVxdWlyZSBcIm15TW9kdWxlXCJcbiMgUmVmZXJlbmNlIHRoZSBjb250ZW50cyBieSBuYW1lLCBsaWtlIG15TW9kdWxlLm15RnVuY3Rpb24oKSBvciBteU1vZHVsZS5teVZhclxuXG5leHBvcnRzLm15VmFyID0gXCJteVZhcmlhYmxlXCJcblxuZXhwb3J0cy5teUZ1bmN0aW9uID0gLT5cblx0cHJpbnQgXCJteUZ1bmN0aW9uIGlzIHJ1bm5pbmdcIlxuXG5leHBvcnRzLm15QXJyYXkgPSBbMSwgMiwgM10iXX0=
