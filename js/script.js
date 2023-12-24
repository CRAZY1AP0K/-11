let car = {
    color: 'orange',
    engine: '2L',
    brand: 'toyota',
    driver: {
        name: 'vanya',
        old: '52',
        category: 'A'
    },
    driver2: {
        name: 'sergey',
        name: 'kim',
        category: 'b',
    },
  
};

car.drive = function () {
    console.log('driving');
};
car.park = function () {
    console.log('parking');
};

car.start = function () {
    console.log('starting');
};

car.stop = function () {
    console.log('stoping');
};

for (let key in car) {
    console.log(key, car, key)
}

//8
console.log(car.driving)

//9 
if (car["brand"]) {
        console.log(true);
} else {
    console.log(false);
};

//10 

for ( let key in car.driver){
    console.log(car.driver[key]);
}
//11
for (let key in car) {
    if (typeof key === "string")
    console.log(car[key])
}


//13 
console.log(car)

//14 
window.company = {
    name: "driver2"
  };

//15 

console.log (car.driver2)































