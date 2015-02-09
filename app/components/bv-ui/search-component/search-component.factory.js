(function() {
    'use strict';

    angular
        .module('bv-ui.search-component')
        .factory('bvSearchComponent', SearchComponentFactory);

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
                provinces: [{
                    idProvince: 1,
                    name: "Buenos Aires"
                }, {
                    idProvince: 2,
                    name: "Córdoba"
                } ],
                cities: [{
                    idCity: 1,
                    idProvince: 1,
                    name: "Capital Federal"
                }, {
                    idCity: 2,
                    idProvince: 1,
                    name: "Buenos Aires"
                }]
            }
        };
        function getTypes() {
            return ['country', 'province', 'city'];
        }
     }
})();
