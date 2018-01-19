/**
 * @ngdoc component
 * @name myComponent
 * @restrict E
 * @module MyAngularModule
 *
 * @description
 * Creates a reusable element you use everywhere
 *
 * @param {Number} count the number of rows to generate
 *
 * @example
    <example module="MyAngularModule" name="my-component">
        <file name="index.html">
            <my-component></my-component>
            <hr>
            <my-component count="3"></my-component>
        </file>
    </example>
 */

function myComponent() {
    var component = {};

    component.bindings = {
        count: '<?'
    };

    component.controller = function () {
        this.rows = new Array(this.count || 1);
    };

    component.template = [
        '<table border="1">',
            '<tbody>',
                '<tr ng-repeat="row in $ctrl.rows track by $index"><td>hello</td><td>world</td></tr>',
            '</tbody>',
        '</table>'
    ].join('')

    return component;
}

angular.module('MyAngularModule')
.component('myComponent', myComponent())