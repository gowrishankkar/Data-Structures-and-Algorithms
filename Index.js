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
      console.log(this)
    Person.call( this, first, last, age, gender, interests, subject);
  
    this.subject = subject;
  }

  const teach = new Teacher("gowri", "shankar", "12", "M", "code", "math")

  console.log(teach);

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

  console.log(BlueGlassBric)