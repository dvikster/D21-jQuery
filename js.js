// jQuery=$;
$(document).ready(function () {
    $('button').on('click', multiplyInput);
});

function multiplyInput(){
    // var one = $('#one').val();
    // var two = $('#two').val();
    // var multiplyAnswer = one*two;

    var multiplyAnswer = $('#one').val()*$('#two').val();
    console.log(multiplyAnswer);
    $('#out').html(multiplyAnswer);

    if(multiplyAnswer >=100) {s
        $('#out').css('color','red');
    }
    else {
        $('#out').css('color','orange');
    }
}
