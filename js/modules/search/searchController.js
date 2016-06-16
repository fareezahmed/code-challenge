(function(){
       angular.module('searchApp').controller('searchCtrl', ['$scope', 'dataFactory', function($scope, dataFactory){    
        $scope.search = function(){
            dataFactory.search($scope.keywords).then(function(response){
                $scope.response = response.data;
            });
        };

    }]); 

        var searchCtrl = function ($scope, $routeParams, dataFactory) {
        var keywords = $routeParams.keywords;
        $scope.keywords = null;

        $scope.search = function()  {
            //Search the Sites for the Keyword
            dataFactory.getSites(keywords)
            .success(function(sites){
                    $scope.sites = sites;
                
            })
            .error(function(data, status, headers, config){
                //handle errors
                console.log(status);
            });
        }


    };
        
    searchCtrl.$inject = ['$scope','$routeParams','dataFactory'];
    
    angular.module('searchApp').controller('searchCtrl',searchCtrl);
}());