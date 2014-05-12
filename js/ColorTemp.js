(function ($) {
$.fn.ColorTemp = function (options) {
	var defaults = {
		color1: [52, 152, 219],
		color2: [137, 224, 223],
		color3: [46, 204, 113],
		color4: [241, 196, 15],
		color5: [231, 76, 60],
		lowTemp: 0,
		highTemp: 110,
		property: "background"
	}
	var settings = $.extend({}, defaults, options);
	var temp = this.data("temp");
	var cr = (settings.highTemp-settings.lowTemp)*0.25;	
	var mr = (settings.highTemp-settings.lowTemp)*0.5;
	var wr = (settings.highTemp-settings.lowTemp)*0.75;		
	if (temp <= cr) {
			var cold = settings.color1;
			var warm = settings.color2;
			settings.highTemp = cr;
		}
		else if (temp >= cr && temp <= mr) {
			var cold = settings.color2;
			var warm = settings.color3;	
			settings.lowTemp = cr;
			settings.highTemp = mr;
		} 
		else if (temp >= mr && temp <= wr) {
			var cold = settings.color3;
			var warm = settings.color4;
			settings.lowTemp = mr;
			settings.highTemp = wr;
		}
		else if (temp >= wr)  {
			var cold = settings.color4;
			var warm = settings.color5;
			settings.lowTemp = wr;
		}
	if(temp <= settings.lowTemp){var tmp = settings.lowTemp;}
	else if(temp >= settings.highTemp){var tmp = settings.highTemp;}
	else{var tmp = temp;}
	var start = tmp-settings.lowTemp;
	var tempDiff = (settings.highTemp-settings.lowTemp);	
   var r = ((((warm[0]-cold[0])/tempDiff)*start)+cold[0]).toFixed();
	var g = ((((warm[1]-cold[1])/tempDiff)*start)+cold[1]).toFixed();
	var b = ((((warm[2]-cold[2])/tempDiff)*start)+cold[2]).toFixed();
	this.css(settings.property, "rgb("+r+","+g+","+b+")");
}
})(jQuery);