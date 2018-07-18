function titleize(array, callback) {
    var title = array.map(name => `Mx. ${name} Jingleheimer Schmidt`);
    callback(title);
}

titleize(["Jeff", "Jeffrey"], (name) => {
  name.forEach(name => console.log(name));
});

function Elephant(name, height, array) {
  this.name = name;
  this.height = height;
  this.array = array;
}

Elephant.prototype.trumpet = function() {
  console.log(`${this.name} goes phrRRRRRRRRR!`);
}

Elephant.prototype.grow = function() {
  this.height += 12;
}
Elephant.prototype.addTrick = function(trick) {
  this.array.push(trick);
}
Elephant.prototype.play = function() {
  var num = Math.floor(Math.random() * this.array.length);
  this.array[num];
}

Elephant.paradeHelper = function (elephant) {
  console.log(`${elephant.name} is trotting by!`);
}

function dinerBrekfast() {
  let order = "I'd like cheesy scrambled eggs please";

  return function (food) {
    order = `${order.slice(0, order.length - 8)} and ${food} please.`;
    console.log(order);
  }
};
