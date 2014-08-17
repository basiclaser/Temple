
// A button for testing
require("sdk/ui/button/action").ActionButton({
  id: "list-tabs",
  label: "List Tabs",
  icon: "./icon-16.png",
  onClick: temple
});


var tabs = require("sdk/tabs");
function temple(){
console.log(tabs)


  ////////////////////////  //MODERATE THE NUMBER OF TABS

    //keep atleast four tabs
    // function upFour(){
    //   while(tabs.length < 4 )
    //     tabs.open("https://duckduckgo.com");
    //   }
    // upFour();

    //prevent more than four tabs
    function downFour(){
      while(tabs.length > 4)
      tabs[4].close();
    };
    downFour();

////////////////////////  //MODERATE THE FREQUENCY OF NEW URLS

//how do i get URL clicked by user
//how do i prevent URL opening


////////////////// calculate time in seconds
// function getSeconds() {
//         var currentTime = new Date();
//         var hours = currentTime.getHours();
//         var minutes = currentTime.getMinutes();
//         var seconds = currentTime.getSeconds();
//         var hoursB = (hours * 60) * 60;
//         var minutesB = minutes * 60;
//         var secondsB = seconds;
//         var timestamp = (hoursB + minutesB + secondsB)
//         console.log(timestamp)
// }
//
// var currentTime = getSeconds();

////////////////////check URL for otherness
// var urlChecker = function(){
//   //this check is almost unneccessary
//   //if hyperlink is not inline, or navigating to a new URL
//
//   tabs.on('activate', function () {
//     var currentURL = tabs.activeTab.url
//     var newURL = /* get new URL? */
//   if(newURL)
//     timer();
//   })
// };

/////////////////////check time passed since last timecheck
// var timer = function(){
//   var timeCheck = getSeconds()
//   if((timecheck < 180)>currentTime){
//   var currentTime = timecheck;
//   //open-link
// }else{/*prevent tab opening*/}
// }

////////////////////////  //LISTEN TO BROWSER ACTIVITY

    // Listen for tab openings.
    tabs.on('open', function onOpen(tab) {
    downFour()
    // timer()
    });

    // // Listen for tab closing.
    // tabs.on('close', function onClose(tab) {
    // upFour();
    // });


    // });


//NOTIFICATIONS

var notifications = require("sdk/notifications");
notifications.notify({
  title: "temple",
  text: "Time to slow down and concentrate. (Four tabs total, one new website a minute.)"
  // data: "this is a test",
  // onClick: function (data) {
  //   console.log(data);
  //   // console.log(this.data) would produce the same result.
  //   }
  });
};
