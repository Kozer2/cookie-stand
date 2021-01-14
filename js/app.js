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
// create the constructor
function Shop(name, minCust, maxCust, avgCookie){
  this.name = name,
  this.minCust = minCust,
  this.maxCust = maxCust,
  this.avgCookie = avgCookie,
  this.cookiePerHour = [],
  this.totalCookie = 0,
  this.custPerHour = [],
  Shop.allShops.push(this);
}

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
  // console.log('The i is: ', this.custPerHour);
};


// random cookies sold per hour function
Shop.prototype.cookiesAnHour = function(){
  this.getCustPerHour();
  for(var i = 0; i < opHours.length; i++){
    var perHour = Math.round(this.custPerHour[i] * this.avgCookie);
    this.cookiePerHour.push(perHour);
    // console.log('Cookies sold per hour are: ', this.cookiePerHour);
    this.totalCookie += perHour;
    // console.log('The total sold is', this.totalCookie);
  }
};




// creater the header function to add the store hours to the table
var saleTab = document.getElementById('salesContainer');
function makeHeader(){
  // create table

  var hoursRow = document.createElement('tr');
  var tableHeader = document.createElement('th');
  tableHeader.textContent = 'Store Locations';
  hoursRow.appendChild(tableHeader);
  saleTab.appendChild(hoursRow);
  // add hours to the table
  for(var i = 0; i <= opHours.length; i++){
    tableHeader = document.createElement('th');
    tableHeader.textContent = opHours[i];
    hoursRow.appendChild(tableHeader);
  }
  tableHeader.textContent = 'Daily Location Total';
  hoursRow.appendChild(tableHeader);
}


// render the constructor and create the table
Shop.prototype.render = function(){
  this.cookiesAnHour();
  var hourlyCooks = document.createElement('tr');
  var hourlyTotes = document.createElement('td');
  var totalCook = document.createElement('td');
  hourlyTotes.textContent = this.name;
  hourlyCooks.appendChild(hourlyTotes);
  saleTab.appendChild(hourlyCooks);
  for(var i = 0; i < opHours.length; i++){
    // console.log(this.cookiePerHour[i]);
    hourlyTotes = document.createElement('td');
    hourlyTotes.textContent = this.cookiePerHour[i];
    hourlyCooks.appendChild(hourlyTotes);
  }
  totalCook.textContent = this.totalCookie;
  hourlyCooks.appendChild(totalCook);
};

// create an array to store all the shop info
Shop.allShops = [];
// create the foot function for hourly totals
function makeFooter(){
  var foot = document.getElementById('salesContainer');
  var footRow = document.createElement('tr');
  var footFooter = document.createElement('th');
  footFooter.textContent = 'Hourly Totals';
  footRow.appendChild(footFooter);
  var totalOfTotals = 0;
  var hourlyTotals = 0;
  // use a nested loop to find and display the hourly totals and the total overall
  for(var i = 0; i < opHours.length; i++){
    hourlyTotals = 0;
    for(var j = 0; j < Shop.allShops.length; j++){

      hourlyTotals += Shop.allShops[j].cookiePerHour[i];
      // console.log(hourlyTotals);
      totalOfTotals += Shop.allShops[j].cookiePerHour[i];
    }
    // display the hourly totals
    footFooter = document.createElement('th');
    footFooter.textContent = hourlyTotals;
    footRow.appendChild(footFooter);
  }
  // display the final total
  footFooter = document.createElement('th');
  footFooter.textContent = totalOfTotals;
  footRow.appendChild(footFooter);

  foot.appendChild(footRow);
}

// call all functions and add data
makeHeader();
new Shop('Seattle', 23, 65, 6.3).render();
new Shop('Tokyo', 3, 24, 1.2).render();
new Shop('Dubai', 11, 38, 3.7).render();
new Shop('Paris', 20, 38, 2.3).render();
new Shop('Lima', 2, 16, 4.6).render();
makeFooter();


// create a function to read the values submitted on the new shop form
function onFormSubmit(event){
  event.preventDefault();
  var nameInput = document.getElementById('name');
  var nameValue = nameInput.value;
  console.log('Name Value:', nameValue);

  var minimumInput = document.getElementById('minimumCust');
  var minCustValue = minimumInput.value;
  console.log(typeof(minCustValue));

  var maximumInput = document.getElementById('maximumCust');
  var maxCustValue = maximumInput.value;
  console.log('Max Cust:', maxCustValue);


  var averageInput = document.getElementById('averageCookie');
  var averageCookieValue = averageInput.value;
  console.log('Avg Cookie:', averageCookieValue);

  var newShop = new Shop(nameValue, minCustValue, maxCustValue, averageCookieValue);
  console.log(newShop);
  newShop.render();
  makeFooter();
  var form = document.getElementById('newShop');
  form.reset();
}


//set up event listener to listen to the submit event.
// 1 which element do we need
var formElement = document.getElementById('newShop');


// 2 which event am I listening for?
// 3 what code should I run when that event happens
formElement.addEventListener('submit', onFormSubmit);


