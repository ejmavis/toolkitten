let Person = function(name,age,favFood) {
    this.name = name
    this.age = age
    this.favFood = favFood
    }

Person.prototype.petCat = function() {
    return this.name + 'pets a cat.'
}

Person.prototype.greet = function(name){
    return ('Hello' +  this.name)
}

var Louis = new Person ('Louis', 14, 'chicken')

document.getElementById('Rupert').innerHTML = Louis.petCat()
