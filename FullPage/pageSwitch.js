(function($){
	var pageSwitch = (function(){
		function pageSwitch(element, options){
			this.settings = $.extend(true, $.fn.pageSwitch.default, options);
			this.element = element;
			this.init();
		}

		pageSwitch.prototype = {
			init: function(){

			}
		}
	})();


	// 挂载在jQuery的原型上
	$.fn.pageSwitch = function(options){
		return this.each(function(){
			var me = $(this),
				instance = me.data('pageSwitch');
			if(!instance){
				instance = new pageSwitch(me, options);
				me.data('pageSwitch', instance);
			}
		})
	};


	$.fn.pageSwitch.default = {
		selectors: {
			sections: '.sections',
			section: '.section',
			page: '.pages',
			active: '.active'
		},

		index: 0,  //默认第一页
		easing: 'ease',	 //滑动效果
		duration: 500,   //动画时间
		loop: false,	 //是否循环播放
		pagination: true,   //是否分页
		keyboard: true,   //是否触发键盘事件
		directive: 'vertical',  //滑动方向
		callback: ''
	}


})(jQuery);