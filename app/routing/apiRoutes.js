var friendsData = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    }); 

    app.post("/api/friends", function(req, res) {
        
        //Pushing an array of each existing friends answers into an array called scoreArr
        var scoreArr = []
        for (i = 0; i < friendsData.length; i++) {
            scoreArr.push([parseFloat(friendsData[i].q1Answer), parseFloat(friendsData[i].q2Answer), parseFloat(friendsData[i].q3Answer), parseFloat(friendsData[i].q4Answer), parseFloat(friendsData[i].q5Answer)])
        };

        //creating an array of the users answers called entrantScore
        var entrantScore = [parseFloat(req.body.q1Answer), parseFloat(req.body.q2Answer), parseFloat(req.body.q3Answer), parseFloat(req.body.q4Answer), parseFloat(req.body.q5Answer)];

        //
        var diffValues = []

        for (i = 0; i < scoreArr.length; i++) {
            var individualDiff = []
            for (j = 0; j < entrantScore.length; j++){
                individualDiff.push(Math.abs(scoreArr[i][j] - entrantScore[j]));
            };
            function reducer(total, num) {
                return total + num
            };
            diffValues.push(individualDiff.reduce(reducer));
            individualDiff = [];
        };


        var index = 0;
        var value = diffValues[0];
        for (k = 0; k < diffValues.length; k++) {
            if (diffValues[k] < value) {
                index = k
                value = diffValues[k]
            };
        };

        
        friendsData.push(req.body);
        res.json(friendsData[index]);

    });
};