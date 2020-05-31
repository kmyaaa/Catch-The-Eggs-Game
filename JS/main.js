
$(document).ready(function () {


    //choose mood and redirect to its page
    $(".startBtn").click(function(e){
        radioValue = $("input[name='mood']:checked").val();

        if(radioValue=="easy")
        {
            window.location.href = "easy.html"; 

        }
        else {
           // alert("plz choose mood")
           dialog.alert({
                title: "plz choose your mode",
              });
        }
    })
    

    //rulse btn
    $(".rulesBtn").click(function(){
        dialog.alert({
            title: "Rules",
            message: "Try to catch eggs by moving basket with or arrows. Easy Mode: Egg = 1point"
          });
    })
    
});//ready