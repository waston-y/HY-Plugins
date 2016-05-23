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
			firstA.innerHTML = "<<"
			firstLi.appendChild(firstA);
			ul.appendChild(firstLi);

			for(var i =0; i<items.length; i++){
				ul.appendChild(items[i]);
			}
			var lastLi = document.createElement('li');
			var lastA = document.createElement('a');
			lastA.innerHTML = ">>"
			lastLi.appendChild(lastA);
			ul.appendChild(lastLi);

			var box = document.getElementsByClassName('pager')[0];
			box.appendChild(ul);		
		}

		compile(items);
	}

}