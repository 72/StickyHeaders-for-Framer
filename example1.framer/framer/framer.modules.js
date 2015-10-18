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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvc2V0ZW50YXlkb3MvR2l0SHViL1N0aWNreVN0YW1wcy1mb3ItRnJhbWVyL2V4YW1wbGUxLmZyYW1lci9tb2R1bGVzL1N0aWNreUhlYWRlcnMuY29mZmVlIiwiL1VzZXJzL3NldGVudGF5ZG9zL0dpdEh1Yi9TdGlja3lTdGFtcHMtZm9yLUZyYW1lci9leGFtcGxlMS5mcmFtZXIvbW9kdWxlcy9teU1vZHVsZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxJQUFBOzs7O0FBQU0sT0FBTyxDQUFDOzs7RUFFQSx1QkFBQyxPQUFEO0FBRVosUUFBQTtJQUZhLElBQUMsQ0FBQSw0QkFBRCxVQUFTOzs7OztVQUVkLENBQUMsT0FBUTs7O1dBQ1QsQ0FBQyxlQUFnQjs7O1dBQ2pCLENBQUMsY0FBZTs7O1dBQ2hCLENBQUMsY0FBZTs7O1dBQ2hCLENBQUMsZUFBZ0I7OztXQUNqQixDQUFDLFFBQVMsTUFBTSxDQUFDOzs7V0FDakIsQ0FBQyxTQUFVLE1BQU0sQ0FBQzs7O1dBQ2xCLENBQUMsYUFBYztRQUFBLEtBQUEsRUFBTyxPQUFQO1FBQWdCLFVBQUEsRUFBWSxJQUE1Qjs7OztXQUNmLENBQUMsZ0JBQWlCO1FBQUEsS0FBQSxFQUFPLE9BQVA7UUFBZ0IsVUFBQSxFQUFZLElBQTVCOzs7SUFFMUIsK0NBQU0sSUFBQyxDQUFBLE9BQVA7SUFFQSxJQUFDLENBQUEsSUFBRCxHQUFRLElBQUMsQ0FBQSxPQUFPLENBQUM7SUFFakIsSUFBQyxDQUFBLFNBQUQsR0FBYSxDQUFDLElBQUMsQ0FBQSxPQUFPLENBQUM7SUFFdkIsSUFBQyxDQUFBLEtBQUQsR0FBUyxJQUFDLENBQUEsSUFBSyxDQUFBLENBQUEsQ0FBRSxDQUFDO0lBRWxCLElBQUMsQ0FBQSxTQUFELEdBQWEsSUFBQyxDQUFBLEtBQUQsR0FBUyxJQUFDLENBQUEsT0FBTyxDQUFDO0lBRS9CLElBQUMsQ0FBQSxpQkFBRCxHQUFxQjtJQUVyQixJQUFDLENBQUEsS0FBRCxDQUFBO0lBQ0EsSUFBQyxDQUFBLGFBQUQsQ0FBQTtJQUNBLElBQUMsQ0FBQSxVQUFELENBQUE7RUExQlk7OzBCQTRCYixLQUFBLEdBQU8sU0FBQTtJQUVOLElBQUMsQ0FBQSxRQUFELEdBQWdCLElBQUEsZUFBQSxDQUNmO01BQUEsS0FBQSxFQUFPLElBQUMsQ0FBQSxPQUFPLENBQUMsS0FBaEI7TUFDQSxNQUFBLEVBQVEsSUFBQyxDQUFBLE9BQU8sQ0FBQyxNQURqQjtNQUVBLGdCQUFBLEVBQWtCLEtBRmxCO01BR0EsZUFBQSxFQUFpQixPQUhqQjtNQUlBLFVBQUEsRUFBWSxJQUpaO0tBRGU7V0FPaEIsSUFBQyxDQUFBLElBQUQsR0FBWSxJQUFBLEtBQUEsQ0FDWDtNQUFBLEtBQUEsRUFBTyxJQUFDLENBQUEsT0FBTyxDQUFDLEtBQWhCO01BQ0EsTUFBQSxFQUFRLElBQUMsQ0FBQSxPQUFPLENBQUMsWUFEakI7TUFFQSxLQUFBLEVBQU8sSUFBQyxDQUFBLE9BQU8sQ0FBQyxXQUZoQjtNQUdBLGVBQUEsRUFBaUIsSUFIakI7TUFJQSxVQUFBLEVBQVksSUFBQyxDQUFBLFFBQVEsQ0FBQyxPQUp0QjtLQURXO0VBVE47OzBCQWdCUCxhQUFBLEdBQWUsU0FBQTtBQUVkLFFBQUE7QUFBQTtBQUFBO1NBQUEsNkNBQUE7O01BRUMsSUFBQyxDQUFBLFNBQUQsR0FBaUIsSUFBQSxLQUFBLENBQ2hCO1FBQUEsS0FBQSxFQUFPLElBQUMsQ0FBQSxPQUFPLENBQUMsV0FBaEI7UUFDQSxNQUFBLEVBQVEsSUFBQyxDQUFBLE9BQU8sQ0FBQyxZQURqQjtRQUVBLENBQUEsRUFBRyxNQUFNLENBQUMsQ0FGVjtRQUdBLGVBQUEsRUFBaUIsSUFIakI7UUFJQSxJQUFBLEVBQU0sS0FKTjtRQUtBLFVBQUEsRUFBWSxJQUxaO09BRGdCO01BUWpCLElBQUMsQ0FBQSxLQUFELEdBQWEsSUFBQSxLQUFBLENBQ1o7UUFBQSxJQUFBLEVBQU0sTUFBTSxDQUFDLFNBQWI7UUFDQSxLQUFBLEVBQU8sSUFBQyxDQUFBLE9BQU8sQ0FBQyxVQURoQjtRQUVBLElBQUEsRUFBTSxLQUZOO1FBR0EsVUFBQSxFQUFZLElBQUMsQ0FBQSxTQUhiO09BRFk7TUFNYixJQUFDLENBQUEsUUFBRCxHQUFnQixJQUFBLEtBQUEsQ0FDZjtRQUFBLElBQUEsRUFBTSxNQUFNLENBQUMsWUFBYjtRQUNBLEtBQUEsRUFBTyxJQUFDLENBQUEsT0FBTyxDQUFDLGFBRGhCO1FBRUEsSUFBQSxFQUFNLEtBRk47UUFHQSxVQUFBLEVBQVksSUFBQyxDQUFBLEtBSGI7T0FEZTttQkFNaEIsSUFBQyxDQUFBLGlCQUFpQixDQUFDLElBQW5CLENBQXdCLElBQUMsQ0FBQSxTQUF6QjtBQXRCRDs7RUFGYzs7MEJBMEJmLFVBQUEsR0FBWSxTQUFBO1dBRVgsSUFBQyxDQUFBLFFBQVEsQ0FBQyxFQUFWLENBQWEsTUFBTSxDQUFDLElBQXBCLEVBQTBCLENBQUEsU0FBQSxLQUFBO2FBQUEsU0FBQTtBQUV6QixZQUFBO1FBQUEsS0FBQyxDQUFBLE9BQUQsR0FBVyxLQUFDLENBQUEsUUFBUSxDQUFDO0FBRXJCO0FBQUEsYUFBQSw2Q0FBQTs7VUFDQyxTQUFTLENBQUMsQ0FBVixHQUFjLEtBQUMsQ0FBQSxJQUFLLENBQUEsQ0FBQSxDQUFFLENBQUMsQ0FBVCxHQUFhLEtBQUMsQ0FBQTtBQUQ3QjtBQUdBO0FBQUE7YUFBQSxnREFBQTs7VUFFQyxJQUFHLENBQUEsS0FBSyxDQUFSO1lBQ0MsSUFBRyxLQUFDLENBQUEsaUJBQWtCLENBQUEsQ0FBQSxDQUFFLENBQUMsQ0FBdEIsSUFBMkIsS0FBQyxDQUFBLEtBQS9CO2NBQ0MsS0FBQyxDQUFBLGlCQUFrQixDQUFBLENBQUEsQ0FBRSxDQUFDLENBQXRCLEdBQTBCLEtBQUMsQ0FBQSxNQUQ1QjthQUREOztVQUlBLElBQUcsQ0FBQSxHQUFJLENBQVA7WUFDQyxRQUFBLEdBQVcsTUFBTSxDQUFDLENBQVAsR0FBVyxLQUFDLENBQUE7WUFDdkIsUUFBQSxHQUFXLFFBQUEsR0FBVyxLQUFDLENBQUEsT0FBTyxDQUFDLFlBQXBCLEdBQW1DLEtBQUMsQ0FBQTtZQUMvQyxJQUFHLEtBQUMsQ0FBQSxpQkFBa0IsQ0FBQSxDQUFBLENBQUUsQ0FBQyxDQUF0QixHQUEwQixLQUFDLENBQUEsU0FBOUI7Y0FFQyxLQUFDLENBQUEsaUJBQWtCLENBQUEsQ0FBQSxHQUFFLENBQUYsQ0FBSSxDQUFDLENBQXhCLEdBQTRCLEtBQUssQ0FBQyxRQUFOLENBQWUsS0FBQyxDQUFBLE9BQWhCLEVBQXlCLENBQUMsUUFBRCxFQUFXLFFBQVgsQ0FBekIsRUFBK0MsQ0FBQyxLQUFDLENBQUEsS0FBRixFQUFTLEtBQUMsQ0FBQSxTQUFWLENBQS9DLEVBQXFFLElBQXJFLEVBRjdCOztZQUdBLElBQUcsS0FBQyxDQUFBLGlCQUFrQixDQUFBLENBQUEsQ0FBRSxDQUFDLENBQXRCLElBQTJCLEtBQUMsQ0FBQSxLQUEvQjsyQkFFQyxLQUFDLENBQUEsaUJBQWtCLENBQUEsQ0FBQSxDQUFFLENBQUMsQ0FBdEIsR0FBMEIsS0FBQyxDQUFBLE9BRjVCO2FBQUEsTUFBQTttQ0FBQTthQU5EO1dBQUEsTUFBQTtpQ0FBQTs7QUFORDs7TUFQeUI7SUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQTFCO0VBRlc7Ozs7R0F4RXVCOzs7O0FDSXBDLE9BQU8sQ0FBQyxLQUFSLEdBQWdCOztBQUVoQixPQUFPLENBQUMsVUFBUixHQUFxQixTQUFBO1NBQ3BCLEtBQUEsQ0FBTSx1QkFBTjtBQURvQjs7QUFHckIsT0FBTyxDQUFDLE9BQVIsR0FBa0IsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY2xhc3MgZXhwb3J0cy5TdGlja3lIZWFkZXJzIGV4dGVuZHMgTGF5ZXJcblxuXHRjb25zdHJ1Y3RvcjogKEBvcHRpb25zPXt9KSAtPlxuXHRcdCMgU2V0IERlZmF1bHRzXG5cdFx0QG9wdGlvbnMuZGF0YSA/PSBudWxsXG5cdFx0QG9wdGlvbnMuaGVhZGVySGVpZ2h0ID89IDEwMFxuXHRcdEBvcHRpb25zLmhlYWRlcldpZHRoID89IDE2MFxuXHRcdEBvcHRpb25zLnNjcm9sbEltYWdlID89IG51bGxcblx0XHRAb3B0aW9ucy5zY3JvbGxIZWlnaHQgPz0gMTAwXG5cdFx0QG9wdGlvbnMud2lkdGggPz0gU2NyZWVuLndpZHRoXG5cdFx0QG9wdGlvbnMuaGVpZ2h0ID89IFNjcmVlbi5oZWlnaHRcblx0XHRAb3B0aW9ucy5sYWJlbFN0eWxlID89IGNvbG9yOiBcImJsYWNrXCIsIGJhY2tncm91bmQ6IG51bGxcblx0XHRAb3B0aW9ucy5zdWJMYWJlbFN0eWxlID89IGNvbG9yOiBcImJsYWNrXCIsIGJhY2tncm91bmQ6IG51bGxcblxuXHRcdHN1cGVyIEBvcHRpb25zXG5cblx0XHRAZGF0YSA9IEBvcHRpb25zLmRhdGFcblx0XHQjIFZhbHVlIGZvciBoZWFkZXJzIHRvIGJlIGNvbnNpZGVyZWQgYmVpbmcgJ29mZnNjcmVlbidcblx0XHRAb2Zmc2NyZWVuID0gLUBvcHRpb25zLmhlYWRlckhlaWdodFxuXHRcdCMgRmlyc3QgeSB2YWx1ZSBiZWNvbWVzICdmaXhlZCcgcG9zaXRpb24gYnkgZGVmYXVsdFxuXHRcdEBmaXhlZCA9IEBkYXRhWzBdLnlcblx0XHQjIFJhbmdlIGluIHdoaWNoIGEgbmV3IGhlYWRlciB3aWxsIHB1c2ggdGhlIHByZXZpb3VzIG9uZVxuXHRcdEB0aHJlc2hvbGQgPSBAZml4ZWQgKyBAb3B0aW9ucy5oZWFkZXJIZWlnaHRcblx0XHQjIEFycmF5IHRvIGhvbGQgaGVhZGVycy9jb250YWluZXJzXG5cdFx0QGhlYWRlcnNDb250YWluZXJzID0gW11cblx0XHQjIEJ1aWxkXG5cdFx0QHNldHVwKClcblx0XHRAY3JlYXRlSGVhZGVycygpXG5cdFx0QGJpbmRFdmVudHMoKVxuXG5cdHNldHVwOiAoKSA9PlxuXHRcdCMgQ3JlYXRlIFNjcm9sbCBDb21wb25lbnRcblx0XHRAc2Nyb2xsZXIgPSBuZXcgU2Nyb2xsQ29tcG9uZW50XG5cdFx0XHR3aWR0aDogQG9wdGlvbnMud2lkdGhcblx0XHRcdGhlaWdodDogQG9wdGlvbnMuaGVpZ2h0XG5cdFx0XHRzY3JvbGxIb3Jpem9udGFsOiBmYWxzZVxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCJcblx0XHRcdHN1cGVyTGF5ZXI6IEBcblx0XHQjIENvbnRlbnQgZm9yIHNjcm9sbCBjb21wb25lbnRcblx0XHRAbGlzdCA9IG5ldyBMYXllclxuXHRcdFx0d2lkdGg6IEBvcHRpb25zLndpZHRoXG5cdFx0XHRoZWlnaHQ6IEBvcHRpb25zLnNjcm9sbEhlaWdodFxuXHRcdFx0aW1hZ2U6IEBvcHRpb25zLnNjcm9sbEltYWdlXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IG51bGxcblx0XHRcdHN1cGVyTGF5ZXI6IEBzY3JvbGxlci5jb250ZW50XG5cblx0Y3JlYXRlSGVhZGVyczogKCkgPT5cblx0XHQjIEl0ZXJhdGUgJ2RhdGEnXG5cdFx0Zm9yIG9iamVjdCwgaSBpbiBAZGF0YVxuXHRcdFx0IyBDcmVhdGUgaGVhZGVyIGNvbnRhaW5lclxuXHRcdFx0QGNvbnRhaW5lciA9IG5ldyBMYXllclxuXHRcdFx0XHR3aWR0aDogQG9wdGlvbnMuaGVhZGVyV2lkdGhcblx0XHRcdFx0aGVpZ2h0OiBAb3B0aW9ucy5oZWFkZXJIZWlnaHRcblx0XHRcdFx0eTogb2JqZWN0Lnlcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBudWxsXG5cdFx0XHRcdGNsaXA6IGZhbHNlXG5cdFx0XHRcdHN1cGVyTGF5ZXI6IEBcblx0XHRcdCMgQ3JlYXRlIG1haW4gbGFiZWxcblx0XHRcdEBsYWJlbCA9IG5ldyBMYXllclxuXHRcdFx0XHRodG1sOiBvYmplY3QubGFiZWxUZXh0XG5cdFx0XHRcdHN0eWxlOiBAb3B0aW9ucy5sYWJlbFN0eWxlXG5cdFx0XHRcdGNsaXA6IGZhbHNlXG5cdFx0XHRcdHN1cGVyTGF5ZXI6IEBjb250YWluZXJcblx0XHRcdCMgQWRkIHN1YkxhYmVsXG5cdFx0XHRAc3ViTGFiZWwgPSBuZXcgTGF5ZXJcblx0XHRcdFx0aHRtbDogb2JqZWN0LnN1YkxhYmVsVGV4dFxuXHRcdFx0XHRzdHlsZTogQG9wdGlvbnMuc3ViTGFiZWxTdHlsZVxuXHRcdFx0XHRjbGlwOiBmYWxzZVxuXHRcdFx0XHRzdXBlckxheWVyOiBAbGFiZWxcblx0XHRcdCMgQWRkIGNvbnRhaW5lciB0byBoZWFkZXJzQ29udGFpbmVycyBhcnJheVxuXHRcdFx0QGhlYWRlcnNDb250YWluZXJzLnB1c2ggQGNvbnRhaW5lclxuXG5cdGJpbmRFdmVudHM6ICgpID0+XG5cdFx0IyBUaGlzIGlzIHRoZSBmdW4gcGFydDpcblx0XHRAc2Nyb2xsZXIub24gRXZlbnRzLk1vdmUsID0+XG5cdFx0XHQjIFVwZGF0ZSB5T2Zmc2V0IGVhY2ggdGltZSB0aGUgc2Nyb2xsIG1vdmVzXG5cdFx0XHRAeU9mZnNldCA9IEBzY3JvbGxlci5zY3JvbGxZXG5cdFx0XHQjIFVwZGF0ZSBlYWNoIGhlYWRlcidzIHkgcG9zaXRpb24gYWNjb3JkaW5nIHRvIHlPZmZzZXRcblx0XHRcdGZvciBjb250YWluZXIsIGkgaW4gQGhlYWRlcnNDb250YWluZXJzXG5cdFx0XHRcdGNvbnRhaW5lci55ID0gQGRhdGFbaV0ueSAtIEB5T2Zmc2V0XG5cdFx0XHQjIEl0ZXJhdGUgc3RvcmVkIFkgdmFsdWVzIGluICdkYXRhJyB0byBkZXRlcm1pbmUgd2hpY2ggaGVhZGVyIHJlbWFpbnMgc3RhdGljOyBhbHNvLCBkZXRlcm1pbmUgd2hlbiB0byB0cmFuc2l0aW9uIHRvIHRoZSBuZXh0L3ByZXZpb3VzIGhlYWRlci5cblx0XHRcdGZvciBvYmplY3QsIGkgaW4gQGRhdGFcblx0XHRcdFx0IyBGaXJzdCBoZWFkZXIgc2hvdWxkIGJlIHN0aWNreSBieSBkZWZhdWx0Li4uXG5cdFx0XHRcdGlmIGkgPT0gMFxuXHRcdFx0XHRcdGlmIEBoZWFkZXJzQ29udGFpbmVyc1swXS55IDw9IEBmaXhlZFxuXHRcdFx0XHRcdFx0QGhlYWRlcnNDb250YWluZXJzWzBdLnkgPSBAZml4ZWRcblx0XHRcdFx0IyAuLi51bnRpbCB0aGUgbmV4dCBoZWFkZXIgdHJpZXMgdG8gY29tZSBpbnRvIHBsYWNlLlxuXHRcdFx0XHRpZiBpID4gMFxuXHRcdFx0XHRcdHRoaXNtaW5ZID0gb2JqZWN0LnkgLSBAdGhyZXNob2xkXG5cdFx0XHRcdFx0dGhpc21heFkgPSB0aGlzbWluWSArIEBvcHRpb25zLmhlYWRlckhlaWdodCArIEBmaXhlZFxuXHRcdFx0XHRcdGlmIEBoZWFkZXJzQ29udGFpbmVyc1tpXS55IDwgQHRocmVzaG9sZFxuXHRcdFx0XHRcdFx0IyBIZWFkZXJzIHRyYW5zaXRpb24hXG5cdFx0XHRcdFx0XHRAaGVhZGVyc0NvbnRhaW5lcnNbaS0xXS55ID0gVXRpbHMubW9kdWxhdGUoQHlPZmZzZXQsIFt0aGlzbWluWSwgdGhpc21heFldLCBbQGZpeGVkLCBAb2Zmc2NyZWVuXSwgdHJ1ZSlcblx0XHRcdFx0XHRpZiBAaGVhZGVyc0NvbnRhaW5lcnNbaV0ueSA8PSBAZml4ZWRcblx0XHRcdFx0XHRcdCMgU2V0IHRoZSBuZXcgb25lIHRvIGJlY29tZSBhIGZpeGVkIGhlYWRlci5cblx0XHRcdFx0XHRcdEBoZWFkZXJzQ29udGFpbmVyc1tpXS55ID0gQGZpeGVkIiwiIyBBZGQgdGhlIGZvbGxvd2luZyBsaW5lIHRvIHlvdXIgcHJvamVjdCBpbiBGcmFtZXIgU3R1ZGlvLiBcbiMgbXlNb2R1bGUgPSByZXF1aXJlIFwibXlNb2R1bGVcIlxuIyBSZWZlcmVuY2UgdGhlIGNvbnRlbnRzIGJ5IG5hbWUsIGxpa2UgbXlNb2R1bGUubXlGdW5jdGlvbigpIG9yIG15TW9kdWxlLm15VmFyXG5cbmV4cG9ydHMubXlWYXIgPSBcIm15VmFyaWFibGVcIlxuXG5leHBvcnRzLm15RnVuY3Rpb24gPSAtPlxuXHRwcmludCBcIm15RnVuY3Rpb24gaXMgcnVubmluZ1wiXG5cbmV4cG9ydHMubXlBcnJheSA9IFsxLCAyLCAzXSJdfQ==
