/** 
  * Gladys Project
  * http://gladysproject.com
  * Software under licence Creative Commons 3.0 France 
  * http://creativecommons.org/licenses/by-nc-sa/3.0/fr/
  * You may not use this software for commercial purposes.
  * @author :: Pierre-Gilles Leymarie
  */
  
(function () {
    'use strict';

    angular
        .module('gladys')
        .factory('paramService', paramService);

    paramService.$inject = ['$http'];

    function paramService($http) {
        
        var service = {
            get: get,
            create: create, 
            update: update,
            destroy: destroy
        };

        return service;

        function get() {
            return $http({method: 'GET', url: '/param'});
        }
        
        function create(param) {
            return $http({method: 'POST', url: '/param', data: param});
        }
        
        function update(name, param) {
            return $http({method: 'PATCH', url: '/param/' + name, data: param});
        }
        
        function destroy(name) {
            return $http({method: 'DELETE', url: '/param/' + name});
        }
    }
})();