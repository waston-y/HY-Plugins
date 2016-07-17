(function($){

	$.fn.ContextMenu = function(options){
		if(!_isValid(options))
			return this; 

		var opts = $.extend(true, $.fn.ContextMenu.default, options); //覆盖默认参数
		
		return this.each(function(){
			var $this = $(this);  //获取当前dom的jQuery对象,这里指当前循环的dom对象
			$this.bind('click', function(event) {
				console.log($('#contextMask'));
				$('#contextMask').css('display', 'block');
			});
			_init();
			$this.onclick = btnClick();
		})
	}

	// 默认属性
	$.fn.ContextMenu.default = {
		list: [], //应当显示的列表集合 { 'label': '选项1', callback: function(){//....do something....//}}
		listStyle: 'none',	// css中的listStyle属性(采用ul标签)
		lineHeight: 30,
	}
	
	//私有方法，检测参数是否合法
    function _isValid(options) {
        return !options || (options && typeof options === "object") ? true : false;
    }

    function _init(){
    	var mask = $("<div></div>",{
    		id: 'contextMask',
    		click: function(){
    			$(this).css('display','none');
    		}
    	}).css({
    		'display': 'none',
    		'z-index': '999',
    		'height': '100%',
    		'width': '100%',
    		'background':'black',
    		'position':'absolute',
    		'top': 0
    	}).appendTo('body');
    }

    function btnClick(){
    	console.log('asdaddsa');
    }

})(jQuery);