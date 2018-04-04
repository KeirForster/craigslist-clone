angular.
   module('postTypeApp').
   config(['$locationProvider', '$routeProvider', config]);

function config($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.
        when('/type', { template: '<post-type></post-type>' }).
        when('/type/:postTypeName', { template: '<post-category></post-category>' }).
        otherwise('/type');
}
