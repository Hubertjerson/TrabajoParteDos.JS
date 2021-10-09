$(document).ready(function(){
    x=0
    // derecha
    $('.right').click(function(){
        x = (x<=300)?(x+100):0;
        $('.imagen').css('left',-x+"%")
    })
    // derecha
    $('.left').click(function(){
        x = (x>=100)?(x-100):400;
        $('.imagen').css('left',-x+"%")
    })
})