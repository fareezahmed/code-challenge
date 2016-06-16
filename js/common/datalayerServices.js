(function(){
    var dataFactory = function($http){
            
        var factory = {};
        
        factory.getSites = function(keyword){
            return $http.get('/publisherbyKeyword/'+ keyword);
        };
        
        return factory;        
    };
    
    
    dataFactory.$inject = ['$http']
    
    angular.module('searchApp').factory('dataFactory', dataFactory);
}());