// jQuery=$;
$(document).ready(function () {
    $('button').on('click', multiplyInput);
    $('.acc p').on('click', accFunc);
});

function multiplyInput(){
    // var one = $('#one').val();
    // var two = $('#two').val();
    // var multiplyAnswer = one*two;

    var multiplyAnswer = $('#one').val()*$('#two').val();
    console.log(multiplyAnswer);
    $('#out').html(multiplyAnswer);

    if(multiplyAnswer >=100) {
        $('#out').css('color','red');
    }
    else {
        $('#out').css('color','orange');
    }
}

function accFunc() {
    $(".acc p").css('color','black').next().css('display', 'none');
    $(this).css('color','red').next().css('display', 'block');
    // $(".acc div").not($(this).next()).css('display', 'none');
}

// eq(n) - выбирает элемент с индексом n из набора. Индекс начинается с 0.

var i = 0;

$(function slider() {
    // установим интервал в одну секунду
    setInterval(choose, 500);
});

function choose() {
    i++;
    // выделит все элементы списка до элемента с индексом i
    $("li:eq(" + (i - 1) + ")")
        .css("display", "none");

    // выделит элементы списка по индексу i
    $("li:eq(" + i + ")")
        .css("display", "block");

}
