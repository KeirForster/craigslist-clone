// Register `phoneList` component, along with its associated controller and template
angular.
    module('postCategory').
    component('postCategory',
    {
        templateUrl: 'angular/post/categories/post-category.template.html',
        controller: ['$http', '$routeParams', postCategoryController]
    });

function postCategoryController($http, $routeParams)
{
    this.categories = null;
    $http.get('php/getPostCategories.php').then((response) =>
    {
        this.categories = response.data;
        this.typeId = $routeParams.typeId;
        angular.element(() => {
            DisableLinks.disablePostTypePageLinks();
        });
    });
}