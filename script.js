function renderClock() {


//Day of the week
var weekday = moment().format('dddd')
console.log(weekday)
// console.log(
//     "Today is :"+
//     weekday.format('dddd')
    
// );


//The Date
var today = moment().format('DD-MM-YYYY')
// console.log(

//     "Today's date is : "+
//     today.format('DD-MM-YYYY')
// );

//Current Time Display

var now= moment().format('hh : mm')
// let timeBlock = moment().toDate().getTime()
// console.log( 
//     "The Current Time is : "+
//     now.format('hh: mm')
// );


//Link or append to HTML ID to display time

 var Clock = document.getElementById("currentDay");
 Clock.textContent = "  " +weekday+ ".  " +today+ ".  " +now+ "  "
 
 
 

setTimeout('renderclock',1000);
}
renderClock();

//Start Timeblocks section






//functions to link the clock with the table container



function colorBlocks(){
    $('textarea').each(function(){
    var blockHour= this.id
    var currentHour=moment().hours()
    if (blockHour< currentHour){
        $(this).addClass('past')
    }else if (blockHour==currentHour){
        $(this).removeClass('past')
        $(this).addClass('present')
    }else {
        $(this).removeClass('past')
        $(this).removeClass('present')
        $(this).addClass('future')
    }
    })
}



//Local Storage 

//localStorage.setItem('textarea');
//console.log(localStorage.getItem('textarea'));
//localStorage.removeItem('textarea');
//console.log(localStorage.getItem(textarea));

// $('#textarea').currentHour("textarea");
//localStorage.content =$('#textarea').currentHour();
// $('#textarea').currentHour(localStorage.content);


colorBlocks()