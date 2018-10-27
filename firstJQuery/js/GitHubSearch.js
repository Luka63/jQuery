$(document).ready(function () {

    $("#txtKey").on("keypress", function (e) {
        if (e.which === 13) {
            $("#btnSearch").trigger("click");
        }
    })

    $("#btnSearch").on("click", function () {
        //alert("ssss");
        var url = "https://api.github.com/search/repositories?q=" + $("#txtKey").val();
        console.log(url);

        var ajaxResult = $.ajax({ url: url, dataType: 'json' });
        // console.log(ajaxResult.items.length);
        ajaxResult.done(successFn);
    })
    function successFn(data) {
        alert("success");
        var tbl = $("#Table1");
        tbl.empty();
        var results = data.items;
        // for (var i = 0; i < data.items.length; i++) {
        //var result = data.items[i];
        if (results.length) {
            $.each(results, function (i, item) {

                var tr = $("<tr/>");
                tr.append($("<td/>").text(item.name));
                tr.append($("<td/>").text(item.owner.login));
                tr.append($("<td/>").append($("<img/>", { width: "100px" }).attr("src", item.owner.avatar_url)));
                $("#pic").attr("src", item.owner.avatar_url);
                tr.append($("<td/>").text(item.language));
                tr.appendTo(tbl);
            });
            $("table").show();
            $('table').DataTable();
        } else {            //kkkkkkkkk
        }
    }

    function errorFn(data) {
        console.log("error");
        console.log(data.item);
    }

    function completeFn(data) {
        console.log("complete");
        console.log(data.item);

    }


});
