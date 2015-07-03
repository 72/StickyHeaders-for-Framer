require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"StickyStamps":[function(require,module,exports){
var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

exports.StickyStamps = (function(superClass) {
  extend(StickyStamps, superClass);

  function StickyStamps(options) {
    var base, base1, base2, base3, base4, base5, base6, base7, base8;
    this.options = options != null ? options : {};
    this.bindEvents = bind(this.bindEvents, this);
    this.createStamps = bind(this.createStamps, this);
    this.setup = bind(this.setup, this);
    if ((base = this.options).data == null) {
      base.data = null;
    }
    if ((base1 = this.options).stampHeight == null) {
      base1.stampHeight = 100;
    }
    if ((base2 = this.options).stampWidth == null) {
      base2.stampWidth = 160;
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
    StickyStamps.__super__.constructor.call(this, this.options);
    this.data = this.options.data;
    this.offscreen = -this.options.stampHeight;
    this.fixed = this.data[0].y;
    this.threshold = this.fixed + this.options.stampHeight;
    this.timeStamps = [];
    this.setup();
    this.createStamps();
    this.bindEvents();
  }

  StickyStamps.prototype.setup = function() {
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

  StickyStamps.prototype.createStamps = function() {
    var i, j, len, object, ref, results;
    ref = this.data;
    results = [];
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      object = ref[i];
      this.container = new Layer({
        width: this.options.stampWidth,
        height: this.options.stampHeight,
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
      results.push(this.timeStamps.push(this.container));
    }
    return results;
  };

  StickyStamps.prototype.bindEvents = function() {
    return this.scroller.on(Events.Move, (function(_this) {
      return function() {
        var i, j, k, len, len1, object, ref, ref1, results, stamp, thismaxY, thisminY;
        _this.yOffset = _this.scroller.scrollY;
        ref = _this.timeStamps;
        for (i = j = 0, len = ref.length; j < len; i = ++j) {
          stamp = ref[i];
          stamp.y = _this.data[i].y - _this.yOffset;
        }
        ref1 = _this.data;
        results = [];
        for (i = k = 0, len1 = ref1.length; k < len1; i = ++k) {
          object = ref1[i];
          if (i === 0) {
            if (_this.timeStamps[0].y <= _this.fixed) {
              _this.timeStamps[0].y = _this.fixed;
            }
          }
          if (i > 0) {
            thisminY = object.y - _this.threshold;
            thismaxY = thisminY + _this.options.stampHeight + _this.fixed;
            if (_this.timeStamps[i].y < _this.threshold) {
              _this.timeStamps[i - 1].y = Utils.modulate(_this.yOffset, [thisminY, thismaxY], [_this.fixed, _this.offscreen], true);
            }
            if (_this.timeStamps[i].y <= _this.fixed) {
              results.push(_this.timeStamps[i].y = _this.fixed);
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

  return StickyStamps;

})(Layer);



},{}],"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];



},{}]},{},[])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvc2V0ZW50YXlkb3MvR2l0SHViL3N0aWNreVN0YW1wcy1GcmFtZXIvZXhhbXBsZTIuZnJhbWVyL21vZHVsZXMvU3RpY2t5U3RhbXBzLmNvZmZlZSIsIi9Vc2Vycy9zZXRlbnRheWRvcy9HaXRIdWIvc3RpY2t5U3RhbXBzLUZyYW1lci9leGFtcGxlMi5mcmFtZXIvbW9kdWxlcy9teU1vZHVsZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxJQUFBOzs2QkFBQTs7QUFBQSxPQUFhLENBQUM7QUFFYixrQ0FBQSxDQUFBOztBQUFhLEVBQUEsc0JBQUMsT0FBRCxHQUFBO0FBRVosUUFBQSw0REFBQTtBQUFBLElBRmEsSUFBQyxDQUFBLDRCQUFELFVBQVMsRUFFdEIsQ0FBQTtBQUFBLGlEQUFBLENBQUE7QUFBQSxxREFBQSxDQUFBO0FBQUEsdUNBQUEsQ0FBQTs7VUFBUSxDQUFDLE9BQVE7S0FBakI7O1dBQ1EsQ0FBQyxjQUFlO0tBRHhCOztXQUVRLENBQUMsYUFBYztLQUZ2Qjs7V0FHUSxDQUFDLGNBQWU7S0FIeEI7O1dBSVEsQ0FBQyxlQUFnQjtLQUp6Qjs7V0FLUSxDQUFDLFFBQVMsTUFBTSxDQUFDO0tBTHpCOztXQU1RLENBQUMsU0FBVSxNQUFNLENBQUM7S0FOMUI7O1dBT1EsQ0FBQyxhQUFjO0FBQUEsUUFBQSxLQUFBLEVBQU8sT0FBUDtBQUFBLFFBQWdCLFVBQUEsRUFBWSxJQUE1Qjs7S0FQdkI7O1dBUVEsQ0FBQyxnQkFBaUI7QUFBQSxRQUFBLEtBQUEsRUFBTyxPQUFQO0FBQUEsUUFBZ0IsVUFBQSxFQUFZLElBQTVCOztLQVIxQjtBQUFBLElBVUEsOENBQU0sSUFBQyxDQUFBLE9BQVAsQ0FWQSxDQUFBO0FBQUEsSUFZQSxJQUFDLENBQUEsSUFBRCxHQUFRLElBQUMsQ0FBQSxPQUFPLENBQUMsSUFa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QyxDQUFBLE9BQWhCLEVBQXlCLENBQUMsUUFBRCxFQUFXLFFBQVgsQ0FBekIsRUFBK0MsQ0FBQyxLQUFDLENBQUEsS0FBRixFQUFTLEtBQUMsQ0FBQSxTQUFWLENBQS9DLEVBQXFFLElBQXJFLENBQXJCLENBRkQ7YUFGQTtBQUtBLFlBQUEsSUFBRyxLQUFDLENBQUEsVUFBVyxDQUFBLENBQUEsQ0FBRSxDQUFDLENBQWYsSUFBb0IsS0FBQyxDQUFBLEtBQXhCOzJCQUVDLEtBQUMsQ0FBQSxVQUFXLENBQUEsQ0FBQSxDQUFFLENBQUMsQ0FBZixHQUFtQixLQUFDLENBQUEsT0FGckI7YUFBQSxNQUFBO21DQUFBO2FBTkQ7V0FBQSxNQUFBO2lDQUFBO1dBTkQ7QUFBQTt1QkFQeUI7TUFBQSxFQUFBO0lBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUExQixFQUZXO0VBQUEsQ0F0RVosQ0FBQTs7c0JBQUE7O0dBRmtDLE1BQW5DLENBQUE7Ozs7O0FDSUEsT0FBTyxDQUFDLEtBQVIsR0FBZ0IsWUFBaEIsQ0FBQTs7QUFBQSxPQUVPLENBQUMsVUFBUixHQUFxQixTQUFBLEdBQUE7U0FDcEIsS0FBQSxDQUFNLHVCQUFOLEVBRG9CO0FBQUEsQ0FGckIsQ0FBQTs7QUFBQSxPQUtPLENBQUMsT0FBUixHQUFrQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUxsQixDQUFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImNsYXNzIGV4cG9ydHMuU3RpY2t5U3RhbXBzIGV4dGVuZHMgTGF5ZXJcblxuXHRjb25zdHJ1Y3RvcjogKEBvcHRpb25zPXt9KSAtPlxuXHRcdCMgU2V0IERlZmF1bHRzXG5cdFx0QG9wdGlvbnMuZGF0YSA/PSBudWxsXG5cdFx0QG9wdGlvbnMuc3RhbXBIZWlnaHQgPz0gMTAwXG5cdFx0QG9wdGlvbnMuc3RhbXBXaWR0aCA/PSAxNjBcblx0XHRAb3B0aW9ucy5zY3JvbGxJbWFnZSA/PSBudWxsXG5cdFx0QG9wdGlvbnMuc2Nyb2xsSGVpZ2h0ID89IDEwMFxuXHRcdEBvcHRpb25zLndpZHRoID89IFNjcmVlbi53aWR0aFxuXHRcdEBvcHRpb25zLmhlaWdodCA/PSBTY3JlZW4uaGVpZ2h0XG5cdFx0QG9wdGlvbnMubGFiZWxTdHlsZSA/PSBjb2xvcjogXCJibGFja1wiLCBiYWNrZ3JvdW5kOiBudWxsXG5cdFx0QG9wdGlvbnMuc3ViTGFiZWxTdHlsZSA/PSBjb2xvcjogXCJibGFja1wiLCBiYWNrZ3JvdW5kOiBudWxsXG5cblx0XHRzdXBlciBAb3B0aW9uc1xuXHRcdCMgU2F2ZSAnRGF0YSdcblx0XHRAZGF0YSA9IEBvcHRpb25zLmRhdGFcblx0XHQjIFZhbHVlIGZvciBzdGFtcHMgdG8gYmUgY29uc2lkZXJlZCBiZWluZyAnb2Zmc2NyZWVuJ1xuXHRcdEBvZmZzY3JlZW4gPSAtQG9wdGlvbnMuc3RhbXBIZWlnaHRcblx0XHQjIEZpcnN0IHkgdmFsdWUgYmVjb21lcyAnZml4ZWQnIHBvc2l0aW9uIGJ5IGRlZmF1bHRcblx0XHRAZml4ZWQgPSBAZGF0YVswXS55XG5cdFx0IyBSYW5nZSBpbiB3aGljaCBhIG5ldyBzdGFtcCB3aWxsIHB1c2ggdGhlIHByZXZpb3VzIG9uZVxuXHRcdEB0aHJlc2hvbGQgPSBAZml4ZWQgKyBAb3B0aW9ucy5zdGFtcEhlaWdodFxuXHRcdCMgQXJyYXkgdG8gaG9sZCBzdGFtcHMgKGNhbGxlZCBjb250YWluZXJzKVxuXHRcdEB0aW1lU3RhbXBzID0gW11cblx0XHQjIEJ1aWxkXG5cdFx0QHNldHVwKClcblx0XHRAY3JlYXRlU3RhbXBzKClcblx0XHRAYmluZEV2ZW50cygpXG5cblx0c2V0dXA6ICgpID0+XG5cdFx0IyBDcmVhdGUgU2Nyb2xsIENvbXBvbmVudFxuXHRcdEBzY3JvbGxlciA9IG5ldyBTY3JvbGxDb21wb25lbnRcblx0XHRcdHdpZHRoOiBAb3B0aW9ucy53aWR0aFxuXHRcdFx0aGVpZ2h0OiBAb3B0aW9ucy5oZWlnaHRcblx0XHRcdHNjcm9sbEhvcml6b250YWw6IGZhbHNlXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIlxuXHRcdFx0c3VwZXJMYXllcjogQFxuXHRcdCMgQ29udGVudCBmb3Igc2Nyb2xsIGNvbXBvbmVudFxuXHRcdEBsaXN0ID0gbmV3IExheWVyXG5cdFx0XHR3aWR0aDogQG9wdGlvbnMud2lkdGhcblx0XHRcdGhlaWdodDogQG9wdGlvbnMuc2Nyb2xsSGVpZ2h0XG5cdFx0XHRpbWFnZTogQG9wdGlvbnMuc2Nyb2xsSW1hZ2Vcblx0XHRcdGJhY2tncm91bmRDb2xvcjogbnVsbFxuXHRcdFx0c3VwZXJMYXllcjogQHNjcm9sbGVyLmNvbnRlbnRcblxuXHRjcmVhdGVTdGFtcHM6ICgpID0+XG5cdFx0IyBJdGVyYXRlICdkYXRhJ1xuXHRcdGZvciBvYmplY3QsIGkgaW4gQGRhdGFcblx0XHRcdCMgQ3JlYXRlIHRpbWVzdGFtcC9zdGlja3kgY29udGFpbmVyXG5cdFx0XHRAY29udGFpbmVyID0gbmV3IExheWVyXG5cdFx0XHRcdHdpZHRoOiBAb3B0aW9ucy5zdGFtcFdpZHRoXG5cdFx0XHRcdGhlaWdodDogQG9wdGlvbnMuc3RhbXBIZWlnaHRcblx0XHRcdFx0eTogb2JqZWN0Lnlcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBudWxsXG5cdFx0XHRcdGNsaXA6IGZhbHNlXG5cdFx0XHRcdHN1cGVyTGF5ZXI6IEBcblx0XHRcdCMgQ3JlYXRlIG1haW4gbGFiZWxcblx0XHRcdEBsYWJlbCA9IG5ldyBMYXllclxuXHRcdFx0XHRodG1sOiBvYmplY3QubGFiZWxUZXh0XG5cdFx0XHRcdHN0eWxlOiBAb3B0aW9ucy5sYWJlbFN0eWxlXG5cdFx0XHRcdGNsaXA6IGZhbHNlXG5cdFx0XHRcdHN1cGVyTGF5ZXI6IEBjb250YWluZXJcblx0XHRcdCMgQWRkIHN1YkxhYmVsXG5cdFx0XHRAc3ViTGFiZWwgPSBuZXcgTGF5ZXJcblx0XHRcdFx0aHRtbDogb2JqZWN0LnN1YkxhYmVsVGV4dFxuXHRcdFx0XHRzdHlsZTogQG9wdGlvbnMuc3ViTGFiZWxTdHlsZVxuXHRcdFx0XHRjbGlwOiBmYWxzZVxuXHRcdFx0XHRzdXBlckxheWVyOiBAbGFiZWxcblx0XHRcdCMgQWRkIGNvbnRhaW5lciB0byB0aW1lU3RhbXBzIGFycmF5XG5cdFx0XHRAdGltZVN0YW1wcy5wdXNoIEBjb250YWluZXJcblxuXHRiaW5kRXZlbnRzOiAoKSA9PlxuXHRcdCMgVGhpcyBpcyB0aGUgZnVuIHBhcnQ6XG5cdFx0QHNjcm9sbGVyLm9uIEV2ZW50cy5Nb3ZlLCA9PlxuXHRcdFx0IyBVcGRhdGUgeU9mZnNldCBlYWNoIHRpbWUgdGhlIHNjcm9sbCBtb3Zlc1xuXHRcdFx0QHlPZmZzZXQgPSBAc2Nyb2xsZXIuc2Nyb2xsWVxuXHRcdFx0IyBVcGRhdGUgZWFjaCBzdGFtcCdzIHkgcG9zaXRpb24gYWNjb3JkaW5nIHRvIHlPZmZzZXRcblx0XHRcdGZvciBzdGFtcCwgaSBpbiBAdGltZVN0YW1wc1xuXHRcdFx0XHRzdGFtcC55ID0gQGRhdGFbaV0ueSAtIEB5T2Zmc2V0XG5cdFx0XHQjIEl0ZXJhdGUgc3RvcmVkIFkgdmFsdWVzIGluICdkYXRhJyB0byBkZXRlcm1pbmUgd2hpY2ggc3RhbXAgcmVtYWlucyBzdGF0aWM7IGFsc28sIGRldGVybWluZSB3aGVuIHRvIHRyYW5zaXRpb24gdG8gdGhlIG5leHQvcHJldmlvdXMgc3RhbXAuXG5cdFx0XHRmb3Igb2JqZWN0LCBpIGluIEBkYXRhXG5cdFx0XHRcdCMgRmlyc3Qgc3RhbXAgc2hvdWxkIGJlIHN0aWNreSBieSBkZWZhdWx0Li4uXG5cdFx0XHRcdGlmIGkgPT0gMFxuXHRcdFx0XHRcdGlmIEB0aW1lU3RhbXBzWzBdLnkgPD0gQGZpeGVkXG5cdFx0XHRcdFx0XHRAdGltZVN0YW1wc1swXS55ID0gQGZpeGVkXG5cdFx0XHRcdCMgLi4udW50aWwgdGhlIG5leHQgc3RhbXAgdHJpZXMgdG8gY29tZSBpbnRvIHBsYWNlLlxuXHRcdFx0XHRpZiBpID4gMFxuXHRcdFx0XHRcdHRoaXNtaW5ZID0gb2JqZWN0LnkgLSBAdGhyZXNob2xkXG5cdFx0XHRcdFx0dGhpc21heFkgPSB0aGlzbWluWSArIEBvcHRpb25zLnN0YW1wSGVpZ2h0ICsgQGZpeGVkXG5cdFx0XHRcdFx0aWYgQHRpbWVTdGFtcHNbaV0ueSA8IEB0aHJlc2hvbGRcblx0XHRcdFx0XHRcdCMgU3RhbXAgdHJhbnNpdGlvbiFcblx0XHRcdFx0XHRcdEB0aW1lU3RhbXBzW2ktMV0ueSA9IFV0aWxzLm1vZHVsYXRlKEB5T2Zmc2V0LCBbdGhpc21pblksIHRoaXNtYXhZXSwgW0BmaXhlZCwgQG9mZnNjcmVlbl0sIHRydWUpXG5cdFx0XHRcdFx0aWYgQHRpbWVTdGFtcHNbaV0ueSA8PSBAZml4ZWRcblx0XHRcdFx0XHRcdCMgU2V0IGl0IHRvIGJlY29tZSBhIGZpeGVkIHRpbWVzdGFtcC4uLiBmb3Igbm93LlxuXHRcdFx0XHRcdFx0QHRpbWVTdGFtcHNbaV0ueSA9IEBmaXhlZCIsIiMgQWRkIHRoZSBmb2xsb3dpbmcgbGluZSB0byB5b3VyIHByb2plY3QgaW4gRnJhbWVyIFN0dWRpby4gXG4jIG15TW9kdWxlID0gcmVxdWlyZSBcIm15TW9kdWxlXCJcbiMgUmVmZXJlbmNlIHRoZSBjb250ZW50cyBieSBuYW1lLCBsaWtlIG15TW9kdWxlLm15RnVuY3Rpb24oKSBvciBteU1vZHVsZS5teVZhclxuXG5leHBvcnRzLm15VmFyID0gXCJteVZhcmlhYmxlXCJcblxuZXhwb3J0cy5teUZ1bmN0aW9uID0gLT5cblx0cHJpbnQgXCJteUZ1bmN0aW9uIGlzIHJ1bm5pbmdcIlxuXG5leHBvcnRzLm15QXJyYXkgPSBbMSwgMiwgM10iXX0=
