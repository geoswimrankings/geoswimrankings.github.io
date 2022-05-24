$(document).ready(function () { 
    let months = [{'month' : 'იანვარი', 'days' : 31 }, {'month' : 'თებერვალი', 'days' : 28 },{'month' : 'მარტი', 'days' : 31 },{'month' : 'აპრილი', 'days' : 30 },{'month' : 'მაისი', 'days' : 31 },{'month' : 'ივნისი', 'days' : 30 },{'month' : 'ივლისი', 'days' : 31 },{'month' : 'აგვისტო', 'days' : 31 },{'month' : 'სექტემბერი', 'days' : 30 },{'month' : 'ოქტომბერი', 'days' : 31 },{'month' : 'ნოემბერი', 'days' : 30 },{'month' : 'დეკემბერი', 'days' : 31 }]



    setInterval(() => {
        let date = new Date();
        
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes()
    let seconds = date.getSeconds();

    

    function findOutLeftTime(comp1Day,comp1Month,comp1Year,comp1Hours,comp1Minutes,comp1Seconds,name) {

        let leftYearDays;
        let leftDays,leftHours,leftMinutes,leftSeconds;
        let leftMonthsDays = 0;
        let leftDaysTillMonth;
        let leftDaysAfterMonth;
        let hoursTill24, hoursAfter24, minutesTill60, minutesAftre60,SecondsTill60,SecondsAfter60;
    
        let leftMonthDaysTillNY = 0;
        let leftMonthDaysAfterNY = 0;
    
        hoursTill24 = 24 - hours - 1;
        minutesTill60 = 60 - minutes - 1;
        SecondsTill60 = 60 - seconds - 1;
    
        hoursAfter24 = comp1Hours;
        minutesAftre60 = comp1Minutes;
        SecondsAfter60 = comp1Seconds;
    
        leftHours = hoursTill24 + hoursAfter24;
        leftMinutes = minutesTill60 + minutesAftre60;
        leftSeconds = SecondsTill60 + SecondsAfter60;
    
        if(year == comp1Year) {
            for(i=month + 1;i<comp1Month;i++) {
               leftMonthsDays = leftMonthsDays + months[i].days;
            }
            if(month == comp1Month) {
                leftDays = comp1Day - day - 1;
            }
            if(month != comp1Month) {
                leftDaysTillMonth = months[month].days - day - 1;
                leftDaysAfterMonth = comp1Day;
                leftDays = leftDaysTillMonth + leftMonthsDays + leftDaysAfterMonth;
            }
            
        }
    
        if(year != comp1Year) {
            for(i=month + 1;i<12;i++) { 
                leftMonthDaysTillNY = leftMonthDaysTillNY + months[i].days;
            }
            for(i=0;i<comp1Month;i++) { 
                leftMonthDaysAfterNY = leftMonthDaysAfterNY + months[i].days;
            }
    
            leftDaysTillMonth = months[month].days - day - 1;
            leftDaysAfterMonth = comp1Day;
    
            leftYearDays = ((comp1Year - year) - 1) * 365;
            
    
             leftDays = leftYearDays + leftMonthDaysTillNY + leftMonthDaysAfterNY + leftDaysTillMonth + leftDaysAfterMonth;
        }
    
       

        if(leftSeconds < 10 ) {
            leftSeconds = '0' + leftSeconds
        }
        
        if(leftMinutes < 10 ) {
            leftMinutes = '0' + leftMinutes
        }

        if(leftHours < 10 ) {
            leftHours = '0' + leftHours
        }

        if(leftHours > 23) {
            leftHours = (leftHours - 24);
            leftDays = leftDays + 1;
        }
        
        if(leftDays >= 0) {
            $('#' + name).html('<span class="chooseColor">' + leftDays + ' დღე </span>' + '\xa0\xa0' + leftHours + ' საათი ' + leftMinutes + ' წუთი ' + leftSeconds + ' წამი' )
        }

        if(leftDays < 0) {
            $('#' + name).html('<div>წარმატებებს</div>'+ '\xa0\xa0' + '<div>გისურვებთ!!!</div>')
        }
        

    }


    //როდესაც წაშლი ერთ ქაუნთდაუნს შეცვალე (countdown-ებიცც აქქქ)


    findOutLeftTime(26,5,2022,13,0,0,'countdown1');
    findOutLeftTime(26,5,2022,6,0,0,'countdown2');
    findOutLeftTime(5,6,2022,13,0,0,'countdown3');
    findOutLeftTime(24,6,2022,13,0,0,'countdown4');
    findOutLeftTime(11,7,2022,12,0,0,'countdown5');
    findOutLeftTime(17,11,2022,11,0,0,'countdown6');
    findOutLeftTime(26,6,2024,13,0,0,'countdown7')

    }, 1000);
})