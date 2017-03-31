var myRover = {
  position: [0,0],
  direction: 'N'
};

var myRover2 = {
  position: [9,9],
  direction: 'S'
};

var rock1 = {
  position: [7,2]
};

var rock2 = {
  position: [2,7]
};

var grid = [
  ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
];

function goForward(myRover) {
  switch(myRover.direction) {
    case 'N':
      if (myRover.position[1] === 9) {
        myRover.position[1] -= 9;
      } else {
        myRover.position[1]++;
      }
      break;
    case 'E':
      if (myRover.position[0] === 9) {
        myRover.position[0] -= 9;
      } else {
        myRover.position[0]++;
      }
      break;
    case 'S':
      if (myRover.position[1] === 0) {
        myRover.position[1] += 9;
      } else {
        myRover.position[1]--;
      }
      break;
    case 'W':
      if (myRover.position[0] === 0) {
        myRover.position[0] += 9;
      } else {
        myRover.position[0]--;
      }
      break;
  }

  console.log("New Rover Position: [" + myRover.position[0] + ", " + myRover.position[1] + "]");
}

function goBackward(myRover) {
  switch(myRover.direction) {
    case 'N':
      if (myRover.position[1] === 0) {
        myRover.position[1] += 9;
      } else {
        myRover.position[1]--;
      }
      break;
    case 'E':
      if (myRover.position[0] === 0) {
        myRover.position[0] += 9;
      } else {
        myRover.position[0]--;
      }
      break;
    case 'S':
      if (myRover.position[1] === 9) {
        myRover.position[1] -= 9;
      } else {
        myRover.position[1]++;
      }
      break;
    case 'W':
      if (myRover.position[0] === 9) {
        myRover.position[0] -= 9;
      } else {
        myRover.position[0]++;
      }
      break;
  }

  console.log("New Rover Position: [" + myRover.position[0] + ", " + myRover.position[1] + "]");
}

var possibleDirections = ["N", "E", "S", "W"];

function turnRight(myRover) {
  var actualIndex = (possibleDirections.indexOf(myRover.direction) + 1) % 4;
  myRover.direction = possibleDirections[actualIndex];
}

function turnLeft(myRover) {
  var actualIndex = (possibleDirections.indexOf(myRover.direction) + 3) % 4;
  myRover.direction = possibleDirections[actualIndex];
}
