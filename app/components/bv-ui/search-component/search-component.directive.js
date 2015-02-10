(function() {
    'use strict';

    angular
        .module('bv-ui.search-component')
        .directive('bvSearchComponent', bvSearchComponent);

    /* @ngInject */
    function bvSearchComponent () {
        return {
            controller: SearchComponentController,
            controllerAs: 'searchComponentControllerVm',
            restrict: 'E',
            scope: {}, //Isolated scope
            templateUrl: "components/bv-ui/search-component/search-component.directive.html"
        };

        /* @ngInject */
        function SearchComponentController(SearchComponentFactory) {
            //Se puede config
            var vm = this;

            //Data from provider
            vm.locationData = SearchComponentFactory.getLocationData();
            vm.types = SearchComponentFactory.getTypes();
            vm.models=[1, 1];
            vm.selectChanged = selectChanged;
            //consoling properties
            console.log(vm.locationData);
            console.log(vm.types);

            function selectChanged(type, local) {
                var indexSelect = vm.types.indexOf(type);
                console.log(vm.types, type);
                console.log(type, local);
                console.log("index");
                console.log(indexSelect);

            }
        };
    }
})();
