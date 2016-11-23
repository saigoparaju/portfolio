var myPort = angular.module("myPort",["ngRoute"]);

myPort.config(['$routeProvider',function($routeProvider){
    $routeProvider
       .when('/',{
        templateUrl :'/pages/portfolio-home.html'
        
        })
        .when('/photoPage',{
          templateUrl : '/pages/info-photoPage.html',
          controller: "photoPageCtrl"
        })
        .when('/bahamasPage',{
          templateUrl : '/pages/info-photoPage.html',
          controller: "bahamasPageCtrl"
        })
        .when('/crossfitPage',{
          templateUrl : '/pages/info-photoPage.html',
          controller: "crossfitPageCtrl"
        })
        .when('/portfolioPage',{
          templateUrl : '/pages/info-photoPage.html',
          controller: "portfolioPageCtrl"
        })
        .otherwise({
        templateUrl: '/pages/portfolio-home.html'
    });
}]);

/*Controller for Photography page */
myPort.controller("photoPageCtrl",['$scope',function($scope){

$scope.name="SREEKAR'S PHOTOGRAPHY";
$scope.info="My interest in photography hs led me to make a website to showcase my photography skills";

$scope.techs=["HTML","CSS","Javascript"];
    
$scope.img="photo.jpg";

$scope.link="/personal/index.html";
    
$scope.other=["bahamas","crossfit","portfolio","bahamas"];
                  
}]);


/* Controller for Javascript page */
myPort.controller("bahamasPageCtrl",['$scope',function($scope){

$scope.name="BAHAMAS";
$scope.info="This website was created as a project in school during my masters.";

$scope.techs=["HTML","CSS","Javascript","jQuery"];
    
$scope.img="bahamas.jpg";
    
$scope.link="/bahamas/index.html";
    
$scope.other=["photo","crossfit","portfolio","bahamas"];
                  
}]);


/* Controller for Javascript page */
myPort.controller("crossfitPageCtrl",['$scope',function($scope){

$scope.name="CROSSFIT";
$scope.info="My interest into fitness has led me in creating a wesite for crossfit-248";

$scope.techs=["HTML","CSS","Javascript","AngularJS","Bootstrap"];
    
$scope.img="crossfit.jpg";

$scope.link="/crossfit/index.html";
    
$scope.other=["photo","bahamas","portfolio","bahamas"];
                  
}]);


/* Controller for Javascript page */
myPort.controller("portfolioPageCtrl",['$scope',function($scope){

$scope.name="PORTFOLIO WEBPAGE";
$scope.info="A website to display my web development work.";

$scope.techs=["HTML","CSS","Javascript","AngularJS","Bootstrap"];
    
$scope.img="portfolio.jpg";

$scope.link="/index.html";
    
$scope.other=["photo","bahamas","crossfit","bahamas"];
                  
}]);



/* Controller for contact page */
myPort.controller("contactCtrl",['$scope','$http',function($scope,$http){
    
var mySelf = $scope;
mySelf.formInfo={};
mySelf.sendData= function(){
                                 
  $http({
          method  : 'POST',
          url     : 'http://localhost:8000/mail/contact_me.php',
          data    : mySelf.formInfo, //forms user object
          headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
         })
          .success(function(data) {
            if (data.errors) {
              // Showing errors.
              mySelf.nameRequired = data.errors.name;
              mySelf.eMailRequired = data.errors.eMail;
              mySelf.msgRequired = data.errors.msg;
            } else {
              mySelf.message = data.message;
            }
          });
    };
                                 
 }]);