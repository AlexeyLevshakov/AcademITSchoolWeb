"use strict";

$(document).ready(function () {
    $(".add-info-button").on("click", function () {
        var surname = $(".surname");
        var name = $(".name");
        var phoneNumber = $(".phone-number");

        $("form input").removeClass("no-data");

        var noSurnameError = $(".no-surname-error");
        noSurnameError.hide();

        var noNameError = $(".no-name-error");
        noNameError.hide();

        var noPhoneNumberError = $(".no-phone-number-error");
        noPhoneNumberError.hide();

        if (surname.val() === "") {
            noSurnameError.show();
            surname.addClass("no-data");
        }

        if (name.val() === "") {
            noNameError.show();
            name.addClass("no-data");
        }

        if (phoneNumber.val() === "") {
            noPhoneNumberError.show();
            phoneNumber.addClass("no-data");
        }

        if ((surname.val() === "") || (name.val() === "") || (phoneNumber.val() === "")) {
            return;
        }

        var newRow = $("<tr></tr>");

        var rowNumber = +$(".phone-book-table tbody tr").length + 1;

        var firstCell = $("<td></td>").addClass("first-column").text(rowNumber);
        newRow.append(firstCell);

        var secondCell = $("<td></td>").addClass("second-column").text(surname.val());
        newRow.append(secondCell);
        surname.val("");

        var thirdCell = $("<td></td>").addClass("third-column").text(name.val());
        newRow.append(thirdCell);
        name.val("");

        var fourthCell = $("<td></td>").addClass("fourth-column").text(phoneNumber.val());
        newRow.append(fourthCell);
        phoneNumber.val("");

        var fifthCell = $("<td><button type='button' class='delete-entry' title='Удалить строку'>X</button></td>").addClass("fifth-column");
        newRow.append(fifthCell);

        $(".phone-book-table tbody").append(newRow);

        $(".delete-entry").on("click", function () {
            $(this).parent().parent().remove();

            for (var i = 0; i < $(".phone-book-table tbody tr").length; ++i) {
                $(".phone-book-table tbody .first-column").eq(i).text(i + 1);
            }
        });
    });
});