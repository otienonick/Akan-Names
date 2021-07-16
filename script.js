function validateForm(){
    var MM = document.getElementById("month").value;
    var DD = document.getElementById("date").value;
    var year = document.getElementById("year").value;
  
    if (MM === "" || MM < 1 || MM > 12 || DD === "" || DD < 0 || DD > 31 || year === "" || year > 2030 || year < 1900 || year.length > 4 || year.length < 4 ){
      return false;
    }else{
      var CC = year.slice(0, 1);
      var YY = year.slice(2, 3);
        var dayoFtheWeek = Math.ceil((((CC/4)-2*CC-1)+((5*YY/4))+((26*(MM+1)/10)) + DD) % 7);
        return dayoFtheWeek;
    }
}
