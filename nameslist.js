
//am siis ganaxleba roca mogindeba shedi ratings1.js 50 xazi


// პროგრამა იყენებს nameslist2 ს

// let namesList2 = ['რევიშვილი ირაკლი', 'კუხალაშვილი ლუკა', 'ერაძე ლუკა', 'აბესაძე დავითი', 'ვაშაკიძე აკაკი', 'კობახიძე თემო', 'ფანცხავა ნოე', 'სიხარულიძე დავითი', 'წურიაშვილი ლუკა', 'შენგელია მამუკა', 'ერაძე გიორგი', 'ჭიჭიაშვილი ნიკა', 'ნიკოლაიშვილი სალომე', 'გელაშვილი გიგი', 'იმნაძე მარიამ', 'კევლიშვილი თინათინ', 'ნაცვლიშვილი ნიკოლოზი', 'TSUKROVSKAYA VARVARA', 'ერაძე სანდრო', 'გრიგალაშვილი ლიზი', 'ჯავახია გიორგი', 'ხაბაზი ზურა', 'ცუცქირიძე ლუკა', 'კვეკვეცია ლიზა', 'ხატიძე ბადრი', 'KUDLOVA VALERYA', 'ჯღარკავა თოკო', 'დავითაშვილი ლუკა', 'კოტრიკაძე ნინო', 'ჭურჭელაური ირაკლი', 'მინდიაშვილი ლაშა', 'ხუციშვილი საბა', 'კორკიტი ზურა', 'კალინინა ლიზა', 'მეყანწიშვილი ლევანი', 'გოგიჩაიშვილი ლიზი', 'ჭეიშვილი სალომე', 'KAPYTSENKA ILYA', 'გოგიჩაიშვილი სალომე', 'კეკჩიდი ანა', 'ჩირკოვა ნადეჟდა', 'გვაზავა ქეთი', 'ხუტუნიშვილი მარიამი', 'გოგინაშვილი რუსუდან', 'სერედინსკი მიხეილ', 'ქვილორია სანდრო', 'ნიჟარაძე ანა', 'კაცაძე სანდრო', 'ბიჭიკაშვილი ჯუდერი', 'მახვილაძე დათო', 'მოსიაშვილი ვლადიმერი', 'ქოიავა გიორგი', 'კობახიძე ზაზა', 'ჯიბლაძე ცოტნე', 'ლემონჯავა კირა', 'გურგენიძე გიორგი', 'ბერუაშვილი ანი', 'ელბაქიძე დუდა', 'ინასარიძე ნინი', 'კირვალიძე თამარი', 'ზვიადაძე დათო', 'მეგრელიძე თამარი', 'გოგია ნიკოლოზი', 'შალოშვილი ლაშა', 'მეგრელიშვილი კესო', 'კელენჯერიძე ლიზი', 'ალავიძე ანი', 'ალხაზიშვილი გიორგი', 'ნემსაძე გიორგი', 'დავითაია შოთა', 'ალავიძე მარია', 'მენჩ ადამ', 'სერედინსკი მიხეილი', 'ზაქარაშვილი მარიამი', 'მამუკაშვილი ანა', 'სერგიენა ალექსეი', 'ნემსაძე დათო', 'გუდაძე ელისო', 'მანაგაძე ნიკა', 'ვართანიანი ქრისტინე', 'მენჩ ადამი', 'კეკჩიდი ნიკა', 'გაბუნია მარიამი', 'ყაველაშვილი მარი', 'მენჩ არტურ', 'ხუტუნიშვილი ნინო', 'მიქელაშვილი ანასტასია', 'მარსაგიშვილი გიორგი', 'ბარხუდაროვი დიმიტრი', 'ლეკიშვილი ლუკა', 'კახაძე მარი', 'ბერნუაშვილი ანი', 'სოხაძე სანდრო', 'ცხადაძე გიორგი', 'ბერიძე თეკლა', 'ხარიბინა ეკატერინე', 'დგებუაძე ლუკა', 'შჩერბაევა სალო', 'სოფრომაძე ანა', 'დღებუაძე ლუკა','კაკაბაძე გიორგი', 'ცაგარეიშვილი გიორგი', 'ჯღარკავა ჯაბა', 'ივანაშვილი მარინე', 'ხოტულოვი მირონი', 'შალოშვილი შალვა', 'მეხრიშვილი მათე', 'ღვინიაშვილი გიორგი', 'სულიკაშვილი დემეტრე', 'გურგენაძე ირაკლი', 'წულაია ლიზი', 'გიორგიშვილი მია', 'რატიანი ლუკა', 'მიშველაძე დიმიტრი', 'შერბაევა სალი', 'ჩერედნიკ ნიკა', 'კვაშილავა ნიკა', 'იველაშვილი ირაკლი', 'ყაველაშვილი თორნიკე', 'იმნაიშვილი ქეთევან', 'უტკევჩი გრიშა', 'როსტიაშვილი ელენე', 'ბუზიაშვილი მარი', 'დუმბაძე ლუკა', 'ჩხაიძე გიორგი', 'გოგოლაძე გიორგი', 'სერგანია ალექსი', 'ცაბუტაშვილი დათო', 'ქართლელიშვილი ლადო', 'ბენდელიანი საბა', 'გვიმრაძე თაკო', 'თათელაძე ერეკლე', 'ნინიძე ქეთევანი', 'აბრამიშვილი გიორგი', 'ტრაპაიძე ელენე', 'უტკევჩი გიორგი', 'ქართველიშვილი ლუკა', 'ბერძენიშვილი გიორგი', 'ქოჩიაშვილი ნათელა', 'მურადაშვილი საბა', 'სოზიაშვილი ვაკო', 'დეკანოსიძე ლუკა', 'გოგოლაძე გვანცა', 'ოდიკაძე ალექსანდრე', 'ჩადუნელი ლუკა', 'უგრეხელიძე გიორგი', 'მიშველაძე დიმტრი', 'ჟღარკავა ჟაბა', 'ტიელიძე ნატა', 'დარხუდაროვი დიმიტრი', 'ჩიხლაძე გიორგი', 'ზაქარაშვილი მარი', 'ტყაბლაძე ნიკოლოზი', 'ჭვრიტიძე ბექა', 'შალვაშვილი ლაშა', 'ხანდამიშვილი ლუკა', 'გელაშვილი სანდრო', 'ჩხიკვაძე ანდრია', 'მამუკაშვილი ნინო', 'მარწყვიშვილი ლუკა', 'მაჭავარიანი ნათია', 'ზარდიაშვილი ნინო', 'მახარაშვილი ანდრეა', 'ხახუტაშვილი ნიკა', 'ჩხეიძე ლუკა', 'გაიაშვილი გიორგი', 'ხონელიძე თომა', 'სადაღაშვილი ნინო', 'მღებრიშვილი აკაკი', 'სალამაძე თინათინი', 'შალოშვილი საბა', 'ჭიტაძე გიორგი', 'ბოსტაშვილი თეონა', 'კვესაძე ელენე', 'გაბუნია', 'რუხაძე ნინო', 'მესხიშვილი დაჩი', 'ვოსკანიანი ანრი', 'თურმანიძე ლიზი', 'ყიფშიძე მედეა', 'შათირიშვილი ანასტასია', 'სტეფანაშვილი მარიამი', 'ორბელაშვილი მარი', 'კვარაცხელია ლევანი', 'მოდებაძე რატი', 'გრძელიძე მარი', 'მჭედლიძე ბექა', 'სტეფანიშვილი მარიამი', 'ღვალაძე ლუარსაბი', 'გეწაძე ლიზი', 'ჩალაძე ლუკა', 'ფარცხალაძე მარიამი', 'მამუკაშვილი ლიზი', 'დეკანოსიძე ნუცა', 'მენჩ არტური', 'ბუიაჩევა მუმინატ', 'ფოლადაშვილი ანდრეა', 'მეგრეკლიშვილი კესო', 'კალანდაძე რომა', 'ფხალაძე გურამ','ჯიქიძე ალექსანდრე', 'ბეჭვაია ნინო', 'გუგუტიშვილი ზაქარია', 'ბაზაძე ვახო', 'ბიაუჩევი მუმინატ', 'ცირდავა ნიკოლოზი', 'ქვლივიძე მარიამი', 'ღონღაძე მარი', 'სადაღაშვილი ნინი', 'ფოლადაშვილი ანდრია', 'მამუკაშვიილი ანა', 'იაშვილი ოთარი', 'ბოლქვაძე გიორგი', 'ნოზაძე ია', 'რუსეიშვილი დაჩი', 'მაღალაძე საბა', 'მჭედლიშვილი ლუკა', 'ჯანაშვილი კოტე', 'აბზიანიძე თინა', 'აბრამიშვილი ლიკა', 'მჭედლიძე ლუკა', 'პაპუნაშვილი მარიამი', 'რუსიეშვილი დაჩი', 'გოცაძე ანასტასია', 'არზიანი გიგი', 'ნადირაძე მარიამი', 'კახაძე ნიკა', 'ერაძე ნინო', 'ხუტულოვი მირონი', 'ივანოვა ანნა', 'შაგალოვა მარგარიტა', 'ბადრიძე ნინი', 'სოფრომაძე მირიანი', 'წერეთელი ანასტასია', 'დეკანოსიძე ნინო', 'ჯიბუტი გიგი', 'ჭულუხიძე ლადო', 'ხვედელიძე გივი', 'ბარხუდაროვი ნიკა', 'ლეკიაშვილი ქეთევან', 'ჭულუხაძე ლადო', 'კახნიაშვილი თორნიკე', 'მამულაძე სოფო', 'სიფახი მინა', 'ბერიძე ნიკა', 'ბიუაჩევ იბრაგიმ', 'აფციაური დემეტრე', 'ხვედელიძე თინათინი', 'კაპანაძე დაჩი', 'მაღალაძე ომარი', 'თვაური ნიკოლოზი', 'თოდუა ხატია', 'გოლუბიანი ლუკა', 'ბუიაჩევ იბრაგიმ', 'ჩადრაშვილი შავლეგო', 'ხვედელიძე თინათინ', 'ციცქიშვილი აჩიკო', 'სამხარაძე ლუკა', 'ქემაშვილი მათე ', 'იოსელიანი სალომე', 'ცუხიშვილი გელა', 'ტიელიძე ნია', 'კალანდაძე თათია', 'მანგოშვილი კახი']


