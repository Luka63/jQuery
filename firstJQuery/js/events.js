$(document).ready(function () {
    $(".test").on("click", function () {
        // $("#div3").addClass("blue");
        // $("#div3").removeClass("blue");        
        $("#div3").toggleClass("blue");
        $("#mytext").val("orest is a nice guy");//sets a  value in the controller
       // $("h3").text("setting <strong>from the </strong>event");//changing text from event 
        $("h3").html("setting <span class='blue'>from the </span> event");//changing text from event 

    });

    $(".toggler").on("click", function (event) {
        event.stopPropagation();
        event.preventDefault();
        alert("helo from a link");
        $("#div2").toggle();//if the element is visible it hides, or vice versa
        $("#div3").slideToggle(3000, function() {
            alert("animation is done");
        });//hides slow, takes 3sec, then executes second parameter, in this case our function
        $("#div4").hide();
        $(".test").trigger("click");
    });

    $("#mytext").on("blur", function () {//blur ~ event when you leave
        //sayHello();
        var myval = $(this).val();  //this gets the element which was triggered #mytext, val reads a value from the input

        if (myval !== "orest") {
            $(this).val("");
        }
    })
    $("#mytext").on("keypress", function (e) {       
        if (e.which > 59) {
            console.log(e.which);
            return false;
        }
    })
    $("body").on("mousemove", function (e) {
        console.log(e.pageX + " " + e.pageY);
    })
})
function sayHello() {
    alert("yo wassup");
}