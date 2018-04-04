// Register `phoneList` component, along with its associated controller and template
angular.
    module('postType').
    component('postType',
    {
        templateUrl: 'angular/post/types/post-type.template.html',
        controller: ['$http', '$routeParams', postTypeController]
    });

function postTypeController($http, $routeParams)
{
    $http.get('php/getPostTypes.php').then((response) =>
    {
        this.types = response.data;
        this.types.forEach((type) => {
            type.hasSecondaryDesc = () => {
                return type.type_secondary_desc;
            };
            type.isValidTypeId = () => {
                 type.type_id === 5;
            };
            type.classList = () => {
                return type.isValidTypeId() ? 'disabled' : '';
            };
        });
        angular.element(() => {
            DisableLinks.disablePostTypePageLinks();
        });
    });
}