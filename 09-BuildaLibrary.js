class Media {
    constructor(title){
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
  
    get title(){
      return this._title;
    }
  
    get ratings(){
      return this._ratings;
    }
  
  
    get isCheckedOut(){
      return this._isCheckedOut;
    }
  
    set isCheckedOut(checkedOut){
      this._isCheckedOut = checkedOut;
    }
  
    getAverageRating(){
      let ratingSum = this.ratings.reduce((currentSum, rating) => currentSum + rating);
      return ratingSum/ this.ratings.length;
    }
  
    toggleCheckOutStatus(){
      this._isCheckedOut = !this._isCheckedOut;
    }
  
    addRating(rating){
      return this.ratings.push(rating);
    }
  }
  
  class Book extends Media {
    constructor(author,title, pages){
      super(title)
      this._author = author;
      this._pages = 0
    }
  
    get author(){
      return this._author;
    }
  
    get pages(){
      return this._pages;
    }
  }
  
  class Movie extends Media {
    constructor(title){
      super(title)
      this._director = director;
      this._runTime = 0;
    }
  
    get director(){
      return this._director;
    }
  
    get runTime(){
      return this._runtime;
    }
  }
  
  
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544)
   
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut)
  
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  
  console.log(historyOfEverything.getAverageRating());
  