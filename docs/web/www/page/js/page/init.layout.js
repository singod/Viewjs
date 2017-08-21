;(function(){
	/* 根据屏幕宽度动态调整尺寸大小 */
	document.documentElement.style.fontSize = (function(){
		var ratio = document.documentElement.clientWidth / 320;
		ratio = ratio > 1.3? 1.3: ratio;

		return Math.floor(ratio * 100) + "px";
	})();

	View.layout.setExpectedWidthHeightRatio(320 / 568).init({
		autoReLayoutWhenResize: true,
		layoutAsPcLandscape: function(width, height){
			document.body.style.cssText = "width: " + width + "px; height: " + height + "px; margin: 0 auto;";
		}
	}).doLayout();

	View.ready(function(){
		View.listAll().forEach(function(view){
			view.setLayoutAction(function(){
				var totalHeight = View.layout.getLayoutHeight();

				var headerObj = view.find("header"),
					bodyObj = view.find(".body");

				bodyObj.style.height = (totalHeight - headerObj.offsetHeight) + "px";
			}, true);
		});
	});
})();