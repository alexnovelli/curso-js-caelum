console.log("=== OBJECT API ===");

let car = {
    "model of car" : "Ka",
    year : 1998,
    good: false,
    order: () => {}
}

console.log(car.year);

console.log(car["model of car"]);

console.log(
    Object.keys(car)
);
console.log(
    Object.values(car)
);