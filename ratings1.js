$(document).ready(function () {

    const d = new Date();
    let year = d.getFullYear();

    $('#topAthletes').on('click', function () {

        $('#information5').show();

        $('#close5').on('click', function() {
            $('#information5').hide();
        })
        
        let allRatings = [];
        let allGirlsRatings = [];
        let allBoysRating = [];
        let allBoysRating18 = [];
        let allGirlsRatings18 = [];
        let allRatings18 = [];
        let allRatingsJuniors = [];
        let allRatingsJuniorsGirls = [];
        let allRatingsJuniorsBoys = [];

        let allTimes = [];

        for (i = 0; i < compsArray.length; i++) {
            if (compsArray[i].results) {
                for (j = 0; j < compsArray[i].results.length; j++) {
                    if (compsArray[i].results[j].points > 0 && compsArray[i].results[j].points < 1100) {
                        Object.assign(compsArray[i].results[j], { event: compsArray[i].event })
                        Object.assign(compsArray[i].results[j], { gender: compsArray[i].gender })
                        Object.assign(compsArray[i].results[j], { date: compsArray[i].date })
                        Object.assign(compsArray[i].results[j], { course: compsArray[i].course })

                        allTimes.push(compsArray[i].results[j])

                        // ეს არი ის რაც გამორიცხავს 18 წლანდელების 50 მეტრიანის ქულებს რეიტინგიდან
                        if(year - compsArray[i].results[j].age < 19 && compsArray[i].results[j].event.split(' ')[0] == '50') {
                            allTimes.pop();
                        }
                        
                    }

                }
            }
        }
        allTimes.sort((a, b) => {
            return b.points - a.points;
        });

        // ეს დაიმახსოვრეეეეეეე, მაგარი რაღაცაა, არეიშ ერთი და იგივე სახელებიდან ერთის დატოვება და მეორეს წაშლა.
        let filteredArr = [];

        filteredArr = allTimes.reduce((acc, current) => {
            const x = acc.find(item => item.name === current.name);
            if (!x) {
                return acc.concat([current])
            } else {
                return acc;
            }
        }, [])


      let allNamesList = []

        for(i=200;i<filteredArr.length;i++) {
         allNamesList.push(filteredArr[i].name)
        }


      for (i = 0; i < filteredArr.length; i++) {
        if (filteredArr[i].country == 'Geo') {
             
            allRatings.push(filteredArr[i])
        
        }
    }

        for (i = 0; i < filteredArr.length; i++) {
            if (filteredArr[i].gender == 'ქალები' && filteredArr[i].country == 'Geo') {
                allGirlsRatings.push(filteredArr[i])
            }

        }


        for (i = 0; i < filteredArr.length; i++) {
            if (filteredArr[i].gender == 'კაცები' && filteredArr[i].country == 'Geo') {
                allBoysRating.push(filteredArr[i])
            }
        }




        for (i = 0; i < filteredArr.length; i++) {
            if (filteredArr[i].gender == 'კაცები' && filteredArr[i].country == 'Geo' && year - filteredArr[i].age < 19) {
                allBoysRating18.push(filteredArr[i])
            }
        }


        for (i = 0; i < filteredArr.length; i++) {
            if (filteredArr[i].gender == 'ქალები' && filteredArr[i].country == 'Geo' && year - filteredArr[i].age < 19) {
                allGirlsRatings18.push(filteredArr[i])
            }
        }


        for (i = 0; i < filteredArr.length; i++) {
            if (filteredArr[i].country == 'Geo' && year - filteredArr[i].age < 19) {
                allRatings18.push(filteredArr[i])
            }
        }


        for (i = 0; i < filteredArr.length; i++) {
            if (filteredArr[i].country == 'Geo' && year - filteredArr[i].age < 16) {
                allRatingsJuniors.push(filteredArr[i])
            }
        }




        for (i = 0; i < filteredArr.length; i++) {
            if (filteredArr[i].gender == 'ქალები' && filteredArr[i].country == 'Geo' && year - filteredArr[i].age < 16) {
                allRatingsJuniorsGirls.push(filteredArr[i])
            }
        }






        for (i = 0; i < filteredArr.length; i++) {
            if (filteredArr[i].gender == 'კაცები' && filteredArr[i].country == 'Geo' && year - filteredArr[i].age < 16) {
                allRatingsJuniorsBoys.push(filteredArr[i])
            }
        }




        $('.ratings').on('click', function () {
            if ($('#year1').val() && $('#year2').val()) {
                $('#ratingsBar').hide();
                $('#top10GrilsList').show();
                $('#topsList').html('');

                if ($(this).attr('id') == 'allRatings') {
                    $('#header4').html('ქართველი მოცურავეების საერთო რეიტინგი')
                    for (f = 0; f < allRatings.length; f++) {
                        $('#topsList').append('<div>' + (f + 1) + ')</div><div>' + allRatings[f].name + '</div><div>' + allRatings[f].age + '</div><div>' + allRatings[f].event + ' (' + allRatings[f].course + ')' + '</div><div>' + allRatings[f].result + '</div><div>' + allRatings[f].points + '</div>' + '<div>(' + allRatings[f].date + ')</div>');
                        $('#topsHeader').css('display', 'grid');
                    }
                }

                if ($(this).attr('id') == 'allGirlsRatings') {
                    $('#header4').html('მოცურავე ქალების რეიტინგი');
                    for (f = 0; f < allGirlsRatings.length; f++) {
                        $('#topsList').append('<div>' + (f + 1) + ')</div><div>' + allGirlsRatings[f].name + '</div><div>' + allGirlsRatings[f].age + '</div><div>' + allGirlsRatings[f].event + ' (' + allGirlsRatings[f].course + ')' + '</div><div>' + allGirlsRatings[f].result + '</div><div>' + allGirlsRatings[f].points + '</div>' + '<div>(' + allGirlsRatings[f].date + ')</div>');
                        $('#topsHeader').css('display', 'grid');
                    }
                }

                if ($(this).attr('id') == 'allBoysRatings') {
                    $('#header4').html('მოცურავე კაცების რეიტინგი')
                    for (f = 0; f < allBoysRating.length; f++) {
                        $('#topsList').append('<div>' + (f + 1) + ')</div><div>' + allBoysRating[f].name + '</div><div>' + allBoysRating[f].age + '</div><div>' + allBoysRating[f].event + ' (' + allBoysRating[f].course + ')' + '</div><div>' + allBoysRating[f].result + '</div><div>' + allBoysRating[f].points + '</div>' + '<div>(' + allBoysRating[f].date + ')</div>');
                        $('#topsHeader').css('display', 'grid');
                    }
                }

                if ($(this).attr('id') == 'under18Ratings') {
                    $('#header4').html('იუნიორების რეიტინგი')
                    for (f = 0; f < allRatings18.length; f++) {
                        $('#topsList').append('<div>' + (f + 1) + ')</div><div>' + allRatings18[f].name + '</div><div>' + allRatings18[f].age + '</div><div>' + allRatings18[f].event + ' (' + allRatings18[f].course + ')' + '</div><div>' + allRatings18[f].result + '</div><div>' + allRatings18[f].points + '</div>' + '<div>(' + allRatings18[f].date + ')</div>');
                        $('#topsHeader').css('display', 'grid');

                    }
                }

                if ($(this).attr('id') == 'U18Boys') {
                    $('#header4').html('იუნიორი ბიჭების რეიტინგი')
                    for (f = 0; f < allBoysRating18.length; f++) {
                        $('#topsList').append('<div>' + (f + 1) + ')</div><div>' + allBoysRating18[f].name + '</div><div>' + allBoysRating18[f].age + '</div><div>' + allBoysRating18[f].event + ' (' + allBoysRating18[f].course + ')' + '</div><div>' + allBoysRating18[f].result + '</div><div>' + allBoysRating18[f].points + '</div>' + '<div>(' + allBoysRating18[f].date + ')</div>');
                        $('#topsHeader').css('display', 'grid');

                    }
                }

                if ($(this).attr('id') == 'U18Girls') {
                    $('#header4').html('იუნიორი გოგონების რეიტინგი')
                    for (f = 0; f < allGirlsRatings18.length; f++) {
                        $('#topsList').append('<div>' + (f + 1) + ')</div><div>' + allGirlsRatings18[f].name + '</div><div>' + allGirlsRatings18[f].age + '</div><div>' + allGirlsRatings18[f].event + ' (' + allGirlsRatings18[f].course + ')' + '</div><div>' + allGirlsRatings18[f].result + '</div><div>' + allGirlsRatings18[f].points + '</div>' + '<div>(' + allGirlsRatings18[f].date + ')</div>');
                        $('#topsHeader').css('display', 'grid');

                    }
                }


                if ($(this).attr('id') == 'juniorRatings') {
                    $('#header4').html('კადეტების რეიტინგი')
                    for (f = 0; f < allRatingsJuniors.length; f++) {
                        $('#topsList').append('<div>' + (f + 1) + ')</div><div>' + allRatingsJuniors[f].name + '</div><div>' + allRatingsJuniors[f].age + '</div><div>' + allRatingsJuniors[f].event + ' (' + allRatingsJuniors[f].course + ')' + '</div><div>' + allRatingsJuniors[f].result + '</div><div>' + allRatingsJuniors[f].points + '</div>' + '<div>(' + allRatingsJuniors[f].date + ')</div>');
                        $('#topsHeader').css('display', 'grid');

                    }
                }



                if ($(this).attr('id') == 'juniorGirls') {
                    $('#header4').html('კადეტი გოგონების რეიტინგი')
                    for (f = 0; f < allRatingsJuniorsGirls.length; f++) {
                        $('#topsList').append('<div>' + (f + 1) + ')</div><div>' + allRatingsJuniorsGirls[f].name + '</div><div>' + allRatingsJuniorsGirls[f].age + '</div><div>' + allRatingsJuniorsGirls[f].event + ' (' + allRatingsJuniorsGirls[f].course + ')' + '</div><div>' + allRatingsJuniorsGirls[f].result + '</div><div>' + allRatingsJuniorsGirls[f].points + '</div>' + '<div>(' + allRatingsJuniorsGirls[f].date + ')</div>');
                        $('#topsHeader').css('display', 'grid');
                    }
                }


                if ($(this).attr('id') == 'juniorBoys') {
                    $('#header4').html('კადეტი ბიჭების რეიტინგი')
                    for (f = 0; f < allRatingsJuniorsBoys.length; f++) {
                        $('#topsList').append('<div>' + (f + 1) + ')</div><div>' + allRatingsJuniorsBoys[f].name + '</div><div>' + allRatingsJuniorsBoys[f].age + '</div><div>' + allRatingsJuniorsBoys[f].event + ' (' + allRatingsJuniorsBoys[f].course + ')' + '</div><div>' + allRatingsJuniorsBoys[f].result + '</div><div>' + allRatingsJuniorsBoys[f].points + '</div>' + '<div>(' + allRatingsJuniorsBoys[f].date + ')</div>');
                        $('#topsHeader').css('display', 'grid');
                    }
                }

                if ($(this).attr('id') == 'top10Boys') {
                    $('#header4').html('საუკეთესო 10 კაცი მოცურავე')
                    for (f = 0; f < 10; f++) {
                        $('#topsList').append('<div>' + (f + 1) + ')</div><div>' + allBoysRating[f].name + '</div><div>' + allBoysRating[f].age + '</div><div>' + allBoysRating[f].event + ' (' + allBoysRating[f].course + ')' + '</div><div>' + allBoysRating[f].result + '</div><div>' + allBoysRating[f].points + '</div>' + '<div>(' + allGirlsRatings[f].date + ')</div>');
                        $('#topsHeader').css('display', 'grid');
                    }
                }

                if ($(this).attr('id') == 'top10Girls') {
                    $('#header4').html('საუკეთესო 10 ქალი მოცურავე')
                    for (f = 0; f < 10; f++) {
                        $('#topsList').append('<div>' + (f + 1) + ')</div><div>' + allGirlsRatings[f].name + '</div><div>' + allGirlsRatings[f].age + '</div><div>' + allGirlsRatings[f].event + ' (' + allGirlsRatings[f].course + ')' + '</div><div>' + allGirlsRatings[f].result + '</div><div>' + allGirlsRatings[f].points + '</div>' + '<div>(' + allGirlsRatings[f].date + ')</div>');
                        $('#topsHeader').css('display', 'grid');
                    }
                }

            } else {
                alert('გთხოვთ შეავსოთ გრაფა "წელი:"')
            }

        })



    })

})