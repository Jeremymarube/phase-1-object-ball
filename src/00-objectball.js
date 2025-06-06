function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}

// Test output
console.log(gameObject());
function numPointsScored(playerName) {
  let game = gameObject();

  for (let team in game) {
    let players = game[team].players;
    if (players[playerName]) {
      return players[playerName].points;
    }
  }
  return null; // player not found
}
function shoeSize(playerName) {
  let game = gameObject();

  for (let team in game) {
    let players = game[team].players;
    if (players[playerName]) {
      return players[playerName].shoe;
    }
  }
  return null;
}
function teamColors(teamName) {
  let game = gameObject();

  for (let team in game) {
    if (game[team].teamName === teamName) {
      return game[team].colors;
    }
  }
  return null;
}
function teamNames() {
  let game = gameObject();
  let names = [];

  for (let team in game) {
    names.push(game[team].teamName);
  }
  return names;
}
function playerNumbers(teamName) {
  let game = gameObject();

  for (let team in game) {
    if (game[team].teamName === teamName) {
      let numbers = [];
      let players = game[team].players;
      for (let player in players) {
        numbers.push(players[player].number);
      }
      return numbers;
    }
  }
  return [];
}
function playerStats(playerName) {
  let game = gameObject();

  for (let team in game) {
    let players = game[team].players;
    if (players[playerName]) {
      return players[playerName];
    }
  }
  return null;
}
function bigShoeRebounds() {
  let game = gameObject();
  let maxShoeSize = 0;
  let rebounds = 0;

  for (let team in game) {
    let players = game[team].players;
    for (let player in players) {
      if (players[player].shoe > maxShoeSize) {
        maxShoeSize = players[player].shoe;
        rebounds = players[player].rebounds;
      }
    }
  }

  return rebounds;
}
function mostPointsScored() {
  const game = gameObject();
  let maxPoints = 0;
  let topPlayer = "";

  for (const teamKey in game) {
    const players = game[teamKey].players;
    for (const playerName in players) {
      if (players[playerName].points > maxPoints) {
        maxPoints = players[playerName].points;
        topPlayer = playerName;
      }
    }
  }
  return topPlayer;
}
function winningTeam() {
  const game = gameObject();
  let teamPoints = {
    home: 0,
    away: 0
  };

  for (const teamKey in game) {
    const players = game[teamKey].players;
    for (const playerName in players) {
      teamPoints[teamKey] += players[playerName].points;
    }
  }

  if (teamPoints.home > teamPoints.away) {
    return game.home.teamName;
  } else if (teamPoints.away > teamPoints.home) {
    return game.away.teamName;
  } else {
    return "It's a tie!";
  }
}
function playerWithLongestName() {
  const game = gameObject();
  let longestName = "";

  for (const teamKey in game) {
    const players = game[teamKey].players;
    for (const playerName in players) {
      if (playerName.length > longestName.length) {
        longestName = playerName;
      }
    }
  }
  return longestName;
}
function doesLongNameStealATon() {
  const game = gameObject();
  
  // Find player with longest name
  const longestName = playerWithLongestName();
  
  // Find max steals and player who has it
  let maxSteals = 0;
  let playerWithMostSteals = "";

  for (const teamKey in game) {
    const players = game[teamKey].players;
    for (const playerName in players) {
      if (players[playerName].steals > maxSteals) {
        maxSteals = players[playerName].steals;
        playerWithMostSteals = playerName;
      }
    }
  }

  return longestName === playerWithMostSteals;
}
console.log("Most Points Scored:", mostPointsScored());
console.log("Winning Team:", winningTeam());
console.log("Player With Longest Name:", playerWithLongestName());
console.log("Does Long Name Steal A Ton?", doesLongNameStealATon());
