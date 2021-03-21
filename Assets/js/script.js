var currentDay = $('.currentDay');
var saveBtn = $('.saveBtn');
var currentHour = moment().hours()


var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY, h:mm:ss a"));

//click event and function to set item to local storage
saveBtn.on('click', function(){
    var value = $(this).siblings('.time-block').val();
    var time = $(this).parent().attr('id');
    localStorage.setItem(time, value);
})

//get entries from local storage
$('.time-block').each(function(){
    $(this).val(localStorage.getItem($(this).parent().attr('id')));
})

//function to update the colors according to time
function updateHours() {
    $('.time-block').each(function(){
        var hour = $(this).parent().attr('id').split('-')[1];

        if (+hour < currentHour) {
            $(this).addClass('past');
        } else if (+hour === currentHour) {
            $(this).addClass('present');
        } else {
            $(this).addClass('future');
        }
    });
}

updateHours()