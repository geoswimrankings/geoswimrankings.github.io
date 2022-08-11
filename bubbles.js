$(document).ready(function () {
    console.log('dffff')
    let bubbleNumber = 1;
    let bubbleHeight1 = 100;
    let bubbleHeight2 = 100;
    let bubbleHeight3 = 100;
    let bubbleHeight4 = 100;
    let bubbleHeight5 = 100;
    let left100,timer1000,width50,speed04;
    function Fleft100() {
         left100 = Math.floor(Math.random() * 100)
    }
    function Ftimer1000() {
         timer1000 = Math.floor(Math.random() * 9000)
    }
    function Fwidth50() {
         width50 = Math.floor(Math.random() * 35)
         if(width50 < 8) {
             width50 = 8;
         }
    }
    function Fspeed() {
         speed04 = Math.floor(Math.random() * 10)
         if(speed04<=2 && speed04 >=0) {
             speed04 = 0.2
         }
         if(speed04<=4 && speed04 >2) {
            speed04 = 0.1
        }
        if(speed04<=6 && speed04 >4) {
            speed04 = 0.28
        }
        if(speed04<=8 && speed04 >6) {
            speed04 = 0.14
        }
        if(speed04<=10 && speed04 >8) {
            speed04 = 0.16
        }
    }

   function bubbleblow1() {
           Fleft100()
           Ftimer1000()
           Fwidth50()
           Fspeed()
       $('#bubble1').append('<div id="bubleNumber' + 1 + '" class="bubbles"></div>')
       $('#bubleNumber' + 1).css({'left': left100 + '%' }) 
       $('#bubleNumber' + 1).css({'height': width50 + 'px' }) 
       $('#bubleNumber' + 1).css({'width': width50 + 'px' })
       let speed041 = speed04;
       let myInterval1 = setInterval(() => {
            
            if(bubbleHeight1 > 0) {
                bubbleHeight1 = bubbleHeight1 - speed041;
                $('#bubleNumber' + 1).css({'top': bubbleHeight1 + '%' }) 
            }
            if(bubbleHeight1 < 15) {
                $('#bubleNumber' + 1).remove()
                bubbleHeight1 = 100;
                clearInterval(myInterval1)
                setTimeout(() => {
                     bubbleblow1();
                }, timer1000);
               
            }
        }, 10);
    
    }

    function bubbleblow2() {
           Fleft100()
           Ftimer1000()
           Fwidth50()
           Fspeed()
        $('#bubble2').append('<div id="bubleNumber' + 2 + '" class="bubbles"></div>')
        $('#bubleNumber' + 2).css({'left': left100 + '%' }) 
       $('#bubleNumber' + 2).css({'height': width50 + 'px' }) 
       $('#bubleNumber' + 2).css({'width': width50 + 'px' })
       let speed042 = speed04;
        let myInterval2 = setInterval(() => {
           
             if(bubbleHeight2 > 0) {
                 bubbleHeight2 = bubbleHeight2 - speed042;
                 $('#bubleNumber' + 2).css({'top': bubbleHeight2 + '%' }) 
             }
             if(bubbleHeight2 < 15) {
                 $('#bubleNumber' + 2).remove()
                 bubbleHeight2 = 100;
                 clearInterval(myInterval2)
                 setTimeout(() => {
                    bubbleblow2();
                 }, timer1000);
                 
             }
         }, 10);
     
     }

     function bubbleblow3() {
        Fleft100()
        Ftimer1000()
        Fwidth50()
        Fspeed()
     $('#bubble3').append('<div id="bubleNumber' + 3 + '" class="bubbles"></div>')
     $('#bubleNumber' + 3).css({'left': left100 + '%' }) 
    $('#bubleNumber' + 3).css({'height': width50 + 'px' }) 
    $('#bubleNumber' + 3).css({'width': width50 + 'px' })
    let speed043 = speed04;
     let myInterval3 = setInterval(() => {
        
          if(bubbleHeight3 > 0) {
              bubbleHeight3 = bubbleHeight3 - speed043;
              $('#bubleNumber' + 3).css({'top': bubbleHeight3 + '%' }) 
          }
          if(bubbleHeight3 < 15) {
              $('#bubleNumber' + 3).remove()
              bubbleHeight3 = 100;
              clearInterval(myInterval3)
              setTimeout(() => {
                 bubbleblow3();
              }, timer1000);
              
          }
      }, 10);
  
  }

  function bubbleblow4() {
    Fleft100()
    Ftimer1000()
    Fwidth50()
    Fspeed()
 $('#bubble4').append('<div id="bubleNumber' + 4 + '" class="bubbles"></div>')
 $('#bubleNumber' + 4).css({'left': left100 + '%' }) 
$('#bubleNumber' + 4).css({'height': width50 + 'px' }) 
$('#bubleNumber' + 4).css({'width': width50 + 'px' })
let speed044 = speed04;
 let myInterval4 = setInterval(() => {
    
      if(bubbleHeight4 > 0) {
          bubbleHeight4 = bubbleHeight4 - speed044;
          $('#bubleNumber' + 4).css({'top': bubbleHeight4 + '%' }) 
      }
      if(bubbleHeight4 < 15) {
          $('#bubleNumber' + 4).remove()
          bubbleHeight4 = 100;
          clearInterval(myInterval4)
          setTimeout(() => {
             bubbleblow4();
          }, timer1000);
          
      }
  }, 10);

}

function bubbleblow5() {
    Fleft100()
    Ftimer1000()
    Fwidth50()
    Fspeed()
 $('#bubble5').append('<div id="bubleNumber' + 5 + '" class="bubbles"></div>')
 $('#bubleNumber' + 5).css({'left': left100 + '%' }) 
$('#bubleNumber' + 5).css({'height': width50 + 'px' }) 
$('#bubleNumber' + 5).css({'width': width50 + 'px' })
let speed045 = speed04;
 let myInterval5 = setInterval(() => {
    
      if(bubbleHeight5 > 0) {
          bubbleHeight5 = bubbleHeight5 - speed045;
          $('#bubleNumber' + 5).css({'top': bubbleHeight5 + '%' }) 
      }
      if(bubbleHeight5 < 15) {
          $('#bubleNumber' + 5).remove()
          bubbleHeight5 = 100;
          clearInterval(myInterval5)
          setTimeout(() => {
             bubbleblow5();
          }, timer1000);
          
      }
  }, 10);

}

    //action
    setTimeout(() => {
        bubbleblow1()
    }, 3000); 

    setTimeout(() => {
        bubbleblow2()
    }, 4000); 

    setTimeout(() => {
        bubbleblow3()
    }, 6000); 

    setTimeout(() => {
        bubbleblow4()
    }, 7000); 

    setTimeout(() => {
        bubbleblow5()
    }, 10000); 
 
 

})