'use strict';
//
var opHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm', '7pm', '8pm'];


// function cookiesPerHour(){}
// function customerPerHour(){}

var seattleShop = {
    // Create key value pairs
    name: 'Seattle',
    minCust: 23,
    maxCust: 65,
    avgCookie: 6.3,
    cookiePerHour: [],
    totalCookie: 0,
    custPerHour: [],
    // create function to find the customers per hour
    randomCust: function(){                                         
        for(var i = 0; i < opHours.length; i++){
         this.custPerHour.push(random(this.minCust, this.maxCust));                 // this.cookiePerHour[i] = custPerHour[i] * avgCookie;
         console.log(this.custPerHour); 
        }
    },
    // create function to get cookies per hour and total cookies a day 
    cookiesAnHour: function(){
        // call the random customer function
        this.randomCust();
        for(var i = 0; i < opHours.length; i++){
            // create variable to hold calculation (perHour)
            var perHour = Math.round(this.custPerHour[i] * this.avgCookie);
            
            // push var to array 
            this.cookiePerHour.push(perHour);          // = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
            console.log('cookie per hours', this.cookiePerHour);

            // add totalCookie here
            this.totalCookie += perHour;
            console.log('The total sold is', this.totalCookie);
        }
        
        // console.log('The total sold is', this.totalCookie);
        console.log('cookie an hour', perHour);
    },
    // render the info to the webpage
    render(){
        // call my cookies an hour function
        this.cookiesAnHour();
        // parent element
            var unorderedList = document.getElementById('seattle');
  
            // create the list elements for the unordered list
            for(var i = 0; i < opHours.length; i++){
                var hoursLi = document.createElement('li');
            
                hoursLi.textContent = opHours[i] + ': ' + this.cookiePerHour[i] + ' cookies.';
                unorderedList.appendChild(hoursLi);
                console.log(opHours);  
            }
            var totalSold = document.createElement('li');
            totalSold.textContent = 'The total sold for the day was: ' + this.totalCookie + ' cookies.';
            unorderedList.appendChild(totalSold);
    } 
};

seattleShop.render();






var tokyoShop = {
    name: 'Tokyo',
    minCust: 3,
    maxCust: 24,
    avgCookie: 1.2,
    custPerHour: [],
    cookiePerHour: [],
    totalCookie: 0,
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
            var perHour = Math.round(this.custPerHour[i] * this.avgCookie);
            
            // push var to array 
            this.cookiePerHour.push(perHour);          // = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
            console.log('cookie per hours', this.cookiePerHour);

            // add totalCookie here
            this.totalCookie += perHour;
            console.log('The total sold is', this.totalCookie);
        }
        
        // console.log('The total sold is', this.totalCookie);
        console.log('cookie an hour', perHour);
    },

    render(){
        this.cookiesAnHour();
        // parent element
            var unorderedList = document.getElementById('tokyo');
  
            // create the list elements for the unordered list
            for(var i = 0; i < opHours.length; i++){
                var hoursLi = document.createElement('li');
            
                hoursLi.textContent = opHours[i] + ': ' + this.cookiePerHour[i] + ' cookies.';
                unorderedList.appendChild(hoursLi);
                console.log(opHours);  
            }
            var totalSold = document.createElement('li');
            totalSold.textContent = 'The total sold for the day was: ' + this.totalCookie + ' cookies.';
            unorderedList.appendChild(totalSold);
    }
};
tokyoShop.render();

var dubaiShop = {
    name: 'Dubai',
    minCust: 11,
    maxCust: 38,
    avgCookie: 3.7,
    custPerHour: [],
    cookiePerHour: [],
    totalCookie: 0,
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
            var perHour = Math.round(this.custPerHour[i] * this.avgCookie);
            
            // push var to array 
            this.cookiePerHour.push(perHour);          // = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
            console.log('cookie per hours', this.cookiePerHour);

            // add totalCookie here
            this.totalCookie += perHour;
            console.log('The total sold is', this.totalCookie);
        }
        
        // console.log('The total sold is', this.totalCookie);
        console.log('cookie an hour', perHour);
    },

    render(){
        this.cookiesAnHour();
        // parent element
            var unorderedList = document.getElementById('dubai');
  
            // create the list elements for the unordered list
            for(var i = 0; i < opHours.length; i++){
                var hoursLi = document.createElement('li');
            
                hoursLi.textContent = opHours[i] + ': ' + this.cookiePerHour[i] + ' cookies.';
                unorderedList.appendChild(hoursLi);
                console.log(opHours);  
            }
            var totalSold = document.createElement('li');
            totalSold.textContent = 'The total sold for the day was: ' + this.totalCookie + ' cookies.';
            unorderedList.appendChild(totalSold);
    }
};
dubaiShop.render();

var parisShop = {
    name: 'Paris',
    minCust: 20,
    maxCust: 38,
    avgCookie: 2.3,
    custPerHour: [],
    cookiePerHour: [],
    totalCookie: 0,
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
            var perHour = Math.round(this.custPerHour[i] * this.avgCookie);
            
            // push var to array 
            this.cookiePerHour.push(perHour);          // = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
            console.log('cookie per hours', this.cookiePerHour);

            // add totalCookie here
            this.totalCookie += perHour;
            console.log('The total sold is', this.totalCookie);
        }
        
        // console.log('The total sold is', this.totalCookie);
        console.log('cookie an hour', perHour);
    },

    render(){
        this.cookiesAnHour();
        // parent element
            var unorderedList = document.getElementById('paris');
  
            // create the list elements for the unordered list
            for(var i = 0; i < opHours.length; i++){
                var hoursLi = document.createElement('li');
            
                hoursLi.textContent = opHours[i] + ': ' + this.cookiePerHour[i] + ' cookies.';
                unorderedList.appendChild(hoursLi);
                console.log(opHours);  
            }
            var totalSold = document.createElement('li');
            totalSold.textContent = 'The total sold for the day was: ' + this.totalCookie + ' cookies.';
            unorderedList.appendChild(totalSold);
    }
};
parisShop.render();

var limaShop = {
    name: 'Lima',
    minCust: 2,
    maxCust: 16,
    avgCookie: 4.6,
    custPerHour: [],
    cookiePerHour: [],
    totalCookie: 0,
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
            var perHour = Math.round(this.custPerHour[i] * this.avgCookie);
            
            // push var to array 
            this.cookiePerHour.push(perHour);          // = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
            console.log('cookie per hours', this.cookiePerHour);

            // add totalCookie here
            this.totalCookie += perHour;
            console.log('The total sold is', this.totalCookie);
        }
        
        // console.log('The total sold is', this.totalCookie);
        console.log('cookie an hour', perHour);
    },

    render(){
        this.cookiesAnHour();
        // parent element
            var unorderedList = document.getElementById('lima');
  
            // create the list elements for the unordered list
            for(var i = 0; i < opHours.length; i++){
                var hoursLi = document.createElement('li');
            
                hoursLi.textContent = opHours[i] + ': ' + this.cookiePerHour[i] + ' cookies.';
                unorderedList.appendChild(hoursLi);
                console.log(opHours);  
            }
            var totalSold = document.createElement('li');
            totalSold.textContent = 'The total sold for the day was: ' + this.totalCookie + ' cookies.';
            unorderedList.appendChild(totalSold);
    }
};
limaShop.render();

// = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;

function random(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;

}