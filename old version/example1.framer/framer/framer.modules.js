require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"StickyHeaders":[function(require,module,exports){
var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

exports.StickyHeaders = (function(superClass) {
  extend(StickyHeaders, superClass);

  function StickyHeaders(options) {
    var base, base1, base2, base3, base4, base5, base6, base7, base8;
    this.options = options != null ? options : {};
    this.bindEvents = bind(this.bindEvents, this);
    this.createHeaders = bind(this.createHeaders, this);
    this.setup = bind(this.setup, this);
    if ((base = this.options).data == null) {
      base.data = null;
    }
    if ((base1 = this.options).headerHeight == null) {
      base1.headerHeight = 100;
    }
    if ((base2 = this.options).headerWidth == null) {
      base2.headerWidth = 160;
    }
    if ((base3 = this.options).scrollImage == null) {
      base3.scrollImage = null;
    }
    if ((base4 = this.options).scrollHeight == null) {
      base4.scrollHeight = 100;
    }
    if ((base5 = this.options).width == null) {
      base5.width = Screen.width;
    }
    if ((base6 = this.options).height == null) {
      base6.height = Screen.height;
    }
    if ((base7 = this.options).labelStyle == null) {
      base7.labelStyle = {
        color: "black",
        background: null
      };
    }
    if ((base8 = this.options).subLabelStyle == null) {
      base8.subLabelStyle = {
        color: "black",
        background: null
      };
    }
    StickyHeaders.__super__.constructor.call(this, this.options);
    this.data = this.options.data;
    this.offscreen = -this.options.headerHeight;
    this.fixed = this.data[0].y;
    this.threshold = this.fixed + this.options.headerHeight;
    this.headersContainers = [];
    this.setup();
    this.createHeaders();
    this.bindEvents();
  }

  StickyHeaders.prototype.setup = function() {
    this.scroller = new ScrollComponent({
      width: this.options.width,
      height: this.options.height,
      scrollHorizontal: false,
      backgroundColor: "white",
      superLayer: this
    });
    return this.list = new Layer({
      width: this.options.width,
      height: this.options.scrollHeight,
      image: this.options.scrollImage,
      backgroundColor: null,
      superLayer: this.scroller.content
    });
  };

  StickyHeaders.prototype.createHeaders = function() {
    var i, j, len, object, ref, results;
    ref = this.data;
    results = [];
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      object = ref[i];
      this.container = new Layer({
        width: this.options.headerWidth,
        height: this.options.headerHeight,
        y: object.y,
        backgroundColor: null,
        clip: false,
        superLayer: this
      });
      this.label = new Layer({
        html: object.labelText,
        style: this.options.labelStyle,
        clip: false,
        superLayer: this.container
      });
      this.subLabel = new Layer({
        html: object.subLabelText,
        style: this.options.subLabelStyle,
        clip: false,
        superLayer: this.label
      });
      results.push(this.headersContainers.push(this.container));
    }
    return results;
  };

  StickyHeaders.prototype.bindEvents = function() {
    return this.scroller.on(Events.Move, (function(_this) {
      return function() {
        var container, i, j, k, len, len1, object, ref, ref1, results, thismaxY, thisminY;
        _this.yOffset = _this.scroller.scrollY;
        ref = _this.headersContainers;
        for (i = j = 0, len = ref.length; j < len; i = ++j) {
          container = ref[i];
          container.y = _this.data[i].y - _this.yOffset;
        }
        ref1 = _this.data;
        results = [];
        for (i = k = 0, len1 = ref1.length; k < len1; i = ++k) {
          object = ref1[i];
          if (i === 0) {
            if (_this.headersContainers[0].y <= _this.fixed) {
              _this.headersContainers[0].y = _this.fixed;
            }
          }
          if (i > 0) {
            thisminY = object.y - _this.threshold;
            thismaxY = thisminY + _this.options.headerHeight + _this.fixed;
            if (_this.headersContainers[i].y < _this.threshold) {
              _this.headersContainers[i - 1].y = Utils.modulate(_this.yOffset, [thisminY, thismaxY], [_this.fixed, _this.offscreen], true);
            }
            if (_this.headersContainers[i].y <= _this.fixed) {
              results.push(_this.headersContainers[i].y = _this.fixed);
            } else {
              results.push(void 0);
            }
          } else {
            results.push(void 0);
          }
        }
        return results;
      };
    })(this));
  };

  return StickyHeaders;

})(Layer);


},{}],"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvc2V0ZW50YXlkb3MvR2l0SHViL1N0aWNreUhlYWRlcnMtZm9yLUZyYW1lci9leGFtcGxlMS5mcmFtZXIvbW9kdWxlcy9TdGlja3lIZWFkZXJzLmNvZmZlZSIsIi9Vc2Vycy9zZXRlbnRheWRvcy9HaXRIdWIvU3RpY2t5SGVhZGVycy1mb3ItRnJhbWVyL2V4YW1wbGUxLmZyYW1lci9tb2R1bGVzL215TW9kdWxlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLElBQUE7Ozs7QUFBTSxPQUFPLENBQUM7OztFQUVBLHVCQUFDLE9BQUQ7QUFFWixRQUFBO0lBRmEsSUFBQyxDQUFBLDRCQUFELFVBQVM7Ozs7O1VBRWQsQ0FBQyxPQUFROzs7V0FDVCxDQUFDLGVBQWdCOzs7V0FDakIsQ0FBQyxjQUFlOzs7V0FDaEIsQ0FBQyxjQUFlOzs7V0FDaEIsQ0FBQyxlQUFnQjs7O1dBQ2pCLENBQUMsUUFBUyxNQUFNLENBQUM7OztXQUNqQixDQUFDLFNBQVUsTUFBTSxDQUFDOzs7V0FDbEIsQ0FBQyxhQUFjO1FBQUEsS0FBQSxFQUFPLE9BQVA7UUFBZ0IsVUFBQSxFQUFZLElBQTVCOzs7O1dBQ2YsQ0FBQyxnQkFBaUI7UUFBQSxLQUFBLEVBQU8sT0FBUDtRQUFnQixVQUFBLEVBQVksSUFBNUI7OztJQUUxQiwrQ0FBTSxJQUFDLENBQUEsT0FBUDtJQUVBLElBQUMsQ0FBQSxJQUFELEdBQVEsSUFBQyxDQUFBLE9BQU8sQ0FBQztJQUVqQixJQUFDLENBQUEsU0FBRCxHQUFhLENBQUMsSUFBQyxDQUFBLE9BQU8sQ0FBQztJQUV2QixJQUFDLENBQUEsS0FBRCxHQUFTLElBQUMsQ0FBQSxJQUFLLENBQUEsQ0FBQSxDQUFFLENBQUM7SUFFbEIsSUFBQyxDQUFBLFNBQUQsR0FBYSxJQUFDLENBQUEsS0FBRCxHQUFTLElBQUMsQ0FB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QUFBLEdBQVcsUUFBQSxHQUFXLEtBQUMsQ0FBQSxPQUFPLENBQUMsWUFBcEIsR0FBbUMsS0FBQyxDQUFBO1lBQy9DLElBQUcsS0FBQyxDQUFBLGlCQUFrQixDQUFBLENBQUEsQ0FBRSxDQUFDLENBQXRCLEdBQTBCLEtBQUMsQ0FBQSxTQUE5QjtjQUVDLEtBQUMsQ0FBQSxpQkFBa0IsQ0FBQSxDQUFBLEdBQUUsQ0FBRixDQUFJLENBQUMsQ0FBeEIsR0FBNEIsS0FBSyxDQUFDLFFBQU4sQ0FBZSxLQUFDLENBQUEsT0FBaEIsRUFBeUIsQ0FBQyxRQUFELEVBQVcsUUFBWCxDQUF6QixFQUErQyxDQUFDLEtBQUMsQ0FBQSxLQUFGLEVBQVMsS0FBQyxDQUFBLFNBQVYsQ0FBL0MsRUFBcUUsSUFBckUsRUFGN0I7O1lBR0EsSUFBRyxLQUFDLENBQUEsaUJBQWtCLENBQUEsQ0FBQSxDQUFFLENBQUMsQ0FBdEIsSUFBMkIsS0FBQyxDQUFBLEtBQS9COzJCQUVDLEtBQUMsQ0FBQSxpQkFBa0IsQ0FBQSxDQUFBLENBQUUsQ0FBQyxDQUF0QixHQUEwQixLQUFDLENBQUEsT0FGNUI7YUFBQSxNQUFBO21DQUFBO2FBTkQ7V0FBQSxNQUFBO2lDQUFBOztBQU5EOztNQVB5QjtJQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBMUI7RUFGVzs7OztHQXhFdUI7Ozs7QUNJcEMsT0FBTyxDQUFDLEtBQVIsR0FBZ0I7O0FBRWhCLE9BQU8sQ0FBQyxVQUFSLEdBQXFCLFNBQUE7U0FDcEIsS0FBQSxDQUFNLHVCQUFOO0FBRG9COztBQUdyQixPQUFPLENBQUMsT0FBUixHQUFrQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjbGFzcyBleHBvcnRzLlN0aWNreUhlYWRlcnMgZXh0ZW5kcyBMYXllclxuXG5cdGNvbnN0cnVjdG9yOiAoQG9wdGlvbnM9e30pIC0+XG5cdFx0IyBTZXQgRGVmYXVsdHNcblx0XHRAb3B0aW9ucy5kYXRhID89IG51bGxcblx0XHRAb3B0aW9ucy5oZWFkZXJIZWlnaHQgPz0gMTAwXG5cdFx0QG9wdGlvbnMuaGVhZGVyV2lkdGggPz0gMTYwXG5cdFx0QG9wdGlvbnMuc2Nyb2xsSW1hZ2UgPz0gbnVsbFxuXHRcdEBvcHRpb25zLnNjcm9sbEhlaWdodCA/PSAxMDBcblx0XHRAb3B0aW9ucy53aWR0aCA/PSBTY3JlZW4ud2lkdGhcblx0XHRAb3B0aW9ucy5oZWlnaHQgPz0gU2NyZWVuLmhlaWdodFxuXHRcdEBvcHRpb25zLmxhYmVsU3R5bGUgPz0gY29sb3I6IFwiYmxhY2tcIiwgYmFja2dyb3VuZDogbnVsbFxuXHRcdEBvcHRpb25zLnN1YkxhYmVsU3R5bGUgPz0gY29sb3I6IFwiYmxhY2tcIiwgYmFja2dyb3VuZDogbnVsbFxuXG5cdFx0c3VwZXIgQG9wdGlvbnNcblxuXHRcdEBkYXRhID0gQG9wdGlvbnMuZGF0YVxuXHRcdCMgVmFsdWUgZm9yIGhlYWRlcnMgdG8gYmUgY29uc2lkZXJlZCBiZWluZyAnb2Zmc2NyZWVuJ1xuXHRcdEBvZmZzY3JlZW4gPSAtQG9wdGlvbnMuaGVhZGVySGVpZ2h0XG5cdFx0IyBGaXJzdCB5IHZhbHVlIGJlY29tZXMgJ2ZpeGVkJyBwb3NpdGlvbiBieSBkZWZhdWx0XG5cdFx0QGZpeGVkID0gQGRhdGFbMF0ueVxuXHRcdCMgUmFuZ2UgaW4gd2hpY2ggYSBuZXcgaGVhZGVyIHdpbGwgcHVzaCB0aGUgcHJldmlvdXMgb25lXG5cdFx0QHRocmVzaG9sZCA9IEBmaXhlZCArIEBvcHRpb25zLmhlYWRlckhlaWdodFxuXHRcdCMgQXJyYXkgdG8gaG9sZCBoZWFkZXJzL2NvbnRhaW5lcnNcblx0XHRAaGVhZGVyc0NvbnRhaW5lcnMgPSBbXVxuXHRcdCMgQnVpbGRcblx0XHRAc2V0dXAoKVxuXHRcdEBjcmVhdGVIZWFkZXJzKClcblx0XHRAYmluZEV2ZW50cygpXG5cblx0c2V0dXA6ICgpID0+XG5cdFx0IyBDcmVhdGUgU2Nyb2xsIENvbXBvbmVudFxuXHRcdEBzY3JvbGxlciA9IG5ldyBTY3JvbGxDb21wb25lbnRcblx0XHRcdHdpZHRoOiBAb3B0aW9ucy53aWR0aFxuXHRcdFx0aGVpZ2h0OiBAb3B0aW9ucy5oZWlnaHRcblx0XHRcdHNjcm9sbEhvcml6b250YWw6IGZhbHNlXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIlxuXHRcdFx0c3VwZXJMYXllcjogQFxuXHRcdCMgQ29udGVudCBmb3Igc2Nyb2xsIGNvbXBvbmVudFxuXHRcdEBsaXN0ID0gbmV3IExheWVyXG5cdFx0XHR3aWR0aDogQG9wdGlvbnMud2lkdGhcblx0XHRcdGhlaWdodDogQG9wdGlvbnMuc2Nyb2xsSGVpZ2h0XG5cdFx0XHRpbWFnZTogQG9wdGlvbnMuc2Nyb2xsSW1hZ2Vcblx0XHRcdGJhY2tncm91bmRDb2xvcjogbnVsbFxuXHRcdFx0c3VwZXJMYXllcjogQHNjcm9sbGVyLmNvbnRlbnRcblxuXHRjcmVhdGVIZWFkZXJzOiAoKSA9PlxuXHRcdCMgSXRlcmF0ZSAnZGF0YSdcblx0XHRmb3Igb2JqZWN0LCBpIGluIEBkYXRhXG5cdFx0XHQjIENyZWF0ZSBoZWFkZXIgY29udGFpbmVyXG5cdFx0XHRAY29udGFpbmVyID0gbmV3IExheWVyXG5cdFx0XHRcdHdpZHRoOiBAb3B0aW9ucy5oZWFkZXJXaWR0aFxuXHRcdFx0XHRoZWlnaHQ6IEBvcHRpb25zLmhlYWRlckhlaWdodFxuXHRcdFx0XHR5OiBvYmplY3QueVxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IG51bGxcblx0XHRcdFx0Y2xpcDogZmFsc2Vcblx0XHRcdFx0c3VwZXJMYXllcjogQFxuXHRcdFx0IyBDcmVhdGUgbWFpbiBsYWJlbFxuXHRcdFx0QGxhYmVsID0gbmV3IExheWVyXG5cdFx0XHRcdGh0bWw6IG9iamVjdC5sYWJlbFRleHRcblx0XHRcdFx0c3R5bGU6IEBvcHRpb25zLmxhYmVsU3R5bGVcblx0XHRcdFx0Y2xpcDogZmFsc2Vcblx0XHRcdFx0c3VwZXJMYXllcjogQGNvbnRhaW5lclxuXHRcdFx0IyBBZGQgc3ViTGFiZWxcblx0XHRcdEBzdWJMYWJlbCA9IG5ldyBMYXllclxuXHRcdFx0XHRodG1sOiBvYmplY3Quc3ViTGFiZWxUZXh0XG5cdFx0XHRcdHN0eWxlOiBAb3B0aW9ucy5zdWJMYWJlbFN0eWxlXG5cdFx0XHRcdGNsaXA6IGZhbHNlXG5cdFx0XHRcdHN1cGVyTGF5ZXI6IEBsYWJlbFxuXHRcdFx0IyBBZGQgY29udGFpbmVyIHRvIGhlYWRlcnNDb250YWluZXJzIGFycmF5XG5cdFx0XHRAaGVhZGVyc0NvbnRhaW5lcnMucHVzaCBAY29udGFpbmVyXG5cblx0YmluZEV2ZW50czogKCkgPT5cblx0XHQjIFRoaXMgaXMgdGhlIGZ1biBwYXJ0OlxuXHRcdEBzY3JvbGxlci5vbiBFdmVudHMuTW92ZSwgPT5cblx0XHRcdCMgVXBkYXRlIHlPZmZzZXQgZWFjaCB0aW1lIHRoZSBzY3JvbGwgbW92ZXNcblx0XHRcdEB5T2Zmc2V0ID0gQHNjcm9sbGVyLnNjcm9sbFlcblx0XHRcdCMgVXBkYXRlIGVhY2ggaGVhZGVyJ3MgeSBwb3NpdGlvbiBhY2NvcmRpbmcgdG8geU9mZnNldFxuXHRcdFx0Zm9yIGNvbnRhaW5lciwgaSBpbiBAaGVhZGVyc0NvbnRhaW5lcnNcblx0XHRcdFx0Y29udGFpbmVyLnkgPSBAZGF0YVtpXS55IC0gQHlPZmZzZXRcblx0XHRcdCMgSXRlcmF0ZSBzdG9yZWQgWSB2YWx1ZXMgaW4gJ2RhdGEnIHRvIGRldGVybWluZSB3aGljaCBoZWFkZXIgcmVtYWlucyBzdGF0aWM7IGFsc28sIGRldGVybWluZSB3aGVuIHRvIHRyYW5zaXRpb24gdG8gdGhlIG5leHQvcHJldmlvdXMgaGVhZGVyLlxuXHRcdFx0Zm9yIG9iamVjdCwgaSBpbiBAZGF0YVxuXHRcdFx0XHQjIEZpcnN0IGhlYWRlciBzaG91bGQgYmUgc3RpY2t5IGJ5IGRlZmF1bHQuLi5cblx0XHRcdFx0aWYgaSA9PSAwXG5cdFx0XHRcdFx0aWYgQGhlYWRlcnNDb250YWluZXJzWzBdLnkgPD0gQGZpeGVkXG5cdFx0XHRcdFx0XHRAaGVhZGVyc0NvbnRhaW5lcnNbMF0ueSA9IEBmaXhlZFxuXHRcdFx0XHQjIC4uLnVudGlsIHRoZSBuZXh0IGhlYWRlciB0cmllcyB0byBjb21lIGludG8gcGxhY2UuXG5cdFx0XHRcdGlmIGkgPiAwXG5cdFx0XHRcdFx0dGhpc21pblkgPSBvYmplY3QueSAtIEB0aHJlc2hvbGRcblx0XHRcdFx0XHR0aGlzbWF4WSA9IHRoaXNtaW5ZICsgQG9wdGlvbnMuaGVhZGVySGVpZ2h0ICsgQGZpeGVkXG5cdFx0XHRcdFx0aWYgQGhlYWRlcnNDb250YWluZXJzW2ldLnkgPCBAdGhyZXNob2xkXG5cdFx0XHRcdFx0XHQjIEhlYWRlcnMgdHJhbnNpdGlvbiFcblx0XHRcdFx0XHRcdEBoZWFkZXJzQ29udGFpbmVyc1tpLTFdLnkgPSBVdGlscy5tb2R1bGF0ZShAeU9mZnNldCwgW3RoaXNtaW5ZLCB0aGlzbWF4WV0sIFtAZml4ZWQsIEBvZmZzY3JlZW5dLCB0cnVlKVxuXHRcdFx0XHRcdGlmIEBoZWFkZXJzQ29udGFpbmVyc1tpXS55IDw9IEBmaXhlZFxuXHRcdFx0XHRcdFx0IyBTZXQgdGhlIG5ldyBvbmUgdG8gYmVjb21lIGEgZml4ZWQgaGVhZGVyLlxuXHRcdFx0XHRcdFx0QGhlYWRlcnNDb250YWluZXJzW2ldLnkgPSBAZml4ZWQiLCIjIEFkZCB0aGUgZm9sbG93aW5nIGxpbmUgdG8geW91ciBwcm9qZWN0IGluIEZyYW1lciBTdHVkaW8uIFxuIyBteU1vZHVsZSA9IHJlcXVpcmUgXCJteU1vZHVsZVwiXG4jIFJlZmVyZW5jZSB0aGUgY29udGVudHMgYnkgbmFtZSwgbGlrZSBteU1vZHVsZS5teUZ1bmN0aW9uKCkgb3IgbXlNb2R1bGUubXlWYXJcblxuZXhwb3J0cy5teVZhciA9IFwibXlWYXJpYWJsZVwiXG5cbmV4cG9ydHMubXlGdW5jdGlvbiA9IC0+XG5cdHByaW50IFwibXlGdW5jdGlvbiBpcyBydW5uaW5nXCJcblxuZXhwb3J0cy5teUFycmF5ID0gWzEsIDIsIDNdIl19
