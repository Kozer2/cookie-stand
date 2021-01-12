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

function Shop(name, minCust, maxCust, avgCookie){
    this.name = name,
    this.minCust = minCust,
    this.maxCust = maxCust,
    this.avgCookie = avgCookie,
    this.cookiePerHour = [],
    this.totalCookie = 0,
    this.custPerHour = []
    
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


// creater the header function to add the store hours to the table 
function makeHeader(){
    // create table
    var saleTab = document.getElementById('salesContainer');
    var hoursRow = document.createElement('tr');
    var tableHeader = document.createElement('th');
    tableHeader.textContent = 'Store Locations';
    hoursRow.appendChild(tableHeader);
    saleTab.appendChild(hoursRow);

    for(var i = 0; i < opHours.length; i++){
      tableHeader = document.createElement('th'); 
      tableHeader.textContent = opHours[i];
      hoursRow.appendChild(tableHeader);
    }
    tableHeader.textContent = 'Daily Location Total';
    hoursRow.appendChild(tableHeader);
};

// create the foot function for hourly totals 
function makeFooter(){
    var foot = document.getElementById('salesContainer');
    var footRow = document.createElement('tr');
    var footFooter = document.createElement('th');
    footFooter.textContent = 'Hourly Totals';
    footRow.appendChild(footFooter);
    foot.appendChild(footRow);
};

Shop.prototype.fillTable = function(){
    
    var hourlyCooks = document.createElement('tr');
    var hourlyTotes = document.createElement('th');


};

makeHeader();
makeFooter();













new Shop('seattle', 23, 65, 6.3).cookiesAnHour();