// Creating functions in JS
// function function_name (parameters) {
  // expression to perform;
  // return value;
// }

function bark(dogName, dogWeight) {
    if (dogWeight <= 10) {
      return dogName + " says Yip";
    } else {
      return dogName + " says Woof!";
    }
}

var sound = bark("Fido", 50);
alert(sound);

// Creating an object in JS
var fido = {
  name: "Fido",
  weight: 40,
  breed: "Mixed",
  loves: ["walks", "fetching balls"]
};

fido.weight == 40;
fido["weight"] == 40;
// Iterating over an object
var prop;
for (prop in fido) {
  alert("Fido has a " + prop + " property");
}
// Passing an object to a function
function bark(dog) {
  if (dog.weight > 25){
    alert("WOOF!");
  } else {
    alert("yip!");
  }
}

bark(fido);
// add a new property to object
fido.age = 5;

// Creating two movie objects from information provided
var movie1 {
  title: "Plan 9 from Outer Space",
  genre: "cult classic",
  rating: 2,
  showtimes: ["3:00pm", "7:00pm", "11:00pm"]
};

var movie2 {
  title: "Forbidden Planet",
  genre: "classic sci-fi",
  rating: 5,
  showtimes: ["5:00pm", "9:00pm"]
};

// Function to get next showing time given current time
function getNextShowing(movie) {
  var now = new Date().getTime();

  for (var i=0; i<movie.showtimes.length; i++) {
    var showtime = getTimeFromString(movie.showtimes[i]);
    if ((showtime - now) > 0) {
      return "Next showing of " + movie.title + " is " + movie.showtimes[i];
    }
  }
  return null;
}

function getTimeFromString(timeString){
  var theTime = new Date();
  var time = timeString.match(/(\d+)(?::(\d\d))?\s*(p?)/);
  theTime.setHours( parseInt(time[1]) + (time[3] ? 12 : 0) );
  theTime.setMinutes( parseInt(time[2]) || 0 );
  return theTime.getTime();
}

var nextShowing = getNextShowing(movie1);
alert(nextShowing);

// Adding a behaviour to an object using anonymous functions i.e. methods
var fido = {
  name: "Fido",
  weight: 40,
  breed: "Mixed",
  loves: ["walks", "fetching balls"],
  bark: function() {
    alert("Woof woof!");
  }
};

// updating movie object to provide next showing
var movie1 {
  title: "Plan 9 from Outer Space",
  genre: "cult classic",
  rating: 2,
  showtimes: ["3:00pm", "7:00pm", "11:00pm"],
  getNextShowing: function(){
    var now = new Date().getTime();
    for (var i=0; i<this.showtimes.length; i++) {
      var showtime = getTimeFromString(this.showtimes[i]);
      if ((showtime - now) > 0) {
        return "Next showing of " + this.title + " is " + this.showtimes[i];
      }
    }
    return null;
  }
};

var nextShowing = movie1.getNextShowing();
alert(nextShowing);

// Instead of copying the getNextShowing property and pasting into movie2
// best to create both movie objects using a constructor

// Creating a constructor for dogs
function Dog(name, breed, weight){
  this.name = name;
  this.breed = breed;
  this.weight = weight;
  this.bark = function(){
    if (this.weight > 25){
      alert(this.name + " says Woof!");
    } else {
      alert(this.name + " says yip!");
    }
  };
}
// Using the constructor
var fido = new Dog("Fido","Mixed", 38);
fido.bark();

// Creating a constructor for movies
function Movie(title, genre, rating, showtimes){
  this.title = title;
  this.genre = genre;
  this.rating = rating;
  this.showtimes = showtimes;
  this.getNextShowing = function() {
    var now = new Date().getTime();
    for (var i = 0; i < this.showtimes.length; i++) {
      var showtime = getTimeFromString(this.showtimes[i]);
      if ((showtime - now) > 0) {
        return "Next showing of  " + this.title + " is " + this.showtimes[i];
      }
    }
  };
}
//  using the new constructor
var banzaiMovie = new Movie("Buckaroo Banzai",
                            "Cult Classic",
                            5,
                            ["1:00pm", "7:00pm", "11:00pm"]);
alert(banzaiMovie.getNextShowing());
