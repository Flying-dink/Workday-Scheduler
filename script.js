function renderClock() {


//Day of the week
var weekday = moment();
console.log(
    "Today is :"+
    weekday.format('dddd')
    
);


//The Date
var today = moment();
console.log(

    "Today's date is : "+
    today.format('DD-MM-YYYY')
);

//Current Time Display

var now= moment();
let timeBlock = moment().toDate().getTime()
console.log( 
    "The Current Time is : "+
    now.format('hh: mm')
);


//Link or append to HTML ID to display time

 var Clock = document.createElement("clock");
 Clock.textContent = "" +weekday+ "" +today+ "" +now+ "|"
 Clock.innerText = "" |
 clock.append
 

setTimeout('renderclock',1000);
}
renderClock();

//Start Timeblocks section

var conatainer
$('#container'). Container({})




//functions to link the clock with the table container







//Local Storage 
$('#test').textarea("test");
localStorage.content =$('#test').textarea();
$('#test').textarea(localStorage.content);


