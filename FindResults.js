
$(document).ready(function () {
   let Data = [];
   let jack;
   let iko = 0;

   function shorten(a, b) {

      if (compsArray[i].event == a) {
         Object.assign(compsArray[i].results[k], { event: compsArray[i].event })
         Object.assign(compsArray[i].results[k], { course: compsArray[i].course })
         Object.assign(compsArray[i].results[k], { date: compsArray[i].date })
         Object.assign(compsArray[i].results[k], { compName: compsArray[i].compName })
         if (compsArray[i].results[k].event == a) {

            Data.push(compsArray[i].results[k])
            iko++;
         }
         // Data.sort((k, l) => {
         //    return k.resultForSort - l.resultForSort;
         // }); 

         ////// აქ გაქვს სამუშაოო

         
      }
   }

   function fastestTime(georgian, english) {
      if(Data[j].event == georgian) {
         $(english).html('<span class="events">' + Data[j].event + '</span><span>' + Data[j].course + '</span><span>' + Data[j].result + '</span><span>' + Data[j].points + '</span><span>' + Data[j].date + '</span><span>' + Data[j].compName + '</span>')
        }
   }

   function showEventAllResults(x) {
      $(x).children().first().on('click', function () {
         let ira = 0;
         if ($(this).parent().next().html() == '') {
            for (i = 0; i < compsArray.length; i++) {
               if (compsArray[i].results) {
                  for (k = 0; k < compsArray[i].results.length; k++) {
                     if (wantedSwimmer == compsArray[i].results[k].name && compsArray[i].results[k].result != 'მოხსნილია') {
                        if ($(this).html() == compsArray[i].event) {
                           $(this).parent().next().css('background-color', 'revert');
                           $(this).parent().next().append('<div></div><div>' + compsArray[i].course + '</div><div>' + compsArray[i].results[k].result + '</div><div>' + compsArray[i].results[k].points + '</div><div>' + compsArray[i].date + '</div><div>' + compsArray[i].compName + '</div>')
                           $(this).parent().next().hide();
                        }
                     }
                  }
               }
            }
         }

         //დასამუშავებელიააა
         $(x).on('click', function () {
            if (ira == 0) {
               $(this).next().slideToggle()
               ira = 1;
            }
         })

      })
   }

   let wantedSwimmer;
   //კლავიატურაზე სახელის წერის დაწყებისას სავარაუდო მოცურავის გამოჩენა
   $('#name').on('keyup', function () {
      wantedSwimmer = $('#name').val()
      if (wantedSwimmer.length > 1) {
         $('#options').html('');
         let searchName = wantedSwimmer;
         for (i = 0; i < namesList2.length; i++) {
            if (namesList2[i].includes(searchName)) {
               $('#options').append('<div class="searchedNames">' + namesList2[i] + '</div>');
               $('.searchedNames').on('click', function () {
                  $('#name').val($(this).html());
                  wantedSwimmer = $('#name').val()
                  $('.searchedNames').hide();
               })
            }
         }
      } else {
         $('#options').html('')
         $('#afterFindClick').hide();
      }
   })

   //დასერჩილი სახელის გაქრობა როცა ის უკვე დაწერილია სერჩ ბოქსში და ნაპოვნია
   $(document).on('click', function () {
      if (wantedSwimmer == $('.searchedNames').val()) {
         $('#searchNames').html('')
      }
   })

   //ღილაკზე დაჭერით ამ მოცურავის მონაცემების განლაგება შესაბამის ველებში
   $('#find').on('click', function () {
      $('#afterFindClick').show();
      Data = [];
      $('.information').html(''); 
       

      for (i = 0; i < compsArray.length; i++) {
         if (compsArray[i].results) {
            for (k = 0; k < compsArray[i].results.length; k++) {
               if (wantedSwimmer == compsArray[i].results[k].name && compsArray[i].results[k].result != 'მოხსნილია') {
                  shorten('50 თ/ყ', '#50Free')
                  shorten('100 თ/ყ', '#100Free')
                  shorten('200 თ/ყ', '#200Free')
                  shorten('400 თ/ყ', '#400Free')
                  shorten('800 თ/ყ', '#800Free')
                  shorten('1500 თ/ყ', '#1500Free')
                  shorten('50 ბატ.', '#50Fly')
                  shorten('100 ბატ.', '#100Fly')
                  shorten('200 ბატ.', '#200Fly')
                  shorten('50 გ/ც', '#50Back')
                  shorten('100 გ/ც', '#100Back')
                  shorten('200 გ/ც', '#200Back')
                  shorten('50 ბრასი', '#50Breast')
                  shorten('100 ბრასი', '#100Breast')
                  shorten('200 ბრასი', '#200Breast')
                  shorten('100 კომპლექსი', '#50IM')
                  shorten('200 კომპლექსი', '#100IM')
                  shorten('400 კომპლექსი', '#200IM')
               }
            }
         }

      }
    
          Data.sort((k, l) => {
             return k.points - l.points;
          }); 

      for(j=0;j<Data.length;j++) {
           fastestTime('50 თ/ყ', '#50Free')
           fastestTime('100 თ/ყ', '#100Free')
           fastestTime('200 თ/ყ', '#200Free')
           fastestTime('400 თ/ყ', '#400Free')
           fastestTime('800 თ/ყ', '#800Free')
           fastestTime('1500 თ/ყ', '#1500Free')
           fastestTime('50 ბატ.', '#50Fly')
           fastestTime('100 ბატ.', '#100Fly')
           fastestTime('200 ბატ.', '#200Fly')
           fastestTime('50 გ/ც', '#50Back')
           fastestTime('100 გ/ც', '#100Back')
           fastestTime('200 გ/ც', '#200Back')
           fastestTime('50 ბრასი', '#50Breast')
           fastestTime('100 ბრასი', '#100Breast')
           fastestTime('200 ბრასი', '#200Breast')
           fastestTime('100 კომპლექსი', '#50IM')
           fastestTime('200 კომპლექსი', '#100IM')
           fastestTime('400 კომპლექსი', '#200IM')
      }
     
      showEventAllResults('#50Free')
      showEventAllResults('#100Free')
      showEventAllResults('#200Free')
      showEventAllResults('#400Free')
      showEventAllResults('#800Free')
      showEventAllResults('#1500Free')
      showEventAllResults('#50Fly')
      showEventAllResults('#100Fly')
      showEventAllResults('#200Fly')
      showEventAllResults('#50Back')
      showEventAllResults('#100Back')
      showEventAllResults('#200Back')
      showEventAllResults('#50Breast')
      showEventAllResults('#100Breast')
      showEventAllResults('#200Breast')
      showEventAllResults('#100IM')
      showEventAllResults('#200IM')
      showEventAllResults('#400IM')
   })




})

