
// A button for testing
require("sdk/ui/button/action").ActionButton({
  id: "list-tabs",
  label: "List Tabs",
  icon: "./icon-16.png",
  onClick: temple
});


    // function countTabs() {
    //   // for each (var tab in tabs)
    //   for each (var tab in tabs){
    //     console.log(tab.index);}
    //     console.log(tabs.length)
    //     console.log('current-index: ' + tabs.activeTab.index);
    // }

var tabs = require("sdk/tabs");
function temple(){

  ////////////////////////  //MODERATE THE NUMBER OF TABS

    //keep atleast four tabs
    // function upFour(){
    //   while(tabs.length < 4 )
    //     tabs.open("https://duckduckgo.com");
    //   }
    // upFour();

    //prevent more than four tabs
    function downFour(){
      if(tabs.length > 4)
      tabs.activeTab.close()
    };
    downFour();

////////////////////////  //MODERATE THE FREQUENCY OF NEW URLS

// var timePoint
// var urlsToday = {}
//
// function timer(){
//   if(active.)
// }



////////////////////////  //LISTEN TO BROWSER ACTIVITY


    // Listen for tab openings.
    // tabs.on('open', function onOpen(tab) {
    // downFour()
    // timer()
    // });

    // Listen for tab closing.
    tabs.on('close', function onClose(tab) {
    upFour();
    });


};
// //TIME STUFF
//
// //use for checking the current URL
// tabs.on('activate', function () {
//   console.log('active: ' + tabs.activeTab.url);
// });




// remove contents of a page
// function empty() {
//     require("sdk/tabs")
//     .activeTab
//     .attach({contentScript: "document.body.style.display = 'none';"});
//     .attach({contentScript: "document.body.style.display = 'none';"});
// }
