'use strict';
//
var opHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm', '7pm', '8pm'];

// name: 'Seattle',
//     minCust: 23,
//     maxCust: 65,
//     avgCookie: 6.3,
//     cookiePerHour: [],
//     totalCookie: 0,
//     custPerHour: [],

function Shop(name, minCust, maxCust, avgCookie, cookiePerHour, totalCookie, custPerHour){
    this.name = name,
    this.minCust = minCust,
    this.maxCust = maxCust,
    this.avgCookie = avgCookie,
    this.cookiePerHour = cookiePerHour,
    this.totalCookie = totalCookie,
    this.custPerHour = custPerHour
    
};

//create a random function
function random(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// create functions for random customers per hour and cookies sold
// random customer per hour function
Shop.prototype.getCustPerHour = function(){
    for(var i = 0; i < opHours.length; i++){
        this.custPerHour.push(Math.round(random(this.minCust, this.maxCust)));
        // console.log('The i is: ', randomI);
    }
    console.log('The i is: ', this.custPerHour);
};


// random cookies sold per hour function
Shop.prototype.cookiesAnHour = function(){
    this.getCustPerHour();
    for(var i = 0; i < opHours.length; i++){
        var perHour = Math.round(this.custPerHour[i] * this.avgCookie);
        this.cookiePerHour.push(perHour);
        console.log('Cookies sold per hour are: ', this.cookiePerHour);
        this.totalCookie += perHour;
        console.log('The total sold is', this.totalCookie);
    }
};