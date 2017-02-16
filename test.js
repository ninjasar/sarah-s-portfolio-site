
function Person(name, age){
  this.name = name;
  this.age = age;
}


var makeName = () => {

    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;

}

var makeAge = () => Math.floor(Math.random() * 100);


var people = [];

for(var a=0;a<10;a++) people.push(new Person(makeName(), makeAge()));

console.log(people);

console.log(people.filter((person) => person.age < 30))
