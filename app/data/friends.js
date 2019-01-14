var friendsArray = [
    {
        userName: "test",
        userPicture: "test",
        q1Answer: 1,
        q2Answer: 1,
        q3Answer: 1,
        q4Answer: 1,
        q5Answer: 1,
        total: function() {
            var totalAnswers = this.q1Answer + this.q2Answer + this.q3Answer + this.q4Answer + this.q5Answer;
            return totalAnswers;
        }
    }
];

module.exports = friendsArray;