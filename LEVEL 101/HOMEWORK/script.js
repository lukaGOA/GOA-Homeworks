// 1
let university = {
    name: "idk",
    departments: 10,
    website: "idk.com",
    ratings: {
      student1: 4.5,
      student2: 4.7,
      student3: 4.2
    }
  };
  

  console.log("\nDoes the object have 'scholarship' property?");
  console.log('scholarship' in university);

  university.studentsCount = 5000;
  console.log("\nUniversity with studentsCount added:");
  console.log(university);

  Object.freeze(university);

  university.name = "New University";
  university.ratings.student1 = 5.0;
  console.log("\nAttempt to modify the frozen object:");
  console.log(university);

  console.log("\nIs the object frozen?");
  console.log(Object.isFrozen(university));

// 2
const sportsClub = {
    clubName: "Barcelona FC",
    sportType: "Football",
    foundedYear: 1992,
    achievements: {
      title1: "Champions League 1996",
      title2: "World Cup 2004",
      title3: "National Cup 2014"
    }
  };
  
  console.log("Sports Club Properties List:");
  console.log(Object.keys(sportsClub));
  
  console.log("\nSports Club Values List:");
  console.log(Object.values(sportsClub));
  
  console.log("\nDoes the object have 'sponsors' property?");
  console.log('sponsors' in sportsClub);
  
  const newProperties = { stadiumCapacity: 50000 };
  Object.assign(sportsClub, newProperties);
  console.log("\nSports Club with stadiumCapacity added:");
  console.log(sportsClub);
  
  Object.freeze(sportsClub);
  
  sportsClub.clubName = "New Club";
  sportsClub.achievements.title1 = "New Title";
  console.log("\nAttempt to modify the frozen object:");
  console.log(sportsClub);
  
  console.log("\nIs the object frozen?");
  console.log(Object.isFrozen(sportsClub));

// 3
const hotel = {
    hotelName: "idk",
    stars: 5,
    location: "Tbilisi, Georgia",
    guestReviews: {
      guest1: 4.8,
      guest2: 4.5,
      guest3: 5.0
    }
  };
  
  console.log("Hotel Properties and Values:");
  for (let key in hotel) {
    console.log(`${key}: ${hotel[key]}`);
  }
  
  console.log("\nDoes the object have 'spa' property?");
  console.log('spa' in hotel);
  
  const newProperties = { roomsCount: 150 };
  Object.assign(hotel, newProperties);
  console.log("\nHotel with roomsCount added:");
  console.log(hotel);
  
  Object.freeze(hotel);
  
  hotel.hotelName = "Budget Inn";
  hotel.guestReviews.guest1 = 3.5;
  console.log("\nAttempt to modify the frozen object:");
  console.log(hotel);
  
  console.log("\nIs the object frozen?");
  console.log(Object.isFrozen(hotel));

// 4
const cinema = {
    cinemaName: "Cavea",
    moviesCount: 50,
    location: "Tbilisi, Georgia",
    movieReviews: {
      user1: 4.2,
      user2: 4.7,
      user3: 3.9
    }
  };
  
  console.log("Cinema Properties and Values:");
  for (let key in cinema) {
    console.log(`${key}: ${cinema[key]}`);
  }
  
  console.log("\nDoes the object have 'vipSeats' property?");
  console.log('vipSeats' in cinema);
  
  const newProperties = { ticketPrice: 12.5 };
  Object.assign(cinema, newProperties);
  console.log("\nCinema with ticketPrice added:");
  console.log(cinema);
  
  Object.freeze(cinema);
  
  cinema.cinemaName = "Star Cinema";
  cinema.movieReviews.user1 = 4.9;
  console.log("\nAttempt to modify the frozen object:");
  console.log(cinema);
  
  console.log("\nIs the object frozen?");
  console.log(Object.isFrozen(cinema));
  