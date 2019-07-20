console.log("=== CLOSURE ===");

var contador = 1; // GLOBAL

function more() { // LOCAL
    return ++contador;
}

function less() { // LOCAL
    return --contador;
}