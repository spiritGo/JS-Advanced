# 数组
## 数组API
* **查找元素的位置**
	```
		var i = arr.indexOf(元素值,starti);
	```

* **判断数组是否由规定的内容组成**
	- 判断是否所有元素都符合要求 **every**
	```
		var bool = arr.every(function(ele,i,arr){
			//ele:当前元素值
			//i:当前位置
			//arr:当前数组对象
			return 根据ele,i,arr判断当前元素是否符合要求;
		});
	```
	- 判断是否包含符合要求的元素 **some**
	```
		var bool = arr.some(function(ele,i,arr){
			return 判断条件;
		});
	```
* **遍历**
	- 对原数组中每个元素执行相同的操作 **forEach**
	```
		arr.forEach(function(ele,i,arr){
			//对当前元素执行相同的操作
		});
	``` 
	- 依次取出原数组中每个元素值,执行相同操作后,放入新数组中返回 **map**
	```
		var evens = arr.map(function(ele,i,arr){
			//操作
		});
	```
	- 只关心内容,不关心位置和顺序 **for of**
	```
		for(var ele of arr){
			//ele:arr的值
		}
	```
		* 总结:只是使用最佳选择
			1. 遍历索引数组:forEach , for
			2. 遍历数组对象:for
			3. 遍历对象和关联数组:for in
			4. 保护原数组,并生成新数组:map ---只有索引数组
			5. 遍历对象和关联数组 for of
* **过滤和汇总**
	- 过滤:复制出原数组中符合条件的元素,组成新的子数组,原数组保持不变 **filter**
	```
		var subarr = arr.filter(function(ele,i,arr){
			return 判断条件;
		});
	```
	- 汇总:对数组中的所有数组进行统计和分析,得出最终结论
	```
		var result = arr.reduce(function(prev,ele,i,arr){
			//prev是截止目前的临时汇总值
			return prev;
		});
	```