$(document).ready(function(){
  $("form#triangle").submit(function(event){
      event.preventDefault();
    var one = parseInt($("#sideone").val());
    var two = parseInt($("#sidetwo").val());
    var three = parseInt($("#sidethree").val());
    debugger;
    if (one >= 180 || one < 1 || two >= 180 || two < 1 || three >= 180 || three < 1 ){
      alert("No")
    } else if (one === two && one === three){
      alert("Equal");
    } else if (one+two+three <= 0) {
      alert("not a triangle");
    }
    else if (one === two || one === three || three === two){
      alert("Isc");
    } else if (!one === two && !one === three && !three === two ||  one%two === 0 || one%three === 0 || two%three === 0 || two%one === 0 || three%one === 0 || three%two === 0){
      alert("scalene");
    }
    else {
    alert("not a triangle");
    }
  });
});
