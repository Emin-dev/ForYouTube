

$(".miniBox").click(function (e) { 
    e.preventDefault();
    $(".miniBox").css("top",  Math.floor(Math.random()*65)+10 + "vh");
    $(".miniBox").css("left",  Math.floor(Math.random()*70)+10 + "vw");

});

