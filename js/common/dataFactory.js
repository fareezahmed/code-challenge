(function(){
    var dataFactory = function($http){
            
        var factory = {};
        
        var sites = [
              {
                "id": 1,
                "siteName": "SurferMag",
                "siteUrl": "www.surfermag.com",
                "description": "This is the description for SurferMag",
                "categoryIds": [
                  2
                ]
              },
              {
                "id": 2,
                "siteName": "Ebay",
                "siteUrl": "www.ebay.com.au",
                "description": "This is the description for ebay",
                "categoryIds": [
                  1
                ]
              },
              {
                "id": 3,
                "siteName": "Robs UI Tips",
                "siteUrl": "www.awesomeui.com.au",
                "description": "This is the description for the best site in the world. It is the best:)",
                "categoryIds": [
                  4, 3
                ]
              },
              {
                "id": 4,
                "siteName": "Table Tennis Tips - How to not come runners up",
                "siteUrl": "www.ttt.com",
                "description": "This is the description for Table Tennis Tips",
                "categoryIds": [
                  1, 2, 3, 4
                 ]
              }
            ];
            var categories = [
              {
                id: 1,
                description: "Arts & Entertainment"
              },
              {
                id: 2,
                description: "Automotive"
              },
              {
                id: 3,
                description: "Business"
              },
              {
                id: 4,
                description: "Careers"
              }
            ];
        
        factory.getSites = function(keyword){
          var data = [], siteIds = [], i, j;
          for (i=0,len=categories.length;i<len;i++) {
              if (categories[i].description.toUpperCase().indexOf(keyword.toUpperCase()) !== -1) {
                 siteIds.push(categories[i]);
              }
          }    

          for (i=0,len=sites.length;i<len;i++) {
              if (sites[i].siteName.toUpperCase().indexOf(keyword.toUpperCase()) !== -1) {
                 data.push(sites[i]);
              }else{
                  for(j=0,cnt=siteIds.length;j<cnt;j++){
                      if(sites[i].categoryIds.indexOf(siteIds[j].id)){
                          data.push(sites[i]);
                      }
                  }
              }
          }

          return data;
        };
        return factory;        
    };
    
    
    dataFactory.$inject = ['$http']
    
    angular.module('searchApp').factory('dataFactory', dataFactory);
}());