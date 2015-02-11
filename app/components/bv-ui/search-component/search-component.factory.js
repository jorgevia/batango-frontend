(function() {
    'use strict';

    angular
        .module('bv-ui.search-component')
        .factory('SearchComponentFactory', SearchComponentFactory);

    /* @ngInject */
    function SearchComponentFactory() {

        var service = {
            //Api
            getTypes: getTypes,
            getSelectsInfo: getSelectsInfo,
            getModel: getModel

        };
        return service;

        ////////////////

        function getSelectsData() {
            return [
                {
                    type: 'province',
                    currentValue: 1,
                    data: [{
                        id: 1,
                        name: "Buenos Aires"
                    }, {
                        id: 2,
                        name: "Córdoba"
                    }]
                },
                {
                    type: 'city',
                    currentValue: 0,
                    data: [{
                        idProvince: 1,
                        id: 1,
                        name: "Capital Federal"
                    }, {
                        idProvince: 1,
                        id: 2,
                        name: "Buenos Aires"
                    }]
                },
            ];
        };

        function getTypes() {
            var types = [];
            angular.forEach(getSelectsData(), function(value) {
                types.push(value.type);
            });
            return types;
        }

        function getSelectsInfo() {
            var info = [];
            angular.forEach(getSelectsData(), function(value) {
                info.push(value.data);
            });
            return info;
        }

        function getModel() {
            var selectModel = [];
            angular.forEach(getSelectsData(), function(value) {
                selectModel.push(value.currentValue);
            });
            return selectModel;
        }
    }
})();
