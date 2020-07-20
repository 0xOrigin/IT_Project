$(document).ready(function(){
    var selectDays = document.getElementById("select-controls-days"),
        selectMonths = document.getElementById("select-controls-months"),
        selectYears = document.getElementById("select-controls-years"),
        months = ['January','February','March','April','May','June','July','August','September','October','November','December'],
        i;

    (function fillSelect() {
        for (i = 1; i <= 31; i++) {
            var option = document.createElement("option");
            option.text = i;
            option.value = i;
            selectDays.add(option);
        }

        for (i = 0; i < months.length; i++) {
            var option = document.createElement("option");
            option.text = months[i];
            option.value = months[i];
            selectMonths.add(option);
        }

        for (i = 1960; i <= 2007; i++) {
            var option = document.createElement("option");
            option.text = i;
            option.value = i;
            selectYears.add(option);
        }
    })();

    //! ----------------------- Form animations -------------------------- !//
    $('#signup-form-btn').click(function(){
        $('.signup-separator').fadeOut(100);
        $('.OR').fadeOut();
        $(this).fadeOut(200);
        $('.signup-right').fadeOut(200);
        $('.signup-left').delay(200).css({transform: 'rotateY(180deg)'});
    });

    $('.back-btn').click(function(){
        $('.signup-left').css({transform: 'none'});
        $('.OR').delay(200).fadeIn(100);
        $('.signup-separator').delay(200).fadeIn(100);
        $('#signup-form-btn').fadeIn(200);
        $('.signup-right').fadeIn();
    });

    //! ----------------------- Reset shadows ---------------------------- !//
    $("#signup-email-field").on("input", function () {
        if (this.style.boxShadow === 'rgba(255, 0, 0, 0.3) 0px 10px 30px 0px')
            this.style.boxShadow = 'rgba(0,0,0,0.3) 0px 20px 32px 0px';
    });

    $("#signup-password-field").on("input", function () {
        if (this.style.boxShadow === 'rgba(255, 0, 0, 0.3) 0px 10px 30px 0px')
            this.style.boxShadow = 'rgba(0,0,0,0.3) 0px 20px 32px 0px';
    });

    $("#signup-conpassword-field").on("input", function () {
        if (this.style.boxShadow === 'rgba(255, 0, 0, 0.3) 0px 10px 30px 0px')
            this.style.boxShadow = 'rgba(0,0,0,0.3) 0px 20px 32px 0px';
    });

    $("#signup-username-field").on("input", function () {
        if (this.style.boxShadow === 'rgba(255, 0, 0, 0.3) 0px 10px 30px 0px')
            this.style.boxShadow = 'rgba(0,0,0,0.3) 0px 20px 32px 0px';
    });

    $("#select-controls-days").on("input", function () {
        if (this.style.boxShadow === 'rgba(255, 0, 0, 0.3) 0px 10px 30px 0px')
            this.style.boxShadow = 'none';
    });

    $("#select-controls-months").on("input", function () {
        if (this.style.boxShadow === 'rgba(255, 0, 0, 0.3) 0px 10px 30px 0px')
            this.style.boxShadow = 'none';
    });

    $("#select-controls-years").on("input", function () {
        if (this.style.boxShadow === 'rgba(255, 0, 0, 0.3) 0px 10px 30px 0px')
            this.style.boxShadow = 'none';
    });
});

// ------------------------------ Validation ---------------------------//

$("#createAcc").click(function (event) {
    var check_Validity = $(".form")[0].checkValidity();
    var pswd = $("#signup-password-field").val();
    var conpswd = $("#signup-conpassword-field").val();
    var flag = false;

    if (check_Validity && pswd === conpswd && pswd != "") {
        $(".form").attr("action", "login.html#signedup");
        window.alert('-  You have Signed Up successfully.\n  You will be directed to the login page.');
    }
    else {
        if (!$("#signup-email-field")[0].checkValidity()) {
            $("#signup-email-field").one("invalid", function (event) {
            event.preventDefault();
            this.style.boxShadow = 'rgba(255,0,0,0.3) 0px 10px 30px 0px';
            if (this.value == "")
                window.alert("Email field is required.");
            else if (!event.target.validity.valid)
                window.alert('Email not valid.\nEnter a valid email.');
            $("#signup-email-field").focus();
        });}

        if (!$("#signup-password-field")[0].checkValidity()) {
            $("#signup-password-field").one("invalid", function (event) {
            event.preventDefault();
            this.style.boxShadow = 'rgba(255,0,0,0.3) 0px 10px 30px 0px';
            if (this.value == "")
                window.alert("Password field is required.");
            $("#signup-password-field").focus();
        });}

        if (!$("#signup-conpassword-field")[0].checkValidity()) {
            $("#signup-conpassword-field").one("invalid", function (event) {
            event.preventDefault();
            this.style.boxShadow = 'rgba(255,0,0,0.3) 0px 10px 30px 0px';
            if (this.value == "")
                window.alert("Confirm Password field is required.");
            else
                window.alert("Confirm Password field doesn't equal to password field.\nMust be equal.");
            $("#signup-conpassword-field").focus();
        });}
        else if (pswd != conpswd && (pswd != "" && conpswd != "")) {
            flag = true;
            $("#signup-conpassword-field").css({ boxShadow: 'rgba(255,0,0,0.3) 0px 10px 30px 0px' });
            window.alert("Confirm Password field doesn't equal to password field.\nMust be equal.");
            $("#signup-conpassword-field").focus();
        }

        if (!$("#signup-username-field")[0].checkValidity()) {
            $("#signup-username-field").one("invalid", function (event) {
            event.preventDefault();
            this.style.boxShadow = 'rgba(255,0,0,0.3) 0px 10px 30px 0px';
            if (this.value == "")
                window.alert("Username field is required.");
            else
                window.alert("Username field shouldn't be contain any special characters.");
            $("#signup-username-field").focus();
        });}

        if (!$("#select-controls-days")[0].checkValidity()) {
            $("#select-controls-days").one("invalid", function (event) {
            event.preventDefault();
            this.style.boxShadow = 'rgba(255,0,0,0.3) 0px 10px 30px 0px';
            if (this.value == "")
                window.alert("Date of Birth (Day) field is required.");
            $("#select-controls-days").focus();
        });}

        if (!$("#select-controls-months")[0].checkValidity()) {
            $("#select-controls-months").one("invalid", function (event) {
            event.preventDefault();
            this.style.boxShadow = 'rgba(255,0,0,0.3) 0px 10px 30px 0px';
            if (this.value == "")
                window.alert("Date of Birth (Month) field is required.");
            $("#select-controls-months").focus();
        });}

        if (!$("#select-controls-years")[0].checkValidity()) {
            $("#select-controls-years").one("invalid", function (event) {
            event.preventDefault();
            this.style.boxShadow = 'rgba(255,0,0,0.3) 0px 10px 30px 0px';
            if (this.value == "")
                window.alert("Date of Birth (Year) field is required.");
            $("#select-controls-years").focus();
        });}
    }
    if (flag)
        return false;
});