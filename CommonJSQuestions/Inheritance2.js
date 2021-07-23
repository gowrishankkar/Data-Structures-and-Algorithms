function Person(first, last, age, gender, interests) {
    this.name = {
      first,
      last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  };

  function Teacher(first, last, age, gender, interests, subject) {
    //   console.log(this)
    Person.call( this, first, last, age, gender, interests, subject);
  
    this.subject = subject;
  }

  const teach = new Teacher("gowri", "shankar", "12", "M", "code", "math")

//   console.log(teach);

  function Brick() {
    this.width = 10;
    this.height = 20;
  }

  function BlueGlassBrick() {
    Brick.call(this);
  
    this.opacity = 0.5;
    this.color = 'blue';
  }

  
  const BlueGlassBric = new BlueGlassBrick()


  let arr = ["123", "234", "345"];

  let object = {
      name: "gowri",
      city: "CBE",
      getIntro: function(){
          console.log(this.name + "from  " + this.city)
      }
  }


  Teacher.prototype.greeting = function() {
    let prefix;
  
    if (this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
      prefix = 'Mr.';
    } else if (this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
      prefix = 'Ms.';
    } else {
      prefix = 'Mx.';
    }
  
    alert('Hello. My name is ' + prefix + ' ' + this.name.last + ', and I teach ' + this.subject + '.');
  };



//   console.log(  Person.prototype.greeting);
//   console.log(Teacher.prototype.greeting)

let array = ["123", "12334", "@34", 1 , 2 ]




let objectTest = {
    key1 : "value1",
    key2 : "value2",
    key3 : "value3"
}

console.log(objectTest.key1);