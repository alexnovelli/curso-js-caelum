console.log("=== BIND ===");

var pokemon = {
    firstname: "Pika",
    lastname: "Chu",
    getPokeName: function(){
        var fullName = this.firstname + this.lastname;
        return fullName;
    }
}

var pokemonName = function() {
    console.log(this.getPokeName() + " I choose you!");
};

var logPoKemon = pokemonName.bind(pokemon);

logPoKemon();