
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

   
//  ..3  

class Car {
   constructor(brand,model, speed,motion) {

   }

}



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

