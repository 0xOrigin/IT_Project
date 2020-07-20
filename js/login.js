$(document).ready(function(){
    $('h3').click(function(){
        $('.login-left').css({transform: 'rotateY(-180deg)'});
    });

    $('.back-btn').click(function(){
        $('.login-left').css({transform: 'none'});
    });


    $("#login-email-field").on("input", function () {
        if (this.style.boxShadow === 'rgba(255, 0, 0, 0.3) 0px 10px 30px 0px')
            this.style.boxShadow = 'rgba(0,0,0,0.3) 0px 20px 32px 0px';
    });

    $("#login-password-field").on("input", function () {
        if (this.style.boxShadow === 'rgba(255, 0, 0, 0.3) 0px 10px 30px 0px')
            this.style.boxShadow = 'rgba(0,0,0,0.3) 0px 20px 32px 0px';
    });

    $("#login-emailreset-field").on("input", function () {
        if (this.style.boxShadow === 'rgba(255, 0, 0, 0.3) 0px 10px 30px 0px')
            this.style.boxShadow = 'rgba(0,0,0,0.3) 0px 20px 32px 0px';
    });
});


//! -------------- Login form ----------------- !// 
$("#login-submit-button").click(function () {
    var email = $("#login-email-field").val();
    var pass = $("#login-password-field").val();
    var check_Validity = $(".form")[0].checkValidity();

    if (email === "admin@admin.com" && pass === "admin") {
        $(".form").attr("action", "home.html#login");
        window.alert('-  You have Logged In successfully.\n  Welcome back :)');
    }
    else if (!(check_Validity)) {
        if (!$("#login-email-field")[0].checkValidity()) {
            $("#login-email-field").one("invalid", function (event) {
            event.preventDefault();
            this.style.boxShadow = 'rgba(255, 0, 0, 0.3) 0px 10px 30px 0px';
            if (this.value == "")
                window.alert("Email field is required.");
            else if (!event.target.validity.valid)
                window.alert('Email not valid.\nEnter a valid email.');
            $("#login-email-field").focus();
        });}

        if (!$("#login-password-field")[0].checkValidity()) {
            $("#login-password-field").one("invalid", function (event) {
            event.preventDefault();
            this.style.boxShadow = 'rgba(255, 0, 0, 0.3) 0px 10px 30px 0px';
            if (this.value == "")
                window.alert("Password field is required.");
            $("#login-password-field").focus();
        });}
    }
});

// ! ---------------- Forget password form ----------------------------//
$("#login-submitreset-button").click(function () {
    var check_Validity = $(".formReset")[0].checkValidity();
    if (check_Validity)
        window.alert("-  Your password reset email should arrive shortly.\n If you don't see it, please check your spam folder,\n sometimes it can end up there!");
    else {
        if (!$("#login-emailreset-field")[0].checkValidity()) {
            $("#login-emailreset-field").one("invalid", function (event) {
            event.preventDefault();
            this.style.boxShadow = '0px 10px 30px 0px  rgba(255,0,0,0.3)';
            if (this.value == "")
                window.alert("Email field is required.");
            else if (!event.target.validity.valid)
                window.alert('Email not valid.\nEnter a valid email.');
            $("#login-emailreset-field").focus();
        });}
    }
});