let namesList2 = ['დღებუაძე ლუკა', 'ცაგარეიშვილი გიორგი', 'როსტიაშვილი ელენე', 'უგრეხელიძე გიორგი', 'ქართველიშვილი ლუკა', 'შალოშვილი შალვა', 'სოფრომაძე ანა', 'ვართანიანი ქრისტინე', 'კვაშილავა ნიკა', 'სოხაძე სანდრო', 'იველაშვილი ირაკლი', 'იმნაიშვილი ქეთევან', 'ტრაპაიძე ელენე', 'გოგოლაძე გიორგი', 'კაკაბაძე გიორგი', 'შერბაევა სალი', 'წულაია ლიზი', 'უტკევჩი გრიშა', 'ცაბუტაშვილი დათო', 'ყაველაშვილი თორნიკე', 'გვიმრაძე თაკო', 'ჭვრიტიძე ბექა', 'თათელაძე ერეკლე', 'ბერძენიშვილი გიორგი', 'გეწაძე ლიზი', 'ჩადუნელი ლუკა', 'ჯღარკავა ჯაბა', 'ღვინიაშვილი გიორგი', 'ჩხიკვაძე ანდრია', 'აბრამიშვილი გიორგი', 'მახარაშვილი ანდრეა', 'ქოჩიაშვილი ნათელა', 'მიშველაძე დიმიტრი', 'ხანდამიშვილი ლუკა', 'მოდებაძე რატი', 'უტკევჩი გიორგი', 'გოგოლაძე გვანცა', 'ხოტულოვი მირონი', 'სულიკაშვილი დემეტრე', 'ოდიკაძე ალექსანდრე', 'მამუკაშვილი ნინო', 'მურადაშვილი საბა', 'ტიელიძე ნატა', 'ჩიხლაძე გიორგი', 'ქართლელიშვილი ლადო', 'კვესაძე ელენე', 'ბუზიაშვილი მარი', 'ხახუტაშვილი ნიკა', 'ზაქარაშვილი მარი', 'დეკანოსიძე ლუკა', 'თურმანიძე ლიზი', 'მესხიშვილი დაჩი', 'გოგსაძე ლუკა', 'გელაშვილი სანდრო', 'შალვაშვილი ლაშა', 'მამმადოვ მუხამედ', 'მაჭავარიანი ნათია', 'ზარდიაშვილი ნინო', 'სტეფანიშვილი მარიამი', 'ჩხეიძე ლუკა', 'გაიაშვილი გიორგი', 'აბზიანიძე თინა', 'მამმადოვ მუხამედი', 'ხონელიძე თომა', 'სოზიაშვილი ვაკო', 'მღებრიშვილი აკაკი', 'ღორთქლიშვილი დავითი', 'ბოსტაშვილი თეონა', 'ფარცხალაძე მარიამი', 'ივანაშვილი მარინე', 'რუხაძე ნინო', 'სადაღაშვილი ნინი', 'ვოსკანიანი ანრი', 'ჩხაიძე გიორგი', 'ყიფშიძე მედეა', 'შათირიშვილი ანასტასია', 'ფოლაშვილი ანდრია', 'სტეფანაშვილი მარიამი', 'რუსეიშვილი დაჩი', 'სადაღაშვილი ნინო', 'ღორთლიშვილი დავითი', 'მამმადოვი მუხამად', 'ბერიძე თეკლა', 'კვარაცხელია ლევანი', 'ორბელაშვილი მარი', 'მარწყვიშვილი ლუკა', 'ტყაბლაძე ნიკოლოზი', 'ქერაული დავითი', 'ჯიბუტი გიგი', 'გრძელიძე მარი', 'შალოშვილი საბა', 'ჩალაძე ლუკა', 'მამუკაშვილი ლიზი', 'დუმბაძე ლუკა', 'ჯიქიძე ალექსანდრე', 'მენჩ არტური', 'დეკანოსიძე ნუცა', 'ლომაძე გიორგი', 'ნინიძე ქეთევანი', 'კალანდაძე რომა','ბუიაჩევა მუმინატ', 'ჭულუხაძე ლადო', 'ცირდავა ნიკოლოზი', 'ფხალაძე გურამ', 'სალამაძე თინათინი', 'ჩადრაშვილი შავლეგო', 'რუსიეშვილი დაჩი', 'ბეჭვაია ნინო', 'ივანოვა ანნა', 'ნადირაძე მარიამი', 'ბაზაძე ვახო', 'ბიაუჩევი მუმინატ', 'ქვლივიძე მარიამი', 'მარგველაშვილი სალომე', 'ღონღაძე მარი', 'მამმადოვი მუხამედ', 'ახვლედიანი დათა', 'მაღალაძე საბა', 'ბოლქვაძე გიორგი', 'გოცაძე ანასტასია', 'ერაძე ნინო', 'მინდოდაური თამარი', 'ფოლადაშვილი ანდრია', 'გოგუაძე ცოტნე', 'მაღალაძე ომარი', 'ბადალაშვილი სანდრო', 'პაპუნაშვილი მარიამი', 'ტიელიძე ნია', 'არზიანი გიგი', 'ლომაძე მარიამი', 'აბრამიშვილი ლიკა', 'კახაძე ნიკა', 'გეორგიევ დანიილ', 'ქერაული დათო', 'ხუტულოვი მირონი', 'სოფრომაძე მირიანი', 'დეკანოსიძე ნინო', 'წერეთელი ანასტასია', 'ჭიტაძე გიორგი', 'ღორთლიშვილი არენა', 'ფოლადაშვილი ანდრეა', 'გუგუტიშვილი ზაქარია', 'ხვედელიძე გივი', 'აფციაური დემეტრე', 'ბარხუდაროვი ნიკა', 'ლეკიაშვილი ქეთევან', 'ციცქიშვილი აჩიკო', 'მჭედლიშვილი ლუკა', 'სიფახი მინა', 'ჯანაშვილი კოტე', 'ბუიაჩევ იბრაგიმ', 'მამულაძე სოფო', 'თვაური ნიკოლოზი', 'კახნიაშვილი თორნიკე', 'თოდუა ხატია', 'გოლუბიანი ლუკა', 'იოსელიანი სალომე', 'ცაგარეიშვილი ლაშა', 'ხვედელიძე თინათინ', 'ქემაშვილი მათე', 'სამხარაძე ლუკა', 'ქემაშვილი მათე ', 'მაევსკაია ელენე', 'შაგალოვა მარგარიტა', 'ცუხიშვილი გელა', 'კალანდაძე თათია','რევიშვილი ირაკლი', 'კუხალაშვილი ლუკა', 'ერაძე ლუკა', 'ფანცხავა ნოე', 'აბესაძე დავითი', 'ვაშაკიძე აკაკი', 'კობახიძე თემო', 'სიხარულიძე დავითი', 'წურიაშვილი ლუკა', 'შენგელია მამუკა', 'ერაძე გიორგი', 'ჭიჭიაშვილი ნიკა', 'გელაშვილი გიგი', 'იმნაძე მარიამ', 'კევლიშვილი თინათინ', 'ნაცვლიშვილი ნიკოლოზი', 'მინდიაშვილი ლაშა', 'ჯღარკავა თოკო', 'გრიგალაშვილი ლიზი', 'ნიკოლაიშვილი სალომე', 'ერაძე სანდრო', 'კვეკვეცია ლიზა', 'ჯავახია გიორგი', 'ხაბაზი ზურა', 'ცუცქირიძე ლუკა', 'ხუციშვილი საბა', 'ქვილორია სანდრო', 'დავითაშვილი ლუკა', 'ხატიძე ბადრი', 'გვაზავა ქეთი', 'ჭურჭელაური ირაკლი', 'TSUKROVSKAYA VARVARA', 'კორკიტი ზურა', 'KUDLOVA VALERYA', 'ჩირკოვა ნადეჟდა', 'ნიჟარაძე ანა', 'გოგია ნიკოლოზი', 'ხუტუნიშვილი მარიამი', 'მახვილაძე დათო', 'კალინინა ლიზა', 'ინასარიძე ნინი', 'სერედინსკი მიხეილ', 'გოგინაშვილი რუსუდან', 'ბერუაშვილი ანი', 'ზვიადაძე დათო', 'კეკჩიდი ანა', 'სერგიენა ალექსეი', 'კრავეიშვილი ბათუ', 'გურგენიძე გიორგი', 'ბიჭიკაშვილი ჯუდერი', 'გოგიჩაიშვილი სალომე', 'მოსიაშვილი ვლადიმერი', 'ქოიავა გიორგი', 'კობახიძე ზაზა', 'ჯიბლაძე ცოტნე', 'ლემონჯავა კირა', 'ბარხუდაროვი დიმიტრი', 'ელბაქიძე დუდა', 'ყაველაშვილი მარი', 'კაცაძე სანდრო', 'მამუკაშვილი ანა', 'კეკჩიდი ნიკა', 'მენჩ ადამ', 'მეგრელიძე თამარი', 'გურგენაძე ირაკლი', 'შჩერბაევა სალო', 'რატიანი ლუკა', 'კელენჯერიძე ლიზი', 'კირვალიძე თამარი', 'მეყანწიშვილი ლევანი', 'კოტრიკაძე ნინო', 'კერესელიძე ნიკოლოზი', 'ჭეიშვილი სალომე', 'მეგრელიშვილი კესო', 'მიქელაშვილი ანასტასია', 'ალავიძე ანი', 'ალხაზიშვილი გიორგი', 'ნემსაძე გიორგი', 'დავითაია შოთა', 'გოგიჩაიშვილი ლიზი', 'ალავიძე მარია', 'გაბუნია მარიამი', 'მეხრიშვილი მათე', 'მანაგაძე ნიკა', 'გუდაძე ელისო', 'მენჩ ადამი', 'ზაქარაშვილი მარიამი', 'შალოშვილი ლაშა', 'მენჩ არტურ', 'ხუტუნიშვილი ნინო', 'მარსაგიშვილი გიორგი', 'კახაძე მარი', 'ჩერედნიკ ნიკა', 'ბენდელიანი საბა', 'ბერნუაშვილი ანი', 'ცხადაძე გიორგი', 'ხარიბინა ეკატერინე', 'ნემსაძე დათო', 'დგებუაძე ლუკა', 'ლეკიშვილი ლუკა']


// ამას რომ შეცვლი შეცვალი HC ის nameslist ის ფაილიიიც, რომელიც ამის კოპია