(function($){

	$.fn.ContextMenu = function(options){
		if(!_isValid(options))
			return this; 

		var opts = $.extend(true, $.fn.ContextMenu.default, options); //覆盖默认参数
		
		return this.each(function(){
			var $this = $(this);  //获取当前dom的jQuery对象,这里指当前循环的dom对象
			$this.bind('click', function(event, opts) {
				$('#contextMask').css('display', 'block');
				console.log('X:'+ event.clientX +',Y:'+ event.clientY)
			});
			init(opts);
		})
	}

	// 默认属性
	$.fn.ContextMenu.default = {
		list: [], //应当显示的列表集合 { 'label': '选项1', callback: function(){//....do something....//}}
		listStyle: 'none',	// css中的listStyle属性(采用ul标签)
		lineHeight: 30,
	}
	
	/* 检测参数是否合法 */
    function _isValid(options) {
        return !options || (options && typeof options === "object") ? true : false;
    }

    /* 初始化插件 */
    function init(opts){
    	//添加
    	var mask = $("<div></div>",{
    		id: 'contextMask',	click: function(){close();}
    	}).css({
    		'display': 'none', 'z-index': '999', 'height': '100%',	'width': '100%',
    		'position':'absolute',	'top': 0
    	}).appendTo('body');
    	
    	var menu = $("<ul></ul>",{id: 'contextMenu'}).css({
    		'list-style': opts.listStyle,
    		'position': 'absolute',
    		'top': 20,
    		'left': 50
    	})appendTo(mask);

    	opts.list.forEach(function(element, index){
    		$('<li>'+element.label+'</li>',{ 
    			click: function(){
    				element.callback;
    			},
    			mouseenter: function(event) {
    				console.log(this);
    			}
    		}).css({
    			'line-height': opts.lineHeight,
    			'cursor': 'pointer',
    		}).appendTo(menu);
    	});
    }

    
    /* 关闭菜单 */
    function close(){
    	var mask = $('#contextMask');
    	if(mask)
    		mask.css('display', 'none');
    }

})(jQuery);