(function() {
    'use strict';

    angular
        .module('bv-ui.search-component')
        .directive('bvSearchComponentSelect', bvSearchComponentSelect);

    /* @ngInject */
    function bvSearchComponentSelect() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            require: 'bvSearchComponent',
            link: link,
            restrict: 'E',
            template: '<select ng-model="blah" ng-options="item.ID as item.Title for item in items"></select>',
            scope: {
                type: '@',
            }
        };
        return directive;

        function link(scope, element, attrs, bvSearchComponentCtrl) {

        }
    }
})();
