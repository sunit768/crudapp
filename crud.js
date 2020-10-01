var app = angular.module("mainApp",[]);

app.controller("CrudController", function($scope){


	$scope.EmpList = []; //empty array of Employees

	$scope.AddData = function(){ //add data to the table or array

		var emp = { //object ho yo
			Id: $scope.EmpList.length + 1,
			Name: $scope.Name,
			Salary: $scope.Salary

		};
		$scope.EmpList.push(emp); // emp ko object lai array ma push garcha yesle
		ClearModel();


	};
	//delete garne function

	$scope.DeleteData = function(emp){
		var index = $scope.EmpList.indexOf(emp); // jj delete garnu cha yo bata huncha
		$scope.EmpList.splice(index,1);

	};

	//data lai bind garna
	$scope.BindSelectedData = function(emp){
		$scope.Id = emp.Id;
		$scope.Name = emp.Name;
		$scope.Salary = emp.Salary;
	};

	$scope.UpdateData = function(){
		$.grep($scope.EmpList,function(e){
			if(e.Id == $scope.Id)
			{
				e.Name = $scope.Name;
				e.Salary = $scope.Salary;
			}
		});
	};
	function ClearModel(){
		$scope.Id=0;
		$scope.Name='';
		$scope.Salary=0;



	}
});
