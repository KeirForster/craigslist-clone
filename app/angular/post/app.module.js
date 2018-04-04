// Define the `postTypeApp` module
angular.module('postApp', [
    // ...which depends on the `types` and 'categories' modules
    'postType', 'postCategory'
]);