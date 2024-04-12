import Building from './5-building.js';

const b = new Building(100);
console.log(b);

class TestBuilding extends Building {
    evacuationWarningMessage () {
        return 2
      }
}

try {
    new TestBuilding(200)
}
catch(err) {
    console.log(err);
}