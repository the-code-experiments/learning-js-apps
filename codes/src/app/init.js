define(['./arithmetic', 'jquery'], function(arithmetic, $) {

    var init = function() {

        var _arithmetic = null;

        this.initialize = function() {
            console.log('Initialize method');

            _arithmetic = new arithmetic();

            this.render();
        },

        this.render = function() {
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

                $('#answer').val(_arithmetic.add(a, b));
            });

        }

    };

    return init;

});