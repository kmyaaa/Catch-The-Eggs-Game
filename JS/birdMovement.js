function move()
{
    //to set chicken left
    var beginleft=$('#bird').css("left");
    $('.birs').css("left",beginleft);
    //to move the chicken left and rigth
    $(".bird").animate({left:"+=200px"},7000).animate({left:"-=200px"},7000);
       
}