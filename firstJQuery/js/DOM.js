$(document).ready(function () {//load only when all the html is ready

    var myDiv = $('<div/>', {
        'class': 'blue',
        html: "<b>click me!</b>",
        click: function () {
            $(this).toggleClass('blue');
        }
    });
    $("body").append(myDiv);

    $("div").clone(true).appendTo("body"); //

    $(".myBtn").on("click", function () { //fancy way
        var text = $("#mytext").val();

        var Li = $("<li/>", { html: text });

        $("#PList").append(Li);

    })
    var i = 0;
    var Images = ["file:///C:\Users\LUKA\AppData\Local\Packages\microsoft.microsoftedge_8wekyb3d8bbwe\AC\#!001\MicrosoftEdge\Cache\0HC28XF7\what-is-minimalism-feature[1].jpg", 
        "http://livinginmalta.com/wp-content/uploads/2017/11/minimalism-malta.png",
        "https://s-media-cache-ak0.pinimg.com/originals/0d/31/1f/0d311fb3ee4430f1908836dfe9a62eaa.png",
        "https://i.pinimg.com/originals/72/52/60/725260ef84c3c4b45143cad6813fa8fb.png"];

    $(".btnPic").on("click", function () {
        $("#myImage").attr("src", Images[i % Images.length]);
        i++;
    })
});