'use strict';

var arithmetic = require('./arithmetic');
var $ = require('jquery');

exports.initialize = function() {
    console.log('Initialize method');
    _render();
};

var _render = function() {
    console.log('Render method');

    $('#addButton').on('click', function() {

        var a = $('#num1').val();
        var b = $('#num2').val();

        if (!isNaN($('#num1').val())) {
            a = Number($('#num1').val());
        }

        if (!isNaN($('#num2').val())) {
            b = Number($('#num2').val());
        }

        $('#answer').val(arithmetic.add(a, b));
    });
};