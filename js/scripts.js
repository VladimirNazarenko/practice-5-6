
  window.onload = function getDate()
{
    var Day = new Array("Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота");
    var Month = new Array("Января","Февраля","Марта","Апреля","Мая","Июня","Июля","Августа","Сентября","Октября","Ноября","Декабря");
    var date = new Date();
    var month = date.getMonth();
    var day = date.getDay();
    var dayofmonth = date.getDate();
    var hours = date.getHours();
    var minutes = date.getMinutes();
     if(minutes < 10)
    {
        minutes = '0' + minutes;
        
    }
    window.setTimeout(arguments.callee, 60000);

    //По надобности условие ниже повторить с minutes и hours
    document.getElementById('data').innerHTML = Month[month]+' '+ Day[day] + ' '+dayofmonth + ' '+hours+ ':' + minutes;
};

$(function() {
      $(document).on("click",".btn-dark", function()
           {
              $("body").css("background-color","#565656");
              $(".menu-color,.fotter-color,.card").removeClass("bg-light").addClass('bg-dark');
              $(".nav-link,.breadcrumb-item,.card-header,.fotter-color>p").css("color","rgb(255, 255, 255)");
              $(".breadcrumb").css("background-color","#7d858e");
              $(".btn-dark").remove();
              $(".color-change-button").append('<button type="button" class="btn btn-light change-color">Light</button>');

           }

      );
       $(document).on("click",".btn-light", function()
           {
             $("body").css("background-color","#fff");
             $(".menu-color,.fotter-color,.card").removeClass("bg-dark").addClass('bg-light');
             $(".nav-link,.breadcrumb-item,.card-header,.fotter-color>p").css("color","rgba(0,0,0,.9)");
             $(".breadcrumb").css("background-color","#e9ecef");
             $(".btn-light").remove();
             $('.color-change-button').append('<button type="button" class="btn btn-dark change-color">Dark</button>');
           }
      );
});