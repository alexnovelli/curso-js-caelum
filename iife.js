console.log("=== IIFE - MODULE PATTERN ===");

// expressão de função
const app = (function () {
    console.log("start app");
    var ga = {};
    ga.count = 0;
    ga.addCount = function () {
        // ga.count = ga.count + 1;
        // return ga.count++; // primeiro retorna 0
        return ++ga.count; // retorna a soma no primeiro return
        // return ga.count += 1; // retorna a soma no primeiro return
    };
    ga.resetCount = function() {
        return ga.count = 0;
    }
    return { add: ga.addCount, reset: ga.resetCount }; // <= API
})(); // <= executa a função - IMEDIATELY INVOKED FUNCTION EXPRESSION

