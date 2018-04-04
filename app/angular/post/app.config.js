angular.
    module('postApp').
    config(['$locationProvider', '$routeProvider', config]);

function config($locationProvider, $routeProvider)
{
    $locationProvider.hashPrefix('!');

    $routeProvider.
        when('/type', { template: '<post-type></post-type>' }).
        when('/type/:typeId', { template: '<post-category></post-category>' }).
        otherwise('/type');
}
