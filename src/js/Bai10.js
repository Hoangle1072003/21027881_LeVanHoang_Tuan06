const game = {
    team1: "Bayern Munich",
    team2: "Borussia Dortmund",
    players: [
        [
            "Neuer",
            "Pavard",
            "Martinez",
            "Alaba",
            "Davies",
            "Kimmich",
            "Goretzka",
            "Coman",
            "Muller",
            "Gnabry",
            "Lewandowski",
        ],
        [
            "Burki",
            "Schulz",
            "Hummels",
            "Akanji",
            "Hakimi",
            "Weigl",
            "Witsel",
            "Hazard",
            "Brandt",
            "Sancho",
            "Gotze",
        ],
    ],
    score: "4:0",
    scored: ["Lewandowski", "Gnabry", "Lewandowski", "Hummels"],
    date: "Nov 9th, 2037",
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

const players1 = game.players[0];
const players2 = game.players[1];

const gk = players1[0];
const fieldPlayers = players1.slice(1);
const allPlayers = [...players1, ...players2];
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

const { team1, x: draw, team2 } = game.odds;
const printGoals = (...players) =>
    console.log(`${players.length} goals were scored by: ${players.join(", ")}`);

console.log("--------------------------------Bài 10--------------------------------");

printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals(...game.scored);

const likelyWinner = (team1 < team2 && game.team1) || (game.team2);
console.log(`${likelyWinner} is more likely to win.`);



