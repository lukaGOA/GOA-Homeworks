// 1
let Book = {
    title: 'ტომ სოიერი',
    author: 'მარკ ტვეინი',
    publishYear: 'idk',
    page: 'idk',
  
    getSummary() {
      return `${this.title} არის ${this.author}-ის წიგნი, რომელიც გამოიცა ${this.publishYear}-ში და აქვს ${this.pages} გვერდი.`;
    }
}
  
Book.title = 'ტომ სოიერი';
Book.author = 'შიო გვეტაძე';
Book.publishYear = 'idk';
Book.page = 'idk';
Book.weight = '1000';
  
console.log(Book.getSummary());

// 2 

class Customer {
    firstName = '';
    lastName = '';
    email = '';
  
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    updateEmail(newEmail) {
      this.email = newEmail;
    }
}
  

let customer1 = new Customer();
customer1.firstName = "goa";
customer1.lastName = "recordingadze";
customer1.email = "goa@example.com";
  
console.log(customer1.fullName()); 
  

customer1.updateEmail("newemail@example.com");
  

console.log(customer1.email); 


// 3
class Movie {
    title = '';
    director = '';
    releaseYear = 0;
    duration = 0;
  
    getMovieInfo() {
      return `${this.title} - ფილმი რეჟისორ ${this.director}-ის მიერ, რომელიც გამოიცა ${this.releaseYear}-ში. მისი ხანგრძლივობა ${this.duration} წუთია.`;
    }
}
  
let movie1 = new Movie();
movie1.title = "მატრიცა";
movie1.director = "ლანა ვაჩოვსკი, ლილი ვაჩოვსკი";
movie1.releaseYear = 1999;
movie1.duration = 136;
  
console.log(movie1.getMovieInfo());
