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
            scope: {} //Isolated scope

            //El tipo de cada select lo puedo agregar con el compile
            //Tengo el array y le meto el tipo por el compile
            //Genial
        };

        /* @ngInject */
        function SearchComponentController($scope, SearchComponentFactory) {
            //Se puede config
            var vm = this;
            //Data from provider
            vm.locationData = SearchComponentFactory.getLocationData();
            vm.types = SearchComponentFactory.getTypes();

            //listeners
            vm.selectChanged = selectChanged;
            vm values = [];

            function selectChanged(type, value) {
                //Acá obtengo el
            }

        };
    }
})();
