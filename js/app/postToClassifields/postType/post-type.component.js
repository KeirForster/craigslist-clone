// Register `phoneList` component, along with its associated controller and template
angular.
    module('postType').
    component('postType',
    {
        templateUrl: 'js/app/postToClassifields/postType/post-type.template.html',
        controller: ['$http', '$routeParams', postTypeController]
    });

function postTypeController($http, $routeParams)
{
    $http.get('php/getPostTypes.php').then((response) =>
    {
        this.types = response.data;
        this.postTypeName = $routeParams.postTypeName;
    });
}