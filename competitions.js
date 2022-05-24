$(document).ready(function () {
    let compNames = [];
    let compNames100 = [];
    for (i = 0; i < compsArray.length; i++) {
        compNames.push({ 'name': compsArray[i].compName, 'year': compsArray[i].date, 'completeName': compsArray[i].completeName })
    }

    compNames100.push(compNames[0]);
    for (i = 1; i < compNames.length; i++) {
        if (compNames[i].name != compNames[i - 1].name || compNames[i].name == compNames[i - 1].name && compNames[i].year != compNames[i - 1].year) {
            compNames100.push(compNames[i]);
        }
    }


    $('#search2').on('click', function () {
        $('#compNamesDiv').html('');
        if ($('#yearComp1').val() && $('#yearComp2').val()) {
            for (j = 0; j < compNames100.length; j++) {
                if (compNames100[j].year.split('.')[1] > parseInt($('#yearComp1').val()) - 1 && compNames100[j].year.split('.')[1] < parseInt($('#yearComp2').val()) + 1) {
                    $('#compNamesDiv').append('<div class="paddingForCompName">' + compNames100[j].completeName + '</div><div class="paddingForCompName">' + compNames100[j].year + '</div>');
                }

            }

        } else {
            alert('გთხოვთ შევსოთ გრაფა "წელი:"');
        }


        $('#compNamesDiv').children().on('click', function () {
               $('#competitionsDiv').hide();
               $('#competitionResults').append('<div class="mainCompHeader">'+ $(this).html() + '</div>')
            for (i = 0; i < compsArray.length; i++) {
                if (compsArray[i].completeName == $(this).html() && compsArray[i].results) {
                    $('#competitionResults').append('<div class="headerOfCompResults"> ' + compsArray[i].event + ' ' + compsArray[i].gender + ' </div>')
                    if (compsArray[i].results) {
                        for (j = 0; j < compsArray[i].results.length; j++) {
                         if(compsArray[i].results[j].name && compsArray[i].results[j].name != '.') {
                            $('#competitionResults').append('<div class="findCompResults">' + '<div>' + (j + 1) + ') ' + compsArray[i].results[j].name + '</div><div>' + compsArray[i].results[j].result + '</div><div>' + compsArray[i].results[j].points + '</div><div>' + compsArray[i].results[j].age + '</div><div>' + compsArray[i].results[j].club + '</div></div>')
                        
                         }
                         }
                    }
                    
                }
               
            }
        })
    })





})