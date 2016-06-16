(function(){

    var searchCtrl = function ($scope, dataFactory) {
        $scope.sites = null; 

        $scope.search = function()  {
        	var keywords = $scope.keywords;
            if(keywords.indexOf(',') !== -1){
        		var siteList = [], sites = [],
        		keywordList = keywords.split(",");
        		for (var x=0,num=keywordList.length;x<num;x++) {
		            if (keywordList[x] !== "") {
		              	siteList = dataFactory.getSites(keywordList[x]);
		              	angular.forEach(siteList, function(site) {
		              	 	sites.push(site);
					    });
		            }
		        }
		        $scope.sites = sites;
            }else{
            	$scope.sites = dataFactory.getSites(keywords);
            }
            
        }


    };
        
    searchCtrl.$inject = ['$scope','dataFactory'];

    angular.module('searchApp').controller('searchCtrl',searchCtrl);

    searchFilter = function() {
	   return function(collection, keyname) {
	      var output = [], 
	          keys = [];

	      angular.forEach(collection, function(item) {
	          var key = item[keyname];
	          if(keys.indexOf(key) === -1) {
	              keys.push(key);
	              output.push(item);
	          }
	      });

	      return output;
	   };
	}

    angular.module('searchApp').filter('unique', searchFilter);
}());