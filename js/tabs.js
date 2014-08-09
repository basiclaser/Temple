var tabsOpen = 0;

//build a counter to count down time / maybe just compare two date objects?


var newTab = function(){
  if (tabsOpen < 4){
      // open a new tab
      /*add one to tabsOpen counter*/tabsOpen++
  }
  else {
    alert("Have you read everything in the other tabs?");
  };
};

$('tab').click(newTab);
