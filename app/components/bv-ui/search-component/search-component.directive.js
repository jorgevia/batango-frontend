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
            vm.selectsData = SearchComponentFactory.getSelectsInfo();
            vm.types = SearchComponentFactory.getTypes();
            vm.model = SearchComponentFactory.getModel();

            vm.selectChanged = selectChanged;
            //consoling properties
            console.log(vm.selectsData);
            console.log(vm.types);
            console.log(vm.model);

            function selectChanged(type, local) {
                //var indexSelect = vm.types.indexOf(type);
                //console.log(vm.types, type);
                //console.log(type, local);
            }
        };
    }
})();
