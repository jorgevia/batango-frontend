(function() {
    'use strict';

    angular
        .module('bv-ui.search-component')
        .factory('SearchComponentFactory', SearchComponentFactory);

    /* @ngInject */
    function SearchComponentFactory() {

        var service = {
            getLocationData: getLocationData,
            getTypes: getTypes
        };
        return service;

        ////////////////

        function getLocationData() {
            return {
                province: [{
                    id: 1,
                    name: "Buenos Aires"
                }, {
                    id: 2,
                    name: "Córdoba"
                } ],
                city: [{
                    idProvince: 1,
                    id: 1,
                    name: "Capital Federal"
                }, {
                    idProvince: 1,
                    id: 2,
                    name: "Buenos Aires"
                }]
            }
        };

        function getTypes() {
            return ['province', 'city'];
        };
     }
})();
