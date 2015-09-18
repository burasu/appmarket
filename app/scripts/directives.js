(function ()
{
    'use strict';

    angular.module('AppMarketApp.directives', []);

    function appInfo ()
    {
        return {
            restrict: 'E',
            scope: {
                info: '='
            },
            templateUrl: 'views/appInfo.html'
        };
    }

    function installApp ()
    {
        return {
            restrict: 'E',
            scope: {
                info: '='
            },
            templateUrl: 'views/installApp.html',
            link: function(scope, element, attrs) {
                scope.buttonText = 'Install',
                scope.installed = false,
                scope.download = function() {
                    element.toggleClass('btn-active');
                    if (scope.installed) {
                        scope.buttonText = 'Install';
                        scope.installed = false;
                    } else {
                        scope.buttonText = 'Uninstall';
                        scope.installed = true;
                    }
                }
            }
        };
    }

    angular
        .module('AppMarketApp.directives')
        .directive('appInfo', appInfo)
        .directive('installApp', installApp);

})();
