
// ...1 

let num = [ 1, 5, 15, -5, 11, -25 ]

let posNums = num.filter((num) => num > 0);
let sum = posNums.reduce((acc, curr) => acc +curr, 0 );

console.log(sum);


//  ....2

let Games = [

    "last Of us",
    "god of War",
    "sekiro",
    "last of us",
    "tsushima",
    "fifa23",
    "last Of us",
    "sekiro"
];

let top = Games.reduce((acc, curr) => {
    acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
    return acc;
}, []);

console.log(top);

   
//  ...3  

class Cars {
  constructor(brand, model, speed = 0, motion = "მანქანა გაჩერებულია") {
      this.brand = brand;
      this.model = model;
      this.speed = speed;
      this.motion = motion;
  }

  check_motion() {
    if (this.speed > 0) {
      this.motion = "მანქანა მოძრაობს";
    } else {
      this.motion = "მანქანა გაჩერებულია";
    }
  }

  accelerate(element) {
    this.speed += element;
    this.check_motion;
  }

  brake(element) {
      this.speed -= element;
      this.check_motion;
    }

  emergency_brake() {
    this.speed = 0;
    this.check_motion;
  }
  status() {
    return `${this.brand} ${this.model} მოძრაობს ${this.speed} კმ/სთ სიჩქარით და სტატუსია : ${this.motion}`;
  }
}

let sportCar = new Cars("Ford", "Mustang");

sportCar.accelerate(175);
sportCar.check_motion();


sportCar.brake(35);
sportCar.check_motion();
    
sportCar.emergency_brake();
sportCar.check_motion();


console.log(sportCar.status());


//  ....4 

function addAsync(alpha, beta) {
    return new Promise((res, rej) => {
      if (
        alpha !== undefined &&
        beta !== undefined &&
        typeof alpha === "number" &&
        typeof beta === "number"
      ) {
        res(alpha + beta);
      } else {
        rej("Error");
      }
    });
  }
  
  addAsync(155, "John Wick")
    .then((res) => console.log(res))
    .catch((rej) => console.log(rej));

  addAsync(-55, 65)
    .then((res) => console.log(res))
    .catch((rej) => console.log(rej));


    addAsync("john", "wick")
    .then((res) => console.log(res))
    .catch((rej) => console.log(rej));

