setTimeout(function timer() {
  alert('HAMMERTIME');
}, 5000);

function HammerTime(time) {

  setTimeout(function timer() {
    alert(`${time} is hammertime!`);
  },timer);
}

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function teaAndBiscruits() {
  reader.qustion('Would you like some tea?', (res) => {
    console.log(`You said ${res}`);
    reader.question('Would you like some biscruits', (res2) => {
      console.log(`Your first response was ${res}`);
      console.log(`Your second response was ${res2}`);
      reader.close();
    });
  });
}
