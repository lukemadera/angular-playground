angular.module('ld.batches', [])
.directive('ldBatches', [ function() {
    return {
        restrict: 'E',
        scope: {
        },
        replace: true,
        templateUrl: '/modules/ldBatches/ldBatches.tpl.html',
        link: function($scope) {
        },
    };
}])
;
