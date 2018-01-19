/**
 * @ngdoc module
 * @name MyAngularModule
 * @module MyAngularModule
 */

/**
 * @ngdoc service
 * @name MyService
 * @module MyAngularModule
 * @kind function
 *
 * @description
 *   Does a thing you need across your application.
 *   Takes some input and gives you that input back.
 *
 * @param {Object} input anything you want.
 * @returns {Object} the improved version of your input.
 *
 * @example
    <example module="myExample" name="my-service">
        <file name="index.html">
            <script>
                angular.module('myExample', ['MyAngularModule'])
                .controller('ExampleController', ['$scope', 'MyService', function($scope, MyService) {
                    $scope.snippet = MyService("hello world");
                }]);
            </script>
            <div ng-controller="ExampleController">
                Snippet: <div ng-bind="snippet"></div>
            </div>
        </file>
    </example>
 */

/**
 * @ngdoc provider
 * @name MyServiceProvider
 * @module MyAngularModule
 *
 * @description
 * Creates and configures {@link MyService} instance.
 */
function MyServiceProvider() {
    this.$get = [function() {
      return function(input) {
        return input;
      };
    }];
}

angular.module('MyAngularModule')
.provider('MyService', MyServiceProvider)