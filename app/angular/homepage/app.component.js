// Register `phoneList` component, along with its associated controller and template
angular.
    module('homepageApp').
    component('homepageApp',
    {
        templateUrl: 'app/angular/homepage/homepage.template.html',
        controller: [homepageController]
    });

function homepageController()
{
}