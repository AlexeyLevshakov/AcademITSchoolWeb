"use strict";

var moscow = {
    cityName: "Москва",
    population: 11000000
};

var novosibirsk = {
    cityName: "Новосибирск",
    population: 1500000
};

var saintPetersburg = {
    cityName: "Санкт-Петербург",
    population: 5000000
};

var russia = {
    countryName: "Россия",
    cities: [moscow, novosibirsk, saintPetersburg]
};

var washingtonDC = {
    cityName: "Вашингтон",
    population: 693000
};

var newYork = {
    cityName: "Нью-Йорк",
    population: 8400000
};

var usa = {
    countryName: "США",
    cities: [washingtonDC, newYork]
};

var paris = {
    cityName: "Париж",
    population: 2200000
};

var france = {
    countryName: "Франция",
    cities: [paris]
};

var london = {
    cityName: "Лондон",
    population: 8100000
};

var liverpool = {
    cityName: "Ливерпуль",
    population: 510000
};

var glasgow = {
    cityName: "Глазго",
    population: 620000
};

var greatBritain = {
    countryName: "Великобритания",
    cities: [london, liverpool, glasgow]
};

var countries = [russia, usa, france, greatBritain];

function getCountriesWithMostCities(array) {
    var countriesWithMostCities = [];
    var maxCitiesNumber = 0;
    array.forEach(function (element) {
        if (element.cities.length > maxCitiesNumber) {
            countriesWithMostCities = [element.countryName];
            maxCitiesNumber = element.cities.length;
        } else if (element.cities.length === maxCitiesNumber) {
            countriesWithMostCities.push(element.countryName);
        }
    });
    return countriesWithMostCities;
}

console.log("Страна/страны с наибольшим количеством указанных городов: " + getCountriesWithMostCities(countries).join(", "));

function getTotalCountryPopulation(country) {
    var totalCountryPopulation = 0;
    country.cities.forEach(function (city) {
        totalCountryPopulation += city.population;
    });
    return totalCountryPopulation;
}

function getStatistics(array) {
    var statistics = {};
    array.forEach(function (element) {
        statistics[element.countryName] = getTotalCountryPopulation(element);
    });
    return statistics;
}

function printObject(object) {
    var output = "";
    for (var propertyName in object) {
        output += propertyName + " : " + object[propertyName];
        console.log(output);
        output = "";
    }
}

printObject(getStatistics(countries));