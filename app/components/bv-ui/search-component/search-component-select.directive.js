(function() {
    'use strict';

    angular
        .module('bv-ui.search-component')
        .directive('bvSearchComponentSelect', bvSearchComponentSelect);

    /* @ngInject */
    function bvSearchComponentSelect() {
        var directive = {
            require: 'bvSearchComponent',
            restrict: 'E',
            scope: {
                type: '@',
            }
        };
        return directive;
    }
})();
