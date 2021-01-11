'use strict';
//
var opHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm', '7pm', '8pm'];


// function cookiesPerHour(){}
// function customerPerHour(){}

var seattleShop = {
    name: 'Seattle',
    minCust: 23,
    maxCust: 65,
    avgCookie: 6.3,
    cookiePerHour: [],
    totalCookie: 0,
    custPerHour: [],
    randomCust: function(){                                         
        for(var i = 0; i < opHours.length; i++){
         this.custPerHour.push(random(this.minCust, this.maxCust));                 // this.cookiePerHour[i] = custPerHour[i] * avgCookie;
         console.log(this.custPerHour); 
        }
    },
    cookiesAnHour: function(){
        this.randomCust();
        for(var i = 0; i < opHours.length; i++){
            // create variable to hold calculation (perHour)
            var perHour = this.custPerHour[i] * this.avgCookie
            
            // push var to array 
            this.cookiePerHour.push(Math.round(perHour));          // = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
            console.log('cookie per hours', this.cookiePerHour);
            // add totalCookie here
            this.totalCookie += Math.round(perHour);
            console.log('The total sold is', this.totalCookie);
        }
        // console.log('The total sold is', this.totalCookie);
        console.log('cookie an hour', perHour);
    } 
    
};


var tokyoShop = {
    name: 'Tokyo',
    minCust: 3,
    maxCust: 24,
    avgCookie: 1.2,
    custPerHour: [],
    cookiePerHour: [],
    totalCookie: 0
    
};

var dubaiShop = {
    name: 'Dubai',
    minCust: 11,
    maxCust: 38,
    avgCookie: 3.7,
    custPerHour: [],
    cookiePerHour: [],
    totalCookie: 0
    
};

var parisShop = {
    name: 'Paris',
    minCust: 20,
    maxCust: 38,
    avgCookie: 2.3,
    custPerHour: [],
    cookiePerHour: [],
    totalCookie: 0
    
};

var limaShop = {
    name: 'Lima',
    minCust: 2,
    maxCust: 16,
    avgCookie: 4.6,
    custPerHour: [],
    cookiePerHour: [],
    totalCookie: 0
    
};

// = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;

function random(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;

}