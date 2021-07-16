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

function checkGender(){

    var radioCheck = document.getElementsByName('gender');
    const radio1  = document.getElementById('gender1');
    const radio2  = document.getElementById('gender2');



     if(!(radioCheck[0].checked || radioCheck[1].checked))
     {
     return false;
    }else
    {
        if (radio1.checked) {
            radioCheck = radio1.value;
            return radioCheck;      
        }else if (radio2.checked){
            radioCheck = radio2.value;
            return radioCheck;

        }
    }

}
