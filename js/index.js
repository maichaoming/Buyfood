var jsonFile = {
		product:[{
			name:"肉品",
			content:[
				{name:"纯瘦肉",price:15,rS:45,src:'./images/1.jpg',id:0,chooseNum:0,sort:0},{name:"猪耳朵",price:23,rS:75,src:'./images/2.jpg',id:1,chooseNum:0,sort:0},{name:"牛肉",price:45,rS:36,src:'./images/3.jpg',id:2,chooseNum:0,sort:0},
				{name:"牛肉和牛肚",price:85,rS:26,src:'./images/4.jpg',id:3,chooseNum:0,sort:0},{name:"排骨",price:63,rS:12,src:'./images/5.jpg',id:4,chooseNum:0,sort:0},{name:"猪脚",price:56,rS:32,src:'./images/6.jpg',id:5,chooseNum:0,sort:0}
			]
		},{
			name:"水产",
			content:[
				{name:"罗非鱼",price:45,rS:12,src:'./images/7.jpg',id:6,chooseNum:0,sort:0},{name:"杭州虾",price:153,rS:8,src:'./images/8.jpg',id:7,chooseNum:0,sort:0},{name:"海鲜套餐",price:255,rS:30,src:'./images/9.jpg',id:8,chooseNum:0,sort:0},
				{name:"贝壳",price:188,rS:8,src:'./images/10.jpg',id:9,chooseNum:0,sort:0},{name:"青鱼",price:156,rS:8,src:'./images/11.jpg',id:10,chooseNum:0,sort:0},{name:"黄鱼",price:120,rS:8,src:'./images/12.jpg',id:11,chooseNum:0,sort:0}
			]
		},{
			name:"蔬菜",
			content:[
				{name:"飘菜",price:152,rS:524,src:'./images/13.jpg',id:12,chooseNum:0,sort:0},{name:"苦瓜",price:154,rS:524,src:'./images/14.jpg',id:13,chooseNum:0,sort:0},{name:"西红柿辣椒黄瓜套餐",price:151,rS:524,src:'./images/15.jpg',id:14,chooseNum:0,sort:0},
				{name:"黄瓜",price:152,rS:601,src:'./images/16.jpg',id:15,chooseNum:0,sort:0},{name:"黄豆",price:152,rS:345,src:'./images/17.jpg',id:16,chooseNum:0,sort:0},{name:"白苦瓜",price:152,rS:243,src:'./images/18.jpg',id:17,chooseNum:0,sort:0},
				{name:"蔬菜套餐1",price:152,rS:513,src:'./images/19.jpg',id:18,chooseNum:0,sort:0},{name:"蔬菜套餐2",price:152,rS:395,src:'./images/20.jpg',id:19,chooseNum:0,sort:0}
			]
		},{
			name:"干货杂粮",
			content:[
				{name:"大米",price:45,rS:590,src:'./images/21.jpg',id:20,chooseNum:0,sort:0},{name:"紫米",price:9,rS:25,src:'./images/22.jpg',id:21,chooseNum:0,sort:0},{name:"玉米",price:22,rS:387,src:'./images/23.jpg',id:22,chooseNum:0,sort:0}
			]
		},{
			name:'糕点',
			content:[
				{name:"糕点1",price:152,rS:12,src:'./images/24.jpg',id:23,chooseNum:0,sort:0},{name:"糕点2",price:154,rS:16,src:'./images/25.jpg',id:24,chooseNum:0,sort:0},{name:"糕点3",price:151,rS:18,src:'./images/26.jpg',id:25,chooseNum:0,sort:0},
				{name:"糕点4",price:152,rS:19,src:'./images/27.jpg',id:26,chooseNum:0,sort:0},{name:"糕点5",price:152,rS:23,src:'./images/28.jpg',id:27,chooseNum:0,sort:0},{name:"糕点6",price:152,rS:30,src:'./images/29.jpg',id:28,chooseNum:0,sort:0}
			]
		}	

		]
	}	




	var app = angular.module("app",[]);
	app.controller("aa",function($scope){
		$scope.toggle ='li1';
		$scope.arr = jsonFile.product;
		var h = angular.element(document.querySelector(".ul1 li"));
		$scope.aa = function($event){
			$scope.toggle = $event.target.className;
			console.log($event.target.className);
			console.log($scope.toggle);
			console.log($event.target.id);
			
		}
		$scope.cc = false;
		$scope.bb = function($event){
			
			$scope.cc = true;
		}
		$scope.dd = function($event){
			
			$scope.cc = false;
		}
	$scope.chooseArr = [];
	$scope.choose = function($event){
		var str = angular.element($event.target).parent().attr("data-label");
		console.log(str)
		var obj = angular.fromJson(str);
		console.log(obj)
		if ($scope.chooseArr.length!==0) {
			var zx = 0;
			for(var i=0;i<$scope.chooseArr.length;i++){
				if ($scope.chooseArr[i].name==obj.name) {
					$scope.chooseArr[i].chooseNum++;
					zx=1;
				}}
				if (zx==0) {
					$scope.chooseArr.push(obj);
					$scope.chooseArr[$scope.chooseArr.length-1].chooseNum++;
					$scope.chooseArr[$scope.chooseArr.length-1].id = $scope.chooseArr.length-1;
				}
			zx=0;
		}else{
			$scope.chooseArr.push(obj);
			$scope.chooseArr[$scope.chooseArr.length-1].chooseNum++;
			$scope.chooseArr[$scope.chooseArr.length-1].id = $scope.chooseArr.length-1;
		}
		console.log($scope.chooseArr);
		
	}
	$scope.add=function($event){
		var id = angular.element($event.target).attr('data-id');
		console.log(id);
		$scope.chooseArr[id].chooseNum++;
	}
	$scope.delete = function($event){
		var id = angular.element($event.target).attr('data-id');
		$scope.chooseArr[id].chooseNum--;
		if ($scope.chooseArr[id].chooseNum==0) {
			$scope.chooseArr.splice(id,1)
		}
		for(var i= 0;i<$scope.chooseArr.length;i++){
					$scope.chooseArr[i].id = i;
				}
	}


	


	
		
	})


		
