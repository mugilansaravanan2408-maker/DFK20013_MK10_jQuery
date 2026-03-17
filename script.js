$(document).ready(function () {

    $("#loginForm").submit(function (e) {

        e.preventDefault();

        var username = $("#username").val();
        var password = $("#password").val();

        if (username == "" || password == "") {
            $("#popupMsg").popup("open");
        }
        else {
            $.mobile.changePage("#infoPage");
        }

    });

});