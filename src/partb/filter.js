const Cats= [
{
        name: "Tommy",
        age: 1,
        color: "dark blue",
        bodyDetails: ["green eyes", "black feets"],
        weight: 2,
        height: 3,
},
{
  name: "Bobo",
  age: 7,
  color: "off white",
  bodyDetails: ["blue eyes", "pick feets"],
  weight: 6,
  height: 7,
},
{
  name: "Nagget",
  age: 2,
  color: "orange",
  bodyDetails: ["green eyes", "pick feets"],
  weight: 2.5,
  height: 3,
}

];

export const filter = ()=>{
    //q6
    console.log("Q6");
    Cats.forEach(element => {
        if(element.color == "dark blue"){
            console.log(element);
        }
    });

    //q7
    console.log("Q7");
    Cats.forEach(element => {
        if(element.age >= 1 && element.age <= 2){
            console.log(element);
        }
    });

    //q8
    console.log("Q8");
    Cats.forEach(element => {
        if(element.bodyDetails.includes("green eyes")){
            console.log(element);
        }
    });
}

