var pager = {
	totalPage: 10,	//总页数
	currentPage: 1,		//当前页

	init: function(current, total){

		if(typeof(total) === 'number' && total <= 10){
			var items = [];  //分页器按钮集合
			for(var i = 1; i <= total; i++){
				var item = document.createElement("li");
				var a = document.createElement('a');
				a.innerHTML = i;
				item.appendChild(a);
				
				if( i == current){
					item.className = "item-active";
				}
				items.push(item);
			}
		}


		function compile(items){
			var ul = document.createElement('ul');
			
			var firstLi = document.createElement('li');
			var firstA = document.createElement('a');
			firstA.innerHTML = "上一页"
			firstLi.appendChild(firstA);
			firstLi.className = "previous";
			ul.appendChild(firstLi);

			appendList(items, ul);

			var lastLi = document.createElement('li');
			var lastA = document.createElement('a');
			lastA.innerHTML = "下一页"
			lastLi.appendChild(lastA);
			lastLi.className = "next";
			ul.appendChild(lastLi);

			var box = document.getElementsByClassName('pager')[0];
			box.appendChild(ul);		
		}


		function appendList(items, parent){
			if(items.length < 10){
				for(var i =0; i < items.length; i++){
					items[i].className = "item";
					parent.appendChild(items[i]);
				}
			}else{

			}
		}

		compile(items);
	}

}