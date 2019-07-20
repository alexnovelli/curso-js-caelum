console.log("=== PROTOTYPE ===");

String.prototype.stripTags = function() {
    return this.replace(/\<\/?\w+\>/g, " "); // /g = global | /i = insensitive case | /m = multiline
}

console.log("João<b>Silva</b>".stripTags());

String.prototype.bold = function(){
    return "<strong>" + this + "</strong>"; 
}

delete HTMLElement.prototype.style; // Adeus JS STYLE!

console.log(HTMLElement.prototype);