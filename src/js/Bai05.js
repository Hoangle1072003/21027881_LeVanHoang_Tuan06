console.log("--------------------------------Bài 5--------------------------------");

const calcAvg = (scores) => scores.reduce((a, b) => a + b, 0) / scores.length;
const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins thắng (${avgDolphins} đấu với ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas thắng (${avgKoalas} đấu với ${avgDolphins})`);
    } else {
        console.log("Không có đội nào thắng!");
    }
};

const dolphinsScoresSet1 = [100, 122, 81];
const koalasScoresSet1 = [99, 94, 111];
checkWinner(calcAvg(dolphinsScoresSet1), calcAvg(koalasScoresSet1));

const dolphinsScoresSet2 = [85, 54, 41];
const koalasScoresSet2 = [33, 34, 35];
checkWinner(calcAvg(dolphinsScoresSet2), calcAvg(koalasScoresSet2));
