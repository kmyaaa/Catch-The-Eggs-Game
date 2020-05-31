var pageWidth=parseInt($(window).width())-30;
var backetWidth=parseInt($("#collector").css("width"));
var mousem=pageWidth-backetWidth;
var eventkey;
var basket1 = document.getElementById('collector');

window.addEventListener('load', () => {
    basket1.style.position = 'absolute';
    basket1.style.left = 45 + '%';
});

movebacket=function(){
    
    eventkey=$(window).on("keydown",function(event){
        if(event.keyCode=='39')
        {
            pos=parseInt($("#collector").css("left"));
            if(pos<=mousem){
                pos+=30;
                $("#collector").css("left",pos+"px");
            }
        }
    });//move backet right using keyboard
    
    eventkey= $(window).on("keydown",function(event){
        if(event.keyCode=='37')
        {
            pos=parseInt($("#collector").css("left"));
            if(pos>0){
                pos-=30;
                $("#collector").css("left",pos+"px");
            }
        }
    });//move backet left using keyboard
}
$(function(){ 
   movebacket();
});//load