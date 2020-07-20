$(document).ready(function () { 
    $("#contactus-name-field").on("input", function () {
        if (this.style.boxShadow === 'rgba(255, 0, 0, 0.3) 0px 10px 30px 0px')
            this.style.boxShadow = 'rgba(0,0,0,0.3) 0px 20px 32px 0px';
    });

    $("#contactus-email-field").on("input", function () {
        if (this.style.boxShadow === 'rgba(255, 0, 0, 0.3) 0px 10px 30px 0px')
            this.style.boxShadow = 'rgba(0,0,0,0.3) 0px 20px 32px 0px';
    });

    $("#contactus-textarea-field").on("input", function () {
        if (this.style.boxShadow === 'rgba(255, 0, 0, 0.3) 0px 10px 30px 0px')
            this.style.boxShadow = 'rgba(0,0,0,0.3) 0px 20px 32px 0px';
    });
});

//! ---------------------- Contact-Us form ------------------- !//
$("#contact-usSubmit").click(function () {
    var check_Validity = $("#form")[0].checkValidity();
    if (check_Validity)
        window.alert("-  Your Message Has Been Received. Thank you for contacting us!\n We'll get back to you soon");
    else {
        if (!$("#contactus-name-field")[0].checkValidity()) {
            $("#contactus-name-field").one("invalid", function (event) {
            event.preventDefault();
            this.style.boxShadow = 'rgba(255, 0, 0, 0.3) 0px 10px 30px 0px';
            if (this.value == "")
                window.alert("Name field is required.");
            $("#contactus-name-field").focus();
        });}

        if (!$("#contactus-email-field")[0].checkValidity()) {
            $("#contactus-email-field").one("invalid", function (event) {
            event.preventDefault();
            this.style.boxShadow = 'rgba(255, 0, 0, 0.3) 0px 10px 30px 0px';
            if (this.value == "")
                window.alert("Email field is required.");
            else if (!event.target.validity.valid)
                window.alert('Email not valid.\nEnter a valid email.');
            $("#contactus-email-field").focus();
        });}

        if (!$("#contactus-textarea-field")[0].checkValidity()) {
            $("#contactus-textarea-field").one("invalid", function (event) {
            event.preventDefault();
            this.style.boxShadow = 'rgba(255, 0, 0, 0.3) 0px 10px 30px 0px';
            if (this.value == "")
                window.alert("Message field is required.");
            $("#contactus-textarea-field").focus();
        });}
    }
});