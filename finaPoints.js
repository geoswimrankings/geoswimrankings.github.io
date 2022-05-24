$(document).ready(function () {


    let course, gender, baseTime, points;
    let style = 'free';
    let distance = '100';
    let totalSeconds;

    function records(stl, dst, lng, gnd, tm) {
        if (style === stl && distance === dst && course === lng && gender === gnd) {
            baseTime = tm;
        }
    }


    function chose(id) {
        $(id).on('click', function () {
            $(this).addClass('chosen');
            $(this).siblings().removeClass('chosen');


            if ($(this).html() == 'თ/ყ') {
                style = 'free'
            }
            if ($(this).html() == 'ბატ.') {
                style = 'fly'
            }
            if ($(this).html() == 'გ/ც') {
                style = 'back'
            }
            if ($(this).html() == 'ბრასი') {
                style = 'breast'
            }
            if ($(this).html() == 'კომპლექსი') {
                style = 'IM'
            }
            if ($(this).html() == '50') {
                distance = '50'
            }
            if ($(this).html() == '100') {
                distance = '100'
            }
            if ($(this).html() == '200') {
                distance = '200'
            }
            if ($(this).html() == '400') {
                distance = '400'
            }
            if ($(this).html() == '800') {
                distance = '800'
            }
            if ($(this).html() == '1500') {
                distance = '1500'
            }
            $('#swimmerPoints').html('');
            $('#swimmerTime').html('');
        })
    }

    chose('.coursePoints')
    chose('.genderPoints')
    chose('.stylesPoints')
    chose('.distance')

    $('.timeAndPoint').on('click', function () {
        $(this).addClass('chosen');
        $(this).attr('id') == 'swimmerTime' ? $('#swimmerPoints').removeClass('chosen') : $('#swimmerTime').removeClass('chosen');
        $('#swimmerPoints').html('');
        $('#swimmerTime').html('');
    })




    $('#delete').on('click',function() {
        $('#swimmerPoints').html('');
        $('#swimmerTime').html('');
    })

   // $('#delete1').on('click',function() {
       // if($('#swimmerPoints').attr('class') == 'timeAndPoint chosen') {
     //       let ii = $('#swimmerPoints').html().split('');
   //         ii.pop([$('#swimmerPoints').html().split('').length - 1]);
            //let deletedPoints = '';
          //  for(j=0;j<ii.length;j++) {
        //         deletedPoints = deletedPoints + ii[j];
      //      }
    //        $('#swimmerPoints').html(deletedPoints)
  //      }
//        if($('#swimmerTime').attr('class') == 'timeAndPoint chosen')  {
            
           // let ii = $('#swimmerTime').html().split('');
         //   if($('#swimmerTime').html().split('').length > 6 || $('#swimmerTime').html().split('').length < 3 ||  $('#swimmerTime').html().split('').length == 4 ) {
       //        ii.pop([$('#swimmerTime').html().split('').length - 1]);
     //       }
          //  if($('#swimmerTime').html().split('').length == 6 || $('#swimmerTime').html().split('').length == 3 ) {
               // ii.pop([$('#swimmerTime').html().split('').length - 1]);
             //   ii.pop([$('#swimmerTime').html().split('').length - 1]);
            // }
            
           // let deletedPoints = '';
           // for(j=0;j<ii.length;j++) {
            //     deletedPoints = deletedPoints + ii[j];
          //  }
      //      $('#swimmerTime').html(deletedPoints)
    //    }
        
    // })




    $('.numbers').on('click', function () {
        $(this).css('background-color', 'rgb(101, 120, 133)')
        setTimeout(() => {
            $(this).css('background', 'none')
        }, 150);
        if ($(this).html().length == 1) {
            $('#swimmerPoints').attr('class') == 'timeAndPoint chosen' ? $('#swimmerPoints').html($('#swimmerPoints').html() + $(this).html()) : $('#swimmerTime').html($('#swimmerTime').html() + $(this).html());
            $('#swimmerPoints').attr('class') == 'timeAndPoint chosen' ? $('#swimmerTime').html('') : $('#swimmerPoints').html();
        }
        if ($('#swimmerTime').html().length == 2) {
            $('#swimmerTime').html($('#swimmerTime').html() + '.')
        }
        if ($('#swimmerTime').html().length == 5) {
            $('#swimmerTime').html($('#swimmerTime').html() + ':')
        }
    })



function realCalculate() {
    
    for (u = 0; u < $('#25mCourse').attr('class').split(' ').length; u++) {
        if ($('#25mCourse').attr('class').split(' ')[u] == 'chosen') {
            course = '25'
        } else {
            course = '50'
        }
    }
    for (u = 0; u < $('#womanGender').attr('class').split(' ').length; u++) {
        if ($('#womanGender').attr('class').split(' ')[u] == 'chosen') {
            gender = 'woman'
        } else {
            gender = 'man'
        }
    }

    for (u = 0; u < $('#swimmerTime').attr('class').split(' ').length; u++) {
        if ($('#swimmerTime').attr('class').split(' ')[u] == 'chosen') {
            direction = 'timeToPoints'
        } else {
            direction = 'pointsToTime'
        }
    }

   // როდესაც ქულების განახლების დრო მოვა !!!!!
   // 1) შეცვალე რეკორდის დროები აქ და results.js შიც

    records("free", "50", "50", "man", 20.91)
    records("free", "100", "50", "man", 46.91)
    records("free", "200", "50", "man", 102.00)
    records("free", "400", "50", "man", 220.07)
    records("free", "800", "50", "man", 452.12)
    records("free", "1500", "50", "man", 871.02)
    records("back", "50", "50", "man", 23.80)
    records("back", "100", "50", "man", 51.85)
    records("back", "200", "50", "man", 111.92)
    records("breast", "50", "50", "man", 25.95)
    records("breast", "100", "50", "man", 56.88)
    records("breast", "200", "50", "man", 126.12)
    records("fly", "50", "50", "man", 22.27)
    records("fly", "100", "50", "man", 49.45)
    records("fly", "200", "50", "man", 110.73)
    records("IM", "200", "50", "man", 114.00)
    records("IM", "400", "50", "man", 243.84)
    // qalebi 50
    records("free", "50", "50", "woman", 23.67)
    records("free", "100", "50", "woman", 51.71)
    records("free", "200", "50", "woman", 112.98)
    records("free", "400", "50", "woman", 236.46)
    records("free", "800", "50", "woman", 484.79)
    records("free", "1500", "50", "woman", 920.48)
    records("back", "50", "50", "woman", 26.98)
    records("back", "100", "50", "woman", 57.45)
    records("back", "200", "50", "woman", 123.35)
    records("breast", "50", "50", "woman", 29.30)
    records("breast", "100", "50", "woman", 64.13)
    records("breast", "200", "50", "woman", 138.95)
    records("fly", "50", "50", "woman", 24.43)
    records("fly", "100", "50", "woman", 55.48)
    records("fly", "200", "50", "woman", 121.81)
    records("IM", "200", "50", "woman", 126.12)
    records("IM", "400", "50", "woman", 266.36)
    //kacebu 25 
    records("free", "50", "25", "man", 20.16);
    records("free", "100", "25", "man", 44.94)
    records("free", "200", "25", "man", 99.37)
    records("free", "400", "25", "man", 212.25)
    records("free", "800", "25", "man", 443.42)
    records("free", "1500", "25", "man", 848.06)
    records("back", "50", "25", "man", 22.22)
    records("back", "100", "25", "man", 48.33);
    records("back", "200", "25", "man", 105.63)
    records("breast", "50", "25", "man", 25.25)
    records("breast", "100", "25", "man", 55.34);
    records("breast", "200", "25", "man", 120.16)
    records("fly", "50", "25", "man", 21.75)
    records("fly", "100", "25", "man", 47.78)
    records("fly", "200", "25", "man", 108.24)
    records("IM", "100", "25", "man", 49.28)
    records("IM", "200", "25", "man", 109.63)
    records("IM", "400", "25", "man", 234.81)
    // qalebi 25
    records("free", "50", "25", "woman", 22.93)
    records("free", "100", "25", "woman", 50.25)
    records("free", "200", "25", "woman", 110.43)
    records("free", "400", "25", "woman", 233.92)
    records("free", "800", "25", "woman", 479.34)
    records("free", "1500", "25", "woman", 918.01)
    records("back", "50", "25", "woman", 25.60);
    records("back", "100", "25", "woman", 54.89)
    records("back", "200", "25", "woman", 118.94)
    records("breast", "50", "25", "woman", 28.56)
    records("breast", "100", "25", "woman", 62.36)
    records("breast", "200", "25", "woman", 134.57)
    records("fly", "50", "25", "woman", 24.38)
    records("fly", "100", "25", "woman", 54.61)
    records("fly", "200", "25", "woman", 119.61)
    records("IM", "100", "25", "woman", 56.51)
    records("IM", "200", "25", "woman", 121.86)
    records("IM", "400", "25", "woman", 258.94)

    if ($('#swimmerTime').html() && $('#swimmerPoints').html() == '') {
        if ($('#swimmerTime').html().split('').length == 8) {
            let minute = $('#swimmerTime').html().split('.')[0];
            let second = $('#swimmerTime').html().split('.')[1].split(':')[0];
            let miliSecond = $('#swimmerTime').html().split('.')[1].split(':')[1];
             totalSeconds = (parseInt(minute) * 60) + parseInt(second) + (parseInt(miliSecond) / 100)

            points = Math.round(Math.pow(baseTime / totalSeconds, 3) * 1000);

            $('#swimmerPoints').html(points)

        } else {
            alert('გთხოვთ შეიყვანოთ მონაცემი შემდეგ ფორმატში 01.01:01')
        }
    }
    if($('#swimmerPoints').html() && $('#swimmerTime').html() == '') {
     points = parseInt($('#swimmerPoints').html());
     totalSeconds = Math.round((baseTime / (Math.cbrt(points / 1000)) * 100)) /100;
     let minutes = Math.round(totalSeconds / 60);;
     let seconds = Math.round(totalSeconds - minutes * 60);
     if(seconds < 0) {
         minutes = minutes - 1;
         seconds = 60 + seconds;
     }
    let miliSeconds = Math.round((totalSeconds - (minutes * 60) - seconds) * 100);
    if (miliSeconds < 0) {
        seconds = seconds - 1;
        miliSeconds = 100 + miliSeconds;
    }

    if(minutes < 10 && minutes > -1) {
        minutes = '0' + minutes;
    }
    if(seconds < 10 && seconds > -1) {
        seconds = '0' + seconds;
    }
    if(miliSeconds < 10 && seconds > -1) {
        miliSeconds = '0' + miliSeconds;
    }
    $('#swimmerTime').html(minutes + '.' + seconds + ':' + miliSeconds)
    }
}





    $('#calculate').on('click', function () {
        realCalculate()
    })

    $('#delete1').on('click', function () {
        realCalculate()
    })
})