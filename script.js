
$(document).ready(function () {

  let showUpPlatform = 0;

  $(document).on('click',()=>{
    showUpPlatform ++;
    showUpPlatform > 10 && $('#whitePage1').css({'display':'none'})
  })

  $(document).scroll(function() {
    let height = window.innerHeight;
    let scrollPosition = $(this).scrollTop()
    let divTop = 15 - Math.ceil((scrollPosition / innerHeight) * 100);
    let divHeight = 85 + Math.ceil((scrollPosition / innerHeight) * 100);
    if(divTop > -3) {

    $('#font').css({'top': divTop + '%'})
    $('#font').css({'height': divHeight + '%'})

    
    $('#background01').css({'top': divTop + '%'})
    $('#background01').css({'height': divHeight + '%'})
    }
    
  })


  //იგებს კომპიუტერით ხარ შემოსული თუ მობილურით
  let width = window.innerWidth;
  setInterval(() => {
      width = window.innerWidth;

  }, 1000);

 

  $('#main').slideDown()
  $('#competitions').delay(100).slideDown()
  $('#athletes').delay(200).slideDown()
  $('#topAthletes').delay(300).slideDown()
  $('#finaPoints').delay(400).slideDown()
  $('#geoRecords').delay(500).slideDown()
  $('#barOpener').fadeOut();
  $('#barCloser').delay(500).fadeIn();

  setTimeout(() => {
    if(width < 600) {
       $('#barCloser').fadeOut();
    $('#competitions').delay(400).slideUp()
    $('#athletes').delay(300).slideUp()
    $('#topAthletes').delay(200).slideUp()
    $('#finaPoints').delay(100).slideUp()
    $('#geoRecords').slideUp()
    $('#barOpener').delay(500).fadeIn();
    }
   
  }, 2300);

  $('#barOpener').on('click', function () {
    $('#main').slideDown()
    $('#competitions').delay(100).slideDown()
    $('#athletes').delay(200).slideDown()
    $('#topAthletes').delay(300).slideDown()
    $('#finaPoints').delay(400).slideDown()
    $('#geoRecords').delay(500).slideDown()
    $('#barOpener').fadeOut();
    $('#barCloser').delay(500).fadeIn();
  })

  function slideUpBars() {
    $('#barCloser').fadeOut();
    $('#main').delay(500).slideUp()
    $('#competitions').delay(400).slideUp()
    $('#athletes').delay(300).slideUp()
    $('#topAthletes').delay(200).slideUp()
    $('#finaPoints').delay(100).slideUp()
    $('#geoRecords').slideUp()
    $('#barOpener').delay(500).fadeIn();
  }

  $('#barCloser').on('click', function () {
    slideUpBars();
  })

  $('.bars').on('click', function () {
    $('.showHide').hide('');
    $('#topsList').html('');
    $('#topsHeader').hide('');
    $('#header4').html('')
    $('#finaDiv').hide();
    $('#competitionsDiv').hide();
    $('#main1').hide();
    $('#tables').hide();
    $('#competitionResults').html('');
    if(width < 600) {
      slideUpBars();
    }
    
    $(this).slideDown();
    if ($(this).attr('id') == 'athletes') {
      $('#mainForm').show();
      $('#font').css({'width':'98%'})
    }
    if ($(this).attr('id') == 'topAthletes') {
      $('#ratingsBar').show();
      $('#font').css({'width':'98%'})
    }
    if ($(this).attr('id') == 'finaPoints') {
      $('#finaDiv').show();
      $('#font').css({'width':'82%'})
    }
    if ($(this).attr('id') == 'competitions') {
      $('#competitionsDiv').show();
      $('#font').css({'width':'88%'})
    }
    if ($(this).attr('id') == 'main') {
      $('#main1').show();
      $('#font').css({'width':'80%'})
    }
    if ($(this).attr('id') == 'geoRecords') {
      $('#tables').show();
      $('#font').css({'width':'96%'})
    }
  })


  //ირაჩკას ნიუსი

  let next = 0;

  $('#newsButton').on('click', function () {
    if (next == 7) {
      $('#news').hide();
      next = next + 1;
    }
    if (next == 6) {
      $('#newsText').html('ალბათ მიხვდებოდით ვინ არის ქალების მთავარი რეფერი ვინც ეს გადაწყვეტილება მიიღო. დაგვეხმარე მივახვედროთ ის რომ თანამედროვე მეთოდების გამოყენება კარგია და ხელს უწყობს საქართველოს ცურვის განვითარებას. მადლობა ყურადღებისთვის ^_^')
      $('#newsAboutMinjo').css('background-image', 'url("incognito.jpg")')
      next = next + 1;
    }

    if (next == 5) {
      $('#newsText').html('სამწუხაროდ ამ პლატფორმაზეც ვერ ვნახავთ შეჯიბრის შედეგებს სანამ მთავარი მდივანი მას არ დაალაგებს და გამოაქვეყნებს.')
      $('#newsAboutMinjo').css('background-image', 'url("girls1.jpg")')
      next = next + 1;
    }

    if (next == 4) {
      $('#newsText').html('ამდროს რთულია მეგობრების და კონკურენტების შედეგების დამახსოვრებაც. რომლებიც ასევე ძალიან საინტერესოა მოცურავისთვის.')
      $('#newsAboutMinjo').css('background-image', 'url("girls2.jpg")')
      next = next + 1;
    }

    if (next == 3) {
      $('#newsText').html('დინამიკით გამოცხადებული შედეგის გაგება შეჯიბრის ხმაურში ძალიან რთულია.')
      $('#newsAboutMinjo').css('background-image', 'url("komshiko.jpg")')
      next = next + 1;
    }

    if (next == 2) {
      $('#newsText').html('უკვე არცერთ ქვეყანაში აღარ გამოიყენება ცურვის შეჯიბრზე მსგავსი მეთოდი.')
      $('#newsAboutMinjo').css('background-image', 'url("phelps.jpg")')
      next = next + 1;
    }

    if (next == 1) {
      $('#newsText').html('ნაცვლად ამისა მას სურს რომ შედეგების გამოცხადება მოხდეს დინამიკით. ამ შემთხვევაში შეჯიბრზე დაფიქსირებული შედეგების გამოქვეყნებას შეჯიბრის მთავარი მდივანი შეძლებს შეჯიბრის დასრულებიდან 2-3 კვირაში.')
      $('#newsAboutMinjo').css('background-image', 'url("cersei.jpg")')
      next = next + 1;
    }

    if (next == 0) {
      $('#newsText').html('საქართველოს 2021 წლის ზამთრის ღია ჩემპიონატის ქალების მთავარმა რეფერმა გადაწყვიტა რომ შეჯიბრზე გამოყენებული არ იქნეს პროგრამა რომელიც უზრუნველყოფდა გაცურვის შემდეგ დაფიქსირებული შედეგების ამობეჭდვას, სპორცმენებისთვის და გულშემატკივრებისთვის მიწოდებას და შეჯიბრის დამთავრებისთანავე ამ შედეგების გამოქვეყნებას.')
      $('#newsAboutMinjo').css('background-image', 'url("cersei1.jpg")')
      next = next + 1;
    }


  })



})





