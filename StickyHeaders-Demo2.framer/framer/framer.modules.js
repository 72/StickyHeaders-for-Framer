require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"StickyHeaders":[function(require,module,exports){

/*
StickyHeaders for Framer
By @72mena
 */
exports.StickyHeaders = (function() {
  function StickyHeaders() {}

  StickyHeaders.enableFor = function(sC, topMargin) {
    var dataSH, header, i, j, len, stickyHeaders;
    dataSH = [];
    if (topMargin == null) {
      topMargin = 0;
    }
    stickyHeaders = sC.content.childrenWithName("StickyHeader");
    if (stickyHeaders.length > 0) {
      for (i = j = 0, len = stickyHeaders.length; j < len; i = ++j) {
        header = stickyHeaders[i];
        dataSH.push(header.y);
      }
    }
    return sC.content.on("change:y", function() {
      var currentY, k, len1, prevMaxY, prevStickyPosition, results;
      if (stickyHeaders.length > 0) {
        results = [];
        for (i = k = 0, len1 = stickyHeaders.length; k < len1; i = ++k) {
          header = stickyHeaders[i];
          header.y = dataSH[i];
          currentY = dataSH[i] - sC.scrollY;
          if (i > 0) {
            prevStickyPosition = dataSH[i] - stickyHeaders[i - 1].height;
            prevMaxY = stickyHeaders[i - 1].height + topMargin;
            if (currentY < prevMaxY) {
              stickyHeaders[i - 1].y = prevStickyPosition;
            }
          }
          if (currentY <= topMargin) {
            results.push(header.y = sC.scrollY + topMargin);
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


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uL21vZHVsZXMvU3RpY2t5SGVhZGVycy5jb2ZmZWUiLCJub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiMjI1xuU3RpY2t5SGVhZGVycyBmb3IgRnJhbWVyXG5CeSBANzJtZW5hXG4jIyNcbmNsYXNzIGV4cG9ydHMuU3RpY2t5SGVhZGVyc1xuXG5cdEBlbmFibGVGb3I6IChzQywgdG9wTWFyZ2luKSAtPlxuXG5cdFx0ZGF0YVNIID0gW11cblx0XHR0b3BNYXJnaW4gPz0gMFxuXG5cdFx0IyBDaGVjayBmb3IgU3RpY2t5SGVhZGVycy5cblx0XHRzdGlja3lIZWFkZXJzID0gc0MuY29udGVudC5jaGlsZHJlbldpdGhOYW1lKFwiU3RpY2t5SGVhZGVyXCIpXG5cdFx0aWYgc3RpY2t5SGVhZGVycy5sZW5ndGggPiAwXG5cdFx0XHRmb3IgaGVhZGVyLCBpIGluIHN0aWNreUhlYWRlcnNcblx0XHRcdFx0ZGF0YVNILnB1c2goaGVhZGVyLnkpXG5cblx0XHQjIFNjcm9sbCBsb2dpYy4gVGhpcyBmaXggZGV0ZWN0cyBhbmltYXRpb25zIGFuZCBtb3VzZXdoZWVsLlxuXHRcdHNDLmNvbnRlbnQub24gXCJjaGFuZ2U6eVwiLCAtPlxuXG5cdFx0XHRpZiBzdGlja3lIZWFkZXJzLmxlbmd0aCA+IDBcblx0XHRcdFx0Zm9yIGhlYWRlciwgaSBpbiBzdGlja3lIZWFkZXJzXG5cblx0XHRcdFx0XHRoZWFkZXIueSA9IGRhdGFTSFtpXVxuXHRcdFx0XHRcdGN1cnJlbnRZID0gZGF0YVNIW2ldIC0gc0Muc2Nyb2xsWVxuXG5cdFx0XHRcdFx0aWYgaSA+IDBcblx0XHRcdFx0XHRcdHByZXZTdGlja3lQb3NpdGlvbiA9IGRhdGFTSFtpXSAtIHN0aWNreUhlYWRlcnNbaS0xXS5oZWlnaHRcblx0XHRcdFx0XHRcdHByZXZNYXhZID0gc3RpY2t5SGVhZGVyc1tpLTFdLmhlaWdodCArIHRvcE1hcmdpblxuXG5cdFx0XHRcdFx0XHRpZiBjdXJyZW50WSA8IHByZXZNYXhZXG5cdFx0XHRcdFx0XHRcdHN0aWNreUhlYWRlcnNbaS0xXS55ID0gcHJldlN0aWNreVBvc2l0aW9uXG5cblx0XHRcdFx0XHRpZiBjdXJyZW50WSA8PSB0b3BNYXJnaW5cblx0XHRcdFx0XHRcdGhlYWRlci55ID0gc0Muc2Nyb2xsWSArIHRvcE1hcmdpbiIsIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQ0FBOztBREFBOzs7O0FBSU0sT0FBTyxDQUFDOzs7RUFFYixhQUFDLENBQUEsU0FBRCxHQUFZLFNBQUMsRUFBRCxFQUFLLFNBQUw7QUFFWCxRQUFBO0lBQUEsTUFBQSxHQUFTOztNQUNULFlBQWE7O0lBR2IsYUFBQSxHQUFnQixFQUFFLENBQUMsT0FBTyxDQUFDLGdCQUFYLENBQTRCLGNBQTVCO0lBQ2hCLElBQUcsYUFBYSxDQUFDLE1BQWQsR0FBdUIsQ0FBMUI7QUFDQyxXQUFBLHVEQUFBOztRQUNDLE1BQU0sQ0FBQyxJQUFQLENBQVksTUFBTSxDQUFDLENBQW5CO0FBREQsT0FERDs7V0FLQSxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQVgsQ0FBYyxVQUFkLEVBQTBCLFNBQUE7QUFFekIsVUFBQTtNQUFBLElBQUcsYUFBYSxDQUFDLE1BQWQsR0FBdUIsQ0FBMUI7QUFDQzthQUFBLHlEQUFBOztVQUVDLE1BQU0sQ0FBQyxDQUFQLEdBQVcsTUFBTyxDQUFBLENBQUE7VUFDbEIsUUFBQSxHQUFXLE1BQU8sQ0FBQSxDQUFBLENBQVAsR0FBWSxFQUFFLENBQUM7VUFFMUIsSUFBRyxDQUFBLEdBQUksQ0FBUDtZQUNDLGtCQUFBLEdBQXFCLE1BQU8sQ0FBQSxDQUFBLENBQVAsR0FBWSxhQUFjLENBQUEsQ0FBQSxHQUFFLENBQUYsQ0FBSSxDQUFDO1lBQ3BELFFBQUEsR0FBVyxhQUFjLENBQUEsQ0FBQSxHQUFFLENBQUYsQ0FBSSxDQUFDLE1BQW5CLEdBQTRCO1lBRXZDLElBQUcsUUFBQSxHQUFXLFFBQWQ7Y0FDQyxhQUFjLENBQUEsQ0FBQSxHQUFFLENBQUYsQ0FBSSxDQUFDLENBQW5CLEdBQXVCLG1CQUR4QjthQUpEOztVQU9BLElBQUcsUUFBQSxJQUFZLFNBQWY7eUJBQ0MsTUFBTSxDQUFDLENBQVAsR0FBVyxFQUFFLENBQUMsT0FBSCxHQUFhLFdBRHpCO1dBQUEsTUFBQTtpQ0FBQTs7QUFaRDt1QkFERDs7SUFGeUIsQ0FBMUI7RUFaVyJ9
