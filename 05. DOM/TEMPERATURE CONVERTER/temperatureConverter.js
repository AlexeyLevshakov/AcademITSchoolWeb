"use strict"

document.addEventListener("DOMContentLoaded", function() {
    var conversionButton = document.querySelector(".conversion-button");
    conversionButton.addEventListener("click", function() {
        var inputTemperature = document.querySelector(".input-temperature");
        var kelvins = document.querySelector(".kelvins");
        var degreesFahrenheit = document.querySelector(".degrees-Fahrenheit");

        var temperatureDegreesCelsius = +inputTemperature.value;

        var errorUndefined = document.querySelector(".error-undefined");
        errorUndefined.style.display = "none";

        var errorNaN = document.querySelector(".error-NaN");
        errorNaN.style.display = "none";

        var errorBelowAbsoluteZero = document.querySelector(".error-below-absolute-zero");
        errorBelowAbsoluteZero.style.display = "none";

        if (inputTemperature.value === "") {
            errorUndefined.style.display = "block";
            kelvins.innerText = "";
            degreesFahrenheit.innerText = "";
            return;
        }

        if (isNaN(temperatureDegreesCelsius)) {
            errorNaN.style.display = "block";
            kelvins.innerText = "";
            degreesFahrenheit.innerText = "";
            return;
        }

        var ABSOLUTE_ZERO_CELSIUS = -273.15;
        var EPSILON = 1.0e-10;
        if (ABSOLUTE_ZERO_CELSIUS - temperatureDegreesCelsius > EPSILON) {
            errorBelowAbsoluteZero.style.display = "block";
            kelvins.innerText = "";
            degreesFahrenheit.innerText = "";
            return;
        }

        var temperatureKelvins = Math.round((temperatureDegreesCelsius + 273.15) * 100) / 100;
        kelvins.innerText = temperatureKelvins;

        var temperatureFahrenheit = Math.round((temperatureDegreesCelsius * 1.8 + 32) * 100) / 100;
        degreesFahrenheit.innerText = temperatureFahrenheit;
    });
});